import { IRouter } from 'ext-framework-server/interfaces';
import { Manifest } from 'ext-framework-server/models/Manifest';
import { Framework } from 'ext-framework-server';
import { IProfileService } from './interfaces';

export class Router implements IRouter {

	init(app: any, manifest: Manifest, auth?: any) {
		const server = <IProfileService>Framework.api.getPlugin(manifest.id);
		app.get('/user/v1/read/:id', server.getUser);
		app.post('/user/v1/search', server.searchUsers);
		app.post('/user/v1/add', server.setUser);
	}
}