import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCreationDialogComponent } from './game-creation-dialog/game-creation-dialog.component';
import { GameJoinDialogComponent } from './game-join-dialog/game-join-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    GameCreationDialogComponent,
    GameJoinDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class DialogsModule { }
