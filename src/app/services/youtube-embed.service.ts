import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class YouTubeEmbedService {
  public readonly sources: SafeResourceUrl[];

  private readonly _sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly _baseUrl: string = 'https://www.youtube.com/embed';

  constructor() {
    this.sources = this.createSafeUrlSources([
      'u9J-wqZFbb8',
      'RVkbzx6xk38',
      'ZtCZfWioDrY',
      'AknXzVv61MY',
      'WnGPKwgSJJg',
      'LRTeD0X4vU0',
    ]);
  }

  private createSafeUrlSources(
    sources: string[],
    baseUrl: string = this._baseUrl
  ): SafeResourceUrl[] {
    const result: SafeResourceUrl[] = [];

    for (const source of sources) {
      result.push(
        this._sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}/${source}`)
      );
    }

    return result;
  }
}
