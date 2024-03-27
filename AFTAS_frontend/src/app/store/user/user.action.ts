import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/User.model';
import { loginInfo } from 'src/app/core/models/loginInfo.model';

export const login = createAction('[Auth] Login', props<{ loginInfo : loginInfo  }>());
export const register = createAction('[Auth] register', props<{ user : User }>());
export const successLogin = createAction('[Auth] SucessLogin', props<{user : User , token:string }>());
export const failedLogin = createAction('[Auth] FailedLogin', props<{ error : String }>());

export const logout = createAction('[Auth] Logout');