import add from '@/lib';

describe('add', () => {
  it('returns the addition of 2 numbers', () => {
    const actual = add(1, 2);
    expect(actual).toEqual(3);
  });
});
