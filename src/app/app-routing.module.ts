import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TravellerCoreComponent } from './core/components/traveller-core.component';
import { CoreLoaderResolve } from './core/core-loader/resolves/core-loader.resolve';

const routes:Route[] = [
	{
		path:'',
		component:TravellerCoreComponent,
		resolve:{
			core:CoreLoaderResolve
		}
	}
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule {}