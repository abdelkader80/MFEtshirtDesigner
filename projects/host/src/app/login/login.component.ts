import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private prodserv: ProduitservService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(data){
    this.prodserv.login(data).subscribe(resp=>{
      console.log("resp.body");
    //  let mesroles=resp.body['mesroles'];
      console.log(resp.body['tokenjwt']);
      let jwt=resp.body['tokenjwt'];
      this.prodserv.saveTokenandRoles(jwt);
      this.router.navigateByUrl("/");

    },err=>{

    })

  }
  isAdmin(){
    return this.prodserv.isAdmin()
  }
  isUser(){
    return this.prodserv.isUser()
  }

}
