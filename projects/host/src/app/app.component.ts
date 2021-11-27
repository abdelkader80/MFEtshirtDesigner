import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from './model/Produit';
import { ProduitservService } from './Services/produitserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'host';
  produits:Produit;
  mode = 0;

  constructor(private produitservice: ProduitservService, private router: Router) { }

  ngOnInit(): void {
    
    
  }
  onGetproducts(event: any){
    this.mode=1;
    
    this.produitservice.RechercherParMC(event.target.value)
    .subscribe(data=>{
      console.log(data);
      this.produits=data;
    },err=>{
      console.log(err);
    })
  }
  getphotonom(id){
    return this.produitservice.host+'/app/photoProduct/'+id;

  }
  detailProduit(p:Produit){
    let url=btoa(p._links.produit.href);
    this.router.navigateByUrl("detailproduit/"+url);

  }
 
}
