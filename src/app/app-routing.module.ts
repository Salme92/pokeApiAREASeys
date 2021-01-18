import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from '../app/components/pokemon-details/pokemon-details.component';
import { AppComponent } from '../app/app.component'


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'pokemonDetails/:id', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
