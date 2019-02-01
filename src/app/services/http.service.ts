import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from './locale.service';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	public url: string = `http://${environment.cdn_domain}/turing-system/`;

	constructor(
		private http: HttpClient,
        private locale: LocaleService
	) {

    }

    public getHomeData(): Observable<any>{
        return this.http.get(this.url + this.locale.locale + ".home.json");
    }

	public getMenuData(): Observable<any>{
        return this.http.get(this.url + this.locale.locale + ".menu.json");
    }

	public getContactData(): Observable<any>{
		return this.http.get(this.url + this.locale.locale + ".contact.json");
	}

	public getShowroomData(): Observable<any>{
		return this.http.get(this.url + this.locale.locale + ".showroom.json");
	}
}
