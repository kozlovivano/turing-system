import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { LocaleService } from '../../services/locale.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
	selector: 'app-showroom',
	templateUrl: './showroom.component.html',
	styleUrls: ['./showroom.component.sass'],
	animations: [
		trigger('showroomTransition', [
			transition(':enter', [
				query('.intro', style({transform: 'translateX(20px)', opacity: '0'})),
				query('.item', style({ opacity: '0'}), { optional: true }),
				query('.intro', animate('1s ease-in', style({ transform: 'translateX(0px)', opacity: '1'}))),
				query('.item', stagger(600, [
					style({transform: 'translateY(100px)', opacity: '0' }),
					animate('3s ease-in', style({transform: 'translateY(0px)', opacity: '1'}))
				]), { optional: true }),
			]),
			transition(':leave', [
				query('.intro', animate('1s ease-in', style({opacity: '0'}))),
				query('.item', stagger(600, [
					style({transform: 'translateY(0px)', opacity: '1' }),
					animate('1s ease-in', style({transform: 'translateY(0px)', opacity: '0'}))
				]), { optional: true }),
			])
		]),
		trigger('showroomDetailTransition', [
			transition(':enter', [
				query('.markdown', style({opacity: '0'}), { optional: true }),
				query('.markdown', animate('1s ease-in', style({opacity: '1'})), {optional: true})
			]),
			transition(':leave', [
				query('.markdown', animate('1s ease-in', style({opacity: '0'})), { optional: true })
			])
		]),
	]
})
export class ShowroomComponent implements OnInit {

	public showroomData;
	public sub;
	public showroomDetail;
	public showDetail: Boolean = false;

	public title: string;
	public text: string;
	constructor(
		public global: GlobalService,
		private http: HttpService,
		public locale: LocaleService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.global.localeWatch.subscribe(value => {
			this.title = "";
			this.text = "";
			this.showroomData = [];
			this.ngOnInit();
		})
	}

	ngOnInit() {
		// If menu is activated, the main color is blue, maintained. Otherwise, the showroom color, the white.
		if(this.global.menuAlive){
			this.global.colorToggle = false;
		}else{
			this.global.colorToggle = true;
		}

		// Set menu deactive.
		this.global.menuAlive = false;
		// Set showroom visit true.
		this.global.signalShowroom = true;
		// Fetch data from 3rd party.
		this.getShowroomData();
		this.sub = this.route.params.subscribe(params => {
			this.showroomDetail = params.detail
		});
		// Check whether detail view.
		this.showDetail = (this.showroomDetail != undefined) ? true : false;
	}
	getShowroomData(){
		return this.http.getShowroomData().subscribe(
			data => this.setShowroomData(data)
		);
	}
	setShowroomData(data){
		this.title = data['title'];
		this.text = data['explain-text'];
		this.showroomData = data.items;
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
	}
}
