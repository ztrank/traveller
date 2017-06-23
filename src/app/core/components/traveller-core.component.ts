import { Component, isDevMode } from '@angular/core';

declare var module:any;

@Component({
	moduleId:module.id,
	template:`
		<!-- Core -->
		<router-outlet></router-outlet>
	`
})
export class TravellerCoreComponent {
	
	constructor() {}
}