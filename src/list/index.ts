import API from '..';
import parse from './parser';

export default class ListAPI {
  constructor(private api: API) { }

  async home(page = 0) { return parse(await this.api.cheerio(`/index.php?page=post&s=list&tags=all&pid=${page * 42}`)); }
  async tag(tags: string, page = 0) { return parse(await this.api.cheerio(`/index.php?page=post&s=list&pid=${page * 42}&tags=${tags}`)); }
}

export * from './schema';
