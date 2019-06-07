import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { GalleryItemModel } from '../GalleryItemModel';
import { NoteModel } from '../NoteModel';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  createComponentForm: FormGroup;
  description = '';

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(event: any, fileNames: HTMLLabelElement) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const files = event.target.files;

      for (const el of files) {
        fileNames.innerHTML += el.name + ' ';
      }

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createComponentForm.controls['file'].setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit(createComponentForm: NgForm) {
    const note = new NoteModel(0, createComponentForm.controls['description'].value, new Date(), new Date());
    const galleryItem = new GalleryItemModel(0, createComponentForm.controls['file'].value['filename'],
    createComponentForm.controls['file'].value['filename'], false,
      createComponentForm.controls['file'].value['value'],
      false, 0);
      note.galleryItems = [galleryItem];

    this.notesService.createNote(note);
    this.router.navigate(['notes']);
  }
}
