import { GitSearchService } from './../../gitSearch-service/git-search.service';
import { User } from './../../user-class/user';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository-class/repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  user!:User
  repository!:Repository | any

  constructor(private service:GitSearchService) { 
    this.repository = new Repository('')
  }
  findingUser(user:any){
    this.service.findingUser(user).then((success)=>{
      this.user = this.service.user
    })
    this.service.findRepos(user).then((success)=>{
      this.repository = this.service.repository
    })
  }
  

  ngOnInit(): void {
    this.findingUser('Samuel-Muriuki')

  }

}
