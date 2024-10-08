import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Episode } from '../models/episode.model'

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private readonly SINGLE_EPISODE_API =
    'https://rickandmortyapi.com/api/episode/'

  constructor(private readonly httpClient: HttpClient) {}

  public getEpisodeById(id: string): Observable<Episode> {
    return this.httpClient.get<Episode>(this.SINGLE_EPISODE_API + id)
  }

  public getEpisodesrByURL(url: string): Observable<Episode> {
    return this.httpClient.get<Episode>(url)
  }

 
}