import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	public homeData = [];

	constructor(
		public global: GlobalService,
		private http: HttpService
	) { }

	ngOnInit() {
		this.global.colorToggle = false;
		this.global.menuAlive = false;
		this.getHomeData();
		this.global.signalShowroom = false;
	}

	getHomeData(){
		return this.http.getHomeData().subscribe(
			data => this.setHomeData(data)
		);
	}

	setHomeData(data){
		for(var i in data){
			this.homeData.push(data[i]);
		}
	}
}
