import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-your-pokemon',
  templateUrl: './create-your-pokemon.component.html',
  styleUrls: ['./create-your-pokemon.component.scss']
})
export class CreateYourPokemonComponent implements OnInit {

  newPokemons = [];
  PokeType: string;
  PokeSize: number;
  PokeName: string;
  filterPokemon: string;
  filterPokemonType: string;
  foundPokemon: boolean;
  noDetails: boolean;

  constructor() { }

  ngOnInit(): void {
    this.foundPokemon = false;
    this.noDetails = true;
  }

  createPokemon() {
   
    let name = this.PokeName;
    let size = this.PokeSize;
    let type = this.PokeType;    

    let setPokemon = {
      name: name,
      size: size,
      type: type
    }

    this.newPokemons.push(setPokemon); 
    
    this.foundPokemon = true;

  }

}
