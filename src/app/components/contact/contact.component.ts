import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
/**
 * The contact component shows how to contact us
 */
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass'],
    animations: [
		trigger('contactTransition', [
			transition(':enter', [
				query('.circle', style({transform: 'scale(0.01)'})),
				query('.content-main', style({ opacity: 0})),
				query('.contact-detail', style({transform: 'translateY(10px)', opacity: 0})),
				query('.circle', animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(1)'}))),
				query('.content-main', animate('.3s ease-in', style({ opacity: '1' }))),
				query('.contact-detail', stagger(300, [
					style({ transform: 'translateX(10px)', opacity: '1' }),
					animate('0.3s ease-in', style({ transform: 'translateX(0px)', opacity: '1' }))
				]), { optional: true }),
			]),
			transition(':leave', [
				query('.contact', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
				query('.content-main', animate('.3s ease-in', style({ opacity: '0' }))),
				query('.circle', animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', style({transform: 'scale(0.01)'})))
			])
		])
    ]
})
export class ContactComponent implements OnInit {

    public contactData = [];
		public copymail: string = "Copy";
	constructor(
		public global: GlobalService,
		private http: HttpService,
		public router: Router
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

	/**
	 * @param {void} getContactData  Fetch the data from external sources
	 * @returns callback setContactData
	 */
    getContactData(){
		return this.http.getContactData().subscribe(
			data => this.setContactData(data)
		);
	}

	/**
	 * @param {json} setContactData  Sets the local variable
	 * @returns void
	 */
	setContactData(data){
		for(var i in data){
			this.contactData.push(data[i]);
		}
	}
	
	/**
	 * @param {void} animDone  Callback after animation finished
	 * @returns void
	 */
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
	copyCode(){
		this.copymail = "Copied!";
		setTimeout(() => {
			this.copymail = "Copy";
		}, 1500);
		let el = document.createElement('textarea');
		el.value = this.contactData[7];
		el.setAttribute('readonly', '');
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}
}
