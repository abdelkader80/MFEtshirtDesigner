import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdPersonaliseComponent } from './prod-personalise/prod-personalise.component';
import { FormsModule } from '@angular/forms';
import { ResearchmcComponent } from './researchmc/researchmc.component';
import { FooterComponent } from './footer/footer.component';
import { CreateproduitComponent } from './createproduit/createproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProdPersonaliseComponent,
    ResearchmcComponent,
    FooterComponent,
    CreateproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
