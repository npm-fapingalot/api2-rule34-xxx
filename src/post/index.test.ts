import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#id', () => {
  test('Compatibility', async () => {
    const post = await api.id(3549003);

    expect(post).toBeDefined();
    expect(post).toHaveProperty('id', 3549003);
  }, 20000000);
});
