import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() textSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  onSearch(event) {
    this.textSearch.emit(event.detail.value);
  }
}
