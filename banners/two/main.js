(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sysomos_atlas_", frames: [[602,61,44,54],[0,0,600,311],[0,313,300,250],[648,61,48,46],[602,117,48,49],[302,313,300,250],[659,0,39,51],[602,168,42,45],[602,0,55,59]]}
];


// symbols:



(lib.analyze = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beach_bkgd = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bubble2 = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.discover = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.engage = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.frame3 = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.listen = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.publish = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.search = function() {
	this.spriteSheet = ss["sysomos_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beach_bkgd();
	this.instance.parent = this;
	this.instance.setTransform(-300,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-155.5,600,311);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beach_bkgd();
	this.instance.parent = this;
	this.instance.setTransform(-300,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-155.5,600,311);


(lib.sysomossvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sysomos.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F36D24").s().p("ABHCpQgiAJglAAQgoAAgqgNQgxgQgkgeQgjgggSgpQgPgmAAghQAAhFAwg3QAwg1BKgTQAigIAfAAQAWAAATADQBUANA3A4QA4A6AABKQAAAvgZArQgYAqgqAdIAvBeg");
	this.shape.setTransform(65.3,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F99D1").s().p("AjUDGQg9gqgjg8Qglg/AAhGQAAh6BmhYQBlhXCPgBQAyAAAvAMQBlAZBEBGQBEBHALBbIgogCQgmAAgqAKQhaAXg5A+Qg6BCAABSQAAAsAQAnIgkACQg0ABg0gOIiyBZg");
	this.shape_1.setTransform(34.6,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F36D24").s().p("AhPE8QgigHgYgJQgbgKgZgOQgYgOgTgQIAjg5QAFgIALgIQAIgFAPAAQANAAANAIIAdARQATAKAUAHQAYAIAgAAQAZAAAUgGQARgFAPgMQAMgLAGgNQAGgOAAgOQAAgXgNgNQgPgPgUgJQgQgIgggLQgbgIgegKQgZgIgggPQgdgPgUgRQgVgUgOgdQgNgcAAgrQAAgnAPgiQAOgiAfgcQAfgbArgOQAugQA3AAQBBAAA0AVQA1AWAjAiIgjA2QgHAKgFAEQgGAEgMAAQgLAAgMgGIgdgOQgUgJgRgFQgVgGgcAAQgtAAgYATQgaATAAAeQgBAVANANQAPAOAUAKQASAJAfAKQAdAIAbAKQAdAJAaANQAdAMAVASQAVAVANAaQANAaABAlQgBAvgQAlQgQAkgfAeQgiAcgtAPQgxAQg5AAQgfAAgggGg");
	this.shape_2.setTransform(550,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F36D24").s().p("Ah9ErQg7gXgngpQgpgqgWg8QgWg7AAhKQAAhLAWg6QAWg6ApgrQAngpA7gXQA3gWBHAAQBHAAA4AWQA5AWAoAqQAoApAWA8QAUA4ACBNQAABKgWA7QgXA+gnAoQgoApg5AXQg4AWhHAAQhHAAg3gWgAhziZQgmA3AABiQAABkAmA1QAmA1BOAAQBOAAAlg0QAlg0AAhmQAAhlglg0Qgmg1hNAAQhOAAgmA1g");
	this.shape_3.setTransform(489.5,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F36D24").s().p("AEgE9IAAmMQAAg8gageQgZgfg0AAQgWABgVAHQgTAIgQAQQgQAPgHAWQgJAWAAAeIAAGMIiWAAIAAmMQAAg/gZgdQgagdgxAAQghABgcAPQgcARgZAcIAAHIIiUAAIAApwIBcAAQAeAAAIAbIAKAuQAQgRASgPQATgQATgKQAZgNATgFQAYgFAbgBQA7ABAmAgQAkAeAUA2QAOgdAWgYQATgUAdgQQAagNAegIQAjgGAYgBQA0AAAoAQQAoARAcAdQAbAfAPArQAOApAAA8IAAGMg");
	this.shape_4.setTransform(404.3,43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F36D24").s().p("Ah9ErQg6gXgogpQgogrgXg7QgWg8AAhJQAAhJAWg8QAWg7ApgqQAngpA7gXQA3gWBHAAQBIAAA3AWQA6AXAnApQAoApAWA8QAVA4ABBNQAABKgWA7QgXA9gnApQgnApg6AXQg3AWhIAAQhHAAg3gWgAhziZQgmA3AABiQAABkAmA1QAmA1BOAAQBOAAAlg0QAlg1AAhlQAAhlglg0Qgmg1hNAAQhOAAgmA1g");
	this.shape_5.setTransform(317.9,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F36D24").s().p("AhOE8QgigHgZgJQgagKgagOQgYgOgTgQIAjg5QAFgJAMgHQAHgFAPAAQANAAANAIIAeARQASAKAVAHQAYAIAfAAQAaAAATgGQARgFAQgMQALgLAHgNQAFgOAAgOQAAgXgMgNQgPgPgUgJQgOgHgigMQgegIgcgKQgXgIgigPQgdgPgTgRQgVgUgOgdQgNgbAAgsQAAgnAPgiQAPgiAegcQAggbApgOQAvgQA3AAQBBAAA0AVQA1AWAjAiIgjA2QgHAKgGAEQgGAEgLAAQgLAAgMgGIgdgOQgVgJgQgFQgVgGgdAAQgsAAgZATQgaAUAAAdQAAAVAMANQAPAOAUAKQAOAHAjAMQAfAJAZAJQAbAIAdAOQAeAOATAQQAYAXAKAYQANAaABAlQgBAvgQAlQgQAkgfAeQgiAcgsAPQgzAQg4AAQgfAAgfgGg");
	this.shape_6.setTransform(256.1,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F36D24").s().p("Ai2GdIB1j6Ij9pAICEAAQASABAJAIQAKAKAFAJICQFlIAJAiIALgiICKljQADgLANgKQALgHAOgBIB4AAIlTMaQgGAQgLAHQgLAJgWgBg");
	this.shape_7.setTransform(197.6,54.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F36D24").s().p("AhOE8QgjgHgYgJQgdgLgXgNQgZgOgSgQIAkg5QAEgJAMgHQAHgFAPAAQANAAANAIIAdARQAUAKAUAHQAXAIAhAAQAZAAAUgGQAQgFAQgMQALgLAHgNQAFgOAAgOQABgXgNgNQgNgOgWgKQgOgHgigMQgdgIgdgKQgWgHgigQQgdgPgVgRQgVgUgOgdQgNgcAAgrQABgnAPgiQAOgiAfgcQAfgbArgOQAugQA3AAQBBAAA0AVQA2AWAiAiIgjA2QgHAKgGAEQgFAEgMAAQgLAAgMgGIgdgOQgUgJgRgFQgVgGgdAAQgsAAgZATQgaATAAAeQAAAVAMANQAPAOAUAKQAQAIAgALQAeAIAbAKQAcAJAcANQAdANATARQAXAWAMAZQAOAaAAAlQAAAvgQAlQgQAkggAeQgiAcgsAPQgyAQg5AAQgfAAgfgGg");
	this.shape_8.setTransform(138,44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.2,95.6);


(lib.search_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.search();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-29.5,55,59);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwA8IAAh3IBhAAIAAB3g");
	mask.setTransform(4.9,6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAuQgOgOAAgUIAMAAQAAAPAKAKQALALAOAAQAOAAALgLQALgKAAgPQgBgOgJgKQgLgLgPAAIAAAXIgdgdIAdgeIAAAYQAUABAOAOQAOAOAAASQAAAUgOAOQgOAOgUAAQgSAAgPgOg");
	this.shape.setTransform(4.8,6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,9.6,12), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcBWIAAisII5AAIAACsg");
	mask.setTransform(28.5,8.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAgIAAgZIgZglIAOAAIAQAcIASgcIANAAIgZAlIAAAZg");
	this.shape.setTransform(42.4,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAgIgGgPIgdAAIgGAPIgMAAIAcg/IAJAAIAcA/gAALAHIgLgYIgKAYIAVAAg");
	this.shape_1.setTransform(36.6,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgIAAg+IALAAIAAA0IAgAAIAAAKg");
	this.shape_2.setTransform(30.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAgIAAg+IAZAAQAFAAAEABQAFABADADQADADABAEQADAEAAAEIAAABIgBAFIgCAEQgBADgEADIgIAEIgJABIgNAAIAAAVgAgNABIANAAIAFgBIAEgBIADgDIABgFIgBgFIgDgEIgEgBIgFgBIgNAAg");
	this.shape_3.setTransform(24.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IAuAAIAAAKIgjAAIAAAQIAeAAIAAAJIgeAAIAAARIAjAAIAAAKg");
	this.shape_4.setTransform(18.6,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAgIgPgXIgOAAIAAAXIgLAAIAAg+IAbAAIALABQAFACADADQACACABAEQACAEAAAEIgBAHIgDAEIgFAEIgGACIARAZgAgPAAIAQAAIAFAAIAEgCIADgEIABgEIgBgFIgDgDIgEgCIgFAAIgQAAg");
	this.shape_5.setTransform(12.4,11);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(7,4.9,40.8,12.4), null);


(lib.publish_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.publish();
	this.instance.parent = this;
	this.instance.setTransform(-21,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-22.5,42,45);


(lib.logosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F36D24").s().p("ABHCpQgiAJglAAQgoAAgqgNQgxgQgkgeQgjgggSgpQgPgmAAghQAAhFAwg3QAwg1BKgTQAigIAfAAQAWAAATADQBUANA3A4QA4A6AABKQAAAvgZArQgYAqgqAdIAvBeg");
	this.shape.setTransform(65.3,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjUDGQg9gqgjg8Qglg/AAhGQAAh6BmhYQBlhXCPgBQAyAAAvAMQBlAZBEBGQBEBHALBbIgogCQgmAAgqAKQhaAXg5A+Qg6BCAABSQAAAsAQAnIgkACQg0ABg0gOIiyBZg");
	this.shape_1.setTransform(34.6,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPE8QgigHgYgJQgbgKgZgOQgYgOgTgQIAjg5QAFgIALgIQAIgFAPAAQANAAANAIIAdARQATAKAUAHQAYAIAgAAQAZAAAUgGQARgFAPgMQAMgLAGgNQAGgOAAgOQAAgXgNgNQgPgPgUgJQgQgIgggLQgbgIgegKQgZgIgggPQgdgPgUgRQgVgUgOgdQgNgcAAgrQAAgnAPgiQAOgiAfgcQAfgbArgOQAugQA3AAQBBAAA0AVQA1AWAjAiIgjA2QgHAKgFAEQgGAEgMAAQgLAAgMgGIgdgOQgUgJgRgFQgVgGgcAAQgtAAgYATQgaATAAAeQgBAVANANQAPAOAUAKQASAJAfAKQAdAIAbAKQAdAJAaANQAdAMAVASQAVAVANAaQANAaABAlQgBAvgQAlQgQAkgfAeQgiAcgtAPQgxAQg5AAQgfAAgggGg");
	this.shape_2.setTransform(550,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah9ErQg7gXgngpQgpgqgWg8QgWg7AAhKQAAhLAWg6QAWg6ApgrQAngpA7gXQA3gWBHAAQBHAAA4AWQA5AWAoAqQAoApAWA8QAUA4ACBNQAABKgWA7QgXA+gnAoQgoApg5AXQg4AWhHAAQhHAAg3gWgAhziZQgmA3AABiQAABkAmA1QAmA1BOAAQBOAAAlg0QAlg0AAhmQAAhlglg0Qgmg1hNAAQhOAAgmA1g");
	this.shape_3.setTransform(489.5,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AEgE9IAAmMQAAg8gageQgZgfg0AAQgWABgVAHQgTAIgQAQQgQAPgHAWQgJAWAAAeIAAGMIiWAAIAAmMQAAg/gZgdQgagdgxAAQghABgcAPQgcARgZAcIAAHIIiUAAIAApwIBcAAQAeAAAIAbIAKAuQAQgRASgPQATgQATgKQAZgNATgFQAYgFAbgBQA7ABAmAgQAkAeAUA2QAOgdAWgYQATgUAdgQQAagNAegIQAjgGAYgBQA0AAAoAQQAoARAcAdQAbAfAPArQAOApAAA8IAAGMg");
	this.shape_4.setTransform(404.3,43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah9ErQg6gXgogpQgogrgXg7QgWg8AAhJQAAhJAWg8QAWg7ApgqQAngpA7gXQA3gWBHAAQBIAAA3AWQA6AXAnApQAoApAWA8QAVA4ABBNQAABKgWA7QgXA9gnApQgnApg6AXQg3AWhIAAQhHAAg3gWgAhziZQgmA3AABiQAABkAmA1QAmA1BOAAQBOAAAlg0QAlg1AAhlQAAhlglg0Qgmg1hNAAQhOAAgmA1g");
	this.shape_5.setTransform(317.9,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOE8QgigHgZgJQgagKgagOQgYgOgTgQIAjg5QAFgJAMgHQAHgFAPAAQANAAANAIIAeARQASAKAVAHQAYAIAfAAQAaAAATgGQARgFAQgMQALgLAHgNQAFgOAAgOQAAgXgMgNQgPgPgUgJQgOgHgigMQgegIgcgKQgXgIgigPQgdgPgTgRQgVgUgOgdQgNgbAAgsQAAgnAPgiQAPgiAegcQAggbApgOQAvgQA3AAQBBAAA0AVQA1AWAjAiIgjA2QgHAKgGAEQgGAEgLAAQgLAAgMgGIgdgOQgVgJgQgFQgVgGgdAAQgsAAgZATQgaAUAAAdQAAAVAMANQAPAOAUAKQAOAHAjAMQAfAJAZAJQAbAIAdAOQAeAOATAQQAYAXAKAYQANAaABAlQgBAvgQAlQgQAkgfAeQgiAcgsAPQgzAQg4AAQgfAAgfgGg");
	this.shape_6.setTransform(256.1,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai2GdIB1j6Ij9pAICEAAQASABAJAIQAKAKAFAJICQFlIAJAiIALgiICKljQADgLANgKQALgHAOgBIB4AAIlTMaQgGAQgLAHQgLAJgWgBg");
	this.shape_7.setTransform(197.6,54.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhOE8QgjgHgYgJQgdgLgXgNQgZgOgSgQIAkg5QAEgJAMgHQAHgFAPAAQANAAANAIIAdARQAUAKAUAHQAXAIAhAAQAZAAAUgGQAQgFAQgMQALgLAHgNQAFgOAAgOQABgXgNgNQgNgOgWgKQgOgHgigMQgdgIgdgKQgWgHgigQQgdgPgVgRQgVgUgOgdQgNgcAAgrQABgnAPgiQAOgiAfgcQAfgbArgOQAugQA3AAQBBAAA0AVQA2AWAiAiIgjA2QgHAKgGAEQgFAEgMAAQgLAAgMgGIgdgOQgUgJgRgFQgVgGgdAAQgsAAgZATQgaATAAAeQAAAVAMANQAPAOAUAKQAQAIAgALQAeAIAbAKQAcAJAcANQAdANATARQAXAWAMAZQAOAaAAAlQAAAvgQAlQgQAkggAeQgiAcgsAPQgyAQg5AAQgfAAgfgGg");
	this.shape_8.setTransform(138,44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.2,95.6);


(lib.listen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.listen();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-25.5,39,51);


(lib.frame3_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgEgFAAgGQAAgGAEgEQADgDAGAAQAHAAADADQAEAFAAAFQAAAGgEAFQgEADgGAAQgGAAgDgDg");
	this.shape.setTransform(255,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2A0IAAg+QAAgMgFgGQgEgFgKAAQgMAAgGAIQgGAHAAARIAAA1IgVAAIAAg+QAAgMgFgGQgEgFgJAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIACAAQAEgHAIgEQAIgEAKAAQAXAAAHAQIACAAQAEgIAIgEQAJgEAKAAQATAAAIAJQAJAJAAATIAABCg");
	this.shape_1.setTransform(243.4,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIARAAIAEASIABAAQAEgJAIgGQAIgFAJAAIALABIgCAUIgKgBQgNAAgGAIQgJAJABAOIAAA0g");
	this.shape_2.setTransform(230.8,39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAvQgKgHgGgMQgHgMABgQQgBgYANgOQANgOAWAAQAWAAANAOQAOAOAAAYQAAAZgOAOQgMAOgXAAQgNAAgMgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgNAAgGAJg");
	this.shape_3.setTransform(220.3,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBJIAAhVIgRAAIAAgLIARgGIAAgHQAAgSAIgJQAJgJAQAAQAMAAALAEIgGARQgIgDgHAAQgHAAgEAFQgDAEAAAJIAAAHIAZAAIAAARIgZAAIAABVg");
	this.shape_4.setTransform(211.7,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgKIAPgIIAHgWIANAAIAAAXIAdAAIAAARIgdAAIAAA2QAAAHAEAEQAEAEAGAAQAIAAAIgDIAAARIgJADIgMABQgeAAAAghg");
	this.shape_5.setTransform(203.9,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAtQgJgIABgPQAAgQALgHQAMgIAXgBIASAAIAAgGQAAgKgFgFQgEgFgKAAQgHAAgHADIgOAFIgHgPQAIgFAKgCQAKgCAIAAQATAAAKAIQAKAJAAASIAABEIgPAAIgFgOIgBAAQgHAJgIAEQgHADgLAAQgOAAgJgIgAAIADQgOAAgHAFQgHAFAAAJQAAAHAEAEQAEADAIAAQALAAAHgGQAIgHAAgMIAAgJg");
	this.shape_6.setTransform(194.4,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_7.setTransform(186.6,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBLIAAiTIASAAIADAOIABAAQALgQATAAQATAAALAOQAKAOAAAZQAAAYgKAOQgLAOgTABQgTgBgLgOIgBAAIABAQIAAAqgAgSgwQgFAHgBARIAAADQABATAFAHQAHAJALAAQAMAAAGgJQAGgJABgRQgBgSgGgIQgGgJgMAAQgLAAgHAIg");
	this.shape_8.setTransform(178.4,42.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_9.setTransform(164.7,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAtQgJgIAAgPQAAgQAMgHQAMgIAXgBIASAAIAAgGQAAgKgFgFQgEgFgKAAQgHAAgHADIgOAFIgHgPQAIgFAKgCQAKgCAIAAQATAAALAIQAKAJAAASIAABEIgQAAIgEgOIgBAAQgIAJgHAEQgIADgKAAQgQAAgIgIgAAJADQgPAAgHAFQgHAFAAAJQAAAHAEAEQAEADAJAAQAKAAAIgGQAGgHAAgMIAAgJg");
	this.shape_10.setTransform(156.2,40);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgxQgDgDAAgGQAAgGADgDQADgDAFAAQAGAAADADQADADAAAGQAAAGgDADQgDADgGAAQgFAAgDgDg");
	this.shape_11.setTransform(148.4,38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAoQgMgOAAgZQAAgZAMgOQANgOAXAAQAQAAANAGIgGARQgOgFgJAAQgaAAAAAiQAAASAHAIQAGAJAMAAQAPAAANgHIAAATQgGADgHACQgGABgKAAQgWAAgMgNg");
	this.shape_12.setTransform(141.2,40);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAvQgLgHgGgMQgFgMAAgQQAAgYAMgOQANgOAWAAQAXAAAMAOQANAOAAAYQAAAZgNAOQgMAOgXAAQgOAAgLgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgMAAgHAJg");
	this.shape_13.setTransform(130.6,40);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAvIAAgTQASAIAPAAQATAAAAgMQAAgEgCgCIgHgGIgNgGQgSgGgGgHQgHgHAAgKQAAgOALgHQALgHARAAQASAAAQAHIgHARQgRgHgLAAQgQAAAAAKQAAAEAEAEQAFADAOAGQANAFAFADQAGAEADAFQADAGAAAHQAAAPgLAIQgLAIgUAAQgUAAgMgGg");
	this.shape_14.setTransform(120.2,40);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjA7QgLgOAAgZQAAgYALgOQALgOATAAQAUAAAKAPIABAAIgBgSIAAglIAWAAIAACPIgSAAIgDgNIgBAAQgLAPgTAAQgTAAgLgOgAgRgFQgGAIAAASQAAARAGAJQAGAIALAAQANAAAGgHQAGgIABgRIAAgDQAAgTgHgHQgGgIgNAAQgLAAgGAJg");
	this.shape_15.setTransform(104.5,38);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQAAgYAMgPQAMgOAVAAQAUAAANAMQALAMABAWIAAALIhEAAQAAAPAIAIQAHAIAOAAQAIAAAIgCIARgGIAAASIgQAGQgIABgLAAQgWAAgOgOgAAYgKQgBgNgFgGQgGgHgLAAQgJAAgGAHQgHAGgBANIAuAAIAAAAg");
	this.shape_16.setTransform(93.5,40);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgxQgDgDAAgGQAAgGADgDQADgDAFAAQAGAAADADQADADAAAGQAAAGgDADQgDADgGAAQgFAAgDgDg");
	this.shape_17.setTransform(85.4,38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTBJIAAhVIgRAAIAAgLIARgGIAAgHQAAgSAIgJQAJgJAQAAQAMAAALAEIgGARQgIgDgHAAQgHAAgEAFQgDAEAAAJIAAAHIAZAAIAAARIgZAAIAABVg");
	this.shape_18.setTransform(79.9,37.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgxQgDgDAAgGQAAgGADgDQADgDAFAAQAGAAADADQADADAAAGQAAAGgDADQgDADgGAAQgFAAgDgDg");
	this.shape_19.setTransform(73.3,38.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXA0IAAg+QAAgMgFgGQgEgFgLAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIABAAQAFgHAIgEQAJgEAJAAQAlAAAAAlIAABCg");
	this.shape_20.setTransform(64.6,39.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjArQgJgJAAgTIAAhCIAWAAIAAA+QAAAMAFAGQAFAFAKAAQANAAAGgIQAGgIAAgSIAAgzIAWAAIAABlIgRAAIgDgNIgBAAQgFAHgIAEQgIAEgKAAQgTAAgJgJg");
	this.shape_21.setTransform(52.5,40.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAXQAGgYADgVIAVAAIABACQgEARgMAag");
	this.shape_22.setTransform(38.8,45.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQAAgYAMgPQAMgOAWAAQATAAAMAMQANAMAAAWIAAALIhEAAQABAPAHAIQAHAIANAAQAKAAAHgCIARgGIAAASIgQAGQgIABgLAAQgXAAgNgOgAAYgKQAAgNgGgGQgGgHgKAAQgKAAgGAHQgGAGgCANIAuAAIAAAAg");
	this.shape_23.setTransform(31.2,40);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXA0IAAg+QAAgMgFgGQgEgFgLAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIABAAQAFgHAIgEQAJgEAJAAQAlAAAAAlIAABCg");
	this.shape_24.setTransform(19.7,39.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAvQgKgHgHgMQgFgMAAgQQgBgYANgOQANgOAWAAQAXAAAMAOQAOAOAAAYQAAAZgOAOQgMAOgXAAQgNAAgMgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgMAAgHAJg");
	this.shape_25.setTransform(7.8,40);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXBIIAAg/QAAgLgFgGQgEgFgLAAQgMAAgHAIQgGAHAAATIAAAzIgWAAIAAiPIAWAAIAAAlIgBASIABAAQAEgHAIgEQAIgEAKAAQAlAAAAAkIAABDg");
	this.shape_26.setTransform(225.7,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgKIAPgIIAHgWIANAAIAAAXIAdAAIAAARIgdAAIAAA2QAAAHAEAEQAEAEAGAAQAIAAAIgDIAAARIgJADIgMABQgeAAAAghg");
	this.shape_27.setTransform(215.8,16.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgxQgDgDAAgGQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAGgDADQgDADgGAAQgFAAgDgDg");
	this.shape_28.setTransform(209.6,15.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWAzIgNgwIgJgiIAAAAIgIAjIgOAvIgYAAIgchlIAVAAIAOAyIAGAfIABAAIADgPIACgNIARg1IAWAAIAPA1IAEAOIADAOIAAAAQABgLAGgUIANgyIAWAAIgeBlg");
	this.shape_29.setTransform(199.2,17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAfIAAg2IgOAAIAAgKIAPgIIAHgWIANAAIAAAXIAdAAIAAARIgdAAIAAA2QAAAHAEAEQAEAEAGAAQAIAAAIgDIAAARIgJADIgMABQgeAAAAghg");
	this.shape_30.setTransform(182.7,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAXA0IAAg+QAAgMgFgGQgEgFgLAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIABAAQAFgHAIgEQAJgEAJAAQAlAAAAAlIAABCg");
	this.shape_31.setTransform(173.1,17.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQgBgYANgPQANgOAUAAQAVAAAMAMQAMAMgBAWIAAALIhDAAQAAAPAIAIQAHAIAOAAQAIAAAJgCIAQgGIAAASIgQAGQgIABgKAAQgYAAgNgOgAAYgKQgBgNgGgGQgFgHgLAAQgJAAgGAHQgHAGAAANIAtAAIAAAAg");
	this.shape_32.setTransform(161.6,17.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA2A0IAAg+QAAgMgFgGQgEgFgKAAQgMAAgGAIQgGAHAAARIAAA1IgVAAIAAg+QAAgMgFgGQgEgFgJAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIACAAQAEgHAIgEQAIgEAKAAQAXAAAHAQIACAAQAEgIAIgEQAJgEAKAAQATAAAIAJQAJAJAAATIAABCg");
	this.shape_33.setTransform(147.1,17.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAvQgKgHgHgMQgFgMgBgQQAAgYAOgOQAMgOAXAAQAWAAANAOQANAOgBAYQABAZgNAOQgNAOgXAAQgNAAgMgGgAgTgZQgGAJAAAQQAAAjAZAAQAaAAAAgjQAAgigaAAQgMAAgHAJg");
	this.shape_34.setTransform(132.2,17.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA2A0IAAg+QAAgMgFgGQgEgFgKAAQgMAAgGAIQgGAHAAARIAAA1IgVAAIAAg+QAAgMgFgGQgEgFgJAAQgNAAgGAIQgGAIAAASIAAAzIgWAAIAAhlIARAAIADANIACAAQAEgHAIgEQAIgEAKAAQAXAAAHAQIACAAQAEgIAIgEQAJgEAKAAQATAAAIAJQAJAJAAATIAABCg");
	this.shape_35.setTransform(117.3,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AguBJIAAgRIALABQAQAAAHgTIADgJIgphmIAYAAIAUA6QAGANAAAJIAAAAIAEgLIAXhFIAYAAIgsBzQgLAggcAAIgOgBg");
	this.shape_36.setTransform(98.3,19.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeA0IAAhlIARAAIADASIABAAQAEgJAIgGQAIgFAJAAIAMABIgDAUQgEgBgGAAQgMAAgIAIQgIAJAAAOIAAA0g");
	this.shape_37.setTransform(89.7,17.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQAAgYAMgPQAMgOAVAAQAVAAAMAMQAMAMAAAWIAAALIhEAAQAAAPAIAIQAHAIAOAAQAIAAAJgCIAQgGIAAASIgQAGQgIABgKAAQgXAAgOgOgAAYgKQgBgNgFgGQgGgHgLAAQgJAAgGAHQgGAGgCANIAuAAIAAAAg");
	this.shape_38.setTransform(79.6,17.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAzIgnhlIAXAAIAVA6QAGAPAAAKIAAAAQABgHAGgSIAVg6IAXAAIgnBlg");
	this.shape_39.setTransform(69,17.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAnQgNgOAAgYQAAgYAMgPQAMgOAVAAQAVAAAMAMQAMAMAAAWIAAALIhEAAQAAAPAIAIQAHAIAOAAQAIAAAJgCIAQgGIAAASIgQAGQgIABgKAAQgXAAgOgOgAAYgKQgBgNgFgGQgGgHgLAAQgJAAgGAHQgGAGgCANIAuAAIAAAAg");
	this.shape_40.setTransform(58.9,17.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgfAnQgOgOAAgYQAAgYANgPQAMgOAWAAQATAAAMAMQAMAMAAAWIAAALIhDAAQABAPAHAIQAIAIAMAAQAJAAAJgCIAQgGIAAASIgQAGQgIABgLAAQgXAAgNgOgAAYgKQAAgNgHgGQgFgHgKAAQgKAAgGAHQgGAGgBANIAtAAIAAAAg");
	this.shape_41.setTransform(43.1,17.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAzIAAgNIAzhIIgwAAIAAgQIBIAAIAAAPIgxBGIAzAAIAAAQg");
	this.shape_42.setTransform(33.1,17.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgxQgDgDAAgGQAAgFADgEQADgDAFAAQAGAAADADQADAEAAAFQAAAGgDADQgDADgGAAQgFAAgDgDg");
	this.shape_43.setTransform(26,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgfAnQgOgOAAgYQAAgYANgPQAMgOAWAAQATAAAMAMQAMAMAAAWIAAALIhDAAQABAPAHAIQAIAIAMAAQAJAAAJgCIAQgGIAAASIgQAGQgIABgLAAQgXAAgNgOgAAYgKQAAgNgHgGQgFgHgKAAQgKAAgGAHQgGAGgBANIAtAAIAAAAg");
	this.shape_44.setTransform(17.9,17.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgqA+IAAgVQAJAFAKACQALADAJAAQAMAAAGgFQAGgFAAgJQAAgHgFgFQgGgGgRgHQgTgHgHgJQgIgKAAgNQAAgRAMgKQAMgKAUAAQATAAATAJIgHASQgSgIgOAAQgKAAgFAFQgGAFAAAHQAAAGACADQADAEAFADQAFAEAMAFQAPAGAHAFQAHAFADAHQADAHAAAJQAAASgNAKQgNALgWAAQgXAAgOgIg");
	this.shape_45.setTransform(7.3,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.4,52.7);


(lib.engage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.engage();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24.5,48,49);


(lib.discover_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.discover();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23,48,46);


(lib.cta_bkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bHHIAAuNMAu3AAAIAAONg");
	this.shape.setTransform(150,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,91);


(lib.clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.467)").s().p("A3ZTdMAAAgm5MAuzAAAMAAAAm5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.buttonsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAvQgJgFgIgHQgPgOAAgVQAAgUAPgPQAIgHAJgEQAJgDAKAAQALAAAJADQAJAEAIAHQAPAPAAAUQAAAVgPAOQgIAHgJAFQgJADgLAAQgKAAgJgDgAgRgTQgGAIAAALQAAAGACAFIAEAJQAIAHAJAAQAKAAAHgHQAEgFACgEQABgFAAgGQAAgLgHgIQgHgHgKAAQgJAAgIAHg");
	this.shape.setTransform(157.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxAxIAAg0QAAgLgEgGQgEgFgIAAQgEAAgEABQgDACgDADQgGAGAAALIAAAzIgbAAIAAg0IAAgKQgBgEgCgDQgEgFgHAAQgEAAgEABQgDACgDADQgDADgCAEQgBAEAAAGIAAAzIgbAAIAAhgIAbAAIAAALQAFgGAHgDQAGgDAHAAQAJAAAIAFQAGAFAEAIIAHgIIAIgGIAKgDIAJgBQAJAAAHACQAHADAFAFQAFAFADAHQACAIAAAJIAAA6g");
	this.shape_1.setTransform(143,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAvQgJgEgHgHQgIgHgDgIQgEgKAAgLQAAgLAEgJQADgJAIgHQAPgNATAAQAKAAAIADQAJADAHAGQAHAGADAIQAEAJAAAKIAAANIhGAAQAAAFADADIAFAGQAHAEAIAAQAHAAAGgCQAGgCAFgFIAPAQQgIAIgKAEQgKAEgLAAQgKAAgJgDgAAVgJIgCgIQgBgDgDgCQgGgFgIAAQgHAAgHAFQgDADgCADQgCADAAAEIApAAIAAAAg");
	this.shape_2.setTransform(128.6,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4A/IAAh9IAsAAQAhAAASAQQAJAJAFALQAEAMAAAOQAAAdgRARQgJAIgOAFQgNAEgRAAgAgcAmIASAAQASAAAKgKQALgJAAgTQAAgIgDgIQgCgHgGgFQgKgKgUAAIgQAAg");
	this.shape_3.setTransform(116.4,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA2QgJgJAAgQIAAgrIgMAAIAAgUIAMAAIAAgdIAaAAIAAAdIAXAAIAAAUIgXAAIAAAqQAAAGADADQADADAEAAQADAAAEgCQADgBACgEIALATQgNAMgOAAQgNAAgKgKg");
	this.shape_4.setTransform(100.7,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAuQgMgEgKgIIAMgRQAIAHAIACQAIAEAHAAQAGAAADgDQADgCAAgDQAAgEgFgDQgEgDgGgCIgNgEIgKgGQgLgFAAgOQAAgOALgHQAGgFAHgCQAHgCAHAAQAJAAAIACQAJAEAIAFIgKASQgMgJgNAAQgFAAgDACQgDACAAAEQAAADAEADIAMAEIANAFIAJAFQAKAFAAAOQAAAOgKAJQgLAJgQAAQgKAAgLgEg");
	this.shape_5.setTransform(91.7,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAvQgJgEgHgHQgIgHgDgIQgEgKAAgLQAAgLAEgJQADgJAIgHQAPgNATAAQAKAAAIADQAJADAHAGQAHAGADAIQAEAJAAAKIAAANIhGAAQAAAFADADIAFAGQAHAEAIAAQAHAAAGgCQAGgCAFgFIAPAQQgIAIgKAEQgKAEgLAAQgKAAgJgDgAAVgJIgCgIQgBgDgDgCQgGgFgIAAQgHAAgHAFQgDADgCADQgCADAAAEIApAAIAAAAg");
	this.shape_6.setTransform(81.6,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAnQgMgKAAgUIAAg5IAcAAIAAA0QAAAWAQAAQAHAAAHgGQAFgGAAgLIAAgzIAbAAIAABgIgbAAIAAgNQgFAHgGAEQgHADgGAAQgRAAgKgKg");
	this.shape_7.setTransform(70.1,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBDIAAgrQgLAJgOAAQgSAAgOgOQgHgHgEgJQgDgIAAgLQAAgLADgJQAEgJAHgHQAGgHAIgDQAHgEAJAAQAPAAAMAMIAAgKIAcAAIAACDgAgPgjQgDADgCAFQgCAFAAAGQAAAMAHAHQAHAHAJAAQAEAAAFgCQADgCADgDQAHgHAAgMQAAgGgCgFQgBgFgEgDQgGgIgJAAQgJAAgHAIg");
	this.shape_8.setTransform(58.2,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAvQgJgEgHgHQgIgHgDgIQgEgKAAgLQAAgLAEgJQADgJAIgHQAPgNATAAQAKAAAIADQAJADAHAGQAHAGADAIQAEAJAAAKIAAANIhGAAQAAAFADADIAFAGQAHAEAIAAQAHAAAGgCQAGgCAFgFIAPAQQgIAIgKAEQgKAEgLAAQgKAAgJgDgAAVgJIgCgIQgBgDgDgCQgGgFgIAAQgHAAgHAFQgDADgCADQgCADAAAEIApAAIAAAAg");
	this.shape_9.setTransform(46.9,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUA/IgbgoIgTAAIAAAoIgcAAIAAh9IAwAAQANAAALADQAKACAHAFQAMAKAAAWQAAAPgGAJQgGAJgMAFIAgAtgAgagBIAVAAIALAAQAFgCACgCQAFgFAAgKIgBgJQgBgEgDgBQgFgEgNAAIgVAAg");
	this.shape_10.setTransform(35.2,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F36D24").s().p("ArTDqQhhAAhFhEQhEhFAAhhQAAhgBEhFQBFhEBhAAIWnAAQBhAABFBEQBEBFAABgQAABhhEBFQhFBEhhAAg");
	this.shape_11.setTransform(95.8,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.6,46.9);


(lib.bubble2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bubble1svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E9AD2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgApFuKQicA4h4BoQh4BohCCGQhECLAACYQgBCxBcCcQBZCZCcBoIiwFYIG+jeQB6AjCMAAQAyAAApgFQgshqAAhpQAAjPCSikQCOihDhg5QBkgZBlAAQAzAAAyAGQgbjkirivQiqiuj8hAQh5geh5AAQixAAihA7g");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bubble_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAEgDAEQgEAEgFAAQgEAAgDgEg");
	this.shape.setTransform(106.1,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA1QgLgEgKgJIALgPQAJAIAJADQAJAEAIAAIAIgBIAGgDQAGgEAAgGQAAgGgGgEQgFgEgMgDQgLgDgHgCQgGgDgFgCQgFgEgCgGQgDgGAAgIQAAgIADgFQADgHAFgDQAGgFAHgCQAHgCAHAAQAHAAAPADQAKAEAIAGIgKAPQgFgFgJgCQgIgDgIAAQgIgBgFAEQgFADAAAHQAAADABADQABADADABQAFAEARAEQARAEAIAHQAFAEACAFQACAFAAAIQAAAPgLAJQgFAEgIACQgHADgJAAQgMAAgMgFg");
	this.shape_1.setTransform(99.7,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA4IgaglIgYAAIAAAlIgTAAIAAhvIApAAQAMAAAJADQAJACAGAEQALAJAAATQAAAOgGAHQgGAJgMADIAdApgAgbACIAXAAQAHgBAGgBQAFAAADgDQAGgFAAgKQAAgGgCgEQgBgDgDgCQgGgEgOgBIgYAAg");
	this.shape_2.setTransform(90.4,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBNAAIAAASIg6AAIAAAeIA0AAIAAAQIg0AAIAAAeIA8AAIAAARg");
	this.shape_3.setTransform(80.3,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA4IAAheIgiAAIAAgRIBVAAIAAARIgiAAIAABeg");
	this.shape_4.setTransform(70.9,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA4IAAheIgiAAIAAgRIBVAAIAAARIgiAAIAABeg");
	this.shape_5.setTransform(62.2,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA4IgLgaIg3AAIgMAaIgUAAIAyhvIATAAIAxBvgAAUANIgUgtIgTAtIAnAAg");
	this.shape_6.setTransform(52.5,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsA4IAAhXIgnBNIgJAAIgnhNIAABXIgTAAIAAhvIAdAAIAhBFIAihFIAdAAIAABvg");
	this.shape_7.setTransform(39.7,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA4IAAheIgiAAIAAgRIBVAAIAAARIgiAAIAABeg");
	this.shape_8.setTransform(24.7,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA4IAAhvIASAAIAABvg");
	this.shape_9.setTransform(18.4,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBNAAIAAASIg6AAIAAAeIA0AAIAAAQIg0AAIAAAdIA8AAIAAASg");
	this.shape_10.setTransform(97.6,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA4IgagmIgYAAIAAAmIgTAAIAAhvIApAAQAMAAAJACQAJADAGAEQALAIAAAUQAAANgGAIQgGAJgMAEIAdAogAgbABIAXAAQAHABAGgCQAFAAADgCQAGgGAAgKQAAgGgCgEQgBgEgDgCQgGgDgOAAIgYAAg");
	this.shape_11.setTransform(87.7,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBNAAIAAASIg6AAIAAAeIA0AAIAAAQIg0AAIAAAdIA8AAIAAASg");
	this.shape_12.setTransform(77.5,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcA4IAAguIg3AAIAAAuIgTAAIAAhvIATAAIAAAwIA3AAIAAgwIATAAIAABvg");
	this.shape_13.setTransform(66.8,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYA4IgXhLIgBAAIgXBLIgTAAIgnhvIAVAAIAcBQIAZhQIAQAAIAYBQIAchQIAVAAIgoBvg");
	this.shape_14.setTransform(53.2,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBNAAIAAASIg6AAIAAAeIA0AAIAAAQIg0AAIAAAdIA8AAIAAASg");
	this.shape_15.setTransform(37.6,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIAsAAQAKAAAIADQAJADAEAEQAHAJAAAKQAAAHgCAFQgCAFgEADIgEADIgEACQAKABAGAIIAFAIQACAEAAAFQAAALgIAJQgFAGgIADQgIACgMAAgAgZAmIAdAAQAKAAAGgCIAEgGQABgDAAgEQAAgPgYAAIgaAAgAgZgIIAYAAQAUgBAAgOQAAgEgCgCQgBgDgCgCIgHgCIgIgBIgYAAg");
	this.shape_16.setTransform(27.8,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,-0.2,118.2,44);


(lib.background_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.569)").ss(1,1,1).p("A3bLTIAA+0MAu3AAAMAAAAnDIgKAA");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E8").s().p("AXSTiIAAraMgutADLIAA+0MAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,302,252);


(lib.analyze_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.analyze();
	this.instance.parent = this;
	this.instance.setTransform(-22,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-27,44,54);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(63.3,15.5,0.66,0.66,0,0,0,95.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,126.5,30.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(28.5,9,1,1,0,0,0,28.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,57.1,17.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(4.9,6,1,1,0,0,0,4.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,9.8,12), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiKBkIAAjHIEVAAIAADHg");
	mask.setTransform(13.9,10);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(13.9,13,1,1,0,0,0,4.9,6);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(9,7,9.8,12), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj/A8IAAh3IH/AAIAAB3g");
	mask.setTransform(34.6,13);

	// Layer 3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(13.8,10,1,1,0,0,0,13.8,10);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(9,7,18.7,12), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj/A8IAAh3IH/AAIAAB3g");
	mask.setTransform(34.6,13);

	// Layer 3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(30.1,10,1,1,0,0,0,30.1,10);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,11.5,1,1,0,0,0,28.5,9);
	this.instance_1.alpha = 0.281;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(9,7,51.2,12), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj/A8IAAh3IH/AAIAAB3g");
	mask.setTransform(34.6,13);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(35.8,10.2,1,1,0,0,0,35.8,10.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(9,7,51.2,12), null);


(lib.replay_btnsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replay_btn.svg
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(35.8,10.2,1,1,0,0,0,35.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,20.4);


(lib.icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// analyze
	this.instance = new lib.analyze_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(122.5,0.6,0.136,0.136,0,0,0,1.9,1.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:123,y:2,alpha:1},5,cjs.Ease.get(-1)).wait(6));

	// publish
	this.instance_1 = new lib.publish_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.6,0,0.19,0.19,0,0,0,0.6,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:75,y:0.5,alpha:1},5,cjs.Ease.get(-1)).wait(11));

	// engage
	this.instance_2 = new lib.engage_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.5,-0.1,0.146,0.145,0,0,0,1.7,-0.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:30,y:0.5,alpha:1},5,cjs.Ease.get(-1)).wait(16));

	// listen
	this.instance_3 = new lib.listen_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.1,0.7,0.205,0.205,0,0,0,-0.5,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-14.5,y:1.5,alpha:1},5,cjs.Ease.get(-1)).wait(21));

	// discover
	this.instance_4 = new lib.discover_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-65.6,-0.3,0.208,0.208,0,0,0,-1.2,-0.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-66,y:-1,alpha:1},5,cjs.Ease.get(-1)).wait(26));

	// search
	this.instance_5 = new lib.search_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-116.3,-0.2,0.164,0.163,0,0,0,-1.6,-1.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-117,y:0,alpha:1},4,cjs.Ease.get(-1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-4.8,9,9.6);


(lib.bubble_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubble1svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.replay_btnsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.2,-2.8,1,1,0,0,0,35.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-25.6,-6,51.2,12), null);


// stage content:
(lib.sysomos = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.click_tag.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.adobe.com", "_blank");
		}
	}
	this.frame_203 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(5);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(203).call(this.frame_203).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXazaMAAAAm6MguuAAAA3UzfMAuuAAAA3ZTgMAAAgm6");
	this.shape.setTransform(150.3,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(204));

	// replay
	this.movieClip_2 = new lib.Symbol3();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(-33.7,16.2,1,1,0,0,0,1.2,-2.9);
	this.movieClip_2._off = true;
	new cjs.ButtonHelper(this.movieClip_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(193).to({_off:false},0).to({x:36.3},10).wait(1));

	// clicktag
	this.click_tag = new lib.clicktag();
	this.click_tag.parent = this;
	this.click_tag.setTransform(150.3,125.5);
	new cjs.ButtonHelper(this.click_tag, 0, 1, 2, false, new lib.clicktag(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.569)").ss(1,1,1).p("A3ZzcMAuzAAAMAAAAm5MguzAAAg");
	this.shape_1.setTransform(150.3,125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.click_tag}]}).wait(204));

	// icons
	this.instance = new lib.icons();
	this.instance.parent = this;
	this.instance.setTransform(145.5,127.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(46));

	// copy
	this.instance_1 = new lib.frame3_copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.3,-198.5,1,1,0,0,0,130.7,26.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({y:54.5},20,cjs.Ease.get(1)).wait(65));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_119 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_120 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_121 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_122 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_123 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_124 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_125 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_126 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_127 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_128 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_129 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_130 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_131 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_132 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_133 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_134 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_135 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_136 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");
	var mask_graphics_137 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_138 = new cjs.Graphics().p("A3ZvaMAu3AAAIAAbsMgu7ADJg");
	var mask_graphics_139 = new cjs.Graphics().p("A3ZvZMAu3AAAIAAbrMgu7ADIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_graphics_119,x:150.8,y:-150.3}).wait(1).to({graphics:mask_graphics_120,x:150.8,y:-126.1}).wait(1).to({graphics:mask_graphics_121,x:150.8,y:-103}).wait(1).to({graphics:mask_graphics_122,x:150.8,y:-81.3}).wait(1).to({graphics:mask_graphics_123,x:150.8,y:-60.7}).wait(1).to({graphics:mask_graphics_124,x:150.8,y:-41.4}).wait(1).to({graphics:mask_graphics_125,x:150.8,y:-23.4}).wait(1).to({graphics:mask_graphics_126,x:150.8,y:-6.6}).wait(1).to({graphics:mask_graphics_127,x:150.8,y:9}).wait(1).to({graphics:mask_graphics_128,x:150.8,y:23.3}).wait(1).to({graphics:mask_graphics_129,x:150.8,y:36.4}).wait(1).to({graphics:mask_graphics_130,x:150.8,y:48.2}).wait(1).to({graphics:mask_graphics_131,x:150.8,y:58.8}).wait(1).to({graphics:mask_graphics_132,x:150.8,y:68.1}).wait(1).to({graphics:mask_graphics_133,x:150.8,y:76.2}).wait(1).to({graphics:mask_graphics_134,x:150.8,y:83.1}).wait(1).to({graphics:mask_graphics_135,x:150.8,y:88.7}).wait(1).to({graphics:mask_graphics_136,x:150.8,y:93}).wait(1).to({graphics:mask_graphics_137,x:150.8,y:96.2}).wait(1).to({graphics:mask_graphics_138,x:150.8,y:98}).wait(1).to({graphics:mask_graphics_139,x:150.8,y:98.6}).wait(65));

	// background
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,-124);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},119).to({state:[{t:this.instance_3}]},20).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({_off:true,y:125},20,cjs.Ease.get(1)).wait(65));

	// background shadow
	this.instance_4 = new lib.background_shadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151,-124.2,1,1,0,0,0,150,125);
	this.instance_4.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({y:124.5},20,cjs.Ease.get(1)).wait(65));

	// logo
	this.instance_5 = new lib.sysomossvg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(71.2,329.1,0.2,0.2,0,0,0,286.6,48);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({y:222.1},20,cjs.Ease.get(1)).wait(65));

	// button
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(224.4,325.5,1,1,0,0,0,63.2,15.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({y:220},20,cjs.Ease.get(1)).wait(65));

	// background
	this.instance_7 = new lib.cta_bkg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(151,385,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({y:284},20,cjs.Ease.get(1)).wait(65));

	// logo
	this.instance_8 = new lib.logosvg("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(14.2,217.6,0.2,0.2,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},145).wait(59));

	// bubble_2_copy
	this.instance_9 = new lib.bubble_copy("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(201.1,158.4,1,1,0,0,0,59.1,22);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).to({alpha:1},12).to({_off:true},64).wait(59));

	// bubble_2
	this.instance_10 = new lib.bubble2_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(151,125,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},64).wait(59));

	// bubble_1
	this.instance_11 = new lib.bubble_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(378.4,238.2,3.88,3.88,0,0,0,150,125);
	this.instance_11.alpha = 0.5;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).to({scaleX:1,scaleY:1,x:151,y:125},38).wait(9).to({startPosition:0},0).to({alpha:1},10,cjs.Ease.get(-1)).to({_off:true},66).wait(59));

	// background
	this.instance_12 = new lib.beach_bkgd();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-300,-61);

	this.instance_13 = new lib.Tween3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,94.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(130,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_14}]},55).to({state:[]},79).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({_off:true,x:130},55,cjs.Ease.get(-1)).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,64,601,312);
// library properties:
lib.properties = {
	id: 'E664B6B0FB434FB2BBE48E646C57ADDA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sysomos_atlas_.png?1498583825373", id:"sysomos_atlas_"}
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
an.compositions['E664B6B0FB434FB2BBE48E646C57ADDA'] = {
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