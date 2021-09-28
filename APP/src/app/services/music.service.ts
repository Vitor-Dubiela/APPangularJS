import { Music } from './../models/music';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private baseUrl = "https://localhost:5001/api/music/";

  constructor(private http: HttpClient) { }

  list(): Observable<Music[]> {

    return this.http.get<Music[]>(`${this.baseUrl}list`);
  }

  getById(id: number): Observable<Music> {
    
    return this.http.get<Music>(`${this.baseUrl}getbyid/${id}`);
  }

  post(music: Music): Observable<Music> {

    return this.http.post<Music>(`${this.baseUrl}create`, music);
  }
}
