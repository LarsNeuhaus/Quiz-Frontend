import {Injectable} from '@angular/core';
import {SessionModel} from "../models/session.model";

const gameSessions: SessionModel[] = [];

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  createGameSession(session: SessionModel) {
    session.id = `#gameCode-${gameSessions.length + 1}`;
    gameSessions.push(session);
    return session;
  }

  getGameSession(joinCode: string) {
    return gameSessions.filter(session => {
      return session.id === joinCode;
    })[0];
  }
}
