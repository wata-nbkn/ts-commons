export const parseTableRows = ($: CheerioStatic, table: Cheerio) => {
  const rows: string[][] = [];

  const trs = table.find('tr');
  trs.each((trIndex, tr) => {
    const cells: string[] = [];

    const pushCell = (v: CheerioElement) => {
      const value = $(v).text().trim();
      cells.push(value);
    };

    $(tr)
      .find('th')
      .each((tdIndex, td) => pushCell(td));

    $(tr)
      .find('td')
      .each((tdIndex, td) => pushCell(td));

    if (cells.length) {
      rows.push(cells);
    }
  });

  return rows;
};
