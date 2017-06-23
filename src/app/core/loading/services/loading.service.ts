/**
 * =====================
 *    Loading Service
 * =====================
 * @Version-1.0.0
 *
 * @Imports:
 *		Injectable
 *		Observable
 *		BehaviorSubject
 *		Router
 *		Event
 *		NavigationStart
 *		NavigationEnd
 *		NavigationCancel
 *		NavigationError
 * @Exports:
 * 		@Injectables:
 * 			LoadingService
 *
 * @Description: 
 *
 * @Details: 
 * 		@Injectables:
 * 			LoadingService
 *
 * @Version-1.0.0:
 *		2017-04-05 by Zachary Trank-Zelewicz (ztrank-zelewicz@flexchecks.com).
 *		Created.  
 */
// ------------------------------------------------  Imports  ------------------------------------------------
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

// --------------------------------------------  Loading Service  --------------------------------------------
@Injectable()
export class LoadingService {
	/**
	 * ====================
	 *    LoadingService
	 * ====================
	 * @Version-1.0.0
	 *
	 * @Description: 
	 *
	 * @Details: 
	 * 		@Injects:
	 * 			Router
	 * 		@Variables:
	 * 			@Private:
	 * 				BehaviorSubject<boolean> 	_observe
	 * 		@Setters:
	 * 			@Public:
	 * 				isLoading(boolean)
	 * 		@Getters:
	 * 			@Public:
	 * 				boolean 				isLoading
	 * 				Observable<boolean> 	loading
	 *
	 * @Version-1.0.0:
	 *		2017-04-05 by Zachary Trank-Zelewicz (ztrank-zelewicz@flexchecks.com).
	 *		Created.  
	 */
	// ---------------------------------------------  Variables  ---------------------------------------------
	private _observe:BehaviorSubject<boolean> = <BehaviorSubject<boolean>>new BehaviorSubject(true);

	private _message:string;
	private _progress:number;
	// --------------------------------------------  Constructor  --------------------------------------------
	constructor(private router:Router) {
		/**
		 * @Description
		 *		
		 * @Version-1.0.0
		 *		Created.
		 *		
		 */
		
		this.router.events.subscribe((event:RouterEvent) => {
			if(event instanceof NavigationStart) {
				this.isLoading = true;
			} 
			if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
				this.isLoading = false;
			}
		});
	}

	// ----------------------------------------------  Setters  ----------------------------------------------
	set isLoading(val:boolean) {
		/**
		 * @Description
		 *		
		 * @Version-1.0.0
		 *		Created.
		 *		
		 */
		if(!val) {
			this.message = undefined;
			this.progress = undefined;
		}
		this._observe.next(val);
	}

	set message(message:string) {
		this._message = message;
	}

	set progress(progress:number) {
		this._progress = progress;
	}

	// ----------------------------------------------  Getters  ----------------------------------------------
	get isLoading():boolean {
		/**
		 * @Description
		 *		
		 * @Version-1.0.0
		 *		Created.
		 *		
		 */
		return this._observe.getValue();
	}

	get loading():Observable<boolean> {
		/**
		 * @Description
		 *		
		 * @Version-1.0.0
		 *		Created.
		 *		
		 */
		return this._observe.asObservable();
	}

	get message():string {
		return this._message;
	}

	get progress():number {
		return this._progress;
	}


	setStatus(val:boolean, message?:string, progress?:number) {
		console.log('LoadingService.SetStatus', val, message, progress);
		this.isLoading = val;
		this.message = val ? message : undefined;
		this.progress = val ? progress : undefined;
	}
}