import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {

	constructor(
		public global: GlobalService,
		public router: Router
	) { }

	ngOnInit() {
		this.global.headerToggle = false;
	}

	onHome(){
		this.global.headerToggle = true;
		this.router.navigate(['/']);
	}
}
