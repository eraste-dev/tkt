import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { SideBarComponent } from './components/layouts/side-bar/side-bar.component';
import { DashbordComponent } from './components/pages/dashbord/dashbord.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/layouts/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    SideBarComponent,
    DashbordComponent,
    NotFoundComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
