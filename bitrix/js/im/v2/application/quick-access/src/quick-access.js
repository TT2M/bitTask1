import {Core} from 'im.v2.application.core';
import {QuickAccess} from 'im.v2.component.quick-access';
import {ApplicationName} from 'im.v2.const';

type QuickAccessApplicationParams = {
	node?: string | HTMLElement,
	preloadedList?: Object,
	loggerConfig?: Object,
}

export class QuickAccessApplication
{
	params: QuickAccessApplicationParams;
	inited: boolean = false;
	initPromise: Promise = null;
	initPromiseResolver: Function = null;
	rootNode: string | HTMLElement = null;
	vueInstance: Object = null;
	controller: Object = null;

	#applicationName = 'Sidebar';

	constructor(params: QuickAccessApplicationParams = {})
	{
		this.initPromise = new Promise((resolve) => {
			this.initPromiseResolver = resolve;
		});

		this.params = params;

		this.rootNode = this.params.node || document.createElement('div');

		this.initCore()
			.then(() => this.initComponent())
			.then(() => this.initComplete())
		;
	}

	initCore()
	{
		return new Promise((resolve) => {
			Core.ready().then(controller => {
				this.controller = controller;
				Core.setApplicationData(ApplicationName.quickAccess, this.params);
				resolve();
			});
		});
	}

	initComponent()
	{
		return this.controller.createVue(this, {
			name: this.#applicationName,
			el: this.rootNode,
			components: {QuickAccess},
			template: `<QuickAccess :compactMode="true"/>`,
		})
		.then(vue => {
			this.vueInstance = vue;

			return Promise.resolve();
		});
	}

	initComplete()
	{
		this.inited = true;
		this.initPromiseResolver(this);
	}

	ready()
	{
		if (this.inited)
		{
			return Promise.resolve(this);
		}

		return this.initPromise;
	}
}