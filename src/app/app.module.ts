import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeComponentComponent } from './components/poke-component/poke-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateYourPokemonComponent } from './components/create-your-pokemon/create-your-pokemon.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { SearchPipe } from './pipes/search-poke.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPokeTypePipe } from './pipes/search-poke-type.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeComponentComponent,
    CreateYourPokemonComponent,
    PokemonDetailsComponent,
    SearchPipe,
    SearchPokeTypePipe,
    PokeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
