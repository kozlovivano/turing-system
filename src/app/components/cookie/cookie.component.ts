import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { CookieService } from 'ngx-cookie-service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
	selector: 'app-cookie',
	templateUrl: './cookie.component.html',
	styleUrls: ['./cookie.component.sass'],
	animations: [
		trigger('appear', [
			state('void', style({
				'bottom': '-60px',
				'opacity': '0'
			})),
			state('*', style({
				'bottom': '0px',
				'opacity': '1'
			})),
			transition(':enter', animate('3s 3s cubic-bezier(0.215, 0.61, 0.355, 1)')),
			transition(':leave', animate('3s cubic-bezier(0.215, 0.61, 0.355, 1)'))
		])
	]
})
export class CookieComponent implements OnInit {

    public isSetCookie: Boolean = false;

	constructor(
		public global: GlobalService,
		public locale: LocaleService,
        private cookieService: CookieService
	) { }

	ngOnInit() {
        this.isSetCookie = (this.cookieService.get("turing-system-cookie-policy") == "agreed") ? true : false;
	}

    onOk(){
		this.cookieService.set("turing-system-cookie-policy", "agreed");
        this.cookieService.set("turing-system-locale", this.locale.locale);
		this.isSetCookie = true;
    }
}
