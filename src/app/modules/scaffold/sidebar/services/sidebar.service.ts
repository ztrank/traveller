import { Injectable } from '@angular/core';

declare var $:any;

@Injectable()
export class SidebarService {
	
	constructor() {}

	toggle():void {
		try {
			$('.ui.labeled.icon.sidebar')
				.sidebar('toggle');
		} catch(e) {
			console.warn(e);
		}
	}


}