import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Categorie } from '../model/categorie';
import { Produit } from '../model/Produit';
import { ProduitservService } from '../Services/produitserv.service';

@Component({
  selector: 'app-createproduit',
  templateUrl: './createproduit.component.html',
  styleUrls: ['./createproduit.component.css']
})
export class CreateproduitComponent implements OnInit {

  public nouvprod = new Produit();
  produit: Produit;
  userFile;
  imageURL: any;
  message;
  imagePath;
  cat: Categorie[];


  constructor(private prodserv: ProduitservService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.prodserv.listcat().subscribe(data => {
      this.cat = data;
      console.log(data);
    })
  }
  getproduct() {
    this.prodserv.listeproduit().subscribe(data => {
      this.produit = data;
    })

  }
  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported. "
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageURL = reader.result;
      }

    }

  }
  onSubmit(form: NgForm) {
    console.log(JSON.stringify(this.nouvprod));

    this.prodserv.ajouternouvprod(this.nouvprod).subscribe((data: Produit) => { 
      console.log('contenu du data'+JSON.stringify(data) );
      console.log(this.userFile);

      this.prodserv.UploadImage(this.userFile, data.id).subscribe(data=>{
       

      });
      this.route.navigate(['product']);

      

    })

    /*console.log(this.nouvemp);*/
  }
  setphotonom(id){
    return environment.host+'/app/uploadphoto/'+id;

  }
}
