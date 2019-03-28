import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
/**
 * The aboutus component shows aboutus
 */
@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.component.html',
	styleUrls: ['./aboutus.component.sass'],
	animations: [
		trigger('aboutusBigTransition', [
			transition(':enter', [
				query('.rect-blue-right', style({transform: 'rotate(20deg) translateX(20px)', opacity: '0' }), { optional: true }),
				query('.rect-yellow', style({transform: 'rotate(-22deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-blue-left', style({ transform: 'rotate(20deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-purple', style({ transform: 'rotate(-22deg) translateX(20px)', opacity: '0' }), { optional: true }),

				query('img', style({opacity: 0})),
				query('.turing-system', style({opacity: 0, transform: 'translateX(-10px)'})),
				query('.arsac-consulting', style({opacity: 0, transform: 'translateX(10px)'})),
				query('.turing-svg .underLine', style({opacity: 0}), {optional: true}),
				query('.turing-svg .crossLine', style({opacity: 0}), {optional: true}),
				query('.arsac-svg .underLine', style({opacity: 0}), {optional: true}),
				query('.arsac-svg .crossLine', style({opacity: 0}), {optional: true}),
				query('.rect-blue-right', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-yellow', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-blue-left', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-purple', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),

				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 1}))),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.turing-svg .underLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.turing-svg .crossLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.arsac-svg .underLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.arsac-svg .crossLine', animate('.15s ease-in', style({opacity: 1})), {optional: true})
			]),
			transition(':leave', [
				query('.arsac-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0})), {optional: true}),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.turing-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0})), {optional: true}),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.rect-content', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
			])
		]),
		trigger('aboutusTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('img', style({opacity: 0})),
				query('.turing-system', style({opacity: 0, transform: 'translateX(-10px)'})),
				query('.arsac-consulting', style({opacity: 0, transform: 'translateX(10px)'})),
				query('.turing-svg .underLine', style({opacity: 0}), {optional: true}),
				query('.turing-svg .crossLine', style({opacity: 0}), {optional: true}),
				query('.arsac-svg .underLine', style({opacity: 0}), {optional: true}),
				query('.arsac-svg .crossLine', style({opacity: 0}), {optional: true}),
				query('.circle', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 1}))),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.turing-svg .underLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.turing-svg .crossLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.arsac-svg .underLine', animate('.15s ease-in', style({opacity: 1})), {optional: true}),
				query('.arsac-svg .crossLine', animate('.15s ease-in', style({opacity: 1})), {optional: true})
			]),
			transition(':leave', [
				query('.arsac-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0})), {optional: true}),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.turing-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0})), {optional: true}),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.circle', animate('.15s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.1)'})))
			])
		])
	]
})
export class AboutusComponent implements OnInit {

	constructor(
		public global: GlobalService,
		private router: Router
	) { }

	/**
	 * link: where to navigate
	 */
	link: string = "";

	/**
	 * detail: check whether detail uri
	 */
	detail: Boolean = false;

	ngOnInit() {
		this.global.colorToggle = this.global.bigDevice ? true : false;
		this.global.headerToggle = true;
		this.global.signalShowroom = false;
		this.global.menuAlive = false;
	}
	/**
	 * @param {void} animDone  Callback after animation finished
	 * @returns void
	 */
	animDone(){
		this.global.animProcessing = false;
		if(this.detail){
			this.router.navigate(['/aboutus/' + this.link]);
			this.global.menuToggle = false;
			this.global.bodyToggle = true;
		}else{
			if(!this.global.bodyToggle && !this.global.menuToggle){
				this.global.menuToggle = true;
			}
			if(this.global.routerToggle){
				this.router.navigate(['/']);
				this.global.menuToggle = false;
				this.global.bodyToggle = true;
			}
		}
		if(this.global.link != ""){
			this.router.navigate([this.global.link.toLowerCase().replace(/ /g,'')]);
			this.global.link = "";
			this.global.bodyToggle = true;
		}
	}

	/**
	 * @param {link} onNavigate  Navigate to selected link
	 * @returns void
	 */
	onNavigate(link){
		if(!this.global.animProcessing){
			this.link = link;
			this.detail = true;
			this.global.bodyToggle = false;
		}
	}
}
