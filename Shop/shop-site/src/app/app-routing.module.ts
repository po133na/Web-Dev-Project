import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { SneakersDetailsComponent } from './sneakers-details/sneakers-details.component';
import { SneakersListComponent } from './sneakers-list/sneakers-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
    {
        path: 'sneakers',
        component: SneakersListComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sneakers/:id',
        component: SneakersDetailsComponent
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
];

export class AppRoutingModule{
    
}