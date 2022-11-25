import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RepoDetailsService {

    private token = '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';
    private url = 'https://api.github.com/user/repos';
    constructor(private httpClient: HttpClient) {}
    getRepoDetails(page: number) {
        console.log(page+" in service file");
        const header = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
        return this.httpClient.get(this.url + '?page=' + page + '&per_page=' + 10, {headers:header} );
    }

    fetchallRepoDetails(){
        const header = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
        return this.httpClient.get(this.url, {headers:header} );
    }
}