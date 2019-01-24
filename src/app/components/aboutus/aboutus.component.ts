import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.component.html',
	styleUrls: ['./aboutus.component.sass'],
    animations: [
		trigger('aboutusTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('img', style({opacity: 0})),
				query('.turing-system', style({opacity: 0, transform: 'translateX(-10px)'})),
				query('.arsac-consulting', style({opacity: 0, transform: 'translateX(10px)'})),
				query('.turing-svg .underLine', style({opacity: 0})),
				query('.turing-svg .crossLine', style({opacity: 0})),
				query('.arsac-svg .underLine', style({opacity: 0})),
				query('.arsac-svg .crossLine', style({opacity: 0})),
				query('.circle', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'scale(1)'}))),
				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 1}))),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.turing-svg .underLine', animate('.3s ease-in', style({opacity: 1}))),
				query('.turing-svg .crossLine', animate('.3s ease-in', style({opacity: 1}))),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'translateX(0px)', opacity: 1}))),
				query('.arsac-svg .underLine', animate('.3s ease-in', style({opacity: 1}))),
				query('.arsac-svg .crossLine', animate('.3s ease-in', style({opacity: 1})))
			]),
			transition(':leave', [
				query('.arsac-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.arsac-consulting', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.turing-svg', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.turing-system', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('img', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({opacity: 0}))),
				query('.circle', animate('.3s cubic-bezier(0.39, 0.575, 0.565, 1)', style({transform: 'scale(0.01)'})))

			])
		])
    ]
})
export class AboutusComponent implements OnInit {

	constructor(
		public global: GlobalService,
		private router: Router
	) { }

	link: string = "";
	detail: Boolean = false;
	ngOnInit() {
		this.global.colorToggle = false;
		this.global.headerToggle = true;
		this.global.signalShowroom = false;
		this.global.menuAlive = false;
	}

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
	}
	onNavigate(link){
		if(!this.global.animProcessing){
			this.link = link;
			this.detail = true;
			this.global.bodyToggle = false;
		}
	}
}
