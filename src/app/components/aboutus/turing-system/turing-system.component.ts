import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { LocaleService } from '../../../services/locale.service';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
	selector: 'app-turing-system',
	templateUrl: './turing-system.component.html',
	styleUrls: ['./turing-system.component.sass'],
    animations: [
		trigger('turingTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('.content h2', style({transform: 'translateX(-10px)', opacity: 0})),
				query('.avatar', style({transform: 'translateX(10px)', opacity: 0})),
				query('.markdown', style({transform: 'translateY(10px)', opacity: 0})),
				query('.circle', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1})))
			]),
			transition(':leave', [
				query('.markdown', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.avatar', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.content h2', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.circle', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.1)'})))

			])
		])
    ]
})
export class TuringSystemComponent implements OnInit {

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
		this.mdSrc = this.global.url + this.locale.locale + '.about-us.turing-system.md';
	}

	animDone(){
		this.global.animProcessing = false;
		if(!this.global.bodyToggle && !this.global.menuToggle){
			this.global.menuToggle = true;
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
