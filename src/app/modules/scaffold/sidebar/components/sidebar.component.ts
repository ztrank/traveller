import { Component } from '@angular/core';

declare var module:any;
declare var $:any;

@Component({
	moduleId:module.id,
	templateUrl:'./sidebar.component.html',
	styleUrls:['./sidebar.component.css'],
	selector:'traveller-sidebar'
})
export class SidebarComponent {
	
	constructor() {}

}