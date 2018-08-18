
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { User } from '../user';
import { Repos } from '../repos';


@Injectable({
  providedIn:'root'
})
export class ProfileService {
user:User;
repos:Repos;

constructor(private http:HttpClient) { 
this.user=new User('','','',0,'','','','','');
  }

getProfileInfo(username){
  interface ApiResponse{
    name:string;
    login:string;
    avatar_url:string;
    public_repos:number;
    followers:string;
    following:string;
    email:string;
    location:string;
    html_url:string;
    
}
const promise =new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).toPromise().then(response => {
      
      this.user.name=response.name;
      this.user.login=response.login;
      this.user.avatar_url=response.avatar_url;
      this.user.public_repos=response.public_repos;
      this.user.followers=response.followers;
      this.user.following=response.following;
      this.user.email=response.email;
      this.user.location=response.location;
      this.user.html_url=response.html_url;

      resolve()
    },

           
        
        )
    })

    return promise;
  
}
}