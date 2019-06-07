import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { NoteModel } from '../NoteModel';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: NoteModel;
  id: number;

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.note = this.notesService.getNoteById(this.id);
    });
  }

  onImageClick(rootImage: HTMLImageElement, modalWindow: HTMLDivElement, modalImage: HTMLImageElement, caption: HTMLDivElement) {
    modalWindow.style.display = 'block';
    modalImage.setAttribute('src', rootImage.src);
    caption.innerHTML = rootImage.alt;
  }

  onCloseModal(modalImage: HTMLDivElement) {
    modalImage.style.display = 'none';
  }
}
