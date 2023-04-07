import {Injectable} from '@angular/core';
import {SessionModel} from "../models/session.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  createGameSession(session: SessionModel) {
    const randomNumber = Math.random() * 1000;
    session.id = `#gameCode-${randomNumber}`;
    return session;
  }
}
