(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,230);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whiteShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiteShape, new cjs.Rectangle(-364,-45,728,90), null);


(lib.whitelogosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white-logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAWQgJgKAAgMQAAgIAEgHQAIgPASABQAOAAAIAIQAJAKAAALQAAAMgJAKQgIAIgOABQgLgBgKgIgAgQgSQgIAJAAAJQAAAJAHAIQAIAIAJAAQAKAAAIgHQAHgHAAgLQAAgKgHgHQgIgIgKAAQgLABgFAGgAAHAQIgGgOIgDAAIAAAOIgIAAIAAghIALAAQAOAAAAAKQAAAHgHABIAIAPgAgDgCIADAAQAHAAAAgFQAAgFgHAAIgDAAg");
	this.shape.setTransform(101.7,64.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjEgnQCkgzDaA9QAGABAFADQhlAjhaA1g");
	this.shape_1.setTransform(22.7,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjFgZIAogLQDGgzCbAtIABABIjJBpQhWgzhrgmg");
	this.shape_2.setTransform(65.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmZArQA9giBNgZQCdgzCfAHQB9AIB/ArQA3ATA6AeQiugyjsBIQjshHitA0g");
	this.shape_3.setTransform(43.9,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXCgQgaAAgPgFQgNgEgTgPQgSgRgEgQQgFgOAAgfIAAjZIBKAAIAADeQAAANAHALQAHAJAIACQAEACAPAAIAAgCICEAAIAAA+g");
	this.shape_4.setTransform(84.9,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhICbQghgOgWgXQgXgZgMgeQgGgRgDgKQgDgNAAgRQAAgjAOggQAPggAXgXQAXgYAggNQAggOAjAAQAjAAAgAOQAMAFAUANIAAgRIBJAAIADE+IhKAAIAAigQAAgTgIgTQgHgSgOgOQgNgNgTgIQgTgIgUAAQgTAAgTAIQgSAGgPAPQgNANgHATQgIAVAAARIAAAGIABAFQAJA3AvARQAYAIAVgDQAQAAATgHIAKgFIAABPQgXAHgaAAQgpAAgfgNg");
	this.shape_5.setTransform(17.5,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3CUQgdgOgQgSQgUgUgNgaQgKgYgBggIAAisIBKAAIAACsQABAPAFAMQAIAOAIAIQAIAIAOAHQAMAFAPAAQAOAAANgFQAOgHAJgIQAHgIAHgOQAHgMgBgPIAAisIBJAAIAACsQABAagMAeQgNAcgRASQgWAVgZALQgYALggAAQgcAAgbgLg");
	this.shape_6.setTransform(53.7,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.9,67.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F05B26").s().p("AgTAUIAAgmIAnAAIAAAmg");
	this.shape.setTransform(190.1,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F05B26").s().p("AgcBBQgLgCgLgEIADggQAJAFAKACQAJACALAAQAIAAAFgCQAEgDAAgFQABgFgIgEIgSgGIgQgGQgHgEgEgDQgEgEgDgFQgCgGAAgGQAAgKAFgIQADgIAIgFQAHgFAMgEQALgDANAAIATACIATAGIgEAdQgJgEgIgDQgJgCgIgBQgHAAgFADQgDAEAAAEQgBAGAIACIASAHQAJACAHADQAGAEAFAEQAEADADAGQACAGAAAJQAAAJgFAJQgDAHgIAGQgHAFgLADQgLAEgNAAQgMAAgLgCg");
	this.shape_1.setTransform(180.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F05B26").s().p("AgsBBIAAh9IAmAAIAAAYQADgHADgFQAFgGAFgDQAEgDAFgCQAHgCAGAAIANACIgCAlQgGgCgIAAQgIAAgFACQgGADgEAFQgEAFgCAHQgBAGAAAKIAAA2g");
	this.shape_2.setTransform(169.6,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F05B26").s().p("AgWA9IgMgFQgGgDgEgFQgGgEgDgGQgDgFgDgHQgDgIgCgTQAAgOAFgNQAFgLAIgJQAJgJAMgEQAMgEAOgBQAPABANAEQALAEAIAJQAJAJAEANQAEANAAAPIAAALIhYAAQACAGACAFQADAEAEAEQAFADAGACQAFACAJAAQAJAAAKgDQALgDALgFIAAAfQgKADgMADQgMACgLAAQgVgCgKgEgAAbgMIgDgLQgCgGgDgDQgEgDgEgCQgFgCgEAAQgEAAgFACQgEACgDADQgEADgCAGIgDALIAyAAIAAAAg");
	this.shape_3.setTransform(156.3,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05B26").s().p("AgXA/Igwh9IAvAAIAZBWIAbhWIArAAIguB9g");
	this.shape_4.setTransform(141.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F05B26").s().p("AgVBcIAAi3IArAAIAAC3g");
	this.shape_5.setTransform(130.7,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F05B26").s().p("AgdA+IgNgGIgLgHQgEgEgDgGIgGgLQgEgIgCgUQABgJAFgSIAGgLQADgFAEgEIALgIIANgGQAIgDAVgBQALAAAUAEIAMAGIAKAIQAFAEADAFIAHALQAEASAAAJQgCAUgCAIIgHALQgDAGgFAEIgKAHIgMAGQgUAEgLAAQgVgBgIgDgAgKggQgFACgEAFQgEAFgBAGQgDAHAAAHQAAAIADAHQABAGAEAFQAEAFAFACQAFADAFAAQAGAAAFgDQAFgCAEgFQAEgEABgHQACgHAAgIQAAgHgCgHQgBgHgEgEQgEgFgFgDQgFgCgGAAQgFAAgFADg");
	this.shape_6.setTransform(118.7,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F05B26").s().p("AgcBBQgLgCgLgEIADggQAJAFAKACQAKACAKAAQAIAAAFgCQAEgDABgFQAAgFgIgEIgSgGIgQgGQgGgEgEgDQgFgEgDgFQgBgGAAgGQAAgKADgIQAEgIAIgFQAHgFAMgEQAKgDAOAAIATACIAUAGIgFAdQgJgEgJgDQgIgCgIgBQgHAAgFADQgDAEAAAEQAAAGAGACIATAHQAJACAGADQAIAEAEAEQAEADACAGQACAGABAJQgBAJgEAJQgDAHgHAGQgIAFgLADQgLAEgNAAQgMAAgLgCg");
	this.shape_7.setTransform(104.6,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F05B26").s().p("AggAQIAAgfIBBAAIAAAfg");
	this.shape_8.setTransform(94.2,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F05B26").s().p("ABABBIAAhBIgBgMQgBgGgDgDQgCgDgEgCQgEgCgFAAQgFAAgEADQgEACgDAEQgDAEgCAGQgBAHAAAGIAAA9IgqAAIAAhBIgCgMQgBgGgCgDQgDgDgDgCQgEgCgFAAQgFAAgEADQgFACgDAEQgDAEgBAGQgCAHAAAGIAAA9IgrAAIAAh9IAnAAIAAAWQADgGAFgFIAKgIIAMgFIANgBQAIAAAGABIALAFIAJAIQAEAGADAGIAIgMQAFgEAGgEIAMgFIANgBQALAAAJADQAIAEAGAGQAGAIADAKQADAKAAAOIAABJg");
	this.shape_9.setTransform(77.9,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F05B26").s().p("AgVA9IgNgFQgGgDgFgFQgFgEgDgGQgEgFgCgHQgDgIgCgTQAAgOAFgNQAFgLAIgJQAIgJANgEQAMgEAOgBQAQABAMAEQALAEAJAJQAIAJAEANQAEANAAAPIAAALIhXAAQAAAGADAFQADAEAEAEQAFADAGACQAFACAJAAQAJAAAKgDQALgDALgFIAAAfQgLADgLADQgLACgNAAQgUgCgJgEgAAbgMIgDgLQgCgGgEgDQgDgDgEgCQgEgCgFAAQgFAAgEACQgEACgDADQgEADgCAGIgDALIAyAAIAAAAg");
	this.shape_10.setTransform(58.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F05B26").s().p("AgVBcIAAi3IArAAIAAC3g");
	this.shape_11.setTransform(47.2,-2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F05B26").s().p("AAABbQgGgCgGgDQgFgEgFgFQgFgFgEgGIAAAZIgmAAIAAi3IArAAIAABLQAHgKALgFQAJgGANAAQANAAALAFQAKAEAHAJQAHAIAEAMQAEALAAAPQAAAPgEAMQgEANgHAIQgIAJgKAFQgLAFgMAAQgHAAgHgCgAgJgEQgGADgDADQgEAEgCAHQgCAGAAAIQAAAIACAGQACAGAEAFQADAEAFACQAFADAFAAQAGAAAFgDQAEgCAEgEQAEgEABgGQACgGAAgIQAAgIgCgHQgCgGgDgFQgDgDgFgDQgFgCgFAAQgFAAgFACg");
	this.shape_12.setTransform(35.3,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F05B26").s().p("AgeA+IgMgGIgKgHQgFgEgDgGIgHgLQgCgIgCgUQAAgJAEgSIAHgLQADgFAFgEIAKgIIAMgGQAJgDAVgBQALAAAUAEIAMAGIAKAIQAFAEADAFIAGALQAFASABAJQgCAUgEAIIgGALQgDAGgFAEIgKAHIgMAGQgUAEgLAAQgUgBgKgDgAgKggQgFACgEAFQgDAFgCAGQgCAHAAAHQAAAIACAHQACAGADAFQAEAFAFACQAFADAFAAQAGAAAFgDQAFgCAEgFQAEgEABgHQACgHAAgIQAAgHgCgHQgBgHgEgEQgEgFgFgDQgFgCgGAAQgFAAgFADg");
	this.shape_13.setTransform(18.6,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F05B26").s().p("AgsBBIAAh9IAmAAIAAAYQAEgHACgFQAEgGAFgDQAFgDAFgCQAHgCAGAAIANACIgCAlQgGgCgIAAQgIAAgFACQgGADgEAFQgEAFgCAHQgBAGAAAKIAAA2g");
	this.shape_14.setTransform(5.9,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F05B26").s().p("AhFBaIAAiwIAmAAIAAAYQAEgGAFgFQAFgGAFgDIAMgFQAGgCAIAAQAMAAALAEQAKAFAIAJQAHAIAEAMQAEANAAAPQAAAPgEALQgEAMgIAJQgHAJgLAFQgKAFgMAAQgNAAgJgGQgLgFgHgKIAABEgAgKg2QgFACgEAEQgDAFgCAGQgCAGAAAIQAAAIACAGQACAHADADQADAEAFADQAFACAGAAQAFAAAFgCQAFgDADgEQAEgEACgGQACgHAAgIQAAgHgCgHQgCgGgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_15.setTransform(-8.3,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F05B26").s().p("AgXBdIAAhdIgaAAIAAggIAaAAIAAgMQABgMADgIQADgKAGgGQAGgGAIgDQAKgDAMAAQANAAALACIgDAeQgFgCgGgBQgJABgDAFQgFAGAAAMIAAAHIAeAAIAAAgIgeAAIAABdg");
	this.shape_16.setTransform(-29.6,-2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F05B26").s().p("AgdA+IgNgGIgLgHQgEgEgEgGIgGgLQgDgIgBgUQAAgJAEgSIAGgLQAEgFAEgEIALgIIANgGQAIgDAVgBQALAAATAEIANAGIAKAIQAFAEAEAFIAFALQAGASgBAJQgBAUgEAIIgFALQgEAGgFAEIgKAHIgNAGQgTAEgLAAQgVgBgIgDgAgKggQgFACgEAFQgEAFgCAGQgBAHAAAHQAAAIABAHQACAGAEAFQAEAFAFACQAFADAFAAQAGAAAFgDQAFgCADgFQAEgEACgHQACgHAAgIQAAgHgCgHQgCgHgEgEQgDgFgFgDQgFgCgGAAQgFAAgFADg");
	this.shape_17.setTransform(-43.2,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F05B26").s().p("Ag/BXIAEggQAHADAHAAQAJAAAGgFQAGgEAFgJIg0iBIAuAAIAbBYIAbhYIArAAIgxB6IgLAYQgFAKgFAGQgIAIgKAFQgKAEgNAAQgKAAgOgDg");
	this.shape_18.setTransform(-66,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F05B26").s().p("AAXBBIAAhBIgBgMQgCgFgCgEQgDgEgEgBQgEgCgFAAQgFAAgEACQgFACgDAEQgDAFgCAGQgCAGAAAHIAAA9IgrAAIAAh9IAnAAIAAAWIAIgLQAGgFAFgDQAGgDAGgCQAGgCAHAAQAMAAAJAEQAJADAGAIQAGAHADAKQADAKAAAOIAABJg");
	this.shape_19.setTransform(-81.5,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F05B26").s().p("AglA+QgIgCgFgGQgGgEgDgIQgCgHAAgKQAAgKADgIQAFgHAIgEQAJgFAMgDQANgCAQAAIARAAIAAgDQAAgEgCgFQgCgEgEgCQgEgDgGgBQgFgBgHgBQgHABgKACQgKADgKAEIgBgcQALgFAMgCQAMgCAOAAQAPAAALAEQAMAEAHAIQAIAIADAMQAEALAAARIAABBIgmAAIgBgUIgJAKQgEAEgGACQgFADgGABIgOACQgJgBgIgDgAgMAKQgEADgCADQgDAEAAAEQAAAHAFADQAFAFAHAAQAFAAAEgDQAGgBADgEQAEgDACgGQACgFAAgHIAAgEIgIAAQgTACgHACg");
	this.shape_20.setTransform(-97.4,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F05B26").s().p("AhFBaIAAiwIAmAAIAAAYQAEgGAFgFQAFgGAFgDIAMgFQAGgCAIAAQAMAAALAEQAKAFAIAJQAHAIAEAMQAEANAAAPQAAAPgEALQgEAMgIAJQgHAJgLAFQgKAFgMAAQgNAAgJgGQgLgFgHgKIAABEgAgKg2QgFACgEAEQgDAFgCAGQgCAGAAAIQAAAIACAGQACAHADADQADAEAFADQAFACAGAAQAFAAAFgCQAFgDADgEQAEgEACgGQACgHAAgIQAAgHgCgHQgCgGgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_21.setTransform(-112.6,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F05B26").s().p("ABABBIAAhBIgBgMQgBgGgDgDQgCgDgEgCQgEgCgFAAQgFAAgEADQgEACgDAEQgDAEgCAGQgBAHAAAGIAAA9IgqAAIAAhBIgCgMQgBgGgCgDQgDgDgDgCQgEgCgFAAQgFAAgEADQgFACgDAEQgDAEgBAGQgCAHAAAGIAAA9IgrAAIAAh9IAnAAIAAAWQADgGAFgFIAKgIIAMgFIANgBQAIAAAGABIALAFIAJAIQAEAGADAGIAIgMQAFgEAGgEIAMgFIANgBQALAAAJADQAIAEAGAGQAGAIADAKQADAKAAAOIAABJg");
	this.shape_22.setTransform(-133.4,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F05B26").s().p("AgeA+IgMgGIgKgHQgFgEgDgGIgHgLQgCgIgDgUQABgJAEgSIAHgLQADgFAFgEIAKgIIAMgGQAJgDAVgBQALAAAUAEIAMAGIAKAIQAFAEADAFIAGALQAFASABAJQgDAUgDAIIgGALQgDAGgFAEIgKAHIgMAGQgUAEgLAAQgVgBgJgDgAgKggQgFACgEAFQgDAFgCAGQgCAHgBAHQABAIACAHQACAGADAFQAEAFAFACQAFADAFAAQAGAAAFgDQAFgCAEgFQAEgEABgHQACgHAAgIQAAgHgCgHQgBgHgEgEQgEgFgFgDQgFgCgGAAQgFAAgFADg");
	this.shape_23.setTransform(-153.9,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F05B26").s().p("AgNA9QgMgEgJgJQgKgIgEgNQgEgIgBgTQAAgJAEgSIAGgLIAJgKIAKgHIAMgFQAJgEAVgCQAQAAATAIIgDAfIgNgFIgMgCQgIAAgGADQgHACgEAFQgEAEgCAHQgDAGAAAHQAAAHADAHQACAGAEAFQAFAFAHACQAHADAIAAQAHAAAHgCQAGgCAGgEIABAhQgIADgKACQgKABgMABQgSgCgJgEg");
	this.shape_24.setTransform(-168.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F05B26").s().p("AArBVIgMgkIhAAAIgNAkIgtAAIBBipIA1AAIBBCpgAAUARIgUg/IgWA/IAqAAg");
	this.shape_25.setTransform(-190.8,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.5,-13.7,403.1,27.5);


(lib.ReplayButtonsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ReplayButton.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjUGaQglgLglgWIA9iEQArAZAkAAQAYAAAOgJQAOgKAMgXIj+qJIDDAAICSG4ICNm4IC/AAIj5KWQgTAygUAhQgUAjgZAWQgXAUgfAKQggALgqAAQgvAAgpgMg");
	this.shape.setTransform(464.1,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AihFAQgogNgegZQgfgagQgkQgSgmAAguIAAgDQAAg0ATgoQASgmAjgZQAigZAxgNQAvgMA6AAQBBAABcAaIAAgLQAAgcgJgWQgIgWgSgPQgRgQgagIQgagHghAAQgyAAgsAJQgkAIgxASIguiMQA7gaA0gMQA/gOBMAAQBKAAA4ATQA1ASAkAkQAjAjASA1QAQAzAABDIAAF2IixAAIAAhGQgjAoguATQgxAXhAAAQgvAAgogNgAhVA7QgiAXAAAsIAAACQAAAlAcAUQAbAVAtAAQAfAAAbgIQAagIATgQQATgPAKgUQAKgVAAgZIAAghQgzgXhBAAQg7AAghAWg");
	this.shape_1.setTransform(393,70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhbG4IAAtvIC3AAIAANvg");
	this.shape_2.setTransform(340.7,58.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AlTGqIAAtHIC4AAIAABdQAlgxAtgaQAagPAdgHQAdgIAiAAQA6AAA0AWQA1AWApAqQArAsAXA9QAYBZABA2IAAADIgHBMIgSBCQgWA9grAsQgpAqg1AWQg0AWg7AAQgiAAgfgIQgdgHgZgOQgrgXgmgsIAAEVgAg9kAQgcAMgWAYQgWAYgMAgQgNAiAAAnIAAADQAAAnANAiQAMAfAWAYQAWAYAcANQAcAMAgAAQAfAAAdgMQAdgNAVgXQAXgYAMggQANghAAgoIAAgDQAAgngNgiQgMgggXgYQgVgYgdgMQgdgNgfAAQggAAgcANg");
	this.shape_3.setTransform(283.2,79.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhxE4Qg9gYgugsQgugtgZg9IgThAIgGhIIAAgCQAAhDAXg/QAXg8ArgvQArgvA6gZIA+gUQAhgHAiAAQAnAAAkAIQAiAHAfAOQAdAOAZAUQAYATAUAZQAmAvAUBBQASA+AABFIgCAxInBAAQAHAeAOAZQAOAXAUAQQAUAQAaAIQAaAJAeAAQAuAAAlgQQAkgQAmgjIBpBdQgXAcgbAWQgcAXghAPQghAQgmAIQgnAIgsAAQhcgIgpgQgACLgzQgEgegLgaQgLgagRgRQgSgTgXgJQgYgKgcAAQgbgBgYAKQgYAKgRASQgSASgMAaQgMAYgFAgIETAAIAAAAg");
	this.shape_4.setTransform(203.9,70.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AjCFJIAAqGIC3AAIAACDQAOgjASgZQAUgcAYgSQAZgUAggJQAhgJAoACIAAC/IgKAAQguAAgkAOQgkAOgaAdQgaAcgNAqQgNArAAA6IAADug");
	this.shape_5.setTransform(146.2,69.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ai1kEIGkGVIndBzg");
	this.shape_6.setTransform(23.9,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("Al0GJQhahRgthuIDMheQAtB3B0A0QB0AzB2gsQB2gtA0h0QA0h0gth2Qgth2h0g0Qhzg0h2AtQhIAcgyA6IikiYQCSijDbgLQDagMChCTQCjCRAMDbQALDaiSCiQiSCjjbAMIgfAAQjHAAiWiHg");
	this.shape_7.setTransform(55.7,68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,502.6,124.7);


(lib.redShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D84126").s().p("A0NHCIAAuDMAobAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redShape, new cjs.Rectangle(-129.4,-45,258.9,90), null);


(lib.frame2_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(150.6,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAFgIIAEgGQAEgDAEgCIAIgBIAHAAIAAAQIgIgBQgFABgEABQgFADgCAEQgDAEgBAFQgDAGAAAGIAAAug");
	this.shape_1.setTransform(145.5,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAtQgEgCgFgDIgFgJQgCgFAAgGQAAgHADgGQACgFAHgDQAFgEAJgCQAJgCALAAIALAAIAAgCQAAgFgBgEIgFgHQgDgDgDgCQgFgBgEAAQgGAAgGACIgNAFIAAgNQAGgEAIgBQAHgCAIAAQAIAAAHADQAGACAEAFQAEAEADAHQACAIAAAJIAAA2IgQAAIAAgPIgFAHIgHAFIgJADIgIABQgHAAgGgCgAgCACIgKAEQgDACgCAEQgCADgBAEQAAAHAFAFQAFAEAHAAQAFAAAEgCQAFgCADgDQAEgEACgFQABgFAAgGIAAgHIgKAAIgNABg");
	this.shape_2.setTransform(136.6,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQADAJAAAKIAAAGIg/AAQABAHACAGQACAGAEAEQAFADAFADQAFACAHAAQAHAAAFgCQAHgCAGgDIAAAOIgOAEIgPABQgIAAgJgDgAAZgGIgDgMQgCgFgCgEQgDgEgFgBQgEgCgEAAQgEAAgFACQgEACgEADQgCAEgCAFIgEAMIAwAAIAAAAg");
	this.shape_3.setTransform(127.7,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA+IAAhtIgjAAIAAgPIBXAAIAAAPIgjAAIAABtg");
	this.shape_4.setTransform(118.3,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA+QgHgDgFgFQgGgEgDgGQgDgIAAgHQAAgGACgGQACgEADgFQADgEAFgEQAGgDAHgDQgJgIgDgHQgEgHAAgIQAAgFACgFQADgGAFgDQAEgFAGgCQAGgBAJAAQAHAAAFABQAGACAEAEQAFADACAGQACAEAAAHQAAAFgCAEQgBAFgDAEIgJAJIgNAHIAdAeQAFgGACgJQADgJABgJIAPAAQgCAQgCAHQgHAOgFAHIAWAXIgVAAIgMgMQgPAPgWgBQgJABgIgDgAgbAIIgGAGIgEAHIgBAHQAAAFACAEQABAFAEADQAEAEAEABQAFACAGAAQAIAAAGgDQAGgDAGgHIggglIgJAGgAgWguQgFAFAAAGQAAAGAEAGIAKAMQALgGAEgGQAGgFAAgHQAAgHgFgEQgEgFgIAAQgIAAgFAFg");
	this.shape_5.setTransform(102.8,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAEgIIAGgGQADgDAEgCIAIgBIAHAAIgBAQIgGgBQgGABgEABQgFADgCAEQgDAEgCAFQgCAGAAAGIAAAug");
	this.shape_6.setTransform(88.5,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgEgDIgGgJQgCgFAAgGQAAgHAEgGQACgFAHgDQAFgEAJgCQAJgCAKAAIAMAAIAAgCQAAgFgBgEIgFgHQgCgDgFgCQgEgBgEAAQgGAAgGACIgOAFIAAgNQAIgEAHgBQAIgCAHAAQAIAAAGADQAHACAEAFQAEAEACAHQACAIABAJIAAA2IgPAAIAAgPIgHAHIgHAFIgIADIgJABQgGAAgGgCgAgCACIgKAEQgEACgCAEQgCADAAAEQABAHAEAFQAEAEAIAAQAEAAAFgCQAEgCAEgDQADgEADgFQABgFAAgGIAAgHIgKAAIgNABg");
	this.shape_7.setTransform(79.6,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGADAIQACAJAAAKIAAAGIg+AAQAAAHACAGQADAGAEAEQADADAGADQAFACAHAAQAGAAAHgCQAFgCAHgDIAAAOIgNAEIgQABQgJAAgIgDgAAYgGIgBgMQgCgFgEgEQgDgEgDgBQgFgCgEAAQgFAAgEACQgEACgDADQgDAEgDAFIgCAMIAuAAIAAAAg");
	this.shape_8.setTransform(70.7,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcA+IgbhkIgBgPIgBAPIgaBkIgWAAIgih8IASAAIAaBjIABAQQABgJABgGIAahkIAWAAIAZBkIADAPIABgOIAahlIARAAIgiB8g");
	this.shape_9.setTransform(57.4,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAEgIIAGgGQADgDAEgCIAIgBIAHAAIgBAQIgGgBQgGABgFABQgEADgCAEQgDAEgCAFQgBAGAAAGIAAAug");
	this.shape_10.setTransform(41.2,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAsQgIgDgGgGQgFgGgDgJQgEgJAAgLQAAgKAEgJQADgIAFgHQAGgGAIgDQAJgDAJAAQAKAAAJADQAIADAGAGQAGAHADAIQADAJAAAKQAAALgDAJQgDAJgGAGQgGAGgIADQgJADgKAAQgJAAgJgDgAgKgfQgFACgDAFQgEAEgCAHQgCAGAAAHQAAAIACAGQACAGAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQADgFACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(32,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBEIAAhMIgTAAIAAgOIATAAIAAgNQAAgJACgFQABgGAEgEQADgEAFgCQAFgCAIAAIAKACIAAANQgGgCgDAAQgHAAgDAFQgEAEAAAKIAAANIAVAAIAAAOIgVAAIAABMg");
	this.shape_12.setTransform(23.7,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWAuIAAgyIgBgMQgBgFgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAFgBAFQgCAHAAAGIAAAuIgRAAIAAhZIAPAAIAAARQADgFADgEIAHgGIAJgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAHAAAKIAAA1g");
	this.shape_13.setTransform(10,21.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAsQgIgDgGgGQgFgGgDgJQgEgJAAgLQAAgKAEgJQADgIAFgHQAGgGAIgDQAJgDAJAAQAKAAAJADQAIADAGAGQAGAHADAIQADAJAAAKQAAALgDAJQgDAJgGAGQgGAGgIADQgJADgKAAQgJAAgJgDgAgKgfQgFACgDAFQgEAEgCAHQgCAGAAAHQAAAIACAGQACAGAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQADgFACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_14.setTransform(-0.6,22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBCIAAhaIARAAIAABagAgHgwIAAgRIAPAAIAAARg");
	this.shape_15.setTransform(-8.1,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAtQgHgBgFgCIAAgOQAGADAHABIALACQAIAAAEgEQAFgDAAgGQAAgGgEgDIgLgHIgLgFIgIgGQgDgDgBgEQgCgEAAgEQAAgGACgEQACgEAFgDQAEgEAGgBQAGgCAHAAQAHAAAPADIAAAOIgLgEIgMgBQgGAAgEADQgEACAAAFQAAAFAEADQAEADAIAFIALAFIAIAFIAFAIQABAEAAAEQAAAGgCAFQgDAFgEAEQgFADgHACQgHACgHAAIgMgBg");
	this.shape_16.setTransform(-14.1,22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAsQgGgDgEgFQgEgEgCgHQgCgHAAgKIAAg1IARAAIAAAxQAAAHABAFQABAGADADQACADAEACQAEACAFAAQAFAAAEgDQAFgCADgEQADgFABgGQACgHAAgIIAAgqIARAAIAABaIgQAAIAAgSQgCAFgDAEQgDADgEACQgEADgFABIgJABQgHAAgGgCg");
	this.shape_17.setTransform(-23.3,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBDIAAiFIAQAAIAACFg");
	this.shape_18.setTransform(-30.7,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHArQgIgDgHgHQgFgFgEgJQgDgJAAgKQAAgJADgJQAEgIAGgGQAGgHAJgCQAHgEALAAIAMABIALADIgBAOIgJgEIgLAAQgHAAgGABQgEADgEAFQgEAEgDAFQgCAGAAAHQAAAHACAGQACAGAEAEQAEAEAFADQAGADAGgBIALgBIALgEIAAAPIgMADIgMABQgKAAgIgDg");
	this.shape_19.setTransform(-37,22.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWAtIgWglIgWAlIgTAAIAgguIgcgrIAUAAIASAgIAUggIASAAIgcAqIAfAvg");
	this.shape_20.setTransform(-45.4,22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiA+IAAh8IBDAAIAAAOIgxAAIAAAoIAuAAIAAANIguAAIAAArIAzAAIAAAOg");
	this.shape_21.setTransform(-54.2,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAsQgIgDgGgGQgFgGgDgJQgEgJAAgLQAAgKAEgJQADgIAFgHQAGgGAIgDQAJgDAJAAQAKAAAJADQAIADAGAGQAGAHADAIQADAJAAAKQAAALgDAJQgDAJgGAGQgGAGgIADQgJADgKAAQgJAAgJgDgAgKgfQgFACgDAFQgEAEgCAHQgCAGAAAHQAAAIACAGQACAGAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQADgFACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_22.setTransform(-69.7,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbA+Ig2hhIgGgRIACAYIAABaIgQAAIAAh8IAWAAIA2BhIAGARQgDgOAAgJIAAhbIAQAAIAAB8g");
	this.shape_23.setTransform(-81.2,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWBDIAAgzIgBgMQgBgEgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAEgBAFQgCAHAAAHIAAAuIgRAAIAAiFIARAAIAAA6IAFgHIAHgFIAIgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAGAAAKIAAA2g");
	this.shape_24.setTransform(-97.9,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AADA6QgEgBgDgFQgDgDgBgGQgCgGAAgHIAAgwIgSAAIAAgNIATAAIAAgWIAPgGIAAAcIAWAAIAAANIgWAAIAAAuQAAAKADAEQADAFAHAAQAEAAAFgCIABANIgOACQgHAAgFgCg");
	this.shape_25.setTransform(-106.6,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIBCIAAhaIARAAIAABagAgHgwIAAgRIAPAAIAAARg");
	this.shape_26.setTransform(-112.1,20);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWAtIgVhGIgBgLIgBALIgVBGIgTAAIgdhZIASAAIATBDIACAMIABgLIAVhEIAUAAIAUBDIABAMIACgLIAVhEIAQAAIgeBZg");
	this.shape_27.setTransform(-121.5,22);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAtQgHgBgFgCIAAgOQAGADAHABIALACQAIAAAEgEQAFgDAAgGQAAgGgEgDIgLgHIgLgFIgIgGQgDgDgBgEQgCgEAAgEQAAgGACgEQACgEAFgDQAEgEAGgBQAGgCAHAAQAHAAAPADIAAAOIgLgEIgMgBQgGAAgEADQgEACAAAFQAAAFAEADQAEADAIAFIALAFIAIAFIAFAIQABAEAAAEQAAAGgCAFQgDAFgEAEQgFADgHACQgHACgHAAIgMgBg");
	this.shape_28.setTransform(-137.7,22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADA6QgEgBgDgFQgDgDgBgGQgCgGAAgHIAAgwIgSAAIAAgNIATAAIAAgWIAPgGIAAAcIAWAAIAAANIgWAAIAAAuQAAAKADAEQADAFAHAAQAEAAAFgCIABANIgOACQgHAAgFgCg");
	this.shape_29.setTransform(-144.9,20.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHArQgJgDgFgHQgHgFgCgJQgEgJAAgKQAAgJAEgJQADgIAGgGQAGgHAJgCQAIgEALAAIALABIALADIgCAOIgJgEIgKAAQgGAAgGABQgFADgFAFQgEAEgCAFQgCAGAAAHQAAAHACAGQACAGAEAEQAEAEAFADQAFADAIgBIAKgBIAKgEIABAPIgMADIgMABQgKAAgIgDg");
	this.shape_30.setTransform(-152.2,22.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAtQgEgCgFgDIgFgJQgDgFAAgGQAAgHAEgGQACgFAHgDQAFgEAJgCQAJgCALAAIALAAIAAgCQAAgFgBgEIgFgHQgCgDgFgCQgEgBgEAAQgGAAgGACIgNAFIAAgNQAGgEAIgBQAHgCAIAAQAIAAAHADQAGACAEAFQAEAEACAHQADAIAAAJIAAA2IgQAAIAAgPIgGAHIgGAFIgJADIgIABQgHAAgGgCgAgCACIgKAEQgDACgDAEQgCADAAAEQABAHAEAFQAFAEAHAAQAEAAAFgCQAEgCAEgDQAEgEACgFQABgFAAgGIAAgHIgKAAIgNABg");
	this.shape_31.setTransform(-161.5,22);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAEgIIAGgGQADgDAEgCIAIgBIAHAAIgBAQIgGgBQgGABgFABQgEADgCAEQgDAEgCAFQgBAGAAAGIAAAug");
	this.shape_32.setTransform(-168.5,22);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AADA6QgEgBgDgFQgDgDgBgGQgCgGAAgHIAAgwIgSAAIAAgNIATAAIAAgWIAPgGIAAAcIAWAAIAAANIgWAAIAAAuQAAAKADAEQADAFAHAAQAEAAAFgCIABANIgOACQgHAAgFgCg");
	this.shape_33.setTransform(-175.7,20.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWAuIAAgyIgBgMQgBgFgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAFgBAFQgCAHAAAGIAAAuIgRAAIAAhZIAPAAIAAARQADgFADgEIAHgGIAJgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAHAAAKIAAA1g");
	this.shape_34.setTransform(-184.2,21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAsQgIgDgGgGQgFgGgDgJQgEgJAAgLQAAgKAEgJQADgIAFgHQAGgGAIgDQAJgDAJAAQAKAAAJADQAIADAGAGQAGAHADAIQADAJAAAKQAAALgDAJQgDAJgGAGQgGAGgIADQgJADgKAAQgJAAgJgDgAgKgfQgFACgDAFQgEAEgCAHQgCAGAAAHQAAAIACAGQACAGAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDAEgEQADgFACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_35.setTransform(-194.8,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AADA9IgLgDQgHgCgFgDIgKgHIgHgJQgDgFgDgGIgDgMIgBgNIABgNIADgNIAHgLQADgFAEgEIAKgHIALgGIAMgDIAPgBIAQABQAHABAGADIgBAPIgMgEQgIgCgIAAQgOABgFACQgJAEgHAGQgGAGgDAJQgDANAAAHQABAOACAGQADAJAGAGQAHAGAJAEQAFACAOABQAPAAANgFIAAAPIgNAEIgQABQgHAAgIgCg");
	this.shape_36.setTransform(-205.3,20.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGADAIQACAJAAAKIAAAGIg+AAQAAAHACAGQADAGAEAEQADADAGADQAFACAHAAQAGAAAHgCQAFgCAHgDIAAAOIgNAEIgQABQgJAAgIgDgAAYgGIgBgMQgCgFgEgEQgDgEgDgBQgFgCgEAAQgFAAgEACQgEACgDADQgDAEgDAFIgCAMIAuAAIAAAAg");
	this.shape_37.setTransform(99.9,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHArQgJgEgFgFQgHgHgCgIQgEgJAAgKQAAgJAEgJQADgIAGgHQAGgFAJgEQAIgDALAAIALABIALACIgBAPIgJgDIgLgCQgGABgHACQgEACgFAEQgEAFgCAGQgCAFAAAHQAAAHACAGQACAGAEAFQAEAEAFACQAFADAIAAIAKgCIALgEIAAAPIgLADIgNABQgLAAgHgDg");
	this.shape_38.setTransform(91.1,1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgIBCIAAhaIAQAAIAABagAgHgwIAAgRIAPAAIAAARg");
	this.shape_39.setTransform(84.5,-0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAtIgfhZIASAAIAWBKIAZhKIAQAAIggBZg");
	this.shape_40.setTransform(78.1,1.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAFgJIAEgGQAEgDAEgBIAIgBIAHABIAAAQIgHgBQgGAAgEACQgFABgCAEQgDAFgCAGQgCAFAAAGIAAAug");
	this.shape_41.setTransform(71.2,1.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQADAJAAAKIAAAGIg+AAQAAAHACAGQADAGAEAEQAEADAFADQAFACAHAAQAGAAAHgCQAGgCAGgDIAAAOIgOAEIgOABQgJAAgJgDgAAZgGIgCgMQgDgFgDgEQgCgEgFgBQgDgCgGAAQgEAAgEACQgEACgDADQgEAEgBAFIgDAMIAvAAIAAAAg");
	this.shape_42.setTransform(62.8,1.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVA+IgPgEIACgRQAHAEAIACQAHACAHAAQAFAAAEgBQAEgCAEgCQADgCACgEQACgDAAgEQgBgFgCgEQgCgEgEgEIgYgOQgFgCgEgEIgHgIQgDgDAAgFIgCgJQAAgGACgGQADgHAGgDQAFgFAHgCQAJgCAIAAIAOABIANADIgCAPIgMgEQgGgBgHgBIgJABQgFABgDADQgCACgCADQgCADABAEQgBADACADIAEAFQAFAFALAGIAOAJQAHADADAEQAFAFACAFQACAFAAAGQAAAIgDAGQgDAIgGAEQgFAFgIACQgIAEgIAAIgRgCg");
	this.shape_43.setTransform(53.4,0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGADAIQACAJAAAKIAAAGIg/AAQABAHACAGQACAGAEAEQAFADAFADQAFACAHAAQAHAAAFgCQAHgCAGgDIAAAOIgNAEIgQABQgIAAgJgDgAAZgGIgDgMQgCgFgCgEQgDgEgFgBQgEgCgFAAQgDAAgFACQgEACgEADQgCAEgCAFIgEAMIAwAAIAAAAg");
	this.shape_44.setTransform(39,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_45.setTransform(32,-0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHArQgJgEgGgFQgFgHgDgIQgEgJAAgKQAAgJAEgJQADgIAGgHQAGgFAJgEQAIgDALAAIALABIALACIgCAPIgJgDIgKgCQgHABgFACQgGACgDAEQgEAFgDAGQgCAFAAAHQAAAHACAGQACAGAEAFQAEAEAFACQAGADAHAAIAKgCIAKgEIABAPIgMADIgMABQgLAAgHgDg");
	this.shape_46.setTransform(25.7,1.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHBCIAAhaIAQAAIAABagAgHgwIAAgRIAPAAIAAARg");
	this.shape_47.setTransform(19.1,-0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAWBDIAAgzIgBgMQgBgEgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAEgBAFQgCAHAAAHIAAAuIgRAAIAAiFIARAAIAAA6IAFgHIAHgFIAIgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAGAAAKIAAA2g");
	this.shape_48.setTransform(11.7,-0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAFgGAIgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQADAJAAAKIAAAGIg/AAQABAHACAGQACAGAEAEQAFADAFADQAFACAHAAQAHAAAFgCQAHgCAGgDIAAAOIgOAEIgOABQgJAAgJgDgAAZgGIgCgMQgDgFgDgEQgCgEgFgBQgDgCgGAAQgDAAgFACQgEACgEADQgCAEgCAFIgEAMIAwAAIAAAAg");
	this.shape_49.setTransform(1.9,1.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKA/Igth8IATAAIAkBrIAmhrIASAAIguB8g");
	this.shape_50.setTransform(-8.5,0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHApIgIgCIgHgEIgHgGIgFgGIgEgHIgCgIIgBgIIABgHIACgIIAEgIIAGgGIAGgFIAHgEIAIgDIAHAAIAIAAIAIADIAIAEIAGAFIAFAGIAEAIQACADAAAFIABAHIgBAJIgCAHIgEAHIgFAGIgHAGIgHAEIgIACIgIABIgHgBgAgGgjIgHACIgGADIgFAFIgFAFIgEAHIgCAHIgBAGIABAHIACAGIAEAHIAEAGIAGAEIAGADIAHADIAGABIAHgBIAHgDIAGgDIAGgEIAEgGIAEgGIACgGIABgHIgBgHIgCgHIgDgHIgFgFIgGgFIgGgDIgHgCIgHAAIgGAAgAALAXIgKgVIgIAAIAAAVIgJAAIAAgvIARAAIAJABIAGACIAEAFQABACAAADQAAAGgDADQgDACgFABIALAWgAgHgCIAHAAQAGAAADgCQADgBAAgEQAAgFgDgCQgDgCgGAAIgHAAg");
	this.shape_51.setTransform(-24.3,-2.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAFgGAIgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQADAJAAAKIAAAGIg+AAQAAAHACAGQADAGAEAEQAEADAFADQAFACAHAAQAGAAAGgCQAHgCAGgDIAAAOIgOAEIgOABQgJAAgJgDgAAZgGIgCgMQgCgFgEgEQgCgEgFgBQgDgCgGAAQgEAAgEACQgEACgEADQgDAEgBAFIgDAMIAvAAIAAAAg");
	this.shape_52.setTransform(-33.6,1.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgSBBIgOgFIABgPIAOAGIAMABQAHAAAGgCQAGgCAEgEQAEgEACgHQACgGAAgIIAAgKQgDAEgDADIgHAGIgIADIgIACQgJAAgHgEQgGgDgFgGQgGgGgCgIQgDgIAAgKQAAgLADgJQACgIAFgGQAGgHAGgDQAHgDAJAAIAJABIAIAEIAHAFIAGAIIAAgQIAPAAIAABPQAAANgDAJQgDAJgFAHQgGAGgIADQgJADgKAAQgIAAgIgBgAgJgyQgEACgEAFQgDAEgCAGQgBAGAAAIQAAAHABAHQACAFADAEQAEAEAEADQAFACAEAAQAFAAAFgCQAEgDAEgEQADgEACgFQACgGAAgIQAAgIgCgFQgCgHgDgEQgDgEgFgDQgFgCgFAAQgFAAgEACg");
	this.shape_53.setTransform(-44,3.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgUAtQgFgCgEgDIgGgJQgCgFAAgGQAAgHAEgGQACgFAHgDQAFgEAJgCQAJgCAKAAIAMAAIAAgCQAAgFgBgEIgFgHQgCgDgFgCQgEgBgEAAQgGAAgGACIgOAFIAAgNQAIgEAHgBQAIgCAHAAQAIAAAGADQAHACAEAFQAEAEACAHQACAIABAJIAAA2IgPAAIAAgPIgHAHIgHAFIgIADIgJABQgGAAgGgCgAgCACIgKAEQgEACgCAEQgCADAAAEQABAHAEAFQAEAEAIAAQAEAAAFgCQAEgCAEgDQADgEADgFQABgFAAgGIAAgHIgKAAIgNABg");
	this.shape_54.setTransform(-54.1,1.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAFgGAIgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGADAIQACAJAAAKIAAAGIg+AAQAAAHACAGQADAGAEAEQADADAGADQAFACAHAAQAGAAAHgCQAFgCAHgDIAAAOIgNAEIgQABQgJAAgIgDgAAYgGIgCgMQgBgFgEgEQgDgEgDgBQgFgCgEAAQgFAAgEACQgEACgDADQgDAEgDAFIgCAMIAuAAIAAAAg");
	this.shape_55.setTransform(-63,1.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgIBDIAAiFIAQAAIAACFg");
	this.shape_56.setTransform(-70,-0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIBCIAAhaIAQAAIAABagAgHgwIAAgRIAPAAIAAARg");
	this.shape_57.setTransform(-74.5,-0.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAyA/IAAhhIACgUIgGARIgnBkIgPAAIgnhmQgCgEgCgKIABATIAABhIgQAAIAAh8IAbAAIAlBfQACAIAAAIQABgMACgEIAmhfIAaAAIAAB8g");
	this.shape_58.setTransform(-85,0.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgkBAIABgOIAIABQAGAAAFgFQAFgFAEgMIgihdIASAAIAXBKIAZhKIARAAIgkBjIgGANQgCAGgEAEQgEADgEACQgFACgGAAIgLgBg");
	this.shape_59.setTransform(-102.5,3.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAWAuIAAgyIgBgMQgBgFgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAFgBAFQgCAHAAAGIAAAuIgRAAIAAhZIAPAAIAAARQADgFADgEIAHgGIAJgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAHAAAKIAAA1g");
	this.shape_60.setTransform(-112.1,1.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AApA/IgMghIg6AAIgMAhIgSAAIAyh8IAUAAIAxB8gAAYAQIgYg+IgYA+IAwAAg");
	this.shape_61.setTransform(-123.3,0.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgWAHIAAgNIAsAAIAAANg");
	this.shape_62.setTransform(-134.3,1.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAuIAAhaIAPAAIAAATIAFgJIAEgGQAEgDAEgBIAIgBIAHABIAAAQIgIgBQgFAAgFACQgEABgCAEQgDAFgBAGQgCAFgBAGIAAAug");
	this.shape_63.setTransform(-141.9,1.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTAtQgGgCgDgDIgGgJQgCgFAAgGQAAgHACgGQAEgFAFgDQAGgEAJgCQAJgCALAAIALAAIAAgCQAAgFgCgEIgDgHQgEgDgDgCQgFgBgEAAQgGAAgGACIgNAFIAAgNQAGgEAIgBQAIgCAHAAQAIAAAHADQAGACAEAFQAEAEADAHQABAIAAAJIAAA2IgPAAIAAgPIgFAHIgHAFIgJADIgIABQgHAAgFgCgAgCACIgKAEQgEACgBAEQgCADAAAEQgBAHAFAFQAEAEAIAAQAEAAAFgCQAEgCAEgDQADgEACgFQACgFAAgGIAAgHIgLAAIgMABg");
	this.shape_64.setTransform(-150.9,1.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNAsQgIgDgGgGQgGgHgDgJQgDgJAAgKQAAgKADgJQADgIAGgHQAGgGAHgDQAIgDAIAAQAJAAAHADQAHADAFAFQAFAGACAIQADAJAAAKIAAAGIg/AAQABAHACAGQACAGAEAEQAEADAGADQAFACAHAAQAHAAAFgCQAHgCAGgDIAAAOIgOAEIgPABQgIAAgJgDgAAZgGIgDgMQgCgFgCgEQgEgEgEgBQgEgCgFAAQgDAAgFACQgEACgEADQgCAEgCAFIgEAMIAwAAIAAAAg");
	this.shape_65.setTransform(-159.8,1.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIA/IAAg0IguhIIAVAAIAhA7IAkg7IATAAIguBIIAAA0g");
	this.shape_66.setTransform(-169.8,0.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkBAIABgOIAIABQAHAAAEgFQAFgFAEgMIgihdIASAAIAXBKIAZhKIARAAIgkBjIgGANQgCAGgDAEQgFADgEACQgFACgGAAIgLgBg");
	this.shape_67.setTransform(-184.2,3.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAWAuIAAgyIgBgMQgBgFgDgDIgGgFQgEgCgFAAQgEAAgFACQgEACgEAEQgDAFgBAFQgCAHAAAGIAAAuIgRAAIAAhZIAPAAIAAARQADgFADgEIAHgGIAJgDIAJgBQAIAAAFACQAGADAEAEQAEAFACAHQACAHAAAKIAAA1g");
	this.shape_68.setTransform(-193.8,1.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AApA/IgMghIg6AAIgMAhIgSAAIAyh8IAUAAIAxB8gAAYAQIgYg+IgYA+IAwAAg");
	this.shape_69.setTransform(-205,0.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOAuIAAgcIAdAAIAAAcgAgOgRIAAgcIAdAAIAAAcg");
	this.shape_70.setTransform(-76.3,-20.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAQA/IglhNQgDgHgGgTQAEAdAAAJIAABBIgeAAIAAh9IApAAIAkBKQADAIAGATQgCgMgBgSIAAhHIAeAAIAAB9g");
	this.shape_71.setTransform(-86,-22.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgMBAIgNgDQgGgCgFgEQgEgDgFgEIgHgJIgEgMQgDgFgBgHIgBgPIABgOQABgHADgFIAEgMIAHgJQAFgEAEgDQAFgEAGgCQAGgDAHAAIAMgBIAOABQAHAAAFADQAGACAFAEIAIAHIAIAJIAFAMIADAMIABAOIgBAPIgDAMIgFAMIgIAJIgIAHQgFAEgGACIgMADIgOABIgMgBgAgKglQgGACgDAGQgEAFgDAHQgBAIAAAJQAAAJABAIQACAHAFAGQADAFAGADQAFACAFAAQAGAAAFgCQAGgDADgFQAFgGABgHQACgIAAgJQAAgIgCgJQgBgHgFgFQgDgGgGgCQgFgDgGAAQgFAAgFADg");
	this.shape_72.setTransform(-99.8,-22.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQA/IAAh9IAhAAIAAB9g");
	this.shape_73.setTransform(-109.6,-22.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgQA/IAAhjIgfAAIAAgaIBfAAIAAAaIgfAAIAABjg");
	this.shape_74.setTransform(-117.5,-22.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWA8IgJgEIgIgGIgGgIIgEgJQgCgHgCgRIAAhIIAiAAIAABIIABANQABAGADADQACAEADACQAFACAEAAQAFAAAEgCQAEgCADgEQADgDABgGQACgFAAgIIAAhIIAfAAIAABIQgBARgCAHIgEAJIgGAIIgHAGIgJAEQgPAEgJAAQgPgBgHgDg");
	this.shape_75.setTransform(-128.9,-21.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAiAAIAABkIAxAAIAAAZg");
	this.shape_76.setTransform(-139.9,-22.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNBAIgMgDQgGgCgEgEQgGgDgDgEIgIgJIgFgMQgCgFgBgHIgBgPIABgOQABgHACgFIAFgMIAIgJQADgEAGgDQAEgEAGgCQAGgDAGAAIANgBIAOABQAGAAAGADQAGACAFAEIAJAHIAHAJIAFAMIADAMIABAOIgBAPIgDAMIgFAMIgHAJIgJAHQgFAEgGACIgMADIgOABIgNgBgAgKglQgGACgDAGQgEAFgCAHQgCAIAAAJQAAAJACAIQABAHAFAGQADAFAGADQAFACAFAAQAHAAAEgCQAGgDADgFQAEgGADgHQABgIAAgJQAAgIgBgJQgDgHgEgFQgDgGgGgCQgEgDgHAAQgFAAgFADg");
	this.shape_77.setTransform(-152.2,-22.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgYBAQgLgBgJgDIADgbQAJADAIACQAJACAHAAQAIAAAGgEQAGgDAAgGQAAgDgCgDQgCgDgDgBIgRgHIgPgHQgGgDgEgDQgEgFgCgFQgCgGAAgHQAAgJADgHQAEgIAGgEQAGgFALgDQAKgCALAAIARABQAJAAAIADIgCAaQgIgEgHgBIgOgCQgJAAgGAEQgFADAAAGQAAAEADACQACADAGACIATAHQAJADAFAEQAHAEADAHQADAGAAAJQAAAKgEAIQgCAIgIAFQgGAGgKADQgKACgMAAIgSgBg");
	this.shape_78.setTransform(-164.5,-22.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAiAAIAABkIAxAAIAAAZg");
	this.shape_79.setTransform(-180,-22.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgXA8IgJgEIgHgGIgGgIIgEgJQgCgHgBgRIAAhIIAhAAIAABIIABANQABAGACADQADAEAEACQAEACAEAAQAGAAAEgCQADgCADgEQADgDABgGQACgFgBgIIAAhIIAhAAIAABIQgCARgCAHIgEAJIgGAIIgIAGIgJAEQgOAEgJAAQgPgBgIgDg");
	this.shape_80.setTransform(-191.8,-21.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAgA/IgJgbIgvAAIgJAbIghAAIAvh9IAnAAIAvB9gAAPAMIgPguIgQAuIAfAAg");
	this.shape_81.setTransform(-204.6,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame2_copy, new cjs.Rectangle(-213,-32.2,426.1,64.6), null);


(lib.frame1_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLANIAAgYIAXAAIAAAYg");
	this.shape.setTransform(72.2,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAtQgOgFgGgFIAKgPQAIAGAIADQAIADAGAAQAHAAAEgDQAEgDAAgFQAAgFgHgDIgNgFQgPgFgGgDQgEgDgCgFQgDgFAAgGQAAgHADgGQACgFAFgEQAEgDAGgCQAHgCAGAAQAJAAAJACQAJADAIAFIgJAQIgOgHQgHgCgGAAQgFAAgEADQgDACAAAEIAAABQAAAEAGAEIAOAFIALAEIAJAEQAFAEACAEQADAFAAAGIAAAAQAAAIgDAFQgDAGgEAEQgFADgHACQgGACgIAAQgJAAgKgEg");
	this.shape_1.setTransform(65.2,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAuQgIgEgHgGQgGgHgFgIIgCgKIgBgLIAAAAQAAgJADgJQAEgJAGgHQAGgHAIgEIAKgCIAIgBIALABIAJACQAGADAJAJQAFAGADAKQADAJAAAJIgBAGIhFAAQABAGADAFQADAEADADIAIAGIAJABQAIAAAGgDQAGgDAGgFIANALIgIAHIgIAGIgLAEIgNABQgIgBgKgDgAAZgFQgBgGgCgFIgFgHQgDgEgEgCQgFgCgFABQgDgBgFACQgEACgEAEQgCADgCAEIgEALIAxAAIAAAAg");
	this.shape_2.setTransform(55.4,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_3.setTransform(47.4,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgLgrIAAgVIAXAAIAAAVg");
	this.shape_4.setTransform(42.3,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzAxIAAg1QAAgGgCgFQgBgEgCgDIgGgEQgEgCgFAAQgEAAgEACQgEABgCAEIgEAGQgCAGAAAFIAAA1IgVAAIAAg1QAAgGgBgFQgBgEgDgCQgCgEgEgBQgDgCgFAAQgEAAgEACQgEABgDAEQgCADgCAEQgBAEAAAGIAAA1IgWAAIAAheIAWAAIAAAOQAFgHAGgFQAEgCAEgBQAEgCAGABIAJABIAIADQADACACAEIAFAHQAGgJAIgEIAIgDIAKgBQAIgBAGADQAGADAFAEQAEAFACAGQACAHAAAJIAAA8g");
	this.shape_5.setTransform(31.2,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBAIgLgEIgJgGIgIgIIgGgKIgFgKIgDgMIgBgOIAAAAIABgMIADgNIAFgLIAGgJIAIgIIAKgGIAKgEIALgBIAMABIALAEIAJAGIAIAIIAGAJIAFALQAEAQAAAJIAAAAIgBANIgDANIgFAKIgGAKIgIAIIgKAGIgKAEIgMABIgLgBgAgMgpQgGAEgFAGQgEAGgCAIQgCAIAAAJIAAAAQAAAJACAIQACAJAFAGQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgGADgJQACgIAAgJIAAAAQAAgIgCgJQgDgIgEgGQgEgGgGgEQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(10.8,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBAIgLgEIgJgGIgIgIIgGgKIgFgKIgDgMIgBgOIAAAAIABgMIADgNIAFgLIAGgJIAIgIIAKgGIAKgEIALgBIAMABIALAEIAJAGIAIAIIAGAJIAFALQAEAQAAAJIAAAAIgBANIgDANIgFAKIgGAKIgIAIIgKAGIgKAEIgMABIgLgBgAgMgpQgGAEgFAGQgEAGgCAIQgCAIAAAJIAAAAQAAAJACAIQACAJAFAGQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgGADgJQACgIAAgJIAAAAQAAgIgCgJQgDgIgEgGQgEgGgGgEQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(-2.2,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMA+IgNgEIgLgHIgJgJIAPgPQAHAJAIAEIAJADIAJABIAIgBIAHgEQADgCACgEQABgDAAgFIAAAAQAAgFgCgEQgCgDgEgDQgDgCgGgBIgLgBIgKAAIgEgOIAigkIg2AAIAAgTIBSAAIAAARIgjAkQAIABAGACQAHADAFAEQAFADADAGQADAHAAAIQAAAJgDAHQgDAIgGAFQgGAFgIADQgIADgKAAQgHAAgHgCg");
	this.shape_8.setTransform(-14.5,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAQQAIgBAFgFQACgEgBgGIgIAAIAAgZIAXAAIAAAVQAAAHgCAFQgBAGgEADQgEAEgEACIgLADg");
	this.shape_9.setTransform(-22.5,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBAIgKgDQgJgDgJgIIAMgRQAIAHAGACQAHADAIAAQAHAAAGgEQAGgDAEgGQADgGACgIQACgGAAgGQgGAGgHADQgIADgIAAQgKABgIgDQgIgDgGgFQgGgFgDgHQgEgHAAgJIAAAAQAAgKAEgIQADgHAGgHQAHgFAIgEQAJgDAKAAQAHAAAMADQAJADAGAHIAHAIQADAFABAFIAEAOIABAQIAAABQgCASgCAJQgCAFgDAGIgGAKIgHAIIgKAGIgKAEIgLABIgNgBgAgLgrQgFACgDADQgDADgCAEQgBAEAAAGQAAAEABAFQACAEADADQAEADAFACQAEAAAGAAQAFAAAFAAIAIgGQADgDACgEQACgEAAgEIAAgBQAAgFgCgEQgCgEgDgDQgEgEgFgCQgFgBgFAAQgFAAgFACg");
	this.shape_10.setTransform(-30.5,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOBAIAAgdIg+AAIgFgPIBGhTIASAAIAABQIASAAIAAASIgSAAIAAAdgAgaARIAoAAIAAgxg");
	this.shape_11.setTransform(-42.7,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADBAIAAhoIgWAHIgFgSIAhgMIAQAAIAAB/g");
	this.shape_12.setTransform(-52.9,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVBCIAAg2QAAgGgBgEIgEgGQgDgDgEgCQgEgCgEAAQgEAAgEACQgEACgDADQgDADgBADQgCAFAAAFIAAA2IgWAAIAAiDIAWAAIAAAzQAFgHAHgEIAIgEIAJgBQAIAAAGACQAGADAFAFQAEAEACAHQADAHAAAHIAAA9g");
	this.shape_13.setTransform(-66.7,8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAA8QgFgCgEgDQgEgDgCgFQgCgGAAgIIAAgxIgMAAIAAgSIAMAAIAAgaIAVAAIAAAaIAaAAIAAASIgaAAIAAAuQAAAGADADQADADAGAAQAHAAAGgDIAAARIgIAEIgLABQgGAAgEgBg");
	this.shape_14.setTransform(-76.1,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgLgrIAAgVIAXAAIAAAVg");
	this.shape_15.setTransform(-82.2,8.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVAwIgVhAIgVBAIgTAAIgfheIAWAAIATA/IAVhAIASAAIAVBAIAUg/IAWAAIgfBeg");
	this.shape_16.setTransform(-92.5,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAwIAAg1QAAgFgBgFIgEgGQgDgEgEgBQgEgCgEAAQgEAAgEACQgEABgDAEQgDADgBAEQgCAFAAAFIAAA0IgWAAIAAhdIAWAAIAAAOQAFgHAHgFIAIgDIAJgBQAIAAAGACQAGADAFAFQAEAEACAHQADAHAAAIIAAA7g");
	this.shape_17.setTransform(69.4,-8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAvQgHgCgEgDQgFgEgDgGQgCgFAAgHQAAgIADgGQACgGAGgCQAFgEAHgCQAIgCAIAAQAKAAAOAEIAAgCQABgGgCgDQgBgEgEgDQgDgCgEgCQgEgBgFAAQgIAAgGABIgNAFIgGgRQAJgEAIgCQAJgCAJAAQAKAAAJADQAHACAFAGQAFAFADAHQADAHAAAKIAAA3IgWAAIAAgMQgFAHgHADQgKAEgHAAQgHAAgGgCgAgIAEIgHADIgFAFQgBADAAAEQAAAHAGAEQAFADAHAAQAFAAAEgBQAGgCACgCQAEgDACgEQACgEAAgEIAAgGQgNgEgIAAIgJABg");
	this.shape_18.setTransform(58.3,-8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIAwIgohfIAYAAIAYBFIAahFIAXAAIgnBfg");
	this.shape_19.setTransform(47.8,-8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgLgrIAAgVIAXAAIAAAVg");
	this.shape_20.setTransform(40,-10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVAwIAAg1QAAgFgBgFIgEgGQgDgEgEgBQgEgCgEAAQgEAAgEACQgEABgDAEQgDADgBAEQgCAFAAAFIAAA0IgWAAIAAhdIAWAAIAAAOQAFgHAHgFIAIgDIAJgBQAIAAAGACQAGADAFAFQAEAEACAHQADAHAAAIIAAA7g");
	this.shape_21.setTransform(31.9,-8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgLgrIAAgVIAXAAIAAAVg");
	this.shape_22.setTransform(23.7,-10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAzAwIAAg1QAAgFgCgFQgBgEgCgDIgGgEQgEgCgFAAQgEAAgEACQgEABgCAEIgEAGQgCAGAAAFIAAA0IgVAAIAAg1QAAgFgBgFQgBgEgDgCQgCgEgEgBQgDgCgFAAQgEAAgEACQgEABgDAEQgCADgCAEQgBAFAAAFIAAA0IgWAAIAAhdIAWAAIAAAOQAFgHAGgFQAEgCAEgBQAEgBAGAAIAJABIAIADQADACACAEIAFAHQAGgJAIgEIAIgDIAKgBQAIAAAGACQAGADAFAEQAEAFACAGQACAHAAAJIAAA7g");
	this.shape_23.setTransform(12.6,-8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUA/QgIgDgHgGQgGgHgEgJIgCgJIgBgMQAAgIADgMQAEgJAGgGQAHgHAIgDQAHgDAJAAQAEAAAGABQAEABAFADQAHAEAFAIIAAg0IAWAAIAACDIgWAAIAAgQQgFAIgHAEQgFADgEABQgGACgEAAQgJAAgHgEgAgJgKQgFACgEAEQgEAEgCAEQgCAGAAAHQAAAHACAGQACAFAEAFQAEADAFADQAEACAFAAQAGAAAEgCQAGgDADgEQAFgEACgFQABgGAAgHQAAgHgBgFQgCgFgFgEQgDgEgGgCQgEgCgGAAQgFAAgEACg");
	this.shape_24.setTransform(-7.6,-10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPAuQgKgDgGgHQgHgHgDgJIgDgJIgBgLIAAAAQAAgJAEgJQADgJAGgHQAHgHAIgEIAJgCIAJgBIAKABIAKACQAFADAIAJQAGAGADAKQADAJAAAJIAAAGIhFAAQABAGACAFQACAFAEACIAIAGIAJABQAIAAAGgDQAGgDAGgGIAMAMIgHAHIgJAGIgKAEIgMABQgKAAgIgEgAAYgGQAAgFgCgFIgFgIQgDgDgEgCQgEgBgFAAQgFAAgEABQgEACgDADQgDADgDAFIgCAKIAvAAIAAAAg");
	this.shape_25.setTransform(-18.8,-8.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAwIgohfIAYAAIAYBFIAahFIAXAAIgnBfg");
	this.shape_26.setTransform(-29.6,-8.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAxIgJgEQgKgDgGgHQgHgHgEgJIgDgJIgBgKIAAAAQAAgGAEgMQAEgJAHgHQAHgHAJgEIAJgCIAKgBQAHAAANADQAJAEAHAHQAHAGAEAJQAEANAAAGIgBAKIgDAJQgEAJgHAHQgHAHgJADQgNAFgHAAgAgLgbQgFACgEAFQgEAEgCAFQgCAGAAAFQAAAHACAFQACAFAEAFQAEAEAFACQAGADAFAAQAGAAAGgDQAFgCAEgEQAEgFACgFQACgFAAgHIAAAAQAAgFgCgFQgCgGgEgEQgEgFgGgCQgFgDgGABQgGgBgFADg");
	this.shape_27.setTransform(-40.8,-8.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_28.setTransform(-49.3,-10.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaALIAAgVIA1AAIAAAVg");
	this.shape_29.setTransform(-55.5,-9.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_30.setTransform(-61.7,-10.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_31.setTransform(-66.8,-10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAuQgJgDgGgHQgGgHgFgJIgCgJIgBgLIAAAAQAAgJADgJQAEgJAGgHQAGgHAJgEIAJgCIAIgBIALABIAJACQAGADAJAJQAFAGADAKQADAJAAAJIgBAGIhFAAQABAGADAFQADAFADACIAIAGIAJABQAIAAAGgDQAGgDAGgGIANAMIgIAHIgIAGIgLAEIgNABQgJAAgJgEgAAZgGQgBgFgCgFIgFgIQgDgDgEgCQgFgBgFAAQgDAAgFABQgEACgEADQgCADgCAFIgEAKIAxAAIAAAAg");
	this.shape_32.setTransform(-74.7,-8.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAfBAIgfhaIgeBaIgTAAIgsh+IAYAAIAeBcIAfhdIARAAIAgBdIAdhcIAYAAIgsB+g");
	this.shape_33.setTransform(-90.2,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame1_copy, new cjs.Rectangle(-102.2,-20.5,204.5,41), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,204,0.259)").s().p("AmACFIAAkJIMBAAIAAEJg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78828F").s().p("AgOAOQgGgFAAgJQAAgHADgEQAGgJALgBQAIACAHAFQAGAGAAAJQAAAJgGAFQgGAHgJgBQgIABgGgIgAgMgLQgGAGAAAHQAAAGAFAGQAEAGAJAAQAGAAAGgGQAFgFAAgGQAAgHgFgGQgFgEgHAAIgDgBQgFAAgEAEgAAEANIgEgKIgDAAIAAAKIgGAAIAAgYIAJAAQAKABAAAGQAAAGgFAAIAFALgAgCAAIACAAQAFAAAAgCQAAgFgFABIgCAAg");
	this.shape.setTransform(72.6,43.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(70.5,41.6,4.2,4.3), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78838E").s().p("AgQByQgSAAgMgEQgNgFgJgJQgNgMgDgLQgEgLAAgVIAAiaIA1AAIAACeQAAAIAEAIQAHAHADABIAPABIAAABIBfAAIAAArg");
	this.shape.setTransform(60.4,34.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(51.5,23.3,17.8,22.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D84126").s().p("AkjAfQAogYA7gSQBwgkBxAFQBdAFBWAfQAiALAvAYQh/glimA0Qiqgxh5Akg");
	this.shape.setTransform(31.3,4.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(2.1,0.1,58.5,8.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86C7E9").s().p("AgnAaQg0gYg3gQQClg1B/AlIABABIiRBLQgPgIgagMg");
	this.shape.setTransform(45.9,10.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(31.3,5.7,29.3,9.2), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F05B26").s().p("AiRgcQB8gmCnAzQg2AQgzAYQgZAMgPAIg");
	this.shape.setTransform(16.8,10.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(2.2,5.9,29.1,9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, null, null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78838E").s().p("AgyBtQgTgHgTgSQgQgRgKgXQgJgWAAgSQAAgWAKgZQALgXAQgQQASgSAVgIQAVgKAbAAQAcAAATAKQALAEANAIIAAgMIAzAAIgCDhIg0AAIAAhzQAAgMgFgNQgHgOgJgJQgJgJgMgGQgNgGgOAAQgNAAgNAGQgOAGgJAMQgKAJgFANQgGAMAAAOIAAAFIABADQAHAnAiAMQAQAGAPgCQALAAAOgFIAHgEIAAA3QgTAFgQAAQgZAAgZgKg");
	this.shape.setTransform(12.4,34.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,22.4,24.7,23.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, null, null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78838E").s().p("AgnBpQgQgGgRgQQgPgRgHgQQgIgVAAgTIAAh6IA1AAIAAB6QAAAMADAHQAFAKAGAGQAGAFAKAGQAIAEALAAQALAAAIgEQAKgGAGgFQAGgGAFgKQAEgIAAgLIAAh6IA1AAIAAB6QAAATgIAVQgGAQgQARQgNAPgUAHQgVAIgTAAQgUAAgTgIg");
	this.shape.setTransform(38.1,34.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(27.8,23.3,20.6,22.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1DnIAAnNILrAAIAAHNg");
	mask.setTransform(37.4,23.1);

}).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);


(lib.clickthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,153,0.549)").s().p("Eg55AIXIAAwtMBzzAAAIAAQtgEAkRAEZIRqAAIAAlTIxqAAg");
	this.shape.setTransform(0,0,1,1.121);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.click2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,204,0.259)").s().p("AqJD/IAAn9IUTAAIAAH9g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.buttonsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAnQgIgDgGgFQgFgGgDgIQgCgFgBgMQAAgJADgIQACgHAGgGQAFgFAHgDQAIgDAIAAQAIAAAHADQAHACAFAGQAEAFADAIQACAHAAAKIAAAGIg3AAQAAAFACAEQACAEAEADQADADAFABQADACAGAAIAMgCQAGgBAGgDIAAAQIgNADIgOABQgMgBgFgCgAAUgGIgCgJIgEgHQgCgDgEgBQgDgCgEAAQgDAAgDACIgGAEIgEAHQgCAEAAAFIAlAAIAAAAg");
	this.shape.setTransform(94.8,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYApIAAhPIATAAIAAAQIAEgIIAFgGIAGgDQAEgBAEAAIAHABIgBASIgHgBQgFAAgEACQgEACgDADQgBADgCAFQgBAFAAAGIAAAlg");
	this.shape_1.setTransform(87.8,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAnQgIgCgFgGQgGgGgDgHQgDgIAAgKQAAgJADgIQADgHAGgGQAFgFAIgDQAIgDAJAAQAKAAAIADQAIADAFAFQAGAGADAHQADAIAAAJQAAAKgDAIQgDAHgGAGQgFAGgIACQgIADgKAAQgJAAgIgDgAgHgYQgEACgDADQgDAEgBAFQgCAFAAAFQAAAGACAFIAEAJIAHAFQADACAEAAQAFAAAEgCQADgCADgDQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgEQgDgEgDgBQgEgCgFAAQgEAAgDACg");
	this.shape_2.setTransform(79.2,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArA3IAAhQIAAgUIgDAQIggBUIgSAAIgehTIgEgRIABAUIAABQIgTAAIAAhtIAhAAIAbBMQACAGAAAMQABgMACgGIAchMIAgAAIAABtg");
	this.shape_3.setTransform(66.8,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARApIAAgqIgBgKIgCgHIgGgEIgHgBQgDAAgDACQgDABgDAEQgDADgBAFQgCAEAAAFIAAAoIgUAAIAAhPIATAAIAAAOIAFgHIAGgFIAHgDIAJgBQAIAAAFACQAFACAEAFQADAEACAGQACAHAAAIIAAAvg");
	this.shape_4.setTransform(49.8,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYApIAAhPIATAAIAAAQIAEgIIAFgGIAGgDQAEgBAEAAIAHABIgBASIgHgBQgFAAgEACQgEACgDADQgBADgCAFQgBAFAAAGIAAAlg");
	this.shape_5.setTransform(42.2,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAoQgFgBgDgEQgDgDgCgFQgCgFAAgFQAAgHACgFQADgFAFgCQAGgDAHgCQAJgCAJAAIAKAAIAAgBQAAgEgBgDQgBgEgCgCIgHgDIgIgBIgLABIgLAFIAAgOIANgFIAOgBQAIAAAHACQAHACAEAFQAEAEACAHQADAHAAAJIAAAtIgTAAIAAgNQgIAJgEACIgGADIgIABQgGAAgGgCgAgBADIgIACIgFAFQgBACAAAEQAAAFADADQAEAEAGAAQADAAADgCQAEgBADgDQADgDABgEIABgJIAAgEIgHAAIgKABg");
	this.shape_6.setTransform(33.9,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAnQgIgDgGgFQgFgGgDgIQgCgFgBgMQAAgJADgIQACgHAGgGQAFgFAHgDQAIgDAIAAQAIAAAHADQAHACAFAGQAEAFADAIQACAHAAAKIAAAGIg3AAQAAAFACAEQACAEAEADQADADAFABQADACAGAAIAMgCQAGgBAGgDIAAAQIgNADIgOABQgMgBgFgCgAAUgGIgCgJIgEgHQgCgDgEgBQgDgCgEAAQgDAAgDACIgGAEIgEAHQgCAEAAAFIAlAAIAAAAg");
	this.shape_7.setTransform(25.4,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA3IAAhtIAWAAIAABcIArAAIAAARg");
	this.shape_8.setTransform(17.5,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBC530").s().p("AnQCqQgqAAgdgdQgdgeAAgpIAAiLQAAgqAdgcQAdgeAqAAIOhAAQAqAAAdAeQAdAdAAApIAACLQAAApgdAeQgdAdgqAAg");
	this.shape_9.setTransform(56.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,34);


(lib.blueShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86C7E9").s().p("EgoiAHCIAAuDMBRFAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueShape, new cjs.Rectangle(-259.4,-45,519,90), null);


(lib.bkgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-364,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bkgd, new cjs.Rectangle(-364,-115,728,230), null);


(lib.whiteLogo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whitelogosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.05,1.05,0,0,0,52.5,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiteLogo2, new cjs.Rectangle(-55,-35.3,110.1,70.7), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whiteShape();
	this.instance.parent = this;
	this.instance.setTransform(0,44.5);
	this.instance.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(0,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-90.5,730,180);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whiteShape();
	this.instance.parent = this;
	this.instance.setTransform(0,44.5);
	this.instance.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(0,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-90.5,730,180);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.replay_btn = new lib.ReplayButtonsvg();
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(0.1,0.1,0.14,0.14,0,0,0,251.5,66.8);
	this.replay_btn.alpha = 0.301;
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1).to({regX:250.8,regY:66.1,alpha:0.699},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-8.7,70.4,17.5);


(lib.colorlogosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// color-logo.svg
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_1 = new lib.ClipGroup_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_2 = new lib.ClipGroup_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_3 = new lib.ClipGroup_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_5 = new lib.ClipGroup_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_6 = new lib.ClipGroup_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_7 = new lib.ClipGroup_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_8 = new lib.ClipGroup_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.instance_9 = new lib.ClipGroup();
	this.instance_9.parent = this;
	this.instance_9.setTransform(37.4,23.1,1,1,0,0,0,37.4,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,46.2);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,56.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-17,113,34);


(lib.hover_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.898},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-17,113,34);


(lib.colorLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colorlogosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.1,1.05,1.05,0,0,0,37.5,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorLogo, new cjs.Rectangle(-39.2,-24.2,78.4,48.5), null);


// stage content:
(lib.AU170104001_FIMnvn_728x90_BNR_CM20706 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* See frame 348 for 2nd clickthrough button, url needs to be updated there as well */
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag, "_blank");
		}
		
		
		this.click_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(window.clickTag, "_blank");
		}
	}
	this.frame_344 = function() {
		this.clickthrough2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag, "_blank");
		}
	}
	this.frame_359 = function() {
		this.replay_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(0);
		}
		
		this.cta.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(344).call(this.frame_344).wait(15).call(this.frame_359).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(683.1,72.4,0.658,0.658);
	this.replay_btn.alpha = 0;
	this.replay_btn._off = true;
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.replay_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(353).to({_off:false},0).to({alpha:1},6).wait(1));

	// replay_area
	this.cta = new lib.cta();
	this.cta.parent = this;
	this.cta.setTransform(682.1,71.5,0.658,0.658,0,0,0,0.1,0.1);
	this.cta._off = true;
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(353).to({_off:false},0).wait(7));

	// button_clickthrough
	this.clickthrough2 = new lib.hover_btn();
	this.clickthrough2.parent = this;
	this.clickthrough2.setTransform(652.2,134.3);
	this.clickthrough2._off = true;
	new cjs.ButtonHelper(this.clickthrough2, 0, 1, 2, false, new lib.hover_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough2).wait(282).to({_off:false},0).to({y:43.3},10,cjs.Ease.get(-1)).wait(38).to({scaleX:1.1,scaleY:1.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(-1)).wait(16));

	// banner_clickthrough2
	this.click_2 = new lib.click2();
	this.click_2.parent = this;
	this.click_2.setTransform(654.2,57.4,0.87,0.746,0,0,0,0,0.5);
	new cjs.ButtonHelper(this.click_2, 0, 1, 2, false, new lib.click2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click_2).to({_off:true},282).wait(78));

	// banner_clickthrough1
	this.button_1 = new lib.clickthrough();
	this.button_1.parent = this;
	this.button_1.setTransform(365.6,44.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(282).to({y:32.5},0).wait(78));

	// copy
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(367.6,135.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282).to({_off:false},0).to({y:45.8},10,cjs.Ease.get(-1)).wait(68));

	// logo
	this.instance_1 = new lib.colorLogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.3,133.8,1.15,1.15,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(282).to({_off:false},0).to({y:43.8},10,cjs.Ease.get(-1)).wait(68));

	// white_shape
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,90.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(364,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},282).to({state:[{t:this.instance_3}]},10).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(282).to({_off:false},0).to({_off:true,y:0.5},10,cjs.Ease.get(-1)).wait(68));

	// copy
	this.instance_4 = new lib.frame2_copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1018.2,45.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).to({x:499.2},17,cjs.Ease.get(-1)).wait(109).to({y:41.9},0).to({y:-48.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// blue_shape
	this.instance_5 = new lib.blueShape();
	this.instance_5.parent = this;
	this.instance_5.setTransform(987.5,45);
	this.instance_5.alpha = 0.898;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156).to({_off:false},0).to({x:484},17,cjs.Ease.get(-1)).wait(109).to({y:-45},10,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// copy
	this.instance_6 = new lib.frame1_copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(903.7,46.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).to({x:613.7},15,cjs.Ease.get(-1)).wait(72).to({x:124.5},17,cjs.Ease.get(-1)).wait(109).to({y:44.3},0).to({y:-45.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// red_shape
	this.instance_7 = new lib.redShape();
	this.instance_7.parent = this;
	this.instance_7.setTransform(888.6,45);
	this.instance_7.alpha = 0.898;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({x:598.6},15,cjs.Ease.get(-1)).wait(72).to({x:95.4},17,cjs.Ease.get(-1)).wait(109).to({y:-45},10,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// logo
	this.instance_8 = new lib.whiteLogo2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(371.6,44.4);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({y:-85.6},30,cjs.Ease.get(-1)).to({_off:true},1).wait(310));

	// background
	this.instance_9 = new lib.bkgd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(364,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:365,y:-25},30,cjs.Ease.get(-1)).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(359,29.5,741.2,245.5);
// library properties:
lib.properties = {
	id: '2076BE9E6B7B4D0D875FABAF48801B99',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/background.jpg", id:"background"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2076BE9E6B7B4D0D875FABAF48801B99'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;