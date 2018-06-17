import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';
import { FreightComponent } from './freight/freight.component';
import { ListFreightComponent } from './list-freight/list-freight.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DetailFreightComponent } from './detail-freight/detail-freight.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FilterRegionComponent } from './filter-region/filter-region.component';

export const ROUTES: Routes = [
//   {path: '', component: HomeComponent},
  {path: '', component: ListFreightComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'freight', component: FreightComponent},
  {path: 'list-freight', component: ListFreightComponent},
  {path: 'list-user', component: ListUserComponent},
  {path: 'detail-freight', component: DetailFreightComponent},
  {path: 'detail-user', component: DetailUserComponent},
  {path: 'filter-region', component: FilterRegionComponent}
];

