import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

// Komponente koje se koriste u Admin modulu
import { DashboardComponent } from './dashboard/dashboard.component';
import { DestinationComponent } from './destination/destination.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminErrorPageComponent } from './admin-error-page/admin-error-page.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesEditComponent } from './cities/cities-edit/cities-edit.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { MuseumsComponent } from './museums/museums.component';
import { EventsComponent } from './events/event.component';
import { OffersComponent } from './offers/offers.component'; // Dodana nova komponenta

@NgModule({
  declarations: [
    DashboardComponent,
    DestinationComponent,
    AdminLayoutComponent,
    ReservationComponent,
    AdminErrorPageComponent,
    CitiesComponent,
    CitiesEditComponent,
    AttractionsComponent,
    MuseumsComponent,
    EventsComponent,
    OffersComponent,  // Dodana nova komponenta za ponude
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule, // Dodajte SharedModule za deljenje funkcionalnosti
  ],
  providers: [],
})
export class AdminModule {}
