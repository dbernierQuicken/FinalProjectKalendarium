import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatTableModule } from '@angular/material';
import { EventListComponent } from './Components/event-list/event-list.component';
import { KalendariumApiService } from './Services/kalendarium-api.service';
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    RouterModule.forRoot([

    ]),
    BrowserAnimationsModule
  ],
  providers: [KalendariumApiService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
