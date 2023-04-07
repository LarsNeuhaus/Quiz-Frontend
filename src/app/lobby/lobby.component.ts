import {Component} from '@angular/core';
import {UserModel} from "../models/user.model";
import {Clipboard} from "@angular/cdk/clipboard";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  gameCode: string = '#gameCode10293';

  users: UserModel[] = [
    {id: 1, name: 'Lars'},
    {id: 2, name: 'Leah'},
    {id: 3, name: 'Loui'},
    {id: 4, name: 'Frida'}];

  constructor(private clipboard: Clipboard,
              private router: Router) {
  }

  copyToClipboard() {
    this.clipboard.copy(this.gameCode);
  }

  startSession() {
    this.router.navigate(['/session']);
  }
}
