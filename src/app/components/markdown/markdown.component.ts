import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../services/global.service';
import { LocaleService } from 'src/app/services/locale.service';

@Component({
    selector: 'app-markdown',
    template: `<p [innerHTML]="content|replaceURL|MarkdownToHtml"></p>`
})
export class MarkdownComponent implements OnInit {

    constructor(private http: HttpClient, public global: GlobalService,public locale: LocaleService,) {
        this.global.localeWatch.subscribe(value => {
            this.ngOnInit();
        })
    }
	@Input() path: string;
	public content: string = "";
    ngOnInit() {
        this.path = this.path.replace("/en.", "*****");
        this.path = this.path.replace("/fr.", "*****");
        this.path = this.path.replace("*****", "/" + this.locale.locale + ".");
		this.http.get(this.path, {responseType: 'text'} ).subscribe(data => {
			this.content = data;
		})
    }

}
