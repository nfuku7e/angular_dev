import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
{ 
  path: '',
  pathMatch: 'full',
  component: PokemonListComponent
},
{
  path: ':id',
  component: PokemonDetailComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
