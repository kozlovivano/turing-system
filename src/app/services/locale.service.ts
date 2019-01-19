import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocaleService {

    public locale: string = 'en';

	constructor() { }
}
