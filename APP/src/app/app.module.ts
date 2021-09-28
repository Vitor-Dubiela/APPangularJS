import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListMusicComponent } from './components/views/music/list-music/list-music.component';
import { CreateMusicComponent } from './components/views/music/create-music/create-music.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMusicComponent,
    CreateMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
