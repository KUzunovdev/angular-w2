import { Component } from '@angular/core';
import { Note } from '../note';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteDisplayComponent } from './note-display/note-display.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteInputComponent, NoteDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  notes: Note[] = [];

  addNote(note: Note) {
    this.notes.push(note);
  }

  

 
}
