import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-gestioncat',
  templateUrl: './gestioncat.component.html',
  styleUrls: ['./gestioncat.component.css']
})
export class GestioncatComponent implements OnInit {
categories;
nouvcat=new Categorie;
mode=false;
  constructor(private produitservService: ProduitservService,
    private route:Router) { }

  ngOnInit(): void {
    this.produitservService.listcat().subscribe(data=>{
      
      this.categories=data;
      
      
    })

  }
  onSubmit(form: NgForm) {
    console.log(JSON.stringify(this.nouvcat));

    this.produitservService.ajoutercat(this.nouvcat).subscribe((data: Categorie) => { 
     
      this.route.navigateByUrl('product');
 
      })
      
    }
    

    changemode(){
      this.mode=true;
    }

}
