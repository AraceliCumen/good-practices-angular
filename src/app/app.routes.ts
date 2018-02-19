import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: 'heroes-search', pathMatch: 'full' },
  { path: 'heroes-search', loadChildren: './search/search.module#SearchModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsModule' }
];
