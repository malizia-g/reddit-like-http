import { Component, OnInit, HostBinding, Input } from '@angular/core'; //import Input
import { Article } from './article.model'; // <-- import this

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article: Article

  constructor() {}

  voteUp(): Boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
