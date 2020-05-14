import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  showNotification = false;
  showNotificationTO;

  constructor(
    private readonly dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.notification.subscribe((value: boolean) => {
      this.showNotification = value;
    });
    this.dataService.mode.subscribe((editMode: boolean) => {
      if (!editMode && this.dataService.notification.value) {
        clearTimeout(this.showNotificationTO);
        this.startCountDown();
        this.showNotification = true;
      }
    });
    this.startCountDown();
  }

  startCountDown() {
    this.showNotificationTO = setTimeout(() => this.showNotification = false, 8000);
  }

  closeNotification() {
    clearTimeout(this.showNotificationTO);
    this.showNotification = false;
  }
}
