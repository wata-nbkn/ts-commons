import { getMoment } from '../getMoment';

describe('getMoment', () => {
  it('should return a moment object', () => {
    const date = getMoment('2011/10/10');
    expect(date.year()).toEqual(2011);
    expect(date.month()).toEqual(9);
    expect(date.date()).toEqual(10);
  });

  it('should return a moment object with a format', () => {
    let date = getMoment('11/10/10', 'YY/DD/MM');
    expect(date.year()).toEqual(2011);
    expect(date.month()).toEqual(9);
    expect(date.date()).toEqual(10);

    date = getMoment('11/10/10', 'DD/MM/YY');
    expect(date.year()).toEqual(2010);
    expect(date.month()).toEqual(9);
    expect(date.date()).toEqual(11);
  });
});
