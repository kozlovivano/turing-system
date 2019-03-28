import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { LocaleService } from '../../services/locale.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, stagger, animate, style, group, query, transition, keyframes } from '@angular/animations';
/**
 * The home component shows detailed information about our system
 */
@Component({
	selector: 'app-showroom',
	templateUrl: './showroom.component.html',
	styleUrls: ['./showroom.component.sass'],
	animations: [
		trigger('showroomTransition', [
			transition(':enter', [
				query('.intro', style({ transform: 'translateX(20px)', opacity: '0' })),
				query('.showroom-item', style({ opacity: '0' }), { optional: true }),
				query('.intro', animate('.3s ease-in', style({ transform: 'translateX(0px)', opacity: '1' }))),
				query('.showroom-item', stagger(300, [
					style({ transform: 'translateY(10px)', opacity: '1' }),
					animate('0.3s ease-in', style({ transform: 'translateY(0px)', opacity: '1' }))
				]), { optional: true }),
			]),
			transition(':leave', [
				query('.intro', animate('.3s ease-in', style({ opacity: '0' }))),
				query('.showroom-item', stagger(300, [
					style({ transform: 'translateY(0px)', opacity: '1' }),
					animate('0.3s ease-in', style({ transform: 'translateY(0px)', opacity: '0' }))
				]), { optional: true }),
			])
		]),
		trigger('showroomDetailTransition', [
			transition(':enter', [
				query('p', style({ opacity: '0' }), { optional: true }),
				query('p', animate('.3s ease-in', style({ opacity: '1' })), { optional: true })
			]),
			transition(':leave', [
				query('p', animate('.3s ease-in', style({ opacity: '0' })), { optional: true })
			])
		]),
		trigger('showroomBigTransition', [
			transition(':enter', [
				query('.rect-blue-right', style({transform: 'rotate(20deg) translateX(20px)', opacity: '0' }), { optional: true }),
				query('.rect-yellow', style({transform: 'rotate(-22deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-blue-left', style({ transform: 'rotate(20deg) translateX(-20px)', opacity: '0' }), { optional: true }),
				query('.rect-purple', style({ transform: 'rotate(-22deg) translateX(20px)', opacity: '0' }), { optional: true }),

				query('.intro', style({ transform: 'translateX(20px)', opacity: '0' }), { optional: true }),
				query('.showroom-item', style({ opacity: '0' }), { optional: true }),
				query('.markdown-big', style({ opacity: '0' }), { optional: true }),
				query('.rect-blue-right', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-yellow', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-blue-left', animate('.3s ease-in', style({transform: 'rotate(20deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.rect-purple', animate('.3s ease-in', style({transform: 'rotate(-22deg) translateX(0px)', opacity: '1' })), { optional: true }),
				query('.markdown-big', animate('.3s ease-in', style({ opacity: '1' })), { optional: true }),
				query('.intro', animate('.3s ease-in', style({ transform: 'translateX(0px)', opacity: '1' })), { optional: true }),
				query('.showroom-item', stagger(300, [
					style({ transform: 'translateY(10px)', opacity: '1' }),
					animate('0.3s ease-in', style({ transform: 'translateY(0px)', opacity: '1' }))
				]), { optional: true }),
			]),
			transition(':leave', [
				query('.intro', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
				query('.markdown-big', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
				query('.showroom-item', stagger(300, [
					style({ transform: 'translateX(0px)', opacity: '1' }),
					animate('0.3s ease-in', style({ transform: 'translateY(-10px)', opacity: '0' }))
				]), { optional: true }),
				query('.rect-content', animate('.3s ease-in', style({ opacity: '0' })), { optional: true }),
			])
		]),
	]
})
export class ShowroomComponent implements OnInit {

	public showroomData: any[];
	public sub;
	public showroomDetail: any;
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
		if (this.global.menuAlive) {
			this.global.colorToggle = false;
		} else {
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
		if(this.showDetail && this.global.bigDevice){
			this.global.signalShowroomDetail = true;
		}else{
			this.global.signalShowroomDetail = false;
		}
	}

	/**
	 * @param {void} getShowroomData  Fetch the data from external sources
	 * @returns callback setShowroomData
	 */
	getShowroomData() {
		return this.http.getShowroomData().subscribe(
			data => this.setShowroomData(data)
		);
	}

	/**
	 * @param {json} setShowroomData  Sets the local variable
	 * @returns void
	 */
	setShowroomData(data: { [x: string]: string; items: any; }) {
		this.title = data['title'];
		this.text = data['explain-text'];
		this.showroomData = data.items;
	}
	/**
	 * @param {void} animDone  Callback after animation finished
	 * @returns void
	 */
	animDone() {
		this.global.animProcessing = false;
		if (!this.global.bodyToggle && !this.global.menuToggle) {
			this.global.menuToggle = true;
			this.global.colorToggle = false;
		}
		if (this.global.routerToggle) {
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

	@HostListener('window:scroll', ['$event'])

	/**
	 * @param {} checkScroll  check whether the sticky header to be seen or not
	 * @returns void
	 */
	checkScroll() {
		const scrollPosition = window.pageYOffset;
		if(scrollPosition > 200){
			this.global.headerSticky = true;
		}else{
			this.global.headerSticky = false;
		}
	}
}
