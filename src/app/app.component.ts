import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	template: `
  		<!-- APP COMPONENT -->
		<router-outlet></router-outlet>
	`,
  	styles: []
})
export class AppComponent {
  	constructor() {}

}
