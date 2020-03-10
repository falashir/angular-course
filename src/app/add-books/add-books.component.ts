import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  @Output() newBook = new EventEmitter<{name: string, description: string}>();
  @Output() newNovel = new EventEmitter<{name: string, description: string}>();
  newName = '';
  description = '';

  constructor() { }

  ngOnInit() {
  }

  onAddBook(){
    this.newBook.emit({
      name: this.newName,
      description: this.description
    });
    
  }

  onAddNovel(){
    this.newNovel.emit({
      name: this.newName,
      description: this.description
    });
  }
}
