import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
/**
 * The home component shows what we have
 */
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
    animations: [
		trigger('homeTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('h1', style({transform: 'translateX(-10px)', opacity: 0}), {optional: true}),
				query('h3', style({transform: 'translateX(10px)', opacity: 0}), {optional: true}),
				query('span', style({transform: 'translateY(-10px)', opacity: 0}), {optional: true}),
				query('.circle', animate('0.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('h1', animate('.3s ease-in', style({transform: 'translateX(0px)', opacity: 1})), {optional: true}),
				query('h3', animate('.3s ease-in', style({transform: 'translateX(0px)', opacity: 1})), {optional: true}),
				query('span', animate('.3s ease-in', style({transform: 'translateY(0px)', opacity: 1})), {optional: true}),
			]),
			transition(':leave', [
				query('span', animate('.3s ease-in', style({opacity: 0})), {optional: true}),
				query('h3', animate('.3s ease-in', style({opacity: 0})), {optional: true}),
				query('h1', animate('.3s ease-in', style({opacity: 0})), {optional: true}),
				query('.circle', animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))

			])
		])
    ]
})
export class HomeComponent implements OnInit {

	public homeData = [];

	constructor(
		public global: GlobalService,
		private http: HttpService,
		public locale: LocaleService,
		public router: Router
	) {
		this.global.localeWatch.subscribe(value => {
			this.homeData = [];
			this.ngOnInit();
		})
	}

	ngOnInit() {
		this.global.colorToggle = false;
		this.global.menuAlive = false;
		this.getHomeData();
		this.global.signalShowroom = false;
	}
	/**
	 * @param {void} getHomeData  Fetch the data from external sources
	 * @returns callback setHomeData
	 */
	getHomeData(){
		return this.http.getHomeData().subscribe(
			data => this.setHomeData(data)
		);
	}
	/**
	 * @param {json} setHomeData  Sets the local variable
	 * @returns void
	 */
	setHomeData(data: { [x: string]: any; }){
		for(var i in data){
			this.homeData.push(data[i]);
		}
	}

	/**
	 * @param {void} animDone  Callback after animation finished
	 * @returns void
	 */
	animDone(){

		this.global.animProcessing = false;
		if(!this.global.bodyToggle && !this.global.menuToggle){
			this.global.menuToggle = true;
		}
		if(this.global.routerToggle){
			this.global.routerToggle = false;
			this.global.bodyToggle = true;
			this.global.menuToggle = false;
		}
		if(this.global.link != ""){
			this.router.navigate([this.global.link.toLowerCase().replace(/ /g,'')]);
			this.global.link = "";
			this.global.bodyToggle = true;
		}
	}
}
