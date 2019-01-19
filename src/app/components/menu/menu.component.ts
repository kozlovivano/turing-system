import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../classes/menu';
import { GlobalService } from '../../services/global.service';
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
	// --- Menu items --- //
	public menus: Menu[] = [
		{
			id	: 1,
			name: 'Showroom',
			link: 'showroom'
		},
		{
			id	: 2,
			name: 'About Us',
			link: 'aboutus'
		},
		{
			id	: 3,
			name: 'Contact',
			link: 'contact'
		},
	];

	constructor(
		private router: Router,
		private global: GlobalService
	) { }

	ngOnInit() {

	}

	onMenu(link){
		this.global.menuToggle = false;
		this.router.navigate([link]);
	}
}
