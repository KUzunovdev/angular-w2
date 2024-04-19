import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../note'; 

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent {
  newNote: Note = {title: '', content: ''};
  @Output() noteAdded = new EventEmitter<Note>();

  saveNote() {
    if (this.newNote.title && this.newNote.content) {
      this.noteAdded.emit(this.newNote);
      this.newNote = {title: '', content: ''}; 
    }
  }
}
