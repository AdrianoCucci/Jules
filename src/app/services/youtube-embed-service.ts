import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class YouTubeEmbedService {
  public readonly sources: string[] | SafeResourceUrl[] = [
    "https://www.youtube.com/embed/RVkbzx6xk38",
    "https://www.youtube.com/embed/ZtCZfWioDrY",
    "https://www.youtube.com/embed/AknXzVv61MY",
    "https://www.youtube.com/embed/WnGPKwgSJJg",
    "https://www.youtube.com/embed/LRTeD0X4vU0"
  ];

  constructor(sanitizer: DomSanitizer) {
    for(let i = 0; i < this.sources.length; i++) {
      this.sources[i] = sanitizer.bypassSecurityTrustResourceUrl(this.sources[i] as string);
    }
  }
}