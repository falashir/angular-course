import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  @Input() book: {
    type: string,
    name: string,
    description: string
  };
  constructor() { }

  ngOnInit() {
  }

}
