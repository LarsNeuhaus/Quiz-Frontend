import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LobbyComponent} from "./lobby.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class LobbyModule { }
