import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.global.colorToggle = false;
  }

}
