import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditComponent} from './components/edit/edit.component';
import {DashboardChartsComponent} from './components/dashboard-charts/dashboard-charts.component';
import {HighlightsComponent} from './components/highlights/highlights.component';
import {DataService} from './services/data.service';
import { NotificationComponent } from './components/notification/notification.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {ModalModule} from 'angular-custom-modal';
import { HighlightsEditComponent } from './components/highlights-edit/highlights-edit.component';
import { NotificationsToggleComponent } from './components/notifications-toggle/notifications-toggle.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    DashboardChartsComponent,
    HighlightsComponent,
    NotificationComponent,
    ProjectsComponent,
    HighlightsEditComponent,
    NotificationsToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
