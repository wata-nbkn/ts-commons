import { withInRange } from '../withInRange';

describe('withInRange', () => {
  it('should detect in range', () => {
    const result = withInRange({ targetDate: '20/11/11', fromDate: '20/11/10', toDate: '20/11/12' });
    expect(result).toBeTruthy();
  });

  it('should detect in range if same date with fromDate', () => {
    const result = withInRange({ targetDate: '20/11/10', fromDate: '20/11/10', toDate: '20/11/12' });
    expect(result).toBeTruthy();
  });

  it('should detect in range if same date with toDate', () => {
    const result = withInRange({ targetDate: '20/11/12', fromDate: '20/11/10', toDate: '20/11/12' });
    expect(result).toBeTruthy();
  });

  it('should detect in range with over year', () => {
    const result = withInRange({ targetDate: '20/11/11', fromDate: '19/11/10', toDate: '21/11/10' });
    expect(result).toBeTruthy();
  });

  it('should detect in range with format', () => {
    const result = withInRange({
      targetDate: '20/01/11',
      fromDate: '20/11/10',
      toDate: '20/11/12',
      dateformat: 'DD/MM/YY',
    });
    expect(result).toBeTruthy();
  });

  it('should detect out of range', () => {
    const result = withInRange({ targetDate: '20/11/13', fromDate: '20/11/10', toDate: '20/11/12' });
    expect(result).toBeFalsy();
  });

  it('should detect out of range with format', () => {
    const result = withInRange({
      targetDate: '20/11/15',
      fromDate: '20/11/01',
      toDate: '20/12/01',
      dateformat: 'DD/MM/YY',
    });
    expect(result).toBeFalsy();
  });
});
