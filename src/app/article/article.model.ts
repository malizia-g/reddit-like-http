export class Article {
  title: string;
  body: string;
  votes: number; //Uso voti al posto di id

  constructor(title: string, body: string, votes?: number) {
    this.title = title;
    this.body = body;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {// e.g. http://foo.com/path/to/bar
     const domainAndPath: string = this.body.split('//')[1]; // e.g. foo.com/path/to/bar
     return domainAndPath.split('/')[0];
    }
    catch (err) {
      return null;
    }
  }

}
