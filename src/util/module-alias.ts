_
import * as path from 'path';
import module-alias from 'module-alias';

const files = path.resolve(_dirname,'../..');

moduleAlias.addAliases({
	'@src': path.join(files, 'src'),
	'@test': path.join(files, 'test')
});

