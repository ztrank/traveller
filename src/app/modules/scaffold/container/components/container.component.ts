import { Component } from '@angular/core';

import { SidebarService } from '../../sidebar/services/sidebar.service';
declare var module:any;

@Component({
	moduleId:module.id,
	templateUrl:'./container.component.html',
	styleUrls:['./container.component.css'],
	selector:'traveller-container'
})
export class ContainerComponent {
	constructor(private sidebar:SidebarService) {}

	toggleSidebar():void {
		this.sidebar.toggle();
	}
}