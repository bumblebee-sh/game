import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() items: Player[];

  constructor() { }
  ngOnInit() {
  }

}
