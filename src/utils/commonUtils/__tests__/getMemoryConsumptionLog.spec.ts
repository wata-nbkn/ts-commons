import { getMemoryConsumptionLog } from '../getMemoryConsumptionLog';

describe('getMemoryConsumptionLog', () => {
  it('should return memory consumption log', () => {
    const result = getMemoryConsumptionLog();
    expect(result).toBeTruthy();
  });
});
