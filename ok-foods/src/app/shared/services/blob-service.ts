import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlobService {
  http = inject(HttpClient);

  getBlobByName(
    containerUrl: string,
    containerSas: string,
    blobName: string,
  ): Observable<string> {
    const url = `${containerUrl}/${blobName}?${containerSas}`;
    return this.http
      .get(url, { responseType: 'text' })
      .pipe(map(() => `${containerUrl}/${blobName}?${containerSas}`));
  }

  listBlobs(containerUrl: string, containerSas: string): Observable<string[]> {
    const url = `${containerUrl}?restype=container&comp=list&${containerSas}`;
    return this.http
      .get(url, { responseType: 'text' })
      .pipe(
        map((response) =>
          this.parseBlobList(response, containerUrl, containerSas),
        ),
      );
  }

  private parseBlobList(
    xml: string,
    containerUrl: string,
    containerSas: string,
  ): string[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    const blobs = Array.from(xmlDoc.getElementsByTagName('Blob'));
    return blobs.map(
      (blob) =>
        `${containerUrl}/${blob.getElementsByTagName('Name')[0].textContent}?${containerSas}`,
    );
  }
}
