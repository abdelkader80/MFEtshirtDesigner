import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorie } from '../model/categorie';
import { Produit } from '../model/Produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitservService {
  public host="http://127.0.0.1:8080"

  constructor(private http:HttpClient) { }
  listeproduit():Observable<Produit>{
    console.log("abdo");
    return this.http.get<Produit>(this.host+"/app/listproduit");

  }
  public RechercherParMC(MC: String): Observable<Produit> {
  
    return this.http.get<Produit>(this.host+"/produits/search/rechercheparmotcle?mc="+MC);
  }
  listcat():Observable<categorie[]>{
    return this.http.get<categorie[]>(this.host+"/app/listcat")
  }
  ajouternouvprod(nouveauprod:Produit): Observable<Object>{
    console.log(nouveauprod);
    return this.http.post<Produit>(`${this.host}/app/addproduit`,nouveauprod);
  }
  public UploadImage(file ,id){
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Produit>(this.host+'/app/uploadphoto/'+id, formData);
    
  }
  supprimerprod(id: number): Observable<Object>{

    return this.http.delete(this.host+"/app/listproduit/"+id)
  }
}
