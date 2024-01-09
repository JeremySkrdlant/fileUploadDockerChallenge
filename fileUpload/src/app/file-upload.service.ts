import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
 
  constructor() { }

  uploadFile(file: File) {

    console.log(file);
    

    let formData = new FormData();
    formData.append('stuff', file);

    // Use fetch to send the request
    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
}
