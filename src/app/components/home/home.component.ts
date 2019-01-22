import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
    animations: [
		trigger('homeTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'})))
			]),
			transition(':leave', [
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))
			])
		])
    ]
})
export class HomeComponent implements OnInit {

	public homeData = [];

	constructor(
		public global: GlobalService,
		private http: HttpService,
		public locale: LocaleService
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

	getHomeData(){
		return this.http.getHomeData().subscribe(
			data => this.setHomeData(data)
		);
	}

	setHomeData(data){
		for(var i in data){
			this.homeData.push(data[i]);
		}
	}
	animDone(){
		if(!this.global.bodyToggle && !this.global.menuToggle){
			this.global.menuToggle = true;
		}
	}
}
