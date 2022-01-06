import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'projects/host/src/environments/environment';
import { Produit } from '../model/Produit';
import { ProduitservService } from '../Services/produitserv.service';


@Component({
  selector: 'app-mfefeature',
  templateUrl: './mfefeature.component.html',
  styleUrls: ['./mfefeature.component.css']
})
export class MfefeatureComponent implements OnInit {

  public cat;
  public produits;
  public currentcat;
  currentProduct;
  mode = true;
  constructor(private produitservice: ProduitservService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produitservice.listcategories()
      .subscribe(data => {
        this.cat = data;


      }, err => {
        console.log(err);
      })
  }
  onGetproducts(c) {
    this.currentcat = c;
    this.produitservice.getproducts(c)
      .subscribe(data => {
        console.log(data);
        this.produits = data;
      }, err => {
        console.log(err);
      })
  }
  getphotonom(id) {
    return this.produitservice.host + '/app/photoProduct/' + id;

  }
  detailProduit(id) {
    this.mode = false;
    return this.produitservice.detailsprod(id)
      .subscribe(data => {
        this.currentProduct = data;
      }, err => {
        console.log(err);
      })
  }

}


