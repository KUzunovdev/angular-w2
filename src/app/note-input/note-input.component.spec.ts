import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInputComponent } from './note-input.component';

describe('NoteInputComponent', () => {
  let component: NoteInputComponent;
  let fixture: ComponentFixture<NoteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
