import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user-class/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  user!: User

  constructor(private http:HttpClient) {
    this.user = new User('')
  }

  // function to handle the user input
  findingUser(githubSearch: any) {
    interface GithubUser {
      html_url: string,
    }

    let headers = new HttpHeaders({'Authorization': 'token' + environment.apiKey})
    let request = environment.baseUrl + githubSearch;
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
}
