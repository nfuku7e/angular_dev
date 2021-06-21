import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/assets/pokedex';
import { TypePipe } from './../pypes/type.pipe'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon:any;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      this.pokemon = this.pokemons[id - 1];
    })
  }
}
