/*
---
description: Show images in true full screen using Flash

license: MIT-style

authors:
- Michal Charemza

requires:
- core/Swiff
- core/Element.Dimensions

provides: [FullScreenImage]

...
*/

var FullScreenImage = new Class({
	
	Implements: [Options, Events],
	
	options: {
		swf: 'FullScreenImage.swf'
	},
	
	initialize: function(button, options) {
		this.setOptions(options);
		this.button = button;
		this.loaded = false;
		if (Browser.Plugins.Flash.version >= 9) this.load();
	},
	
	load: function() {
		this.fireEvent('loading');
		var coords = this.button.getCoordinates();
		
		this.swf = new Swiff(this.options.swf, {
			height: coords.height,
			width: coords.width,
			params: {
				allowFullScreen: true
			},
			callBacks: {
				onSWFLoad: this.onSWFLoad.bind(this)
			},
			style: 'position: absolute'
		});
		this.button.setStyle('position', 'relative');
		var wrapper = new Element('div', {
			styles: {
				position: 'absolute',
				top: 0,
				left: 0,
				height: coords.height,
				width: coords.width
			},
		});
		this.button.grab(wrapper.grab(this.swf));
	},
	
	onSWFLoad: function() {
		this.loaded = true;
		this.fireEvent('load');
	},
	
	show: function(src) {
		if (this.loaded) this.swf.remote("show", src);
	}
	
});