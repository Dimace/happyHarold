import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
const fs = require('fs-extra');
// Just return the tree
export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.addTask(new NodePackageInstallTask());
    fs.copySync('../../harold-assets', '../../../../src/assets');
   /* _context.logger.info('tree root dir ' + tree.root.path as string);
    tree.getDir('node_modules/happy-harold/harold-assets').visit(filePath => {
      const content = tree.read(filePath);
      try {
        tree.overwrite('src/assets/', content as Buffer);
      } catch (e) {
        _context.logger.error('ERROR' + ' ' + e);
      }
    });*/
    _context.logger.info('harold is coming');
    return tree;
  };
}
