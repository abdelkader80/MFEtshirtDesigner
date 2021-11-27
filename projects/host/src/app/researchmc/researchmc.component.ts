import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-researchmc',
  templateUrl: './researchmc.component.html',
  styleUrls: ['./researchmc.component.css']
})
export class ResearchmcComponent implements OnInit {
  produits:Produit;

  constructor(private produitservice: ProduitservService) { }

  ngOnInit(): void {
    
    
  }
 


}
