import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { LoaderComponent } from "./loader/loader.component";
import { AuthGuard } from "../auth.guard";

const pokemonRoutes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemons/:id",
    component: DetailPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit/pokemon/:id",
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemon/add",
    component: AddPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "pokemons",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}