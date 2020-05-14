import {Component} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEdit = false;

  constructor(
    private readonly dataService: DataService
  ) {
  }

  changeMode(isEdit: boolean) {
    this.isEdit = isEdit;
    this.dataService.mode.next(isEdit);
  }
}
