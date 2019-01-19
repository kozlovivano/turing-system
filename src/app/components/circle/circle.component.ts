import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
	selector: 'app-circle',
	templateUrl: './circle.component.html',
	styleUrls: ['./circle.component.sass'],
    animations: [
        trigger('appear-white', [
            state('void', style({
                'width': '0px',
                'padding-top': '0px',
                'margin-left': '-0px',
                'margin-top': '-0px'
            })),
            state('*', style({
                'width': '459px',
                'padding-top': '459px',
                'margin-left': '-229.5px',
                'margin-top': '-229.5px'
            })),
            transition('void <=> *', animate('3000ms cubic-bezier(0.215, 0.61, 0.355, 1)')),

        ]),trigger('appear-yellow', [
            state('void', style({
                'width': '0px',
                'padding-top': '0px',
                'margin-left': '-0px',
                'margin-top': '-0px'
            })),
            state('*', style({
                'width': '526px',
                'padding-top': '526px',
                'margin-left': '-263px',
                'margin-top': '-263px'
            })),
            transition('void <=> *', animate('3000ms cubic-bezier(0.215, 0.61, 0.355, 1)')),

        ]),trigger('appear-purple', [
            state('void', style({
                'width': '0px',
                'padding-top': '0px',
                'margin-left': '-0px',
                'margin-top': '-0px'
            })),
            state('*', style({
                'width': '596px',
                'padding-top': '596px',
                'margin-left': '-298px',
                'margin-top': '-298px'
            })),
            transition('void <=> *', animate('3000ms cubic-bezier(0.215, 0.61, 0.355, 1)')),

        ])
    ]
})
export class CircleComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

}
