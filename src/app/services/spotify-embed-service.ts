import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const IMG_SRC_FOLDER: string = "assets/images/album-covers";

@Injectable({
  providedIn: 'root'
})
export class SpotifyEmbedService {
  public readonly sources: SpotifySource[] = [
    {
      url: "https://open.spotify.com/embed/track/6PogkqYpaWV2bW1pVRNs8s",
      title: "All Night Long",
      imageUrl: `${IMG_SRC_FOLDER}/all-night-long.jpg`
    },
    {
      url: "https://open.spotify.com/embed/track/1WSvbMs1Q1JFLGsyvAmZDa",
      title: "This Love",
      imageUrl: `${IMG_SRC_FOLDER}/this-love.jpg`
    },
    {
      url: "https://open.spotify.com/embed/track/4PjA8d9XMZvyvlK4gf1amF",
      title: "Don't Wanna Be",
      imageUrl: `${IMG_SRC_FOLDER}/dont-wanna-be.jpg`
    }
  ];

  constructor(sanitizer: DomSanitizer) {
    for(let i = 0; i < this.sources.length; i++) {
      this.sources[i].url = sanitizer.bypassSecurityTrustResourceUrl(this.sources[i].url as string);
    }
  }
}

export interface SpotifySource {
  url: string | SafeResourceUrl;
  title: string;
  imageUrl: string;
}