import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#hrefToID', () => {
  test('Working', async () => {
    expect(api.hrefToID('https://rule34.org/index.php?page=post&s=view&id=3549003')).toBe(null);

    expect(api.hrefToID('https://rule34.xxx/index.php?page=post&s=view&id=3549003')).toBe(3549003);
    expect(api.hrefToID('/index.php?page=post&s=view&id=3549003')).toBe(3549003);
  }, 20000000);
});

describe('#isValidHref', () => {
  test('Working', async () => {
    expect(api.isValidHref('https://rule34.org/index.php?page=post&s=view&id=3549003')).toBe(false);

    expect(api.isValidHref('https://rule34.xxx/index.php?page=post&s=view&id=3549003')).toBe(true);
    expect(api.isValidHref('/index.php?page=post&s=view&id=3549003')).toBe(true);
  }, 20000000);
});
