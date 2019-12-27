import { getID } from './parser';

describe('#getID', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => '/index.php?page=post&s=view&id=3548989' })) } as Cheerio;
    expect(getID($)).toBe(3548989);
  });
});
