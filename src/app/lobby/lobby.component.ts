import {Component, OnInit} from '@angular/core';
import {UserModel} from "../models/user.model";
import {Clipboard} from "@angular/cdk/clipboard";
import {Router} from "@angular/router";
import {SessionModel} from "../models/session.model";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  gameSession: SessionModel = {title: '', id: '', subCategories: [], mainCategory: '', questions:[], users: []};

  users: UserModel[] = [
    {id: 1, name: 'Lars'},
    {id: 2, name: 'Leah'},
    {id: 3, name: 'Loui'},
    {id: 4, name: 'Frida'}];

  constructor(private clipboard: Clipboard,
              private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (!!navigation) {
      const state = navigation.extras.state as {
        gameSession: SessionModel
      };
      this.gameSession = state.gameSession;
    }
  }

  copyToClipboard() {
    this.clipboard.copy(this.gameSession.id);
  }

  startSession() {
    this.router.navigate(['/session']);
  }

  ngOnInit(): void {


  }
}
