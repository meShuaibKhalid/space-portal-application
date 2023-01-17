import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {

    constructor(private httpService: HttpService) { }


    public getArticles(): any {
        return this.httpService.getData(`${env.baseURL}${env.articles}`);
    }

    public getArticleById(id: string): any {
        return this.httpService.getData(`${env.baseURL}${env.articles}/${id}`);
    }
    
}
