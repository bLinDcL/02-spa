import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RUTAS
import { APP_ROUTING } from './app.routes';

// SERVICIOS
import { HeroesService } from './services/heroes.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';
import { HeroTarjetaComponent } from './components/hero-tarjeta/hero-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    SearchHeroComponent,
    HeroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
