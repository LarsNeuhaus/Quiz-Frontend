import {UserModel} from "./user.model";
import {QuestionModel} from "./question.model";

export interface SessionModel {
  title: string;
  id: string;
  users: UserModel[];
  mainCategory: string;
  subCategories: string[];
  questions: QuestionModel[];
}
