import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  files: File[];
  chosenFile: File;

  constructor(private fileUploadSvc: FileUploadService, dbService: DbService) {
    this.files = this.fileUploadSvc.files;
  }

  ngOnInit(): void {
  }

  getFileName(file: File) {
    return file.name;
  }

  setBoardFromChosenFile() {
    this.fileUploadSvc.setBoardFromChosenFile(this.chosenFile);
  }

  // stuff we don't mess with

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element);
    }
  }

}
