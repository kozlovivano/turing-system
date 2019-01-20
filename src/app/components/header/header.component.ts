import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	private uri: string;

	constructor(
		public global: GlobalService,
		public router: Router
	) {

	}
	ngOnInit() {
	}

	onMenu() {
		this.global.menuToggle = !this.global.menuToggle;
		this.global.colorToggle = false;
		if(this.global.menuAlive){
			this.global.menuAlive = false;
			if(this.global.signalShowroom){
				this.global.colorToggle = true;
			}
		}

	}

	onHome() {
		this.router.navigate(['/']);
		this.global.menuToggle = false;
	}
}
