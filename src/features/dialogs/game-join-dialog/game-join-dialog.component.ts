import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-join-dialog',
  templateUrl: './game-join-dialog.component.html',
  styleUrls: ['./game-join-dialog.component.scss']
})
export class GameJoinDialogComponent {
  public gameCode: string = '';
  gameCodeInputControl = new FormControl('', [Validators.required]);

}
