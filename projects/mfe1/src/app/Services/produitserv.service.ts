import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'projects/host/src/app/model/categorie';
import { Produit } from 'projects/host/src/app/model/Produit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitservService {
   host="http://5.135.150.216:8081"

  constructor(private http:HttpClient) { }
  listcategories(){
    return this.http.get(this.host+'/categories');

  }
  detailsprod(id){
    return this.http.get(this.host+'/produits/'+id);
  }
  getproducts(c){
    return this.http.get(c._links.products.href);

  }
  ajouternouvprod(nouveauprod:Produit): Observable<Object>{
    console.log(nouveauprod);
    return this.http.post<Produit>(`${this.host}/app/addproduit`,nouveauprod);
  }
  listeproduit():Observable<Produit>{
    console.log("abdo");
    return this.http.get<Produit>(this.host+"/app/listproduit");

  }
  
  listcat():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.host+"/app/listcat")
  }
  supprimerprod(id: number): Observable<Object>{

    return this.http.delete(this.host+"/app/listproduit/"+id)
  }
  public Updateprod1(id: number): Observable<Produit> {
  
    return this.http.get<Produit>(this.host+"produits/"+id);
  }
  public Updateprod2(id: number, produit: Produit): Observable<Produit> {
    
    return this.http.put<Produit>("http://5.135.150.216:8090/employees/"+id, produit);
  }
  
  public UploadImage(file ,id){
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Produit>(this.host+'/app/uploadphoto/'+id, formData);
    
  }

}
