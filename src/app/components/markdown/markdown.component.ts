import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-markdown',
    template: `<p [innerHTML]="content|replaceURL|MarkdownToHtml"></p>`
})
export class MarkdownComponent implements OnInit {

    constructor(private http: HttpClient) { }
	@Input() path: string;
	public content: string = "";
    ngOnInit() {
		this.http.get(this.path, {responseType: 'text'} ).subscribe(data => {
			this.content = data;
		})
    }

}
