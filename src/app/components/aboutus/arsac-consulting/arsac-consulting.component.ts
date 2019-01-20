import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { LocaleService } from '../../../services/locale.service';
@Component({
	selector: 'app-arsac-consulting',
	templateUrl: './arsac-consulting.component.html',
	styleUrls: ['./arsac-consulting.component.sass']
})
export class ArsacConsultingComponent implements OnInit {

	public mdSrc: string;

	constructor(
		public global: GlobalService,
		public locale: LocaleService
	) {
		this.global.localeWatch.subscribe(value => {
			this.mdSrc = "";
			this.ngOnInit();
		})
	}

	ngOnInit() {
		this.mdSrc = this.global.url + this.locale.locale + '.about-us.arsac-consulting.md';
	}
}
