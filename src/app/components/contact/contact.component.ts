import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

    public contactData = [];

	constructor(
		public global: GlobalService,
		private http: HttpService
	) { }

	ngOnInit() {
		this.global.colorToggle = false;
        this.getContactData();
	}
    getContactData(){
		return this.http.getContactData().subscribe(
			data => this.setContactData(data)
		);
	}

	setContactData(data){
		for(var i in data){
			this.contactData.push(data[i]);
		}
	}
}
