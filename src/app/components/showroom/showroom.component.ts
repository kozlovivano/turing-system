import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { LocaleService } from '../../services/locale.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-showroom',
	templateUrl: './showroom.component.html',
	styleUrls: ['./showroom.component.sass']
})
export class ShowroomComponent implements OnInit {

	public showroomData;
	public sub;
	public showroomDetail;
	public showDetail: Boolean = false;

	constructor(
		public global: GlobalService,
		private http: HttpService,
		public locale: LocaleService,
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.global.colorToggle = true;
		this.getShowroomData();
		this.sub = this.route.params.subscribe(params => {
			this.showroomDetail = params.detail
		});
		this.showDetail = (this.showroomDetail != undefined) ? true : false;
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
