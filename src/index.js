import Application from './application/index';
import ServerPlugin from './plugins/server/';
import WatcherPlugin from './plugins/watcher/';
import PreCompilerPlugin from './plugins/precompiler/';
import ReloadPlugin from './plugins/reloader';

import {
    Event,
    util
} from './helper';

let ower;
class Ower {
    constructor(config) {
        const app = Application();
        const root = config.root;
        /**
         * __setConfig
         */
        app.setConfig(config);

        /**
         * 内置组件
         */
        app.use( new WatcherPlugin( Object.assign( config.watch, {
            root
        })));

        app.use( new ServerPlugin( Object.assign( config.server, {
            root
        })));

        app.use( new PreCompilerPlugin( {
            preCompilers: config.preCompilers,
            root
        })); /** main **/

        app.use( new ReloadPlugin( {
        })); /** reloader **/

        /**
         * __loadPlugins
         */
        app.use( config.plugins );

        /**
         * __ready
         */
        app.run();

        /** start server **/


        /** start server **/
    }
}

module.exports = function(config) {
    if (!ower) ower = new Ower(config);
    return ower;
}
