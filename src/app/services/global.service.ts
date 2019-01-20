import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	public headerToggle: Boolean = true; // For 404 page
	public menuToggle: Boolean = false;  // For menu toggle
	public colorToggle: Boolean = false; // For showroom color toggle
	public url: string = "http://cdn.dev.turing-system.com/turing-system/";
	public cookieSet: Boolean = false;
	constructor() { }
}
