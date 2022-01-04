import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
import { Produit } from '../model/Produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitservService {
  public host="http://127.0.0.1:8080"
  jwt:string
  username:string
  mesroles:string;
  name:String;

  constructor(private http:HttpClient) { }
  listeproduit():Observable<Produit>{
    console.log("abdo");
    let headers=new HttpHeaders({'authorization':'Bearer '+this.jwt});
    return this.http.get<Produit>(this.host+"/app/listproduit",{headers:headers});

  }
  listusers():Observable<Produit>{
    console.log("service users");
    let headers=new HttpHeaders({'authorization': 'Bearer '+this.jwt});
    return this.http.get<Produit>(this.host+"/listusers",{headers:headers});
    

  }
  public RechercherParMC(MC: String): Observable<Produit> {
  
    return this.http.get<Produit>(this.host+"/produits/search/rechercheparmotcle?mc="+MC);
  }
  listcat():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.host+"/app/listcat")
  }
  ajouternouvprod(nouveauprod:Produit): Observable<Object>{
    console.log(nouveauprod);
    let headers=new HttpHeaders({'authorization': 'Bearer '+this.jwt});
    return this.http.post<Produit>(`${this.host}/app/addproduit`,nouveauprod,{headers:headers});
  }
  ajoutercat(nouvcat:Categorie): Observable<Object>{
    console.log(nouvcat);
    return this.http.post<Categorie>(`${this.host}/app/addcat`,nouvcat);
  }
  public UploadImage(file ,id){
    const formData = new FormData();
    formData.append('file', file, file.name);
    let headers=new HttpHeaders({'authorization': 'Bearer '+this.jwt});
    return this.http.post<Produit>(this.host+'/app/uploadphoto/'+id, formData, {headers:headers});
    
  }
  supprimerprod(id: number): Observable<Object>{
    let headers=new HttpHeaders({'authorization': 'Bearer '+this.jwt});

    return this.http.delete(this.host+"/app/listproduit/"+id,{headers:headers})
  }
  // -------------------------Authentification
  login(data){
    

    return this.http.post("http://localhost:8080/authenticate",data,{observe:'response'});
  }
  saveTokenandRoles(jwt){
  //
    this.jwt=jwt;
    this.parseJWT();
    //console.log(jwt);
    //console.log(mesroles);
    localStorage.setItem('token',jwt);
    console.log(this.mesroles);
    localStorage.setItem('role',this.mesroles);
    
  }
  parseJWT(){
    
    if(this.jwt){
      let jwtHelper=new JwtHelperService();
      let jwtobj=jwtHelper.decodeToken(this.jwt);
      this.username=jwtobj.sub;
      this.mesroles=jwtobj.roles;

    //  console.log(this.username);  
      localStorage.getItem('role')
    }
   
  }
  isAdmin(){
    if(this.mesroles)
    return this.mesroles.indexOf('Administrateur')>=0;
    else return false;
    
  
  }
  isUser(){
    if(this.mesroles)
    return this.mesroles.indexOf('user')>=0;
    else return false;
  }
  isAuthenticated(){
    return (this.isAdmin() || this.isUser())
  }
  loadtoken(){
    
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
    this.mesroles=localStorage.getItem('role');

  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.username=undefined;
    this.jwt=undefined;
    this.mesroles=undefined;
  }
 
}
