import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GameCreationDialogComponent} from "../../features/dialogs/game-creation-dialog/game-creation-dialog.component";
import {GameJoinDialogComponent} from "../../features/dialogs/game-join-dialog/game-join-dialog.component";
import {NavigationExtras, Router} from "@angular/router";
import {SessionModel} from "../models/session.model";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private gameSession: SessionModel = {title: '', id: '', subCategories: [], mainCategory: '', questions:[], users: []};
  constructor(private dialog: MatDialog,
              private router: Router,
              private homeService: HomeService) {
  }

  openCreationDialog() {
    const dialogRef = this.dialog.open(GameCreationDialogComponent, {
      data: this.gameSession
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gameSession = this.homeService.createGameSession(this.gameSession);
        const navigationExtras: NavigationExtras = {
          state: {
            gameSession: this.gameSession
          }
        };
        this.router.navigate(['/lobby'], navigationExtras);
      }
    });
  }

  openJoinDialog() {
    const dialogRef = this.dialog.open(GameJoinDialogComponent);
  }
}
