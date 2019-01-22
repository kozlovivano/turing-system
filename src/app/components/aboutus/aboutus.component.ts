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
				query('.content', style({transform: 'translateY(10px)', opacity: 0})),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('.content', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'translateY(0px)', opacity: 1})))
			]),
			transition(':leave', [
				query('.content', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({opacity: 0}))),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))

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
		this.link = link;
		this.detail = true;
		this.global.bodyToggle = false;
	}
}
