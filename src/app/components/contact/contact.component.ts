import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass'],
    animations: [
		trigger('contactTransition', [
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
export class ContactComponent implements OnInit {

    public contactData = [];

	constructor(
		public global: GlobalService,
		private http: HttpService
	) {
		this.global.localeWatch.subscribe(value => {
			this.contactData = [];
			this.ngOnInit();
		})
	}

	ngOnInit() {
		this.global.colorToggle = false;
        this.getContactData();
		this.global.signalShowroom = false;
		this.global.menuAlive = false;
	}
    getContactData(){
		return this.http.getContactData().subscribe(
			data => this.setContactData(data)
		);
	}

	setContactData(data){
		for(var i in data){
			this.contactData.push(data[i]);
		}
	}

	animDone(){
		if(!this.global.bodyToggle){
			this.global.menuToggle = true;
		}
	}
}
