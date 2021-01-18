import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {

  noDetails: boolean;

  constructor() { }

  ngOnInit(): void {
    this.noDetails = true;
  }

}
