import * as log4js from 'log4js';
import * as moment from 'moment';
import * as path from 'path';
import * as appRoot from 'app-root-path';
import { getRelativeDirPathFromRoot } from 'fileUtils';

type LOG_LEVEL = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE';

const DefaultConfig = {
  type: 'dateFile',
  maxLogSize: 1048576,
  backups: 3,
  pattern: '-yyyy-MM-dd',
};

export const getLogger = (filePath: string, level?: LOG_LEVEL) => {
  const logRoot = appRoot.resolve('logs');
  const dirNames = getRelativeDirPathFromRoot(filePath);
  const loggerName = path.basename(filePath, path.extname(filePath));

  const logFileName = moment().format('YYYYMMDD');
  const logFilePath = `${logRoot}/${dirNames}/${loggerName}/${logFileName}.log`;

  const config = {
    appenders: {
      [loggerName]: {
        ...DefaultConfig,
        filename: logFilePath,
      },
      console: {
        type: 'console',
      },
    },
    categories: {
      [loggerName]: {
        appenders: ['console', loggerName],
        level: level || 'INFO',
      },
      default: {
        appenders: ['console'],
        level: level || 'INFO',
      },
    },
  };

  try {
    log4js.configure(config);
  } catch (e) {
    console.log(e);
  }

  return log4js.getLogger(loggerName);
};
