import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { EpisodeService } from '../../services/episode.service';
import { Episode, Info } from '../../models/episode.model'; // Importa el modelo
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  standalone: true, // Marca el componente como autónomo
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  allEpisodes: Episode[] = []; // Agrega esta propiedad para almacenar todos los episodios
  currentPage: number = 1;
  episodesPerPage: number = 10; // Cambia esto según lo que necesites
  totalPages: number = 1;

  constructor(private episodeService: EpisodeService) { } // Inyecta el servicio

  ngOnInit() {
    this.loadEpisodes();
  }

  loadEpisodes() {
    this.episodeService.getEpisodes(this.currentPage.toString()).subscribe(
      (data: Info<Episode[]>) => {
        if (data.results) {
          this.allEpisodes = data.results; // Almacena todos los episodios
          this.totalPages = data.info ? data.info.pages : 1; // Calcula total de páginas
          this.updateCurrentEpisodes(); // Llama a este método sin pasarle el array
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
  }
}
