import Freemarker from 'freemarker.js';

class RenderUtil {
	constructor(settings) {
		this.freemarker = new Freemarker(Object.assign({
			viewRoot: settings.viewRoot,
			options: {
                // sourceEncoding: 'utf-8'
			}
		}, settings));
	}

	parse(p1, dataModel) {
		return new Promise((resolve) => {
			this.freemarker.render(p1, dataModel, function (err, data, out) {
				resolve({ err, data, out });
			});
		});
	}
}
export default RenderUtil;