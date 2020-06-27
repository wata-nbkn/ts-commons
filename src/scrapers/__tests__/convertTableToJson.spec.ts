import { convertTableToJson } from '../convertTableToJson';

describe('convertTableToJson', () => {
  it('should return json', () => {
    const headers = ['head1', 'head2'];
    const rows = [
      ['val11', 'val12'],
      ['val21', 'val22'],
    ];
    const result: any = convertTableToJson(headers, rows);
    expect(result[0].head1).toEqual('val11');
    expect(result[0].head2).toEqual('val12');
    expect(result[1].head1).toEqual('val21');
    expect(result[1].head2).toEqual('val22');
  });

  it('should return json with no header', () => {
    const rows = [
      ['val11', 'val12'],
      ['val21', 'val22'],
    ];
    const result: any = convertTableToJson([], rows);
    expect(result[0].head_1).toEqual('val11');
    expect(result[0].head_2).toEqual('val12');
    expect(result[1].head_1).toEqual('val21');
    expect(result[1].head_2).toEqual('val22');
  });
});
