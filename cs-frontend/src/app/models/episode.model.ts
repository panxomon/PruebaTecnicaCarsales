export class Episode {
    id: number;
    name: string;            // Corresponde a "name" en la respuesta
    airDate: string | null;  // Puede ser null, así que es mejor definirlo como string | null
    episode: string;         // Corresponde a "episode" en la respuesta
    characters: string[];    // Lista de URLs de personajes
    url: string;             // Corresponde a "url" en la respuesta
    created: string;         // Corresponde a "created" en la respuesta

    constructor(id: number, name: string, airDate: string | null, episode: string, characters: string[], url: string, created: string) {
        this.id = id;
        this.name = name;
        this.airDate = airDate;
        this.episode = episode;
        this.characters = characters;
        this.url = url;
        this.created = created;
    }
}
export interface Info<T> {
    info?: {
      count: number
      pages: number
      next: string | null
      prev: string | null
    }
    results?: T
  }