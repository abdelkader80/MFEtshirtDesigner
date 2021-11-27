import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
