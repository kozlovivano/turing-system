import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.sass']
})
export class AboutusComponent implements OnInit {

  constructor(
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.global.colorToggle = false;
  }

}
