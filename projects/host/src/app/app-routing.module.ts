import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdPersonaliseComponent } from './prod-personalise/prod-personalise.component';
import { ProductsComponent } from './products/products.component';
import { ResearchmcComponent } from './researchmc/researchmc.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'prodpers',
    component: ProdPersonaliseComponent
  },
  {
    path: 'product',
    component:ProductsComponent
  },
  {
    path: 'researchmc',
    component:ResearchmcComponent
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('mfe2/CarouselModule').then((m) => {
        return m.CarouselModule;
      }),
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
