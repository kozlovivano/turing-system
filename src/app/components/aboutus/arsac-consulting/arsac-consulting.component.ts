import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
	selector: 'app-arsac-consulting',
	templateUrl: './arsac-consulting.component.html',
	styleUrls: ['./arsac-consulting.component.sass']
})
export class ArsacConsultingComponent implements OnInit {

	constructor(
		public global: GlobalService,
	) { }

	ngOnInit() {
	}
}
