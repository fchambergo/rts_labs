import { Component, OnInit } from '@angular/core';
import { AlgoliaApi } from '../shared/algolia_api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //Array of previous searches
  public history: string[] = [];

  constructor(private service: AlgoliaApi) { }

  ngOnInit(): void {
    //On initial component load, get the previous searches from the share file that tracks previous searches
    this.history = this.service.getHistory();
  }

}
