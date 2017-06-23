import { Injectable, isDevMode } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../models/user';

@Injectable()
export class AuthService {
	
	private _user:User;

	private _watchUser:BehaviorSubject<User> = <BehaviorSubject<User>>new BehaviorSubject(this._user);

	constructor() {
		
	}

	get watchUser():Observable<User> {
		return this._watchUser.asObservable();
	}

	isAuthenticated():boolean {
		return this._user && this._user.token.isValid();
	}

	next(user:User) {
		this._user = user;
		this._watchUser.next(this._user);
	}

}