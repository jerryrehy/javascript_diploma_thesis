/* My Remade JointJS Library v 0.1

    USING:  JointJS v0.8.1 - JavaScript diagramming library  2014-02-24
            
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.

*/

if (typeof exports === 'object') {

    var joint = {
        util: require('../src/core').util,
        shapes: {
            basic: require('./joint.shapes.basic')
        },
        dia: {
            Link: require('../src/joint.dia.link').Link
        }
    };
}

joint.shapes.mylib = {};

//------------------ OBECNÁ DEFINICE HRADLA -------------------------------------------------//

joint.shapes.mylib.Hradlo = joint.shapes.basic.Generic.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/><text class="jm"/></g><text class="label"/><circle class="input"/><path class="wire"/><circle class="output"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo',
        size: { width: 1, height: 1 },        
        attrs: {
            '.': { magnet: false },
            rect: {
                width: 50, height: 70,
                stroke: 'black'
            },
            circle: {
                r: 6,
                stroke: 'black',
            },
            text: {
                fill: 'black',
                'pointer-events': 'none'
            },
            '.wire': { ref: 'rect', 'ref-y': .5, stroke: 'black'},
            '.label': { text: 'Model', 'ref-x': .3, 'ref-y': .1 },
            '.jm': { text: 'io'},
        }

    }, joint.shapes.basic.Generic.prototype.defaults),

    operation: function() { return true; } 
});

//---------------------- HRADLA IO --------------------------------------------//

joint.shapes.mylib.HradloIO = joint.shapes.mylib.Hradlo.extend({ 
    markup: '<g class="rotatable"><g class="scalable"><rect/><text class="jmeno"/></g><text class="label"/><path class="wire"/><circle/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloIO',
        size: { width: 50, height: 35 },
        attrs: {
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.INPUT = joint.shapes.mylib.HradloIO.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.INPUT',
        attrs: {
            '.wire': { 'ref-dx': 0, d: 'M 0 0 L 25 0' },
            
            '.output': { ref: 'rect', 'ref-dx': 30, 'ref-y': .5, magnet: true, port: 'q' },
             '.jm': { text: 'q', ref: 'rect', 'ref-dx': 45, 'ref-dy': -45 },
            
            '.label': { text: 'X0', ref: 'rect', 'ref-x': 15, 'ref-y': 10, stroke: 'black'},                
        }
        
    }, joint.shapes.mylib.HradloIO.prototype.defaults)
});

joint.shapes.mylib.CLK = joint.shapes.mylib.HradloIO.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.CLK',
        attrs: {
            '.wire': { 'ref-dx': 0, d: 'M 0 0 L 25 0' },
            '.output': { ref: 'rect', 'ref-dx': 30, 'ref-y': .5, magnet: true, port: 'q' },
             '.jm': { text: 'q', ref: 'rect', 'ref-dx': 45, 'ref-dy': -45 },
            
            '.label': { text: 'CLK0', ref: 'rect', 'ref-x': 5, 'ref-y': 10, stroke: 'black'}            
        }
        
    }, joint.shapes.mylib.HradloIO.prototype.defaults)
});

joint.shapes.mylib.OUTPUT = joint.shapes.mylib.HradloIO.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><path class="wire"/><circle class="input"/></g><g><text class="jm"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.OUTPUT',
        attrs: {
            '.wire': { 'ref-x': -25, d: 'M 0 0 L 25 0' },
            '.input': { ref: 'rect', 'ref-x': -22, 'ref-y': .5, magnet: 'passive', port: 'a' },
            '.jm': { text: 'a', ref: 'rect', 'ref-dx': -90, 'ref-dy': -45 },
            
            '.label': { text: 'Z0', ref: 'rect', 'ref-x': 15, 'ref-y': 10, stroke: 'black'}            
        }
        
    }, joint.shapes.mylib.HradloIO.prototype.defaults)
});

joint.shapes.mylib.VCC = joint.shapes.mylib.HradloIO.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.VCC',
        attrs: {
            '.wire': { 'ref-dx': 0, d: 'M 0 0 L 25 0' },
            '.output': { ref: 'rect', 'ref-dx': 30, 'ref-y': .5, magnet: true, port: 'q' },
             '.jm': { text: 'q', ref: 'rect', 'ref-dx': 45, 'ref-dy': -45 },
            
            '.label': { text: 'vcc', ref: 'rect', 'ref-x': 15, 'ref-y': 10, stroke: 'black'}            
        }
        
    }, joint.shapes.mylib.HradloIO.prototype.defaults)
});

joint.shapes.mylib.GND = joint.shapes.mylib.HradloIO.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'mylib.GND',
        attrs: {
            '.wire': { 'ref-dx': 0, d: 'M 0 0 L 25 0' },
            '.output': { ref: 'rect', 'ref-dx': 30, 'ref-y': .5, magnet: true, port: 'q' },
             '.jm': { text: 'q', ref: 'rect', 'ref-dx': 45, 'ref-dy': -45 },
            
            '.label': { text: 'gnd', ref: 'rect', 'ref-x': 15, 'ref-y': 10, stroke: 'black'}            
        }
        
    }, joint.shapes.mylib.HradloIO.prototype.defaults)
});

//---------------------- HRADLA BEZ NOT ---------------------------------------//

joint.shapes.mylib.Hradlo11 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo11',
        size: { width: 50, height: 70 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'a' },            
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': .5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo21 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo21',
        size: { width: 50, height: 70 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'b' },
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo31 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo31',
        size: { width: 50, height: 90 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'b' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'c' },
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo41 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo41',
        size: { width: 60, height: 100 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'b' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'c' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'd' },            
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

//-------------------- HRADLA S NOT -------------------------------------//

joint.shapes.mylib.Hradlo11N = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="not_gate"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo11N',
        size: { width: 50, height: 70 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'a' },
            '.not_gate': { ref: 'rect', 'ref-dx': 8, 'ref-y': .5, stroke: 'black'},
            '.output': { ref: 'rect', 'ref-dx': 40, 'ref-y': .5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo21N = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="not_gate"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo21N',
        size: { width: 50, height: 70 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'b' },
            '.not_gate': { ref: 'rect', 'ref-dx': 8, 'ref-y': 0.5, stroke: 'black'},
            '.output': { ref: 'rect', 'ref-dx': 40, 'ref-y': 0.5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo31N = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="not_gate"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo31N',
        size: { width: 50, height: 90 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'b' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'c' },
            '.not_gate': { ref: 'rect', 'ref-dx': 8, 'ref-y': 0.5, stroke: 'black'},
            '.output': { ref: 'rect', 'ref-dx': 40, 'ref-y': 0.5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.Hradlo41N = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="not_gate"/><path class="wire"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.Hradlo41N',
        size: { width: 60, height: 100 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'b' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'c' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'd' },
            '.not_gate': { ref: 'rect', 'ref-dx': 8, 'ref-y': 0.5, stroke: 'black'},
            '.output': { ref: 'rect', 'ref-dx': 40, 'ref-y': 0.5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

//-------------------------------- Hradla jiná ----------------------------------------------//

joint.shapes.mylib.HradloMux31 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloMux31',
        size: { width: 50, height: 70 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'a0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'a1' },
            
            '.input3': { ref: 'rect', 'ref-dx': -30, 'ref-dy': 2, magnet: 'passive', port: 'sel' },
            
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': .5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloMux61 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloMux61',
        size: { width: 65, height: 100 },
        attrs: {
            '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'a1' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'a2' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'a3' },
            
            '.input5': { ref: 'rect', 'ref-dx': -48, 'ref-dy': 2, magnet: 'passive', port: 'sel0' },
            '.input6': { ref: 'rect', 'ref-dx': -24, 'ref-dy': 2, magnet: 'passive', port: 'sel1' },
            
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': .5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloMux11_1 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="input11"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloMux11_1',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'a0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a1' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a2' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a3' },
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a4' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'a5' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'a6' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'a7' },
            
             '.input9': { ref: 'rect', 'ref-dx': -78, 'ref-dy': 2, magnet: 'passive', port: 'sel0' },
            '.input10': { ref: 'rect', 'ref-dx': -48, 'ref-dy': 2, magnet: 'passive', port: 'sel1' },
            '.input11': { ref: 'rect', 'ref-dx': -18, 'ref-dy': 2, magnet: 'passive', port: 'sel2' },
            
            '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': .5, magnet: true, port: 'q' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloDec14 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloDec14',
        size: { width: 85, height: 150 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'sel0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'sel1' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'y0' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'y1' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'y2' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'y3' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloDec18 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/><circle class="output5"/><circle class="output6"/><circle class="output7"/><circle class="output8"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloDec18',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'sel0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'sel1' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'sel2' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.15, magnet: true, port: 'y0' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.25, magnet: true, port: 'y1' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.35, magnet: true, port: 'y2' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.45, magnet: true, port: 'y3' },
            '.output5': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.55, magnet: true, port: 'y4' },
            '.output6': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.65, magnet: true, port: 'y5' },
            '.output7': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.75, magnet: true, port: 'y6' },
            '.output8': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.85, magnet: true, port: 'y7' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloPrCo83 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloPrCo83',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'a0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a1' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a2' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a3' },
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a4' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'a5' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'a6' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'a7' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'q0' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'q1' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'q2' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'v' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloPrCo42 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="output"/><circle class="output2"/><circle class="output3"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloPrCo42',
        size: { width: 100, height: 150 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'a0' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'a1' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'a2' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'a3' },
            
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q0' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q1' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'v' },

        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloRS22 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloRS22',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'r' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 's' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloD22 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloD22',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'd' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'clk' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloD42 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloD42',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'd' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'clk' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'ar' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'as' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloD42SR = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloD42SR',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.2, magnet: 'passive', port: 'd' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.4, magnet: 'passive', port: 'clk' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.6, magnet: 'passive', port: 'ss' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.8, magnet: 'passive', port: 'sr' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloJK32 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloJK32',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'j' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'k' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'clk' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloJK52AR = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloJK52AR',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.1, magnet: 'passive', port: 'j' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'k' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'clk' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'as' },
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.9, magnet: 'passive', port: 'ar' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloJK52SR = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloJK52SR',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.1, magnet: 'passive', port: 'j' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'k' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'clk' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'ss' },
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.9, magnet: 'passive', port: 'sr' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 'q' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'qn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloHALFADD = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloHALFADD',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'b' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 's' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'c' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloFULLADD = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloFULLADD',
        size: { width: 80, height: 120 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.3, magnet: 'passive', port: 'a' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.5, magnet: 'passive', port: 'b' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.7, magnet: 'passive', port: 'cin' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 's' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 'cout' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloADD4 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/><circle class="output5"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloADD4',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.05, magnet: 'passive', port: 'a3' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'a2' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a1' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a0' },
            
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'b3' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'b2' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'b1' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'b0' },
            
            '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'cin' },
            '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.95, magnet: 'passive', port: 'invb' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.1, magnet: true, port: 's3' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.3, magnet: true, port: 's2' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 's1' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.7, magnet: true, port: 's0' },
            '.output5': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.9, magnet: true, port: 'cout' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloMUL8 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/><circle class="output5"/><circle class="output6"/><circle class="output7"/><circle class="output8"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/><text class="jm16"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloMUL8',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'a3' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a2' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a1' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a0' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'b3' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'b2' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'b1' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'b0' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.15, magnet: true, port: 's7' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.25, magnet: true, port: 's6' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.35, magnet: true, port: 's5' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.45, magnet: true, port: 's4' },
            '.output5': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.55, magnet: true, port: 's3' },
            '.output6': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.65, magnet: true, port: 's2' },
            '.output7': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.75, magnet: true, port: 's1' },
            '.output8': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.85, magnet: true, port: 's0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloCLEQ = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="output"/><circle class="output2"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloCLEQ',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'a3' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a2' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a1' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a0' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'b3' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'b2' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'b1' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'b0' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.15, magnet: true, port: 'leq' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.25, magnet: true, port: 'leqn' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloUDCOUNTER = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/><circle class="output5"/><circle class="output6"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloUDCOUNTER',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.10, magnet: 'passive', port: 'clk' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.20, magnet: 'passive', port: 'clk_en' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.30, magnet: 'passive', port: 'sreset' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.40, magnet: 'passive', port: 'spreset' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.50, magnet: 'passive', port: 'a3' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.60, magnet: 'passive', port: 'a2' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.70, magnet: 'passive', port: 'a1' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.80, magnet: 'passive', port: 'a0' },
            '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.90, magnet: 'passive', port: 'down' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.15, magnet: true, port: 'q3' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.25, magnet: true, port: 'q2' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.35, magnet: true, port: 'q1' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.45, magnet: true, port: 'q0' },
            '.output5': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.55, magnet: true, port: 'zero' },
            '.output6': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.65, magnet: true, port: 'match' },
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloARAM116 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloARAM116',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.10, magnet: 'passive', port: 'ce' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.20, magnet: 'passive', port: 'we' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.30, magnet: 'passive', port: 'a3' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.40, magnet: 'passive', port: 'a2' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.50, magnet: 'passive', port: 'a1' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.60, magnet: 'passive', port: 'a0' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.70, magnet: 'passive', port: 'd' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloRAM116 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="output"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloRAM116',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.10, magnet: 'passive', port: 'clk' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.20, magnet: 'passive', port: 'we' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.30, magnet: 'passive', port: 'a3' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.40, magnet: 'passive', port: 'a2' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.50, magnet: 'passive', port: 'a1' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.60, magnet: 'passive', port: 'a0' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.70, magnet: 'passive', port: 'd' },
            
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.5, magnet: true, port: 'q' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloARAM416 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloARAM416',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.05, magnet: 'passive', port: 'ce' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'we' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a3' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a2' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a1' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a0' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'd3' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'd2' },
            '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'd1' },
           '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.95, magnet: 'passive', port: 'd0' },
            
              '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'q3' },
             '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'q2' },
             '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'q1' },
             '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'q0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloRAM416 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloRAM416',
        size: { width: 100, height: 180 },
        attrs: {
             '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.05, magnet: 'passive', port: 'clk' },
            '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.15, magnet: 'passive', port: 'we' },
            '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.25, magnet: 'passive', port: 'a3' },
            '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.35, magnet: 'passive', port: 'a2' },           
            '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.45, magnet: 'passive', port: 'a1' },
            '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a0' },
            '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.65, magnet: 'passive', port: 'd3' },
            '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.75, magnet: 'passive', port: 'd2' },
            '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.85, magnet: 'passive', port: 'd1' },
           '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.95, magnet: 'passive', port: 'd0' },
            
              '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'q3' },
             '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'q2' },
             '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'q1' },
             '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'q0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloARAM4256 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="input11"/><circle class="input12"/><circle class="input13"/><circle class="input14"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/><text class="jm16"/><text class="jm17"/><text class="jm18"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloARAM4256',
        size: { width: 100, height: 200 },
        attrs: {
              '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.06, magnet: 'passive', port: 'ce' },
             '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.13, magnet: 'passive', port: 'we' },
             '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.20, magnet: 'passive', port: 'a7' },
             '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.27, magnet: 'passive', port: 'a6' },           
             '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.34, magnet: 'passive', port: 'a5' },
             '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.41, magnet: 'passive', port: 'a4' },
             '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.48, magnet: 'passive', port: 'a3' },
             '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a2' },
             '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.62, magnet: 'passive', port: 'a1' },
            '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.69, magnet: 'passive', port: 'a0' },
            '.input11': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.76, magnet: 'passive', port: 'd3' },
            '.input12': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.83, magnet: 'passive', port: 'd2' },
            '.input13': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.90, magnet: 'passive', port: 'd1' },
            '.input14': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.97, magnet: 'passive', port: 'd0' },
                        
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'q3' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'q2' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'q1' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'q0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloRAM4256 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="input11"/><circle class="input12"/><circle class="input13"/><circle class="input14"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/><text class="jm16"/><text class="jm17"/><text class="jm18"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloRAM4256',
        size: { width: 100, height: 200 },
        attrs: {
              '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.06, magnet: 'passive', port: 'clk' },
             '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.13, magnet: 'passive', port: 'we' },
             '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.20, magnet: 'passive', port: 'a7' },
             '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.27, magnet: 'passive', port: 'a6' },           
             '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.34, magnet: 'passive', port: 'a5' },
             '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.41, magnet: 'passive', port: 'a4' },
             '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.48, magnet: 'passive', port: 'a3' },
             '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.55, magnet: 'passive', port: 'a2' },
             '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.62, magnet: 'passive', port: 'a1' },
            '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.69, magnet: 'passive', port: 'a0' },
            '.input11': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.76, magnet: 'passive', port: 'd3' },
            '.input12': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.83, magnet: 'passive', port: 'd2' },
            '.input13': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.90, magnet: 'passive', port: 'd1' },
            '.input14': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.97, magnet: 'passive', port: 'd0' },
                        
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.2, magnet: true, port: 'q3' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.4, magnet: true, port: 'q2' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.6, magnet: true, port: 'q1' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.8, magnet: true, port: 'q0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

joint.shapes.mylib.HradloDPRAM4256 = joint.shapes.mylib.Hradlo.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text class="label"/><circle class="input"/><circle class="input2"/><circle class="input3"/><circle class="input4"/><circle class="input5"/><circle class="input6"/><circle class="input7"/><circle class="input8"/><circle class="input9"/><circle class="input10"/><circle class="input11"/><circle class="input12"/><circle class="input13"/><circle class="input14"/><circle class="input15"/><circle class="input16"/><circle class="input17"/><circle class="input18"/><circle class="input19"/><circle class="input20"/><circle class="input21"/><circle class="input22"/><circle class="input23"/><circle class="input24"/><circle class="input25"/><circle class="input26"/><circle class="input27"/><circle class="input28"/><circle class="output"/><circle class="output2"/><circle class="output3"/><circle class="output4"/><circle class="output5"/><circle class="output6"/><circle class="output7"/><circle class="output8"/></g><g><text class="jm"/><text class="jm2"/><text class="jm3"/><text class="jm4"/><text class="jm5"/><text class="jm6"/><text class="jm7"/><text class="jm8"/><text class="jm9"/><text class="jm10"/><text class="jm11"/><text class="jm12"/><text class="jm13"/><text class="jm14"/><text class="jm15"/><text class="jm16"/><text class="jm17"/><text class="jm18"/><text class="jm19"/><text class="jm20"/><text class="jm21"/><text class="jm22"/><text class="jm23"/><text class="jm24"/><text class="jm25"/><text class="jm26"/><text class="jm27"/><text class="jm28"/><text class="jm29"/><text class="jm30"/><text class="jm31"/><text class="jm32"/><text class="jm33"/><text class="jm34"/><text class="jm35"/><text class="jm36"/></g>',

    defaults: joint.util.deepSupplement({

        type: 'mylib.HradloDPRAM4256',
        size: { width: 150, height: 400 },
        attrs: {
              '.input': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.035, magnet: 'passive', port: 'aclk' },
             '.input2': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.070, magnet: 'passive', port: 'awe' },
             '.input3': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.105, magnet: 'passive', port: 'bclk' },
             '.input4': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.140, magnet: 'passive', port: 'bwe' },           
             '.input5': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.175, magnet: 'passive', port: 'a7' },
             '.input6': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.210, magnet: 'passive', port: 'a6' },
             '.input7': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.245, magnet: 'passive', port: 'a5' },
             '.input8': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.280, magnet: 'passive', port: 'a4' },
             '.input9': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.315, magnet: 'passive', port: 'a3' },
            '.input10': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.350, magnet: 'passive', port: 'a2' },
            '.input11': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.385, magnet: 'passive', port: 'a1' },
            '.input12': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.420, magnet: 'passive', port: 'a0' },           
            '.input13': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.455, magnet: 'passive', port: 'b7' },
            '.input14': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.490, magnet: 'passive', port: 'b6' },
            '.input15': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.525, magnet: 'passive', port: 'b5' },
            '.input16': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.560, magnet: 'passive', port: 'b4' },
            '.input17': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.595, magnet: 'passive', port: 'b3' },
            '.input18': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.630, magnet: 'passive', port: 'b2' },
            '.input19': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.665, magnet: 'passive', port: 'b1' },
            '.input20': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.700, magnet: 'passive', port: 'b0' },           
            '.input21': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.735, magnet: 'passive', port: 'da3' },
            '.input22': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.770, magnet: 'passive', port: 'da2' },
            '.input23': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.805, magnet: 'passive', port: 'da1' },
            '.input24': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.840, magnet: 'passive', port: 'da0' },
            '.input25': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.875, magnet: 'passive', port: 'db3' },
            '.input26': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.910, magnet: 'passive', port: 'db2' },
            '.input27': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.945, magnet: 'passive', port: 'db1' },
            '.input28': { ref: 'rect', 'ref-x': -2, 'ref-y': 0.980, magnet: 'passive', port: 'db0' },           
                                    
             '.output': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.15, magnet: true, port: 'qa3' },
            '.output2': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.25, magnet: true, port: 'qa2' },
            '.output3': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.35, magnet: true, port: 'qa1' },
            '.output4': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.45, magnet: true, port: 'qa0' },
            '.output5': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.55, magnet: true, port: 'qb3' },
            '.output6': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.65, magnet: true, port: 'qb2' },
            '.output7': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.75, magnet: true, port: 'qb1' },
            '.output8': { ref: 'rect', 'ref-dx': 2, 'ref-y': 0.85, magnet: true, port: 'qb0' }
        }

    }, joint.shapes.mylib.Hradlo.prototype.defaults),

    operation: function() { return true; }
});

//-------------------------------- Logické členy --------------------------------------------//

joint.shapes.mylib.OR = joint.shapes.mylib.Hradlo21.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.OR',
        attrs: {
            '.label': { text: '≥1',ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },            
        }
    }, joint.shapes.mylib.Hradlo21.prototype.defaults)
});

joint.shapes.mylib.AND = joint.shapes.mylib.Hradlo21.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.AND',
        attrs: {
            '.label': { text: '&', ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },            
        }
    }, joint.shapes.mylib.Hradlo21.prototype.defaults)
});

joint.shapes.mylib.INV = joint.shapes.mylib.Hradlo11N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.INV',
        attrs: {
             '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -60 },           
              '.jm2': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -60 },            
        }
    }, joint.shapes.mylib.Hradlo11N.prototype.defaults)
});

joint.shapes.mylib.NAND = joint.shapes.mylib.Hradlo21N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.NAND',
        attrs: {
            '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
           '.label': { text: '&', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
              '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
             '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
             '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -60 },             
        }
    }, joint.shapes.mylib.Hradlo21N.prototype.defaults)
});

joint.shapes.mylib.NOR = joint.shapes.mylib.Hradlo21N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.NOR',
        attrs: {
             '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '≥1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -60 },            
        }
    }, joint.shapes.mylib.Hradlo21N.prototype.defaults)
});

joint.shapes.mylib.XNOR = joint.shapes.mylib.Hradlo21N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.XNOR',
        attrs: {
             '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '=1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -60 },            
        }
    }, joint.shapes.mylib.Hradlo21N.prototype.defaults)
});

joint.shapes.mylib.XOR = joint.shapes.mylib.Hradlo21.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.XOR',
        attrs: {
             '.wire': { 'ref-dx': 8, d: 'M 0 0 L 25 0' },
            '.label': { text: '=1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -70 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },              
        }
    }, joint.shapes.mylib.Hradlo21.prototype.defaults)
});

joint.shapes.mylib.BUF = joint.shapes.mylib.Hradlo11.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.BUF',
        attrs: {
             '.wire': { 'ref-dx': 8, d: 'M 0 0 L 25 0' },
            '.label': { text: '1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -60 },           
              '.jm2': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },             
        }
    }, joint.shapes.mylib.Hradlo11.prototype.defaults)
});

//---------------------------------- Trivstupa hradla --------------------------------//

joint.shapes.mylib.NAND3 = joint.shapes.mylib.Hradlo31N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.NAND3',
        attrs: {
             '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '&', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -95 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -65 },
              '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm4': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -70 },            
        }
    }, joint.shapes.mylib.Hradlo31N.prototype.defaults)
});

joint.shapes.mylib.AND3 = joint.shapes.mylib.Hradlo31.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.AND3',
        attrs: {
            '.label': { text: '&', ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -95 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -65 },
              '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },
              '.jm4': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -70 },
        }
    }, joint.shapes.mylib.Hradlo31.prototype.defaults)
});

joint.shapes.mylib.NOR3 = joint.shapes.mylib.Hradlo31N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.NOR3',
        attrs: {
            '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '≥1',ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -70, 'ref-dy': -95 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -70, 'ref-dy': -65 },
              '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -70, 'ref-dy': -40 },            
              '.jm4': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -70 },             
        }
    }, joint.shapes.mylib.Hradlo31N.prototype.defaults)
});

//---------------------------------- Ctyrvstupa hradla --------------------------------//

joint.shapes.mylib.NAND4 = joint.shapes.mylib.Hradlo41N.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.NAND4',
        attrs: {
            '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '&', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -80, 'ref-dy': -100 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -80, 'ref-dy': -77 },
              '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -80, 'ref-dy': -58 },
              '.jm4': { text: 'd', ref: 'rect', 'ref-dx': -80, 'ref-dy': -36 },            
              '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -75 },                        
        }
    }, joint.shapes.mylib.Hradlo41N.prototype.defaults)
});

joint.shapes.mylib.AND4 = joint.shapes.mylib.Hradlo41.extend({    
    defaults: joint.util.deepSupplement({
        type: 'mylib.AND4',
        attrs: {
            '.label': { text: '&', ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},
              '.jm': { text: 'a', ref: 'rect', 'ref-dx': -80, 'ref-dy': -100 },
             '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -80, 'ref-dy': -77 },
             '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -80, 'ref-dy': -58 },
             '.jm4': { text: 'd', ref: 'rect', 'ref-dx': -80, 'ref-dy': -36 },            
             '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -75 },            
        }
    }, joint.shapes.mylib.Hradlo41.prototype.defaults)
});

joint.shapes.mylib.NOR4 = joint.shapes.mylib.Hradlo41N.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.NOR4',
        attrs: {
             '.wire': { 'ref-dx': 15, d: 'M 0 0 L 30 0' },
            '.label': { text: '≥1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -80, 'ref-dy': -100 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -80, 'ref-dy': -77 },
              '.jm3': { text: 'c', ref: 'rect', 'ref-dx': -80, 'ref-dy': -58 },
              '.jm4': { text: 'd', ref: 'rect', 'ref-dx': -80, 'ref-dy': -36 },            
              '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 50, 'ref-dy': -75 },            
        }                                 
    }, joint.shapes.mylib.Hradlo41N.prototype.defaults)
});

//--------------------------------- Komplexní hradla ---------------------------------//

joint.shapes.mylib.MUX2 = joint.shapes.mylib.HradloMux31.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.MUX2',
        attrs: {
            '.label': { text: 'mux2', ref: 'rect', 'ref-x': .15, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a0', ref: 'rect', 'ref-dx': -80, 'ref-dy': -70 },
              '.jm2': { text: 'a1', ref: 'rect', 'ref-dx': -80, 'ref-dy': -40 },
              '.jm3': { text: 'sel', ref: 'rect', 'ref-dx': -60, 'ref-dy': 5 },           
              '.jm4': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },            
        }                                 
    }, joint.shapes.mylib.HradloMux31.prototype.defaults)
});

joint.shapes.mylib.MUX4 = joint.shapes.mylib.HradloMux61.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.MUX4',
        attrs: {
            '.label': { text: 'mux4', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a0', ref: 'rect', 'ref-dx': -90, 'ref-dy': -97 },
              '.jm2': { text: 'a1', ref: 'rect', 'ref-dx': -90, 'ref-dy': -77 },
              '.jm3': { text: 'a2', ref: 'rect', 'ref-dx': -90, 'ref-dy': -57 },
              '.jm4': { text: 'a3', ref: 'rect', 'ref-dx': -90, 'ref-dy': -37 },
              '.jm5': { text: 'sel0', ref: 'rect', 'ref-dx': -80, 'ref-dy': 5 },
              '.jm6': { text: 'sel1', ref: 'rect', 'ref-dx': -20, 'ref-dy': 5 },           
              '.jm7': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -70 },             
        }                                 
    }, joint.shapes.mylib.HradloMux61.prototype.defaults)
});

joint.shapes.mylib.MUX8 = joint.shapes.mylib.HradloMux11_1.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.MUX8',
        attrs: {
            '.label': { text: 'mux8', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a0', ref: 'rect', 'ref-dx': -130, 'ref-dy': -169 },
              '.jm2': { text: 'a1', ref: 'rect', 'ref-dx': -130, 'ref-dy': -151 },
              '.jm3': { text: 'a2', ref: 'rect', 'ref-dx': -130, 'ref-dy': -133 },
              '.jm4': { text: 'a3', ref: 'rect', 'ref-dx': -130, 'ref-dy': -115 },
              '.jm5': { text: 'a4', ref: 'rect', 'ref-dx': -130, 'ref-dy': -97 },
              '.jm6': { text: 'a5', ref: 'rect', 'ref-dx': -130, 'ref-dy': -79 },
              '.jm7': { text: 'a6', ref: 'rect', 'ref-dx': -130, 'ref-dy': -61 },
              '.jm8': { text: 'a7', ref: 'rect', 'ref-dx': -130, 'ref-dy': -43 },
              '.jm9': { text: 'sel0', ref: 'rect', 'ref-dx': -110, 'ref-dy': 5 },
             '.jm10': { text: 'sel1', ref: 'rect', 'ref-dx': -75, 'ref-dy': 5 },
             '.jm11': { text: 'sel2', ref: 'rect', 'ref-dx': -45, 'ref-dy': 5 },           
             '.jm12': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -120 },            
        }                                 
    }, joint.shapes.mylib.HradloMux11_1.prototype.defaults)
});

joint.shapes.mylib.DEC14 = joint.shapes.mylib.HradloDec14.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DEC14',
        attrs: {
            '.label': { text: 'Dec1_4', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'sel0', ref: 'rect', 'ref-dx': -120, 'ref-dy': -130 },
              '.jm2': { text: 'sel1', ref: 'rect', 'ref-dx': -120, 'ref-dy': -55 },                      
              '.jm3': { text: 'y0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -140 },
              '.jm4': { text: 'y1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },              
              '.jm5': { text: 'y2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -80 },
              '.jm6': { text: 'y3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -50 },            
        }                                 
    }, joint.shapes.mylib.HradloDec14.prototype.defaults)
});

joint.shapes.mylib.DEC18 = joint.shapes.mylib.HradloDec18.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DEC18',
        attrs: {
            '.label': { text: 'Dec1_8', ref: 'rect', 'ref-x': .25, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'sel0', ref: 'rect', 'ref-dx': -135, 'ref-dy': -160 },
              '.jm2': { text: 'sel1', ref: 'rect', 'ref-dx': -135, 'ref-dy': -106 },
              '.jm3': { text: 'sel2', ref: 'rect', 'ref-dx': -135, 'ref-dy': -52 },                      
              '.jm4': { text: 'y0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -169 },
              '.jm5': { text: 'y1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -151 },              
              '.jm6': { text: 'y2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -133 },
              '.jm7': { text: 'y3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -115 },
              '.jm8': { text: 'y4', ref: 'rect', 'ref-dx': 10, 'ref-dy': -97 },
              '.jm9': { text: 'y5', ref: 'rect', 'ref-dx': 10, 'ref-dy': -79 },              
             '.jm10': { text: 'y6', ref: 'rect', 'ref-dx': 10, 'ref-dy': -61 },
             '.jm11': { text: 'y7', ref: 'rect', 'ref-dx': 10, 'ref-dy': -43 },             
        }                                 
    }, joint.shapes.mylib.HradloDec18.prototype.defaults)
});

joint.shapes.mylib.PRIOCOD42 = joint.shapes.mylib.HradloPrCo42.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.PRIOCOD42',
        attrs: {
            '.label': { text: 'Priocod_4_2', ref: 'rect', 'ref-x': 0.1, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -140 },
              '.jm2': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -110 },
              '.jm3': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -80 },
              '.jm4': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -49 },          
              '.jm5': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -125 },
              '.jm6': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -95 },
              '.jm7': { text: 'v', ref: 'rect', 'ref-dx': 10, 'ref-dy': -65 },            
        }                                 
    }, joint.shapes.mylib.HradloPrCo42.prototype.defaults)
});

joint.shapes.mylib.PRIOCOD83 = joint.shapes.mylib.HradloPrCo83.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.PRIOCOD83',
        attrs: {
             '.label': { text: 'Priocod_8_3', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -169 },
               '.jm2': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -151 },
               '.jm3': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -133 },
               '.jm4': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -115 },
               '.jm5': { text: 'a4', ref: 'rect', 'ref-dx': -125, 'ref-dy': -97 },
               '.jm6': { text: 'a5', ref: 'rect', 'ref-dx': -125, 'ref-dy': -79 },
               '.jm7': { text: 'a6', ref: 'rect', 'ref-dx': -125, 'ref-dy': -61 },
               '.jm8': { text: 'a7', ref: 'rect', 'ref-dx': -125, 'ref-dy': -43 },          
               '.jm9': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -165 },
              '.jm10': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -127 },
              '.jm11': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -95 },
              '.jm12': { text: 'v', ref: 'rect', 'ref-dx': 10, 'ref-dy': -58 },
        }                                 
    }, joint.shapes.mylib.HradloPrCo83.prototype.defaults)
});

joint.shapes.mylib.RS = joint.shapes.mylib.HradloRS22.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.RS',
        attrs: {
            '.label': { text: 'RS', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'r', ref: 'rect', 'ref-dx': -100, 'ref-dy': -105 },
              '.jm2': { text: 's', ref: 'rect', 'ref-dx': -100, 'ref-dy': -55 },           
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm4': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },            
        }                                 
    }, joint.shapes.mylib.HradloRS22.prototype.defaults)
});

joint.shapes.mylib.DL1 = joint.shapes.mylib.HradloD22.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DL1',
        attrs: {
            '.label': { text: 'DL1', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'd', ref: 'rect', 'ref-dx': -100, 'ref-dy': -105 },
              '.jm2': { text: 'clk', ref: 'rect', 'ref-dx': -110, 'ref-dy': -55 },           
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm4': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },            
        }                                 
    }, joint.shapes.mylib.HradloD22.prototype.defaults)
});

joint.shapes.mylib.DL1AR = joint.shapes.mylib.HradloD42.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DL1AR',
        attrs: {
            '.label': { text: 'DL1AR', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'd', ref: 'rect', 'ref-dx': -105, 'ref-dy': -115 },
              '.jm2': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -90 },
              '.jm3': { text: 'ar', ref: 'rect', 'ref-dx': -110, 'ref-dy': -65 },
              '.jm4': { text: 'as', ref: 'rect', 'ref-dx': -110, 'ref-dy': -40 },          
              '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm6': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },                        
        }                                 
    }, joint.shapes.mylib.HradloD42.prototype.defaults)
});

joint.shapes.mylib.JKFF = joint.shapes.mylib.HradloJK32.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.JKFF',
        attrs: {
            '.label': { text: 'JKFF', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},              
               '.jm': { text: 'j', ref: 'rect', 'ref-dx': -100, 'ref-dy': -103 },
              '.jm2': { text: 'k', ref: 'rect', 'ref-dx': -105, 'ref-dy': -77 },
              '.jm3': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -52 },                          
              '.jm4': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm5': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -62 },
        }                                 
    }, joint.shapes.mylib.HradloJK32.prototype.defaults)
});

joint.shapes.mylib.JKFFAR = joint.shapes.mylib.HradloJK52AR.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.JKFFAR',
        attrs: {
            '.label': { text: 'JKFFAR', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},
               '.jm': { text: 'j', ref: 'rect', 'ref-dx': -100, 'ref-dy': -130 },
              '.jm2': { text: 'k', ref: 'rect', 'ref-dx': -105, 'ref-dy': -100 },
              '.jm3': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -75 },
              '.jm4': { text: 'as', ref: 'rect', 'ref-dx': -110, 'ref-dy': -55 },          
              '.jm5': { text: 'ar', ref: 'rect', 'ref-dx': -110, 'ref-dy': -30 },
              '.jm6': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm7': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },                        
        }                                 
    }, joint.shapes.mylib.HradloJK52AR.prototype.defaults)
});

joint.shapes.mylib.JKFFSR = joint.shapes.mylib.HradloJK52SR.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.JKFFSR',
        attrs: {
            '.label': { text: 'JKFFSR', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'j', ref: 'rect', 'ref-dx': -100, 'ref-dy': -130 },
              '.jm2': { text: 'k', ref: 'rect', 'ref-dx': -105, 'ref-dy': -100 },
              '.jm3': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -75 },
              '.jm4': { text: 'ss', ref: 'rect', 'ref-dx': -110, 'ref-dy': -55 },          
              '.jm5': { text: 'sr', ref: 'rect', 'ref-dx': -110, 'ref-dy': -30 },
              '.jm6': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm7': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },
        }                                 
    }, joint.shapes.mylib.HradloJK52SR.prototype.defaults)
});

joint.shapes.mylib.DFF = joint.shapes.mylib.HradloD22.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DFF',
        attrs: {
            '.label': { text: 'DFF', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'd', ref: 'rect', 'ref-dx': -100, 'ref-dy': -105 },
              '.jm2': { text: 'clk', ref: 'rect', 'ref-dx': -110, 'ref-dy': -55 },           
              '.jm3': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm4': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },
        }                                 
    }, joint.shapes.mylib.HradloD22.prototype.defaults)
});

joint.shapes.mylib.DFFAR = joint.shapes.mylib.HradloD42.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DFFAR',
        attrs: {
            '.label': { text: 'DFFAR', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'd', ref: 'rect', 'ref-dx': -105, 'ref-dy': -115 },
              '.jm2': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -90 },
              '.jm3': { text: 'as', ref: 'rect', 'ref-dx': -110, 'ref-dy': -65 },
              '.jm4': { text: 'ar', ref: 'rect', 'ref-dx': -110, 'ref-dy': -40 },          
              '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm6': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },
        }                                 
    }, joint.shapes.mylib.HradloD42.prototype.defaults)
});

joint.shapes.mylib.DFFSR = joint.shapes.mylib.HradloD42SR.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DFFSR',
        attrs: {
            '.label': { text: 'DFFSR', ref: 'rect', 'ref-x': .2, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'd', ref: 'rect', 'ref-dx': -105, 'ref-dy': -115 },
              '.jm2': { text: 'clk', ref: 'rect', 'ref-dx': -115, 'ref-dy': -90 },
              '.jm3': { text: 'ss', ref: 'rect', 'ref-dx': -110, 'ref-dy': -65 },
              '.jm4': { text: 'sr', ref: 'rect', 'ref-dx': -110, 'ref-dy': -40 },          
              '.jm5': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm6': { text: 'qn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },
        }                                 
    }, joint.shapes.mylib.HradloD42SR.prototype.defaults)
});

joint.shapes.mylib.HALFADDER = joint.shapes.mylib.HradloHALFADD.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.HALFADDER',
        attrs: {
             '.label': { text: 'Half-Adder', ref: 'rect', 'ref-x': .05, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -100, 'ref-dy': -105 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -100, 'ref-dy': -60 },           
              '.jm3': { text: 's', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm4': { text: 'c', ref: 'rect', 'ref-dx': 10, 'ref-dy': -60 },

        }                                 
    }, joint.shapes.mylib.HradloHALFADD.prototype.defaults)
});

joint.shapes.mylib.FULLADDER = joint.shapes.mylib.HradloFULLADD.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.FULLADDER',
        attrs: {
             '.label': { text: 'Full-Adder', ref: 'rect', 'ref-x': .05, 'ref-y': .1, stroke: 'black'},            
               '.jm': { text: 'a', ref: 'rect', 'ref-dx': -100, 'ref-dy': -103 },
              '.jm2': { text: 'b', ref: 'rect', 'ref-dx': -100, 'ref-dy': -77 },
              '.jm3': { text: 'cin', ref: 'rect', 'ref-dx': -110, 'ref-dy': -52 },                          
              '.jm4': { text: 's', ref: 'rect', 'ref-dx': 10, 'ref-dy': -105 },           
              '.jm5': { text: 'cout', ref: 'rect', 'ref-dx': 10, 'ref-dy': -62 },
        }                                 
    }, joint.shapes.mylib.HradloFULLADD.prototype.defaults)
});

joint.shapes.mylib.ADD4 = joint.shapes.mylib.HradloADD4.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.ADD4',
        attrs: {
             '.label': { text: 'ADD4', ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -190 },
               '.jm2': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -170 },
               '.jm3': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -152 },
               '.jm4': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -133 },
               '.jm5': { text: 'b3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -115 },
               '.jm6': { text: 'b2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -97 },
               '.jm7': { text: 'b1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -79 },
               '.jm8': { text: 'b0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -61 },          
               '.jm9': { text: 'cin', ref: 'rect', 'ref-dx': -130, 'ref-dy': -43},
              '.jm10': { text: 'invb', ref: 'rect', 'ref-dx': -140, 'ref-dy': -25 }, 
               
              '.jm11': { text: 's3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -180 },
              '.jm12': { text: 's2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -143 },
              '.jm13': { text: 's1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -110 },
              '.jm14': { text: 's0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -75 },
              '.jm15': { text: 'cout', ref: 'rect', 'ref-dx': 10, 'ref-dy': -40 },
        }                                 
    }, joint.shapes.mylib.HradloADD4.prototype.defaults)
});

joint.shapes.mylib.MUL8 = joint.shapes.mylib.HradloMUL8.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.MUL8',
        attrs: {
             '.label': { text: 'Mul8', ref: 'rect', 'ref-x': .3, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -169 },
               '.jm2': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -151 },
               '.jm3': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -133 },
               '.jm4': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -115 },
               '.jm5': { text: 'b3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -97 },
               '.jm6': { text: 'b2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -79 },
               '.jm7': { text: 'b1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -61 },
               '.jm8': { text: 'b0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -43 },          
               
               '.jm9': { text: 's7', ref: 'rect', 'ref-dx': 10, 'ref-dy': -169 },
              '.jm10': { text: 's6', ref: 'rect', 'ref-dx': 10, 'ref-dy': -151 },
              '.jm11': { text: 's5', ref: 'rect', 'ref-dx': 10, 'ref-dy': -133 },
              '.jm12': { text: 's4', ref: 'rect', 'ref-dx': 10, 'ref-dy': -115 },
              '.jm13': { text: 's3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -97 },
              '.jm14': { text: 's2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -79 },
              '.jm15': { text: 's1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -61 },
              '.jm16': { text: 's0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -43 },
        }                                 
    }, joint.shapes.mylib.HradloMUL8.prototype.defaults)
});

joint.shapes.mylib.COMPARELEQ = joint.shapes.mylib.HradloCLEQ.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.COMPARELEQ',
        attrs: {
             '.label': { text: 'CompLEQ', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -169 },
               '.jm2': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -151 },
               '.jm3': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -133 },
               '.jm4': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -115 },
               '.jm5': { text: 'b3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -97 },
               '.jm6': { text: 'b2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -79 },
               '.jm7': { text: 'b1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -61 },
               '.jm8': { text: 'b0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -43 },          
               '.jm9': { text: 'leq', ref: 'rect', 'ref-dx': 10, 'ref-dy': -173 },
              '.jm10': { text: 'leqn', ref: 'rect', 'ref-dx': 10, 'ref-dy': -153 },
        }                                 
    }, joint.shapes.mylib.HradloCLEQ.prototype.defaults)
});

joint.shapes.mylib.UPDOWNCOUNTER = joint.shapes.mylib.HradloUDCOUNTER.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.UPDOWNCOUNTER',
        attrs: {
             '.label': { text: 'UDCounter', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'clk', ref: 'rect', 'ref-dx': -130, 'ref-dy': -179 },
               '.jm2': { text: 'clk_en', ref: 'rect', 'ref-dx': -155, 'ref-dy': -161 },
               '.jm3': { text: 'sreset', ref: 'rect', 'ref-dx': -150, 'ref-dy': -143 },
               '.jm4': { text: 'spreset', ref: 'rect', 'ref-dx': -160, 'ref-dy': -125 },
               '.jm5': { text: 'a3', ref: 'rect', 'ref-dx': -130, 'ref-dy': -107 },
               '.jm6': { text: 'a2', ref: 'rect', 'ref-dx': -130, 'ref-dy': -89 },
               '.jm7': { text: 'a1', ref: 'rect', 'ref-dx': -130, 'ref-dy': -71 },
               '.jm8': { text: 'a0', ref: 'rect', 'ref-dx': -130, 'ref-dy': -53 },          
               '.jm9': { text: 'down', ref: 'rect', 'ref-dx': -150, 'ref-dy': -35 },
              
              '.jm10': { text: 'q3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -177 },
              '.jm11': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -155 },
              '.jm12': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -135 },
              '.jm13': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -115 },
              '.jm14': { text: 'zero', ref: 'rect', 'ref-dx': 10, 'ref-dy': -99 },
              '.jm15': { text: 'match', ref: 'rect', 'ref-dx': 10, 'ref-dy': -80 },
        }                                 
    }, joint.shapes.mylib.HradloUDCOUNTER.prototype.defaults)
});

joint.shapes.mylib.ARAM1x16 = joint.shapes.mylib.HradloARAM116.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.ARAM1x16',
        attrs: {
             '.label': { text: 'ARAM1x16', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'ce', ref: 'rect', 'ref-dx': -125, 'ref-dy': -179 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -161 },
               '.jm3': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -143 },
               '.jm4': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -125 },
               '.jm5': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -107 },
               '.jm6': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -89 },
               '.jm7': { text: 'd', ref: 'rect', 'ref-dx': -125, 'ref-dy': -71 },
         
               '.jm8': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -107 },
        }                                 
    }, joint.shapes.mylib.HradloARAM116.prototype.defaults)
});

joint.shapes.mylib.RAM1x16 = joint.shapes.mylib.HradloRAM116.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.RAM1x16',
        attrs: {
             '.label': { text: 'RAM1x16', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'clk', ref: 'rect', 'ref-dx': -130, 'ref-dy': -179 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -161 },
               '.jm3': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -143 },
               '.jm4': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -125 },
               '.jm5': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -107 },
               '.jm6': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -89 },
               '.jm7': { text: 'd', ref: 'rect', 'ref-dx': -125, 'ref-dy': -71 },
         
               '.jm8': { text: 'q', ref: 'rect', 'ref-dx': 10, 'ref-dy': -107 },
        }                                 
    }, joint.shapes.mylib.HradloRAM116.prototype.defaults)
});

joint.shapes.mylib.ARAM4x16 = joint.shapes.mylib.HradloARAM416.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.ARAM4x16',
        attrs: {
             '.label': { text: 'ARAM4x16', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'ce', ref: 'rect', 'ref-dx': -125, 'ref-dy': -189 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -171 },
               '.jm3': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -153 },
               '.jm4': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -135 },
               '.jm5': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -117 },
               '.jm6': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -99 },
               '.jm7': { text: 'd3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -81 },
               '.jm8': { text: 'd2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -63 },          
               '.jm9': { text: 'd1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -45 },
              '.jm10': { text: 'd0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -27 },
              
              '.jm11': { text: 'q3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -165 },
              '.jm12': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -128 },
              '.jm13': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -95 },
              '.jm14': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -57 },
        }                                 
    }, joint.shapes.mylib.HradloARAM416.prototype.defaults)
});

joint.shapes.mylib.RAM4x16 = joint.shapes.mylib.HradloRAM416.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.RAM4x16',
        attrs: {
             '.label': { text: 'RAM4x16', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'clk', ref: 'rect', 'ref-dx': -130, 'ref-dy': -189 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -171 },
               '.jm3': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -153 },
               '.jm4': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -135 },
               '.jm5': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -117 },
               '.jm6': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -99 },
               '.jm7': { text: 'd3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -81 },
               '.jm8': { text: 'd2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -63 },          
               '.jm9': { text: 'd1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -45 },
              '.jm10': { text: 'd0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -27 },
              
              '.jm11': { text: 'q3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -165 },
              '.jm12': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -128 },
              '.jm13': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -95 },
              '.jm14': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -57 },
        }                                 
    }, joint.shapes.mylib.HradloRAM416.prototype.defaults)
});

joint.shapes.mylib.ARAM4x256 = joint.shapes.mylib.HradloARAM4256.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.ARAM4x256',
        attrs: {
             '.label': { text: 'ARAM4x256', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'ce', ref: 'rect', 'ref-dx': -125, 'ref-dy': -202 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -188 },
               '.jm3': { text: 'a7', ref: 'rect', 'ref-dx': -125, 'ref-dy': -174 },
               '.jm4': { text: 'a6', ref: 'rect', 'ref-dx': -125, 'ref-dy': -160 },
               '.jm5': { text: 'a5', ref: 'rect', 'ref-dx': -125, 'ref-dy': -146 },
               '.jm6': { text: 'a4', ref: 'rect', 'ref-dx': -125, 'ref-dy': -132 },
               '.jm7': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -118 },
               '.jm8': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -104 },          
               '.jm9': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -90 },
              '.jm10': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -76 },
              '.jm11': { text: 'd3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -62 },
              '.jm12': { text: 'd2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -48 },          
              '.jm13': { text: 'd1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -34 },
              '.jm14': { text: 'd0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -20 },
              
              '.jm15': { text: 'q3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -180 },
              '.jm16': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -138 },
              '.jm17': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -102 },
              '.jm18': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -62 },
        }                                 
    }, joint.shapes.mylib.HradloARAM4256.prototype.defaults)
});

joint.shapes.mylib.RAM4x256 = joint.shapes.mylib.HradloRAM4256.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.RAM4x256',
        attrs: {
             '.label': { text: 'RAM4x256', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'clk', ref: 'rect', 'ref-dx': -130, 'ref-dy': -202 },
               '.jm2': { text: 'we', ref: 'rect', 'ref-dx': -130, 'ref-dy': -188 },
               '.jm3': { text: 'a7', ref: 'rect', 'ref-dx': -125, 'ref-dy': -174 },
               '.jm4': { text: 'a6', ref: 'rect', 'ref-dx': -125, 'ref-dy': -160 },
               '.jm5': { text: 'a5', ref: 'rect', 'ref-dx': -125, 'ref-dy': -146 },
               '.jm6': { text: 'a4', ref: 'rect', 'ref-dx': -125, 'ref-dy': -132 },
               '.jm7': { text: 'a3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -118 },
               '.jm8': { text: 'a2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -104 },          
               '.jm9': { text: 'a1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -90 },
              '.jm10': { text: 'a0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -76 },
              '.jm11': { text: 'd3', ref: 'rect', 'ref-dx': -125, 'ref-dy': -62 },
              '.jm12': { text: 'd2', ref: 'rect', 'ref-dx': -125, 'ref-dy': -48 },          
              '.jm13': { text: 'd1', ref: 'rect', 'ref-dx': -125, 'ref-dy': -34 },
              '.jm14': { text: 'd0', ref: 'rect', 'ref-dx': -125, 'ref-dy': -20 },
              
              '.jm15': { text: 'q3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -180 },
              '.jm16': { text: 'q2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -138 },
              '.jm17': { text: 'q1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -102 },
              '.jm18': { text: 'q0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -62 },
        }                                 
    }, joint.shapes.mylib.HradloRAM4256.prototype.defaults)
});

joint.shapes.mylib.DPRAM4x256 = joint.shapes.mylib.HradloDPRAM4256.extend({
    defaults: joint.util.deepSupplement({
        type: 'mylib.DPRAM4x256',
        attrs: {
             '.label': { text: 'DPRAM4x256', ref: 'rect', 'ref-x': .1, 'ref-y': .1, stroke: 'black'},            
                '.jm': { text: 'aclk', ref: 'rect', 'ref-dx': -195, 'ref-dy': -402 },
               '.jm2': { text: 'awe', ref: 'rect', 'ref-dx': -195, 'ref-dy': -386 },
               '.jm3': { text: 'bclk', ref: 'rect', 'ref-dx': -195, 'ref-dy': -372 },
               '.jm4': { text: 'bwe', ref: 'rect', 'ref-dx': -195, 'ref-dy': -358 },
               '.jm5': { text: 'a7', ref: 'rect', 'ref-dx': -185, 'ref-dy': -344 },
               '.jm6': { text: 'a6', ref: 'rect', 'ref-dx': -185, 'ref-dy': -330 },
               '.jm7': { text: 'a5', ref: 'rect', 'ref-dx': -185, 'ref-dy': -316 },
               '.jm8': { text: 'a4', ref: 'rect', 'ref-dx': -185, 'ref-dy': -302 },          
               '.jm9': { text: 'a3', ref: 'rect', 'ref-dx': -185, 'ref-dy': -288 },
              '.jm10': { text: 'a2', ref: 'rect', 'ref-dx': -185, 'ref-dy': -274 },
              '.jm11': { text: 'a1', ref: 'rect', 'ref-dx': -185, 'ref-dy': -260 },
              '.jm12': { text: 'a0', ref: 'rect', 'ref-dx': -185, 'ref-dy': -246 },          
              '.jm13': { text: 'b7', ref: 'rect', 'ref-dx': -185, 'ref-dy': -232 },
              '.jm14': { text: 'b6', ref: 'rect', 'ref-dx': -185, 'ref-dy': -218 },
              '.jm15': { text: 'b5', ref: 'rect', 'ref-dx': -185, 'ref-dy': -204 },
              '.jm16': { text: 'b4', ref: 'rect', 'ref-dx': -185, 'ref-dy': -190 },
              '.jm17': { text: 'b3', ref: 'rect', 'ref-dx': -185, 'ref-dy': -176 },          
              '.jm18': { text: 'b2', ref: 'rect', 'ref-dx': -185, 'ref-dy': -162 },
              '.jm19': { text: 'b1', ref: 'rect', 'ref-dx': -185, 'ref-dy': -146 },
              '.jm20': { text: 'b0', ref: 'rect', 'ref-dx': -185, 'ref-dy': -132 },
              '.jm21': { text: 'da3', ref: 'rect', 'ref-dx': -190, 'ref-dy': -118 },
              '.jm22': { text: 'da2', ref: 'rect', 'ref-dx': -190, 'ref-dy': -104 },          
              '.jm23': { text: 'da1', ref: 'rect', 'ref-dx': -190, 'ref-dy': -90 },
              '.jm24': { text: 'da0', ref: 'rect', 'ref-dx': -190, 'ref-dy': -76 },
              '.jm25': { text: 'db3', ref: 'rect', 'ref-dx': -190, 'ref-dy': -62 },
              '.jm26': { text: 'db2', ref: 'rect', 'ref-dx': -190, 'ref-dy': -48 },
              '.jm27': { text: 'db1', ref: 'rect', 'ref-dx': -190, 'ref-dy': -34 },          
              '.jm28': { text: 'db0', ref: 'rect', 'ref-dx': -190, 'ref-dy': -20 },
                                                        
              '.jm29': { text: 'qa3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -361},
              '.jm30': { text: 'qa2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -319 },
              '.jm31': { text: 'qa1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -284 },
              '.jm32': { text: 'qa0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -245 },
              '.jm33': { text: 'qb3', ref: 'rect', 'ref-dx': 10, 'ref-dy': -204 },
              '.jm34': { text: 'qb2', ref: 'rect', 'ref-dx': 10, 'ref-dy': -160 },
              '.jm35': { text: 'qb1', ref: 'rect', 'ref-dx': 10, 'ref-dy': -123 },
              '.jm36': { text: 'qb0', ref: 'rect', 'ref-dx': 10, 'ref-dy': -80 },
        }                                 
    }, joint.shapes.mylib.HradloDPRAM4256.prototype.defaults)
});
                                                   
//--------------------------------- DEFINICE VODIČE ----------------------------------//

joint.shapes.mylib.Vodic = joint.dia.Link.extend({

    arrowheadMarkup: [
        '<g class="marker-arrowhead-group marker-arrowhead-group-<%= end %>">',
        '<circle class="marker-arrowhead" end="<%= end %>" r="7"/>',
        '</g>'
    ].join(''),

    vertexMarkup: [
        '<g class="marker-vertex-group" transform="translate(<%= x %>, <%= y %>)">',
        '<circle class="marker-vertex" idx="<%= idx %>" r="10" />',
        '<g class="marker-vertex-remove-group">',
        '<path class="marker-vertex-remove-area" idx="<%= idx %>" d="M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z" transform="translate(5, -33)"/>',
        '<path class="marker-vertex-remove" idx="<%= idx %>" transform="scale(.8) translate(9.5, -37)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z">',
        '<title>Remove vertex.</title>',
        '</path>',
        '</g>',
        '</g>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'mylib.Vodic',

        attrs: {
            '.connection': { 'stroke-width': 2 },
            '.marker-vertex': { r: 7 }
        },

        manhattan: true

    }, joint.dia.Link.prototype.defaults)

});

if (typeof exports === 'object') {

    module.exports = joint.shapes.devs;
}