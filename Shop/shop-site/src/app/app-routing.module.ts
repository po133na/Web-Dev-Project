import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { SneakersDetailsComponent } from './sneakers-details/sneakers-details.component';
import { SneakersListComponent } from './sneakers-list/sneakers-list.component';


const routes: Routes = [
    {
        path: 'sneakers/', component: SneakersListComponent},
    {
        path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent},
    {
        path: 'sneakers/:id', component: SneakersDetailsComponent},
    {
        path: 'categories', component: CategoryComponent},
    {
        path: 'categories/:id', component: SneakersListComponent},
    {
        path: 'add', component: AddProductComponent},
    {
        path: 'categories/categoryId', component: SneakersListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{

}