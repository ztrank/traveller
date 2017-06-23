import { Injectable, isDevMode } from '@angular/core';

import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
	
	private _user:User;

	constructor(private auth:AuthService) {
		this.auth.watchUser
			.subscribe(user => {
				this._user = user;
			});
	}

	get user():User {
		return this.auth.isAuthenticated() ? this._user : undefined;
	}

}