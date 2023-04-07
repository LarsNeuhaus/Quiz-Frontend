import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SessionModel} from "../../../app/models/session.model";

@Component({
  selector: 'app-game-creation-dialog',
  templateUrl: './game-creation-dialog.component.html',
  styleUrls: ['./game-creation-dialog.component.scss']
})
export class GameCreationDialogComponent {
  gameTitle: string = '';
  gameTitleInputControl = new FormControl('', [Validators.required]);
  mainCategories: string[] = ['Christmas', 'Sports', 'Summer', 'Spring'];
  selectedMainCategory: string = '';
  mainCategorySelectControl = new FormControl('', [Validators.required]);
  subCategoriesSelectControl = new FormControl('', [Validators.required]);
  subCategories: string[] = ['Food', 'Games', 'Music', 'Countries', 'Flowers', 'Animals'];


  constructor(@Inject(MAT_DIALOG_DATA) public gameSession: SessionModel) {
  }

  areAllInputFieldsValid() {
    return this.gameTitleInputControl.valid &&
      this.mainCategorySelectControl.valid &&
      this.subCategoriesSelectControl.valid;
  }

  setSessionSettings() {
    //this.gameSession.subCategories = this.subCategoriesSelectControl.value;
  }
}
