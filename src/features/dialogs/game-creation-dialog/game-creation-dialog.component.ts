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
  gameTitleInputControl = new FormControl('', [Validators.required]);
  mainCategories: string[] = ['Christmas', 'Sports', 'Summer', 'Spring'];
  mainCategorySelectControl = new FormControl('', [Validators.required]);
  subCategoriesSelectControl: FormControl<string[] | null> = new FormControl([''], [Validators.required]);
  subCategories: string[] = ['Food', 'Games', 'Music', 'Countries', 'Flowers', 'Animals'];


  constructor(@Inject(MAT_DIALOG_DATA) public gameSession: SessionModel) {
  }

  areAllInputFieldsValid() {
    return this.gameTitleInputControl.valid &&
      this.mainCategorySelectControl.valid &&
      this.subCategoriesSelectControl.valid;
  }

  setSessionSettings() {
    this.gameSession.subCategories = this.subCategoriesSelectControl.value === null ? [''] : this.subCategoriesSelectControl.value;
    this.gameSession.mainCategory = this.mainCategorySelectControl.value === null ? '' : this.mainCategorySelectControl.value;
    this.gameSession.title = this.gameTitleInputControl.value === null ? '' : this.gameTitleInputControl.value;
  }
}
