import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationsComponent } from './designations/designations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'designations', component: DesignationsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '**', component: PageNotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
