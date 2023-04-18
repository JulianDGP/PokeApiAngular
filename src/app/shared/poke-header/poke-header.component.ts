import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {
  constructor( public auth: AuthService, private router: Router){}
  ngOnInit(): void {
  }
  login(){
    this.auth.loginWithRedirect()
  }
  logOut(){
    this.auth.logout()
  } 

}
