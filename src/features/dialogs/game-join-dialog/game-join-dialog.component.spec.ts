import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameJoinDialogComponent } from './game-join-dialog.component';

describe('GameJoinDialogComponent', () => {
  let component: GameJoinDialogComponent;
  let fixture: ComponentFixture<GameJoinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameJoinDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameJoinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
