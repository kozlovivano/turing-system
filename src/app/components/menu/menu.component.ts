import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

	public menuData = [];

	public lc: string;

	constructor(
		private router: Router,
		public global: GlobalService,
		public locale: LocaleService,
		private location: Location,
		private http: HttpService,
		private cookieService: CookieService
	) { }

	ngOnInit() {
		this.getMenuData();
		this.lc = (this.locale.locale == 'en') ? 'fr' : 'en';
		this.global.menuAlive = true;
	}

	getMenuData(){
		return this.http.getMenuData().subscribe(
			data => this.setMenuData(data)
		);
	}

	setMenuData(data){
		for(var i in data){
			this.menuData.push(data[i]);
		}
	}

	onMenu(link){
		this.global.menuToggle = false;
		this.router.navigate([link.toLowerCase().replace(/ /g,'')]);
		if(this.global.menuAlive){
			this.global.menuAlive = false;
			if(this.global.signalShowroom){
				this.global.colorToggle = true;
			}
		}
	}

	localeChange(lc){
		this.locale.locale = lc;
		this.global.menuToggle = false;
		this.cookieService.set("turing-system-locale", lc);
		window.location.assign('/');
	}
}
