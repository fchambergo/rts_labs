import { Component, OnInit } from '@angular/core';
import { AlgoliaApi } from '../shared/algolia_api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public history: string[] = [];

  constructor(private service: AlgoliaApi) { }

  ngOnInit(): void {
    this.history = this.service.getHistory();
  }

}
