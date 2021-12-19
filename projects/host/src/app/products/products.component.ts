import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  produits:Produit;

  constructor(private produitservService: ProduitservService,
    private route:Router) { }

  ngOnInit(): void {
    
  }
  getproduct(){
    this.produitservService.listeproduit().subscribe(data=>{
      this.produits=data;
    })

  }
  deleteproduit(id: number){
    
    this.produitservService.supprimerprod(id).subscribe(data=>{
      alert('Element'+ id +'supprimé');
      this.getproduct();
    })
  }

}
