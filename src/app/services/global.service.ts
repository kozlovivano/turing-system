import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {

	public animProcessing: Boolean = false; // Disables all the click events while animation
	public bigDevice: Boolean = false; // If the width is bigger than 768
	public headerToggle: Boolean = true; // For 404 page
	public menuToggle: Boolean = false;  // For menu toggle
	public bodyToggle: Boolean = true;  // For body toggle
	public routerToggle: Boolean = false; // For router animation toggle.
	public colorToggle: Boolean = false; // For showroom color toggle
	public url: string = `http://${environment.cdn_domain}/turing-system/`;
	public cookieSet: Boolean = false;
	public signalShowroom: Boolean = false;
	public signalAboutus: Boolean = false;
	public signalShowroomDetail: Boolean = false;
	public menuAlive: Boolean = false;
	public headerSticky: Boolean = false;
	public localeWatch = new Subject<Boolean>();
	public link: string = ""; // Menu navigation link
	public emitLocaleChange(val) {
		this.localeWatch.next(val);
	}

	public animStart(){
		this.animProcessing = true;
	}
	constructor() { }
}
