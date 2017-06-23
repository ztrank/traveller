import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Core-Loader
import { CoreLoaderService } from './core-loader/services/core-loader.service';
import { CoreLoaderResolve } from './core-loader/resolves/core-loader.resolve'; 

import { LoadingModule } from './loading/loading.module';

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		LoadingModule
	],
	providers:[
		CoreLoaderService,
		CoreLoaderResolve
	],
	declarations:[

	],
	exports:[
	
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule:CoreModule) {
		if(parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only.'
			);
		}
	}

	static forRoot(config:CoreConfiguration):ModuleWithProviders {
		let mod = {
			ngModule:CoreModule,
			providers:[]
		};

		return mod;
	}
}

export interface CoreConfiguration {

}