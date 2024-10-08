import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../service/details.service';
import { Episode } from '../models/episode.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-episode-detail',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './details.component.html',  
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  episode: Episode | null = null;

  constructor(
    private route: ActivatedRoute,
    private episodeService: DetailsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEpisodeDetails(id);
    }
  }

  getEpisodeDetails(id: string) {
    this.episodeService.getEpisodeById(id).subscribe(
      (episode: Episode) => {
        this.episode = episode;
      },
      (error) => {
        console.error('Error al cargar el episodio', error);
      }
    );
  }

  goBack() {
    window.history.back(); 
  }
}
