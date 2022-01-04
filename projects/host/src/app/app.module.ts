import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProdPersonaliseComponent } from './prod-personalise/prod-personalise.component';
import { FormsModule } from '@angular/forms';
import { ResearchmcComponent } from './researchmc/researchmc.component';
import { FooterComponent } from './footer/footer.component';
import { CreateproduitComponent } from './createproduit/createproduit.component';
import { LoginComponent } from './login/login.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';
import { GestioncatComponent } from './gestioncat/gestioncat.component';
import { GestcatComponent } from './gestcat/gestcat.component';
//import { JwtInterceptor } from './Services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProdPersonaliseComponent,
    ResearchmcComponent,
    FooterComponent,
    CreateproduitComponent,
    LoginComponent,
    GestionusersComponent,
    GestioncatComponent,
    GestcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  //  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
