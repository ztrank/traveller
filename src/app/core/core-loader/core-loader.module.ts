import { NgModule } from '@angular/core';

import { CoreLoaderService } from './services/core-loader.service';
import { CoreLoaderResolve } from './resolves/core-loader.resolve';

@NgModule({
	imports:[],
	providers:[
		CoreLoaderService,
		CoreLoaderResolve
	],
	declarations:[

	],
	exports:[

	]
})
export class CoreLoaderModule {}