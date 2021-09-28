import { Music } from 'src/app/models/music';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent implements OnInit {

  name!: string;
  author!: string;
  duration!: string;

  constructor(private service: MusicService, private router: Router) { }

  ngOnInit(): void {}

  create(): void {
    let music : Music = {
      name: this.name,
      author: this.author,
      duration: this.duration
    };
    this.service.post(music).subscribe((music => {
      console.log(music);
      this.router.navigate(["music/list"]);
    }));
  }

}
