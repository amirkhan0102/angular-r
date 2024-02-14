import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { DesignationsComponent } from './designations/designations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNavbarComponent,
    DesignationsComponent,
    HotelsComponent,
    FlightsComponent,
    BookingsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    RouterLinkActive,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
