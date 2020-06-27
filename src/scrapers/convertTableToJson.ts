export const convertTableToJson = (headers: string[], rows: string[][]) => {
  const jsonList: object[] = [];
  rows.forEach((cells) => {
    let json = {};
    cells.forEach((val, columnIndex) => {
      const head = headers[columnIndex] || `head_${columnIndex + 1}`;
      json = {
        ...json,
        [head]: val,
      };
    });
    jsonList.push(json);
  });
  return jsonList;
};
