import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user!: string;
  @Output() value = new EventEmitter <any>();
  search() {
    this.value.emit(this.user)
  }

  constructor() { }



  ngOnInit(): void {
  }

}
