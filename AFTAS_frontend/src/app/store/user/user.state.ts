import { User } from "src/app/core/models/User.model";

export interface UserState {
    user: User| null;
    token:string;
    error: any;
  }