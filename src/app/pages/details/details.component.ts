import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any
  public isLoading: boolean = false;
  public apiError: boolean = false;
  constructor(
    private activeRoute:ActivatedRoute,
    private pokeApiService: PokeApiService,
    private authService: AuthService,
    private toastr: ToastrService
    ){}
  
    ngOnInit(): void {
      
      this.getPokemon;
      this.authService.isAuthenticated$.subscribe((authenticated) => {
        if (!authenticated) {
          this.toastr.warning('Debes iniciar sesión primero');
        }
      });
  }

  get getPokemon(){
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon= this.pokeApiService.apiGetpokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetpokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      }
    );
    
  }

}
