import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCreationDialogComponent } from './game-creation-dialog.component';

describe('GameCreationDialogComponent', () => {
  let component: GameCreationDialogComponent;
  let fixture: ComponentFixture<GameCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCreationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
