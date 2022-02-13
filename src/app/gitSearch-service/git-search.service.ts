import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user-class/user';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  user!: User

  constructor(private http:HttpClient) {
    this.user = new User('')
  }
}
