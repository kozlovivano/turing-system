import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		public global: GlobalService
	) { }
	title = 'turing-system';
	
}
