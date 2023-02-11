import { RouterModule, Routes } from '@angular/router';

import { ListSearchComponent } from './list-search.component';

const routes: Routes = [{ path: '', component: ListSearchComponent }];

export const ListSearchRoutes = RouterModule.forChild(routes);
