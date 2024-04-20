import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../note'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent implements OnChanges {
  @Input() note: Note | null = null;
  @Output() noteAdded = new EventEmitter<Note>();
  @ViewChild('noteForm') noteForm!: NgForm;

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
    console.log('Form submitted', this.newNote);
    if (this.noteForm.valid) {
      this.noteAdded.emit(this.newNote);
      this.resetNote(); 
    }
  }
  

  resetNote() {
    this.newNote = { title: '', content: '' }; 
    this.noteForm.resetForm();
  }
}
