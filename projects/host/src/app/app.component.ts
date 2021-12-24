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
    this.produitservice.loadtoken();
    
    
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
  isAdmin(){
    return this.produitservice.isAdmin()
  }
  isUser(){
    return this.produitservice.isUser()
  }
  isAuthenticated(){
    //console.log(this.produitservice.isAuthenticated());
    return this.produitservice.isAuthenticated();
  }
  Logout(){
    this.produitservice.logout();
    this.router.navigateByUrl("/login");
  }
 
}
