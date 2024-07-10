import { Injectable } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root',
})
export class BlobService {
  private accountName = 'okfoodsnapier';

  async listBlobByNameBlobs(
    imageName: string,
    conatainerName: string,
  ): Promise<string> {
    const blobServiceClient = new BlobServiceClient(
      `https://${this.accountName}.blob.core.windows.net`,
    );
    const containerClient =
      blobServiceClient.getContainerClient(conatainerName);

    const client = containerClient.getBlobClient(imageName).url;

    return client;
  }

  async listfoodBlobs(containerName: string): Promise<string[]> {
    const blobServiceClient = new BlobServiceClient(
      `https://${this.accountName}.blob.core.windows.net`,
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobUrls: string[] = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      const blobUrl = `${containerClient.url}/${blob.name}`;
      blobUrls.push(blobUrl);
    }
    return blobUrls;
  }
}
