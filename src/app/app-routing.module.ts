import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path:'products', component: ProductListComponent
},{
  path: 'products/:productId', component: ProductDetailsComponent
},{
  path: 'cart', component: CartComponent
},{
  path: '', component: HeaderComponent
},{
  path: 'blog', component: BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
