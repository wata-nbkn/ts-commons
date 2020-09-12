/*!
 * BEGIN_COPYRIGHT
 *
 * Copyright (c) 2020 wata-nbkn. All rights reserved.
 * https://github.com/wata-nbkn
 *
 * This source code or any portion is not published
 * so that it must not be reproduced or used
 * in any manner whatsoever.
 *
 * END_COPYRIGHT
 */

import { Logger } from 'log4js';
import { getLogger as createLogger } from './getLogger';

export class LogUtil {
  private static _instances: {
    [loggerName: string]: Logger;
  };

  // singleton
  public static getLogger(loggerName: string) {
    if (!this._instances || !this._instances[loggerName]) {
      this._instances = {
        ...(this._instances || {}),
        [loggerName]: createLogger(loggerName),
      };
    }
    return this._instances[loggerName];
  }
}

export default LogUtil;
