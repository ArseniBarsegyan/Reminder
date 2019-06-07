import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteModel } from '../NoteModel';
import { NotesService } from '../notes.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes: NoteModel[];
  subscription: Subscription;

  constructor(private notesService: NotesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.notesService.getNotes();
    this.subscription = this.notesService.notesChanged
      .subscribe((notes: NoteModel[]) => {
        this.notes = notes;
      });
  }

  onNewNote() {
    if (!this.authService.isLoggedIn()) {
      alert('Please, login');
    }
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
