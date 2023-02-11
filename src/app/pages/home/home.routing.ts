import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'searchTypes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list-types/list-types.module').then(
                (m) => m.ListTypesModule
              ),
          },
        ],
      },
      // {
      //   path: 'search-name',
      //   children: [],
      // },
      {
        path: '',
        redirectTo: '/home/searchTypes',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/searchTypes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutes {}
