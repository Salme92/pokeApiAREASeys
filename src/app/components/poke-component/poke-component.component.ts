import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/poke-api-service.service'


@Component({
  selector: 'app-poke-component',
  templateUrl: './poke-component.component.html',
  styleUrls: ['./poke-component.component.scss']
})
export class PokeComponentComponent implements OnInit {
  resultPokemonArray: Array<any>;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokeAREASeys();    
  }

  getPokeAREASeys(){
    this.resultPokemonArray = [];
    
    for (let i = 1; i <= 150; i++) {
      this.PokemonService.getPokeData(i).subscribe(
        res => {
          const resultPokemon = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          
          this.resultPokemonArray.push(resultPokemon)          
        },
        err => {
          console.log(err);
        }
      );
    }  
  }

}
