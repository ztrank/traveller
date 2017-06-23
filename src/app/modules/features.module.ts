import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SidebarService } from './scaffold/sidebar/services/sidebar.service';
import { SidebarComponent } from './scaffold/sidebar/components/sidebar.component';

import { ContainerComponent } from './scaffold/container/components/container.component';


@NgModule({
	imports:[
		SharedModule
	],
	providers:[
		SidebarService
	],
	declarations:[
		SidebarComponent,
		ContainerComponent
	],
	exports:[
		ContainerComponent
	]
})
export class FeaturesModule {
	
}