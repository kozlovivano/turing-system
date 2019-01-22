import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-aboutus',
	templateUrl: './aboutus.component.html',
	styleUrls: ['./aboutus.component.sass'],
    animations: [
		trigger('aboutusTransition', [
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
export class AboutusComponent implements OnInit {

	constructor(
		public global: GlobalService
	) { }

	ngOnInit() {
		this.global.colorToggle = false;
		this.global.headerToggle = true;
		this.global.signalShowroom = false;
		this.global.menuAlive = false;
	}

}
