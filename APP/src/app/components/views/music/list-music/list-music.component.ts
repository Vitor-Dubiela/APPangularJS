import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  musics: Music[] = [];

  constructor (private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.list().subscribe(musics => {
      this.musics = musics;
      console.log(musics); 
    });
  }

}
