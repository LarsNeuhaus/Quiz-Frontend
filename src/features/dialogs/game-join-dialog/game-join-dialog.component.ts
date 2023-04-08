import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-join-dialog',
  templateUrl: './game-join-dialog.component.html',
  styleUrls: ['./game-join-dialog.component.scss']
})
export class GameJoinDialogComponent {
  @Output()
  joinEvent: EventEmitter<string> = new EventEmitter<string>();
  gameCodeInputControl = new FormControl('', [Validators.required]);

  emitJoinEvent() {
    if (this.gameCodeInputControl.value) {
      this.joinEvent.emit(this.gameCodeInputControl.value);
    }
  }
}
