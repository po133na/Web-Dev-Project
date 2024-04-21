import { SneakersDetailsComponent } from "./sneakers-details/sneakers-details.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from "./category/category.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { SneakersListComponent } from "./sneakers-list/sneakers-list.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
        SneakersDetailsComponent,
        TopBarComponent,
        HomeComponent,
        CategoryComponent,
        AddProductComponent,
        SneakersListComponent,
        AppComponent,
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    providers:[

    ],
    bootstrap:[AppComponent],
})
export class AppModule { }