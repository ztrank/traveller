import { Token } from './token';

export class User {
	private _token:Token;

	constructor() {}
	
	get token():Token {
		this._token = this._token ? this._token : new Token();
		return this._token;
	}
}
