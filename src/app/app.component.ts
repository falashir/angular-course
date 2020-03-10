import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h3 {
        color: red;
      }
    `
  ]
})
export class AppComponent {

  books = [
    { type: 'book', name: 'bookName', description: 'description Book' },
    { type: 'novel', name: 'NovelName', description: 'description Novel' }
  ];


  onBookAdded(bookData: {name: string, description: string}) {
    this.books.push({
      type: 'book',
      name: bookData.name,
      description: bookData.description
    });

  }

  onNovelAdded(novelData: {name: string, description: string}) {
    this.books.push({
      type: 'novel',
      name: novelData.name,
      description: novelData.description
    });
  }

}
