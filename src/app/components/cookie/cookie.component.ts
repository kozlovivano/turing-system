import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-cookie',
	templateUrl: './cookie.component.html',
	styleUrls: ['./cookie.component.sass']
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
		if(this.cookieService.get("turing-system-locale") != ""){
			this.locale.locale = this.cookieService.get("turing-system-locale");
		}
	}

    onOk(){
		this.cookieService.set("turing-system-cookie-policy", "agreed");
        this.cookieService.set("turing-system-locale", this.locale.locale);
		this.isSetCookie = true;
    }
}
