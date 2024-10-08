import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/theme/layout/layout.component';
import { AboutUsComponent } from './core/theme/about-us/about-us.component';
import { ProductsComponent } from './core/theme/products/products.component';
import { ContactUsComponent } from './core/theme/contact-us/contact-us.component';
import { CartComponent } from './core/theme/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'home',
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
    ],
  },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
