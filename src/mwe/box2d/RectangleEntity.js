/**

 Copyright 2011 Luis Montes

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

**/

define([
  'dojo/_base/declare',
  './Entity'
], function(declare, Entity){

  return declare([Entity], {
    halfWidth: 1,
    halfHeight: 1,
    constructor: function(/* Object */args){
      declare.safeMixin(this, args);
    },
    draw: function(ctx){
      ctx.save();
      ctx.translate(this.x * SCALE, this.y * SCALE);
      ctx.rotate(this.angle);
      ctx.translate(-(this.x) * SCALE, -(this.y) * SCALE);
      ctx.fillStyle = this.color;
      ctx.fillRect(
        (this.x-this.halfWidth) * SCALE,
        (this.y-this.halfHeight) * SCALE,
        (this.halfWidth*2) * SCALE,
        (this.halfHeight*2) * SCALE
      );
      ctx.restore();
      this.inherited(arguments);
    }
  });

});