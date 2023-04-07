import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogsModule} from "./dialogs/dialogs.module";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    DialogsModule
  ]
})
export class FeaturesModule {
}
