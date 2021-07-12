import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatSliderModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { EventListComponent } from './Components/event-list/event-list.component';
import { KalendariumApiService } from './Services/kalendarium-api.service';
import { LoginService } from './Services/login.service';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MonthComponent } from './Components/month/month.component';
import { DayComponent } from './Components/day/day.component';
import { LeftSideNavComponent } from './Components/left-side-nav/left-side-nav.component';
import { ContactCardComponent } from './Components/contact-card/contact-card.component';
import { FriendsListComponent } from './Components/friends-list/friends-list.component';
import { EventDetailComponent } from './Components/event-detail/event-detail.component';
import { AccountButtonComponent } from './Components/account-button/account-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavBarComponent,
    EventDetailComponent,
    EventListComponent,
    MonthComponent,
    DayComponent,
    LeftSideNavComponent,
    ContactCardComponent,
    FriendsListComponent,
    AccountButtonComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot([

    ]),
    BrowserAnimationsModule
  ],
  providers: [KalendariumApiService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
