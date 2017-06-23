import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CoreLoaderService } from '../services/core-loader.service';

@Injectable()
export class CoreLoaderResolve implements Resolve<any> {
	
	constructor(private core:CoreLoaderService) {}

	resolve(route:ActivatedRouteSnapshot):Observable<any> {
		return this.core.load();
	}
}