import { Injectable, isDevMode } from '@angular/core';

import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoreLoaderService {
	constructor() {}

	load():Observable<any> {
		let async = new AsyncSubject();

		async.next({});
		async.complete();
		if(isDevMode()) console.log('Core Loader Complete!');
		return async.asObservable();
	}
}