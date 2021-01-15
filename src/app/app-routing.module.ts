import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PokemonDetailsComponent } from '../app/components/pokemon-details/pokemon-details.component';
import { PokeComponentComponent } from '../app/components/poke-component/poke-component.component'


const routes: Routes = [
  {path: 'home', component: PokeComponentComponent},
  {path: 'pokemonDetails/:id', component: PokemonDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
