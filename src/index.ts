import fetch, { ResponseInit } from 'node-fetch';
import cheerio from 'cheerio';
import ListAPI from './list';
import PostAPI from './post';

export default class Rule34API {
  public readonly post = new PostAPI(this);
  public readonly list = new ListAPI(this);


  constructor(public readonly baseURL = 'https://rule34.xxx') {
    this.baseURL = baseURL.replace(/\/$/, '');
  }


  // Helper functions
  public async html(href: string, options?: ResponseInit) {
    return await (await fetch(this.baseURL + href, options)).text();
  }
  public async cheerio(href: string, options?: ResponseInit) {
    return cheerio.load(await this.html(href, options));
  }
}
