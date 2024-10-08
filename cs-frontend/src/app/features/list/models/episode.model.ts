export class Episode {
    id: number;
    name: string;            
    air_date: string | null; 
    episode: string;         
    characters: string[];    
    url: string;             
    created: string;         

    constructor(id: number, name: string, air_date: string | null, episode: string, characters: string[], url: string, created: string) {
        this.id = id;
        this.name = name;
        this.air_date = air_date;
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