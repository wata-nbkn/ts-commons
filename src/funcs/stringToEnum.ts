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

export function stringToEnum<T extends string>(o: T[]): { [K in T]: K } {
  return o.reduce((ac, v) => {
    ac[v] = v;
    return ac;
  }, Object.create(null));
}
