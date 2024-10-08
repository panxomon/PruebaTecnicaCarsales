import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { EpisodeService } from '../service/episode.service';
import { Episode, Info } from '../models/episode.model'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-episode-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  allEpisodes: Episode[] = [];
  currentPage: number = 1;
  episodesPerPage: number = 10; 
  totalPages: number = 1;

  constructor(private episodeService: EpisodeService, private router: Router) { } 

  ngOnInit() {
    this.loadEpisodes();
  }

  loadEpisodes() {
    this.episodeService.getEpisodes(this.currentPage.toString()).subscribe(
      (data: Info<Episode[]>) => {
        if (data.results) {
          // Mapea los episodios de la respuesta para asignar los valores correctos
          this.allEpisodes = data.results.map((episode: any) => new Episode(
            episode.id,
            episode.name,
            episode.air_date || null, // Asegúrate de asignar el valor de air_date
            episode.episode,
            episode.characters,
            episode.url,
            episode.created
          ));
          
          this.totalPages = data.info ? data.info.pages : 1;
          this.updateCurrentEpisodes(); 
        }
      },
      (error) => {
        console.error('Error al cargar episodios', error);
      }
    );
  }
  

  updateCurrentEpisodes() {
    const startIndex = (this.currentPage - 1) * this.episodesPerPage;
    this.episodes = this.allEpisodes.slice(startIndex, startIndex + this.episodesPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentEpisodes();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentEpisodes();
    }
  }

  viewEpisode(id: number) {
    console.log(`Ver detalles del episodio con ID: ${id}`);
    this.router.navigate(['/episode', id]);    
  }
}
