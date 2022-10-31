import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { getDownloadURL, list, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  constructor(private storage: Storage) {}

  public upLoadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'image');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => console.log(error));
  }
}
