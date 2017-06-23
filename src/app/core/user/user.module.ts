import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@NgModule({
	imports : [],
	providers : [
		AuthService,
		UserService
	]
})
export class UserModule {}