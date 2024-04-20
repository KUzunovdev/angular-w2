import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../note';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-note-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.scss']
})
export class NoteDisplayComponent {
  @Input() notes: Note[] = [];
  @Output() noteEdited = new EventEmitter<Note>();
  @Output() noteDeleted = new EventEmitter<number>();
  selectedIndex: number | null = null;

  selectNote(note: Note, index: number) {
    this.selectedIndex = index;
  }

  editNote() {
    if (this.selectedIndex !== null) {
      this.noteEdited.emit(this.notes[this.selectedIndex]);
    }
  }

  deleteNote(index: number) {
    this.noteDeleted.emit(index);
  }
}
