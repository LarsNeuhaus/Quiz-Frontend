import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GameCreationDialogComponent} from "../../features/dialogs/game-creation-dialog/game-creation-dialog.component";
import {GameJoinDialogComponent} from "../../features/dialogs/game-join-dialog/game-join-dialog.component";
import {Router} from "@angular/router";
import {SessionModel} from "../models/session.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private gameSession?: SessionModel;
  constructor(private dialog: MatDialog,
              private router: Router) {
  }

  openCreationDialog() {
    const dialogRef = this.dialog.open(GameCreationDialogComponent, {
      data: this.gameSession
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/lobby']);
      }
    });
  }

  openJoinDialog() {
    const dialogRef = this.dialog.open(GameJoinDialogComponent);
  }
}
