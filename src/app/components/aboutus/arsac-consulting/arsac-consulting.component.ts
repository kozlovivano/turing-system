import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { LocaleService } from '../../../services/locale.service';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-arsac-consulting',
	templateUrl: './arsac-consulting.component.html',
	styleUrls: ['./arsac-consulting.component.sass'],
    animations: [
		trigger('arsacTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('.content', style({transform: 'translateY(10px)', opacity: 0})),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('.content', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)'), style({transform: 'translateY(0px)', opacity: 1}))
			]),
			transition(':leave', [
				query('.content', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))

			])
		])
    ]
})
export class ArsacConsultingComponent implements OnInit {

	public mdSrc: string;

	constructor(
		public global: GlobalService,
		public locale: LocaleService,
		private router: Router
	) {
		this.global.localeWatch.subscribe(value => {
			this.mdSrc = "";
			this.ngOnInit();
		})
	}

	ngOnInit() {
		this.mdSrc = this.global.url + this.locale.locale + '.about-us.arsac-consulting.md';
	}

	animDone(){
		if(!this.global.bodyToggle && !this.global.menuToggle){
			this.global.menuToggle = true;
		}
		if(this.global.routerToggle){
			this.router.navigate(['/']);
			this.global.menuToggle = false;
			this.global.bodyToggle = true;
		}
	}
}
