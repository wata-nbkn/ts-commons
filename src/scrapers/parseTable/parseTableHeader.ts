import { CommonUtil } from 'utils';

export const parseTableHeader = ($: CheerioStatic, table: Cheerio) => {
  const logger = CommonUtil.getLogger(__filename);
  logger.debug('Enter [parseTableHeader]');

  const headers: string[] = [];

  const push = (v: CheerioElement) => {
    const value = $(v).text().trim();
    headers.push(value);
  };

  const pushHeads = (elem: CheerioElement, useTdAsHead = true) => {
    const ths = $(elem).find('th');
    if (ths && ths.length) {
      logger.trace('<th> is found');
      ths.each((i, th) => push(th));
    } else if (useTdAsHead) {
      logger.trace('<th> is not found so use <td> as head');
      const tds = $(elem).find('td');
      tds.each((i, td) => push(td));
    }
  };

  const thead = table.find('thead').find('tr');
  if (thead && thead[0]) {
    logger.trace('<thead> is found');
    pushHeads(thead[0], true);
  } else {
    logger.trace('<thead> is not found so parse the first <tr>');
    const trs = table.find('tr');
    if (trs && trs[0]) {
      pushHeads(trs[0], false);
    }
  }

  logger.debug('Exit [parseTableHeader]');
  return headers;
};
