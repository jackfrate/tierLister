import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  files: File[];
  chosenFile: File;
  constructor(private fileUploadSvc: FileUploadService) {
    this.files = this.fileUploadSvc.files;
  }

  ngOnInit(): void {
  }

  selectFile(file: File) {
    this.fileUploadSvc.chosenFile = file;
  }

  getFileName(file: File) {
    console.log(file);
    console.log(file.name);
    return String(file).replace('.json', '');
  }

  // stuff we don't mess with

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }

}
