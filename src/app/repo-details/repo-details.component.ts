import { Component, OnInit } from '@angular/core';
import { RepoDetailsService } from './repo-details.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  RepoDetails: any[] = [];
  totalRepoItems: number = 0;
  page: number = 1;
  perPage: number = 100;
  constructor(private repoDetailsService: RepoDetailsService) {}
  ngOnInit() {
    this.fetchRepoDetails();
    console.log(this.fetchRepoDetails());
  }

  fetchRepoDetails() {
    this.repoDetailsService.getRepoDetails(this.page).subscribe((res: any) => {
      if(res!==undefined){
        this.RepoDetails = res;
        this.fetchAllRepoDetails();
      }
    });
  }

  fetchAllRepoDetails(){
    this.repoDetailsService.fetchallRepoDetails().subscribe((res:any) => {
      this.totalRepoItems = res.length;
    });
  }

  renderPage(event: number) {
    this.page = event;
    this.fetchRepoDetails();
    console.log(event);
  }

}
