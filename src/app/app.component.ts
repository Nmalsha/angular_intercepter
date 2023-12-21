import { Component } from '@angular/core';
import { MyApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private apiService: MyApiService) {
    this.getData();
  }

  getData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    this.apiService.getData(apiUrl).subscribe((data) => {
      console.log(data);
    });
  }
}
