import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { LocaleService } from '../../../services/locale.service';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
	selector: 'app-arsac-consulting',
	templateUrl: './arsac-consulting.component.html',
	styleUrls: ['./arsac-consulting.component.sass'],
    animations: [
		trigger('arsacTransition', [
			transition(':enter', [
				query('.content h2', style({transform: 'translateY(-10px)', opacity: 0})),
				query('.avatar', style({transform: 'translateY(10px)', opacity: 0})),
				query('.markdown', style({transform: 'translateY(10px)', opacity: 0})),
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))),
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1})))
			]),
			transition(':leave', [
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),

			])
		]),
		trigger('arsacBigTransition', [
			transition(':enter', [
				query('.rect-blue-right', style({transform: 'rotate(20deg) translateX(20px)', opacity: '0' }), { optional: true }),
				query('.rect-yellow', style({transform: 'rotate(-22deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-blue-left', style({ transform: 'rotate(20deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-purple', style({ transform: 'rotate(-22deg) translateX(20px)', opacity: '0' }), { optional: true }),

				query('.content h2', style({transform: 'translateY(-10px)', opacity: 0})),
				query('.avatar', style({transform: 'translateY(10px)', opacity: 0})),
				query('.markdown', style({transform: 'translateY(10px)', opacity: 0})),
				query('.rect-blue-right', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-yellow', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-blue-left', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-purple', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),
				
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1}))),
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1})))
			]),
			transition(':leave', [
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.rect-content', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
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
		// If menu is activated, the main color is blue, maintained. Otherwise, the showroom color, the white.
		if (this.global.menuAlive) {
			this.global.colorToggle = false;
		} else {
			this.global.colorToggle = true;
		}
		// Set menu deactive.
		this.global.menuAlive = false;
		// Set showroom visit true.
		this.global.signalAboutus = true;
	}

	animDone(){
		this.global.animProcessing = false;
		if(!this.global.bodyToggle && !this.global.menuToggle){
			this.global.menuToggle = true;
			this.global.colorToggle = false;
		}
		if(this.global.routerToggle){
			this.router.navigate(['/']);
			this.global.menuToggle = false;
			this.global.bodyToggle = true;
		}
		if(this.global.link != ""){
			this.router.navigate([this.global.link.toLowerCase().replace(/ /g,'')]);
			this.global.link = "";
			this.global.bodyToggle = true;
		}
	}
}
