import { Component, OnInit } from '@angular/core';
import { Showroom } from '../../classes/showroom';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { LocaleService } from '../../services/locale.service';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-showroom',
	templateUrl: './showroom.component.html',
	styleUrls: ['./showroom.component.sass']
})
export class ShowroomComponent implements OnInit {

	public showroomData;

	constructor(
		public global: GlobalService,
		private http: HttpService,
		public locale: LocaleService
	) { }

	ngOnInit() {
		this.global.colorToggle = true;
		this.getShowroomData();
	}
	getShowroomData(){
		return this.http.getShowroomData().subscribe(
			data => this.setShowroomData(data)
		);
	}
	setShowroomData(data){
		this.showroomData = data;
	}
}
