import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];   // <-- component property
  data: Object;
  loading: boolean;
  oArt: Observable<Article[]>;
  postArt: Observable<Object>;
  tempArt: Article;
  num: number = 0;

  constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.articles = new Array<Article>();
    this.oArt = this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
    this.oArt.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
   // this.articles = data; //Se non ci fossero metodi, basterebbe fare così
    for(let element of data)
    {
       this.articles.push(new Article(element.title, element.body));
    }
  /*  data.forEach(element => {
      this.articles.push(new Article(element.title, element.body));
    });*/
  }

  makeCompactRequest(title: HTMLInputElement, link: HTMLInputElement): boolean {


    //mandi un apost al server
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    this.tempArt = new Article(title.value, link.value, this.num);
    this.loading = true;
    this.postArt = this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.tempArt));


    this.postArt.subscribe(data => {
      this.data = data;

      //console.log(data);
      this.loading = false;

      this.articles.push(this.tempArt);

    });

    return false;
  }

  /*
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }*/



}
