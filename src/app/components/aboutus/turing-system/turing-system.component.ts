import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
@Component({
  selector: 'app-turing-system',
  templateUrl: './turing-system.component.html',
  styleUrls: ['./turing-system.component.sass']
})
export class TuringSystemComponent implements OnInit {

  constructor(
      public global: GlobalService
  ) { }

  ngOnInit() {
  }

}
