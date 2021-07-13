import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCheckboxModule, MatDatepicker, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatSliderModule, MatTableModule, MatToolbarModule } from '@angular/material';
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
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { NewEventFormComponent } from './Components/new-event-form/new-event-form.component';

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
    AccountButtonComponent,
    SignUpComponent,
    LoginComponent,
    PageNotFoundComponent,
    NewEventFormComponent

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
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    RouterModule.forRoot([
      { path: '', component: EventListComponent },

      { path: 'events/getallevents', component: EventListComponent },
      { path: 'events/addEvent', component: NewEventFormComponent },
      { path: 'coworkers/getallcoworkers', component: FriendsListComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'user/sign-up', component: SignUpComponent },

      { path: '**', component: PageNotFoundComponent },

    ]),
    BrowserAnimationsModule
  ],
  providers: [KalendariumApiService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
