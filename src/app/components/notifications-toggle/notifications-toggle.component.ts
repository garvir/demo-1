import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-notifications-toggle',
  templateUrl: './notifications-toggle.component.html',
  styleUrls: ['./notifications-toggle.component.css']
})
export class NotificationsToggleComponent implements OnInit {
  notifications: boolean;

  constructor(
    private readonly dataService: DataService
  ) {
  }

  ngOnInit() {
    this.dataService.notification.subscribe((value: boolean) => {
      this.notifications = value;
    });
  }

  toggle() {
    this.notifications = !this.notifications;
    this.dataService.notification.next(this.notifications);
  }
}
