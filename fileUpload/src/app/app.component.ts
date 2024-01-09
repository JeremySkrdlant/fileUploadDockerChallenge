import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fileUpload';

  constructor(private fileUploadService: FileUploadService) { }

  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
}

onDragLeave(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
}

onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        
        // Now you can send 'file' to your server
        this.fileUploadService.uploadFile(file);
    }
}
}
