import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  @Input() data: User;
  constructor() {}

  ngOnInit() {
    console.log('Data', this.data);
  }

}
