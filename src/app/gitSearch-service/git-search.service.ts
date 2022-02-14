import { Repository } from 'src/app/repository-class/repository';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user-class/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  user!: User
  repository!:Repository

  constructor(private http:HttpClient) {
    this.user = new User('', 0, '', '')
    this.repository =new Repository('')
  }

  // function to handle the user input
  findingUser(githubSearch: any) {
    interface GithubUser {
      html_url: string,
      public_repos: number,
      avatar_url: string, 
      login: string,
      apiKey?: Boolean,
      baseUrl?: Boolean
  }

    let headers = new HttpHeaders({'Authorization': 'token' + environment.api_Key})
    let request = environment.base_Url + githubSearch;
    let params = {headers: headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubUser>(request, params).toPromise().then((response: any) =>{
        this.user = response;
        resolve(resolve);
        console.log(this.user)
      },
      (error: any) => {
        reject();
        console.log(error)
      }
    );
    });

    return promise;
  }

  //search repositories
    findRepos(githubSearch: any) {
      interface GithubRepo {
        html_url: string,
      }
  
      let headers = new HttpHeaders({'Authorization': 'token' + environment.api_Key})
      let request = environment.base_Url + githubSearch  + '/repos';
      let params = {headers: headers}
      let promise = new Promise((resolve, reject) => {
        this.http.get<GithubRepo>(request, params).toPromise().then((response: any) =>{
          this.repository = response;
          resolve(resolve);
        },
        (error: any) => {
          reject();
          console.log(error)
        }
      );
      });
  
      return promise;
    }
}
