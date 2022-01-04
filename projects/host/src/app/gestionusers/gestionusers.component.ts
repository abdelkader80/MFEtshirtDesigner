import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-gestionusers',
  templateUrl: './gestionusers.component.html',
  styleUrls: ['./gestionusers.component.css']
})
export class GestionusersComponent implements OnInit {
 users;
 
  constructor(private produitservService: ProduitservService,
    private route:Router) { }

  ngOnInit(): void {
    this.produitservService.listusers().subscribe(data=>{
      
      this.users=data;
      
      
    })

  }
  
  
  

}
