import { flattenJson } from '../flattenJson';

describe('flattenJson', () => {
  it('should flatten json', () => {
    const result = flattenJson({
      a: '100',
      b: [200, 201],
      c: {
        d: 300,
        e: [400, 4001],
      },
      f: {
        g: 500,
        e: '500',
      },
      h: null,
      i: undefined,
    });
    expect(result).toEqual({
      a: '100',
      b: [200, 201],
      d: 300,
      g: 500,
      e: '500',
      h: null,
      i: undefined,
    });
  });

  it('should flatten nested json', () => {
    const result = flattenJson({
      a: '100',
      b: 200,
      c: {
        d: [300, 301],
        e: 400,
        f: {
          g: null,
          h: {
            i: 600,
            j: 700,
            k: {
              l: 800,
            },
          },
        },
      },
      m: {
        n: 100,
        o: {
          p: 200,
        },
      },
    });
    expect(result).toEqual({
      a: '100',
      b: 200,
      d: [300, 301],
      e: 400,
      g: null,
      i: 600,
      j: 700,
      l: 800,
      n: 100,
      p: 200,
    });
  });
});
