import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../note'; 

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent implements OnChanges {
  @Input() note: Note | null = null;
  @Output() noteAdded = new EventEmitter<Note>();

  // Declare newNote property with initial empty values
  newNote: Note = { title: '', content: '' };

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['note'] && this.note) {
      this.newNote = { ...this.note }; 
    } else {
      this.resetNote();
    }
  }

  saveNote() {
    if (this.newNote.title && this.newNote.content) {
      this.noteAdded.emit(this.newNote);
      this.resetNote(); 
    }
  }

  resetNote() {
    this.newNote = { title: '', content: '' }; 
  }
}
