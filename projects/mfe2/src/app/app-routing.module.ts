import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent, pathMatch: 'full',
  },
  {
    path: 'mfe2',
    loadChildren: () =>
    import("./carousel/carousel.module").then((m) => m.CarouselModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
