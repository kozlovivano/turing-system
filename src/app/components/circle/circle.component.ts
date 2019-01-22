import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-circle',
	templateUrl: './circle.component.html',
	styleUrls: ['./circle.component.sass'],
    animations: [
		trigger('circleTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'})))
			]),
			transition(':leave', [
				query('.circle', animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))
			])
		])
    ],
	host: {
		'[@circleTransition]': '',
		'(@circleTransition.done)': 'animDone()'
	}
})
export class CircleComponent implements OnInit {

	constructor(
		public global: GlobalService,
	) { }

	ngOnInit() {

	}
	animDone(){
		console.log("done");
	}
}
