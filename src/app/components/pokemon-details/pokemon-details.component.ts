import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/poke-api-service.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: any = [];
  resultPokemonArray: Array<any>;
  pokemonName = '';
  pokemonImg = '';
  pokemonType = '';
  noDetails: boolean;
  listTypes: Array<string>;

  constructor(private activatedRouter: ActivatedRoute,
    private PokemonService: PokemonService, private router: Router) {
    //obtiene parametro de la url
    this.activatedRouter.params.subscribe(
      params => {
        this.getDetails(params['id']);
      }
    )
  }

  ngOnInit(): void {
    this.noDetails = false;
    console.log('Estoy en details ');
    
  }

  getDetails(id) {

    this.pokemon = [];
  
    this.PokemonService.getPokeData(id).subscribe(
      res => {
        const resultPokemon = {
          position: id,
          image: res.sprites.front_default,
          name: res.name,
          type: res.types[0].type.name,
          abilities: res.abilities[0].ability.name
        };                  

        this.pokemon.push(resultPokemon);
        
        
        

      },
      err => {
        console.log(err);
      }
    );
    
  }

  backToHome() {
    window.location.reload();
    this.noDetails = true;
  }

}
