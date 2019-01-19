import { Component, OnInit } from '@angular/core';
import { Show } from '../../classes/show';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.sass']
})
export class ShowroomComponent implements OnInit {


  public shows: Show[] = [
    { id: 1, caption: 'The great process for great result', img: 'https://storage.moqups.com/repo/xJzw4EJ2/6abbOSci08.jpg' },
    { id: 2, caption: 'The guid', img: 'https://storage.moqups.com/repo/xJzw4EJ2/578YnA4I4K.jpg' },
  ]

  constructor(
    public global: GlobalService,
  ) { }

  ngOnInit() {
    this.global.colorToggle = true;
  }

}
