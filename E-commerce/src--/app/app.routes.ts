import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'login',
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register',
      },
    ],
  },

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'home',
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
        title: 'cart',
      },
      {
        path: 'brand',
        loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent),
        title: 'brand',
      },
      {
        path: 'categories',
        loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent),
        title: 'categories',
      },
      {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
        title: 'checkout',
      },
      {
        path: 'product',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
        title: 'product',
      },
      {
        path: '**',
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
      },
    ],
  },
];
