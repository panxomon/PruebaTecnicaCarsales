import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Episode } from '../models/episode.model'
import { Info } from '../models/episode.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private readonly ALL_EPISODE_API =
    'https://rickandmortyapi.com/api/episode/?page='

  constructor(private readonly httpClient: HttpClient) {}

  public getEpisodesrByURL(url: string): Observable<Episode> {
    return this.httpClient.get<Episode>(url)
  }

  public getEpisodes(page: string): Observable<Info<Episode[]>> {
    return this.httpClient.get<Info<Episode[]>>(this.ALL_EPISODE_API + page)
  }
}