import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/poke-api-service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-poke-component',
  templateUrl: './poke-component.component.html',
  styleUrls: ['./poke-component.component.scss']
})
export class PokeComponentComponent implements OnInit {
  resultPokemonArray: Array<any>;
  search: string;
  filterPokemon: string;
  filterPokemonType: string;
  listTypes: Array<string>;

  constructor(private PokemonService: PokemonService,private router: Router) { }

  ngOnInit(): void {
    this.getPokeAREASeys();    
  }

  getPokeAREASeys(){
    this.resultPokemonArray = [];
    this.listTypes = [];
    
    for (let i = 1; i <= 150; i++) {
      this.PokemonService.getPokeData(i).subscribe(
        res => {
          const resultPokemon = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            type: res.types[0].type.name
          };          
                    
          this.listTypes.push(resultPokemon.type);

          this.listTypes.filter((item,index)=>{
            return this.listTypes.indexOf(item) === index;
          })


          this.resultPokemonArray.push(resultPokemon);

        },
        err => {
          console.log(err);
        }
      );
    }  
  }

   //Obtenemos el Pokemon identificativo
    getPokeID(row){
      this.router.navigateByUrl(`/pokemonDetails/${row.position}`)
   }

   getFilterPokemon(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

}
