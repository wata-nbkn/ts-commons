import * as path from 'path';
import * as appRoot from 'app-root-path';

// filePath should be __filename
export const getRelativeDirPathFromRoot = (filePath: string) => {
  const projectRoot = appRoot.resolve('src');
  const dirname = path.dirname(filePath);
  console.log(dirname);
  return dirname.replace(projectRoot, '.');
};
