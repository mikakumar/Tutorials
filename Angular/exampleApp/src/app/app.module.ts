import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PersonaLandingComponent } from './components/persona-landing/persona-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PhonebookComponent,
    LandingComponent,
    SidebarComponent,
    HeaderComponent,
    IndexComponent,
    LoadingComponent,
    PersonaLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
