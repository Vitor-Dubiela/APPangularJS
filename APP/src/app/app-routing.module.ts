import { CreateMusicComponent } from './components/views/music/create-music/create-music.component';
import { ListMusicComponent } from './components/views/music/list-music/list-music.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListMusicComponent
  },
  {
    path: "music/list",
    component: ListMusicComponent
  },
  {
    path: "music/create",
    component: CreateMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
