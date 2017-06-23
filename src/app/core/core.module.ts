import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// Core-Loader
import { CoreLoaderModule } from './core-loader/core-loader.module';

// Loading
import { LoadingModule } from './loading/loading.module';

// Traveller Component
import { TravellerCoreComponent } from './components/traveller-core.component';

@NgModule({
	imports:[
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		RouterModule,
		LoadingModule,
		CoreLoaderModule
	],
	providers:[
	],
	declarations:[
		TravellerCoreComponent
	],
	exports:[
		TravellerCoreComponent
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
}