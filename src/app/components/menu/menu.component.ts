import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from '../../services/locale.service';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

	public menuData = [];

	constructor(
		private router: Router,
		public global: GlobalService,
		public locale: LocaleService,
		private location: Location,
		private http: HttpService
	) { }

	ngOnInit() {
		this.getMenuData();
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
	}

	localeEn(){
		this.locale.locale = 'en';
	}
	localeFr(){
		this.locale.locale = 'fr';
	}
}
