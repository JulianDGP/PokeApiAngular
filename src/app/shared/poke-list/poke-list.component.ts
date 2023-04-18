import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  private setAllPokemons:any;
  public getAllPokemons:any;
  
  
  constructor(private pokeApiService: PokeApiService){
  }
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons =res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );  
  }

  public getBySearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) =>{
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;

  }
}
