import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {trigger, stagger, animate, style, group, query, transition, keyframes, state} from '@angular/animations';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	animations: [
		trigger('menuTransition', [
			transition(':enter', [
				query('.menu-item', style({opacity: 0})),
				query('.locale', style({opacity: 0, transform: 'translateX(10px)'})),
				query('.menu-item', stagger(100, [
					style({transform: 'translateY(10px)' }),
					animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))
				])),
				query('.locale', animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 1, transform: 'translateX(0px)'})))
			]),
			transition(':leave', [
				query('.menu-item', stagger(100, [
					style({transform: 'translateY(0px)', opacity: 1 }),
					animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(10px)', opacity: 0}))
				])),
				query('.locale', animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0})))
			])
		]),
		trigger('stickyTransition', [
			state('void', style({
				opacity: '0'
			})),
			state('show', style({
				opacity: '1'
			})),
			transition(':enter', [
				animate('.3s')
			]),
			transition(':leave', [
				animate('.3s')
			]),
		])
	],
})
export class HeaderComponent implements OnInit {

	private uri: string;
	public menuData = [];
	private link: string = "";
	public lc: string;
	constructor(
		private router: Router,
		public global: GlobalService,
		public locale: LocaleService,
		private location: Location,
		private http: HttpService,
		private cookieService: CookieService
	) {
		this.global.localeWatch.subscribe(value => {
			this.menuData = [];
			this.ngOnInit();
		})
	}
	ngOnInit() {
		this.getMenuData();
		if(this.cookieService.get("turing-system-locale") != ""){
			this.locale.locale = this.cookieService.get("turing-system-locale");
		}
		this.lc = (this.locale.locale == 'en') ? 'fr' : 'en';
		this.global.colorToggle = false;
		if(window.innerWidth > 1120){
			this.global.bigDevice = true;
		}else{
			this.global.bigDevice = false;
		}
	}

	onMenuClick() {
		if(!this.global.animProcessing){
			// If the menu is going to be shown
			if(this.global.bodyToggle){
				this.global.bodyToggle = false;
			}
			// If the body is going to be shown
			if(this.global.menuToggle){
				this.global.menuToggle = false;
			}
		}
	}
	onHome() {
		if(!this.global.animProcessing){
			this.global.signalShowroomDetail = false;
			this.global.headerSticky = false;
			if(!this.global.bigDevice){
				if(this.global.menuToggle){
					this.global.menuToggle = false;
					this.global.routerToggle = true;
				}else{
					this.global.bodyToggle = false;
					this.global.routerToggle = true;
				}
			}else{
				this.global.bodyToggle = false;
				this.global.routerToggle = true;
			}
		}
	}
	getMenuData(){
		return this.http.getMenuData().subscribe(
			data => this.setMenuData(data)
		);
	}

	setMenuData(data){
		for(var i in data){
			this.menuData.push(data[i]);
		}
	}

	onMenu(link){
		if(!this.global.animProcessing){
			this.link = link;
			this.global.menuToggle = false;
			if(this.global.menuAlive){
				this.global.menuAlive = false;
				if(this.global.signalShowroom){
					this.global.colorToggle = true;
				}
			}
		}
	}
	onNavMenu(link){
		if(!this.global.animProcessing){
			if(!(this.global.signalShowroom && link == "Showroom" && !this.global.signalShowroomDetail)){
				this.global.signalShowroomDetail = false;
				this.global.link = link;
				this.global.bodyToggle = false;
			}
		}
	}
	localeChange(lc){
		if(!this.global.animProcessing){
			if(!this.global.bigDevice){
				this.global.menuAlive = true;
			}
			this.locale.locale = lc;
			this.cookieService.set("turing-system-locale", lc);
			this.global.emitLocaleChange(true);
		}
	}

	animDone(){
		this.global.animProcessing = false;
		if(!this.global.menuToggle && this.global.signalShowroom){
			this.global.colorToggle = true;
		}
		if(this.link != ""){
			this.router.navigate([this.link.toLowerCase().replace(/ /g,'')]);
			this.link = "";
			this.global.bodyToggle = true;
		}else{
			if(!this.global.menuToggle){
				this.global.bodyToggle = true;
			}
		}
		if(this.global.routerToggle){
			this.router.navigate(['/']);
			this.global.menuToggle = false;
			this.global.bodyToggle = true;
		}
	}
}
