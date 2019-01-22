import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { LocaleService } from '../../../services/locale.service';

import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-turing-system',
	templateUrl: './turing-system.component.html',
	styleUrls: ['./turing-system.component.sass'],
    animations: [
		trigger('turingTransition', [
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
export class TuringSystemComponent implements OnInit {

	public mdSrc: string;

	constructor(
		public global: GlobalService,
		public locale: LocaleService
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
		if(!this.global.bodyToggle){
			this.global.menuToggle = true;
		}
	}
}
