import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Core-Loader
import { CoreLoaderModule } from './core-loader/core-loader.module';

// Loading
import { LoadingModule } from './loading/loading.module';

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		LoadingModule,
		CoreLoaderModule
	],
	providers:[
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