import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from './locale.service';
import { Observable } from 'rxjs/Observable';
@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(
		private http: HttpClient,
        private locale: LocaleService
	) {

    }

    public getHomeData(): Observable<any>{
        return this.http.get("./assets/data/home/" + this.locale.locale + ".home.json");
    }

	public getMenuData(): Observable<any>{
        return this.http.get("./assets/data/menu/" + this.locale.locale + ".menu.json");
    }

	public getContactData(): Observable<any>{
		return this.http.get("./assets/data/contact/" + this.locale.locale + ".contact.json");
	}

	public getShowroomData(): Observable<any>{
		return this.http.get("./assets/data/showroom/" + this.locale.locale + ".showroom.json");
	}
}
