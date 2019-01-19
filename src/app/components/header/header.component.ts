import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	constructor(
		public global: GlobalService,
		public router: Router
	) { }

	ngOnInit() {
	}

	onMenu(){
		this.global.menuToggle = !this.global.menuToggle;
	}

	onHome(){
		this.router.navigate(['/']);
		this.global.menuToggle = false;
	}
}
