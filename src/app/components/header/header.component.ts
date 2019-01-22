import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	animations: [
		trigger('menuTransition', [
			transition(':enter', [
				query('.menu-item', style({opacity: 0})),
				query('.locale', style({opacity: 0, transform: 'translateX(100px)'})),
				query('.menu-item', stagger(300, [
					style({transform: 'translateY(100px)' }),
					animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))
				])),
				query('.locale', animate('.6s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 1, transform: 'translateX(0px)'})))
			]),
			transition(':leave', [
				query('.menu-item', stagger(300, [
					style({transform: 'translateY(0px)', opacity: 1 }),
					animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 0}))
				])),
				query('.locale', animate('.6s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0})))
			])
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
		this.lc = (this.locale.locale == 'en') ? 'fr' : 'en';
		this.global.menuAlive = true;
		this.global.colorToggle = false;
	}

	onMenuClick() {
		if(this.global.bodyToggle){
			this.global.bodyToggle = false;
		}
		if(this.global.menuToggle){
			this.global.menuToggle = false;
		}
		if(this.global.menuAlive){
			this.global.menuAlive = false;
			if(this.global.signalShowroom){
				this.global.colorToggle = true;
			}
		}
	}
	onHome() {
		if(this.global.menuToggle){
			this.global.menuToggle = false;
		}else{
			this.global.bodyToggle = false;
			this.global.routerToggle = true;
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
		this.link = link;
		this.global.menuToggle = false;
		if(this.global.menuAlive){
			this.global.menuAlive = false;
			if(this.global.signalShowroom){
				this.global.colorToggle = true;
			}
		}
	}

	localeChange(lc){
		this.locale.locale = lc;
		this.cookieService.set("turing-system-locale", lc);
		this.global.emitLocaleChange(true);
	}

	animDone(){
		if(this.global.colorToggle){
			this.global.colorToggle = false;
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
	}
}
