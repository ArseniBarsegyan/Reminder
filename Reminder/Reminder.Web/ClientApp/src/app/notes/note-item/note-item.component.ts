import { Component, Input, OnInit } from '@angular/core';
import { NoteModel } from '../NoteModel';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: NoteModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
