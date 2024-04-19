import { Component, Input } from '@angular/core';
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
}
