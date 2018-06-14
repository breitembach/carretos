import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { FretistasComponent } from 'src/app/fretistas/fretistas.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
//   {path: '', component: HomeComponent},
  {path: '', component: FretistasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent}

];
