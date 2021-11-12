/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/multiview/multiprogram.js":
/*!***************************************!*\
  !*** ./src/multiview/multiprogram.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _util_glUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/glUtil */ "./src/util/glUtil.js");
/* harmony import */ var _util_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/matrix */ "./src/util/matrix.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader */ "./src/multiview/shader.js");







const unif = {
    opacity: 1,
    radiusScale: 1,
    lineWidthScale: 1,
    stroked: 0,
    filled: 1,
    billboard: 0,
    viewportSize: [2000, 1000],
    antialiasing: 1,
}
const width = 2000;
const height = 1000;
main()
function main() {
    const originData = generateData(width, height)
    //scaleData(originData,width,height);
    const renderData = flatData(originData);
    const combinedData = combineData(renderData);
    draw(combinedData);

}



function draw(data) {
    console.log(data)
    const canvas = document.createElement('canvas');
    document.getElementById('body').appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    const gl = canvas.getContext('webgl2');
    const program = (0,_util_glUtil__WEBPACK_IMPORTED_MODULE_0__.createProgramWithShader)(gl, _shader__WEBPACK_IMPORTED_MODULE_3__.multiOneCircleVertexShaderSource, _shader__WEBPACK_IMPORTED_MODULE_3__.oneCircleFragmentShaderSource);
    const programOne = (0,_util_glUtil__WEBPACK_IMPORTED_MODULE_0__.createProgramWithShader)(gl, _shader__WEBPACK_IMPORTED_MODULE_3__.multiTwoCircleVertexShaderSource, _shader__WEBPACK_IMPORTED_MODULE_3__.oneCircleFragmentShaderSource);
    const lg = new _util_glUtil__WEBPACK_IMPORTED_MODULE_0__.LocationGetter(gl, program);
    const positionsAttriLoc = lg.gA('positions');
    const inPositionsAttriLoc = lg.gA('instancePositions');
    const inRadiusAttriLoc = lg.gA('instanceRadius');
    const inLineWidthsAttriLoc = lg.gA('instanceLineWidths');
    const inFillColorsAttriLoc = lg.gA('instanceFillColors');
    const inLineColorsAttriLoc = lg.gA('instanceLineColors');
    //console.log(positionsAttriLoc,inPositionsAttriLoc,inRadiusAttriLoc,inLineWidthsAttriLoc,inFillColorsAttriLoc,inLineColorsAttriLoc)

    const opacityUnifLoc = lg.gU('opacity');
    const radiusScaleUnifLoc = lg.gU('radiusScale');
    const lineWidthScaleUnifLoc = lg.gU('lineWidthScale');
    const strokedUnifLoc = lg.gU('stroked');
    const filledUnifLoc = lg.gU('filled');
    const billboardUnifLoc = lg.gU('billboard');
    const viewportSizeUnifLoc = lg.gU('uViewportSize');
    const antialiasingUnifLoc = lg.gU('antialiasing');

    const lg1 = new _util_glUtil__WEBPACK_IMPORTED_MODULE_0__.LocationGetter(gl, programOne);
    const opacityUnifLoc1 = lg1.gU('opacity');
    const radiusScaleUnifLoc1 = lg1.gU('radiusScale');
    const lineWidthScaleUnifLoc1 = lg1.gU('lineWidthScale');
    const strokedUnifLoc1 = lg1.gU('stroked');
    const filledUnifLoc1 = lg1.gU('filled');
    const billboardUnifLoc1 = lg1.gU('billboard');
    const viewportSizeUnifLoc1 = lg1.gU('uViewportSize');
    const antialiasingUnifLoc1 = lg1.gU('antialiasing');


    const positionBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), gl.STATIC_DRAW);


    const inPositionBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inPositionBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.position.slice(0, data.position.length / 2)), gl.STATIC_DRAW);

    const inRadiusBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inRadiusBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.radius.slice(0, data.radius.length / 2)), gl.STATIC_DRAW);

    const inLineWidthBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inLineWidthBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.lineWidth.slice(0, data.lineWidth.length / 2)), gl.STATIC_DRAW);
    const inFillColorBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inFillColorBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.fillColor.slice(0, data.fillColor.length / 2)), gl.STATIC_DRAW);

    const inLineColorBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inLineColorBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.lineColor.slice(0, data.lineColor.length / 2)), gl.STATIC_DRAW);




    const inPositionBuf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inPositionBuf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.position.slice(data.position.length / 2, data.position.length)), gl.STATIC_DRAW);

    const inRadiusBuf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inRadiusBuf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.radius.slice(data.radius.length / 2, data.radius.length)), gl.STATIC_DRAW);

    const inLineWidthBuf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inLineWidthBuf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.lineWidth.slice(data.lineWidth.length / 2, data.lineWidth.length)), gl.STATIC_DRAW);
    const inFillColorBuf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inFillColorBuf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.fillColor.slice(data.fillColor.length / 2, data.fillColor.length)), gl.STATIC_DRAW);

    const inLineColorBuf1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, inLineColorBuf1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.lineColor.slice(data.lineColor.length / 2, data.lineColor.length)), gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf)
    gl.enableVertexAttribArray(positionsAttriLoc);
    gl.vertexAttribPointer(positionsAttriLoc, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, inPositionBuf);
    gl.enableVertexAttribArray(inPositionsAttriLoc);
    gl.vertexAttribPointer(inPositionsAttriLoc, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inPositionsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inRadiusBuf);
    gl.enableVertexAttribArray(inRadiusAttriLoc);
    gl.vertexAttribPointer(inRadiusAttriLoc, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inRadiusAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inLineWidthBuf);
    gl.enableVertexAttribArray(inLineWidthsAttriLoc);
    gl.vertexAttribPointer(inLineWidthsAttriLoc, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inLineWidthsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inFillColorBuf);
    gl.enableVertexAttribArray(inFillColorsAttriLoc);
    gl.vertexAttribPointer(inFillColorsAttriLoc, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inFillColorsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inLineColorBuf);
    gl.enableVertexAttribArray(inLineColorsAttriLoc);
    gl.vertexAttribPointer(inLineColorsAttriLoc, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inLineColorsAttriLoc, 1);

    const vao1 = gl.createVertexArray();
    gl.bindVertexArray(vao1)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuf)
    gl.enableVertexAttribArray(positionsAttriLoc);
    gl.vertexAttribPointer(positionsAttriLoc, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, inPositionBuf1);
    gl.enableVertexAttribArray(inPositionsAttriLoc);
    gl.vertexAttribPointer(inPositionsAttriLoc, 3, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inPositionsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inRadiusBuf1);
    gl.enableVertexAttribArray(inRadiusAttriLoc);
    gl.vertexAttribPointer(inRadiusAttriLoc, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inRadiusAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inLineWidthBuf1);
    gl.enableVertexAttribArray(inLineWidthsAttriLoc);
    gl.vertexAttribPointer(inLineWidthsAttriLoc, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inLineWidthsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inFillColorBuf1);
    gl.enableVertexAttribArray(inFillColorsAttriLoc);
    gl.vertexAttribPointer(inFillColorsAttriLoc, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inFillColorsAttriLoc, 1);

    gl.bindBuffer(gl.ARRAY_BUFFER, inLineColorBuf1);
    gl.enableVertexAttribArray(inLineColorsAttriLoc);
    gl.vertexAttribPointer(inLineColorsAttriLoc, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(inLineColorsAttriLoc, 1);


    // let aspect = gl.canvas.width / gl.canvas.height//gl.canvas.clientWidth / gl.canvas.clientHeight;
    // let zNear = 0.3;
    // let zFar = 10000;
    // let projectMatrix = m4.perspective(degToRad(60), aspect, zNear, zFar);
    // let cameraPosition = [0, 0, 1000];
    // let up = [0, 1, 0];
    // let fPosition = [0, 0, 0];
    // let cameraMatrix = m4.lookAt(cameraPosition, fPosition, up);

    // // cameraMatrix=m4.translate(cameraMatrix,0,0,1000);

    // let viewMatrix = m4.inverse(cameraMatrix);

    // let viewProjectionMatrix = m4.multiply(projectMatrix, viewMatrix);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            gl.useProgram(program);
            gl.bindVertexArray(vao);
            gl.uniform1f(opacityUnifLoc, unif.opacity);
            gl.uniform1f(radiusScaleUnifLoc, unif.radiusScale);
            gl.uniform1f(lineWidthScaleUnifLoc, unif.lineWidthScale);
            gl.uniform1f(strokedUnifLoc, unif.stroked);
            gl.uniform1i(filledUnifLoc, unif.filled);
            gl.uniform1i(billboardUnifLoc, unif.billboard);
            gl.uniform2fv(viewportSizeUnifLoc, unif.viewportSize);
            gl.uniform1i(antialiasingUnifLoc, unif.antialiasing);
        } else {
            gl.useProgram(programOne);
            gl.bindVertexArray(vao1);
            gl.uniform1f(opacityUnifLoc1, unif.opacity);
            gl.uniform1f(radiusScaleUnifLoc1, unif.radiusScale);
            gl.uniform1f(lineWidthScaleUnifLoc1, unif.lineWidthScale);
            gl.uniform1f(strokedUnifLoc1, unif.stroked);
            gl.uniform1i(filledUnifLoc1, unif.filled);
            gl.uniform1i(billboardUnifLoc1, unif.billboard);
            gl.uniform2fv(viewportSizeUnifLoc1, unif.viewportSize);
            gl.uniform1i(antialiasingUnifLoc1, unif.antialiasing);
        }


        // console.log(opacityUnifLoc,radiusScaleUnifLoc,lineWidthScaleUnifLoc, strokedUnifLoc, filledUnifLoc, billboardUnifLoc ,viewportSizeUnifLoc,antialiasingUnifLoc)

        //gl.uniformMatrix4fv(matrixUnifLoc, false, viewProjectionMatrix);

        // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        const primitiveType = gl.TRIANGLE_FAN;
        console.log(data.radius.length);
        gl.drawArraysInstanced(primitiveType, 0, 4, data.radius.length / 2);
    }

}

function generateData(w, h) {
    const len = 100;
    const originData = [];
    for (let i = 0; i < len; i++) {
        originData.push({
            id: i,
            position1: [Math.random(), Math.random(), 0],
            position2: [Math.random(), Math.random(), 0],
            radius: 6,
            lineWidth: 5,
            fillColor: [Math.random(), Math.random(), Math.random(), 1],
            lineColor: [0, 0, 0, 1],
        })
    }
    return originData;
}



function flatData(data) {
    const position1 = data.map((v) => v.position1);
    const position2 = data.map((v) => v.position2);
    const radius = data.map(v => v.radius);
    const lineWidth = data.map(v => v.lineWidth);
    const fillColor = data.map(v => v.fillColor);
    const lineColor = data.map(v => v.lineColor);

    return {
        position1: position1.flat(),
        position2: position2.flat(),
        radius: radius.flat(),
        lineWidth: lineWidth.flat(),
        fillColor: fillColor.flat(),
        lineColor: lineColor.flat()
    }
}

function combineData(data) {


    return {
        position: [...data.position1, ...data.position2],
        radius: [...data.radius, ...data.radius],
        lineWidth: [...data.lineWidth, ...data.lineWidth],
        fillColor: [...data.fillColor, ...data.fillColor],
        lineColor: [...data.lineColor, ...data.lineColor]
    }
}

/***/ }),

/***/ "./src/multiview/shader.js":
/*!*********************************!*\
  !*** ./src/multiview/shader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oneCircleFragmentShaderSource": () => (/* binding */ oneCircleFragmentShaderSource),
/* harmony export */   "multiOneCircleVertexShaderSource": () => (/* binding */ multiOneCircleVertexShaderSource),
/* harmony export */   "multiTwoCircleVertexShaderSource": () => (/* binding */ multiTwoCircleVertexShaderSource)
/* harmony export */ });
/* unused harmony exports circleVertexShaderSource, circleFragmentShaderSource, oneCircleVertexShaderSource */
const circleVertexShaderSource=`#version 300 es
in vec3 positions;
in vec3 instancePositions;

in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;

uniform float opacity;
uniform float radiusScale;
uniform float lineWidthScale;
uniform float stroked;
uniform bool filled;
uniform bool billboard;
uniform vec2 uViewportSize;


out vec4 vFillColor;
out vec2 unitPosition;
out vec4 vLineColor;
out float innerUnitRadius;
out float outerRadiusPixels;
vec4 project_position_to_clipspace(vec3 originPosition,vec3 offset){
    vec2 clipspace=(vec2(originPosition.xy)+vec2(offset.xy))/uViewportSize*2.0-1.0;
   
    return vec4(clipspace.xy,0,1);
  }
  vec2 project_pixel_size_to_clipspace(vec2 pixels) {
    vec2 offset = pixels / uViewportSize * 2.0;
    return offset;
  }
void main(void) {
  // Multiply out radius and clamp to limits
  outerRadiusPixels = clamp(
   radiusScale * instanceRadius,
    0.0, 30.0
  );
  
  // Multiply out line width and clamp to limits
  float lineWidthPixels = clamp(
    lineWidthScale * instanceLineWidths,
    0.0, 30.0
  );
  // outer radius needs to offset by half stroke width
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;
  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  
  
  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  if (billboard) {
    //gl_Position = project_position_to_clipspace(instancePositions);
    //vec3 offset = positions * outerRadiusPixels;
    //gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  } else {
    vec3 offset = positions * outerRadiusPixels;
    gl_Position =project_position_to_clipspace(instancePositions,offset);
  }

  //vFillColor=project_position_to_clipspace(instancePositions);
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
}
`

const circleFragmentShaderSource=`#version 300 es
precision highp float;
uniform bool filled;
uniform float stroked;
uniform bool antialiasing;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 outColor;
float smoothedge(float edge, float x) {
    return smoothstep(edge - 0.5, edge + 0.5, x);
}
void main(void) {
  float distToCenter = length(unitPosition) * outerRadiusPixels;
  float inCircle = antialiasing ? 
    smoothedge(distToCenter, outerRadiusPixels) : 
    step(distToCenter, outerRadiusPixels);
  if (inCircle == 0.0) {
    discard;
  }
  if (stroked > 0.5) {
    float isLine = antialiasing ? 
      smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
      step(innerUnitRadius * outerRadiusPixels, distToCenter);
    if (filled) {
      outColor = mix(vFillColor, vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      outColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
    }
  } else if (filled) {
    outColor = vFillColor;
  } else {
    discard;
  }
  outColor.a *= inCircle;
}`

const oneCircleVertexShaderSource=`#version 300 es
in vec3 positions;
in vec3 instancePositions;

in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;

uniform float opacity;
uniform float radiusScale;
uniform float lineWidthScale;
uniform float stroked;
uniform bool filled;
uniform bool billboard;
uniform vec2 uViewportSize;
uniform int uProgram;


out vec4 vFillColor;
out vec2 unitPosition;
out vec4 vLineColor;
out float innerUnitRadius;
out float outerRadiusPixels;
vec4 project_position_to_clipspace(vec3 originPosition,vec3 offset){
  if(uProgram==0){
    float x=originPosition.x*980.0;
    float y=originPosition.y*1000.0;
    vec2 clipspace=(vec2(x,y)+vec2(offset.xy))/uViewportSize*2.0-1.0;
    return vec4(clipspace.xy,0,1);
  }else{
    float x=originPosition.x*980.0+1020.0;
    float y=originPosition.y*1000.0;
    vec2 clipspace=(vec2(x,y)+vec2(offset.xy))/uViewportSize*2.0-1.0;
    return vec4(clipspace.xy,0,1);
  }
    
  }
  vec2 project_pixel_size_to_clipspace(vec2 pixels) {

    vec2 offset = pixels / uViewportSize * 2.0;
    return offset;
  }
void main(void) {
  // Multiply out radius and clamp to limits
  outerRadiusPixels = clamp(
   radiusScale * instanceRadius,
    0.0, 30.0
  );
  
  // Multiply out line width and clamp to limits
  float lineWidthPixels = clamp(
    lineWidthScale * instanceLineWidths,
    0.0, 30.0
  );
  // outer radius needs to offset by half stroke width
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;
  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  
  
  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  if (billboard) {
    //gl_Position = project_position_to_clipspace(instancePositions);
    //vec3 offset = positions * outerRadiusPixels;
    //gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  } else {
    vec3 offset = positions * outerRadiusPixels;
    gl_Position =project_position_to_clipspace(instancePositions,offset);
  }

  //vFillColor=project_position_to_clipspace(instancePositions);
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
}
`

const oneCircleFragmentShaderSource=`#version 300 es
precision highp float;
uniform bool filled;
uniform float stroked;
uniform bool antialiasing;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 outColor;
float smoothedge(float edge, float x) {
    return smoothstep(edge - 0.5, edge + 0.5, x);
}
void main(void) {
  float distToCenter = length(unitPosition) * outerRadiusPixels;
  float inCircle = antialiasing ? 
    smoothedge(distToCenter, outerRadiusPixels) : 
    step(distToCenter, outerRadiusPixels);
  if (inCircle == 0.0) {
    discard;
  }
  if (stroked > 0.5) {
    float isLine = antialiasing ? 
      smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
      step(innerUnitRadius * outerRadiusPixels, distToCenter);
    if (filled) {
      outColor = mix(vFillColor, vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      outColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
    }
  } else if (filled) {
    outColor = vFillColor;
  } else {
    discard;
  }
  outColor.a *= inCircle;
}`

const multiOneCircleVertexShaderSource=`#version 300 es
in vec3 positions;
in vec3 instancePositions;

in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;

uniform float opacity;
uniform float radiusScale;
uniform float lineWidthScale;
uniform float stroked;
uniform bool filled;
uniform bool billboard;
uniform vec2 uViewportSize;


out vec4 vFillColor;
out vec2 unitPosition;
out vec4 vLineColor;
out float innerUnitRadius;
out float outerRadiusPixels;
vec4 project_position_to_clipspace(vec3 originPosition,vec3 offset){
  
    float x=originPosition.x*980.0;
    float y=originPosition.y*1000.0;
    vec2 clipspace=(vec2(x,y)+vec2(offset.xy))/uViewportSize*2.0-1.0;
    return vec4(clipspace.xy,0,1);
 
    
  }
  vec2 project_pixel_size_to_clipspace(vec2 pixels) {

    vec2 offset = pixels / uViewportSize * 2.0;
    return offset;
  }
void main(void) {
  // Multiply out radius and clamp to limits
  outerRadiusPixels = clamp(
   radiusScale * instanceRadius,
    0.0, 30.0
  );
  
  // Multiply out line width and clamp to limits
  float lineWidthPixels = clamp(
    lineWidthScale * instanceLineWidths,
    0.0, 30.0
  );
  // outer radius needs to offset by half stroke width
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;
  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  
  
  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  if (billboard) {
    //gl_Position = project_position_to_clipspace(instancePositions);
    //vec3 offset = positions * outerRadiusPixels;
    //gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  } else {
    vec3 offset = positions * outerRadiusPixels;
    gl_Position =project_position_to_clipspace(instancePositions,offset);
  }

  //vFillColor=project_position_to_clipspace(instancePositions);
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
}
`

const multiTwoCircleVertexShaderSource=`#version 300 es
in vec3 positions;
in vec3 instancePositions;

in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;

uniform float opacity;
uniform float radiusScale;
uniform float lineWidthScale;
uniform float stroked;
uniform bool filled;
uniform bool billboard;
uniform vec2 uViewportSize;



out vec4 vFillColor;
out vec2 unitPosition;
out vec4 vLineColor;
out float innerUnitRadius;
out float outerRadiusPixels;
vec4 project_position_to_clipspace(vec3 originPosition,vec3 offset){
  
    float x=originPosition.x*980.0+1020.0;
    float y=originPosition.y*1000.0;
    vec2 clipspace=(vec2(x,y)+vec2(offset.xy))/uViewportSize*2.0-1.0;
    return vec4(clipspace.xy,0,1);
  
    
  }
  vec2 project_pixel_size_to_clipspace(vec2 pixels) {

    vec2 offset = pixels / uViewportSize * 2.0;
    return offset;
  }
void main(void) {
  // Multiply out radius and clamp to limits
  outerRadiusPixels = clamp(
   radiusScale * instanceRadius,
    0.0, 30.0
  );
  
  // Multiply out line width and clamp to limits
  float lineWidthPixels = clamp(
    lineWidthScale * instanceLineWidths,
    0.0, 30.0
  );
  // outer radius needs to offset by half stroke width
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;
  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  
  
  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  if (billboard) {
    //gl_Position = project_position_to_clipspace(instancePositions);
    //vec3 offset = positions * outerRadiusPixels;
    //gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  } else {
    vec3 offset = positions * outerRadiusPixels;
    gl_Position =project_position_to_clipspace(instancePositions,offset);
  }

  //vFillColor=project_position_to_clipspace(instancePositions);
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
}
`



/***/ }),

/***/ "./src/util/glUtil.js":
/*!****************************!*\
  !*** ./src/util/glUtil.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationGetter": () => (/* binding */ LocationGetter),
/* harmony export */   "createProgramWithShader": () => (/* binding */ createProgramWithShader)
/* harmony export */ });
/* unused harmony exports createProgram, createShader, resize */
function createShader(gl,type,source){
    const shader=gl.createShader(type);
    gl.shaderSource(shader,source);
    gl.compileShader(shader);
    const success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);
    if(success){
        return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return undefined;
}

function createProgram(gl,vertexShader,fragmentShader){
    const program=gl.createProgram();
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    const success=gl.getProgramParameter(program,gl.LINK_STATUS);
    if(success){
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return undefined;
}

function createProgramWithShader(gl,vs,fs){
    const vertexShader=createShader(gl,gl.VERTEX_SHADER,vs);
    const fragmentShader=createShader(gl,gl.FRAGMENT_SHADER,fs);
    
    return createProgram(gl,vertexShader,fragmentShader);
}

function resize(canvas) {
    canvas.style.width=canvas.clientWidth+'px';
    var cssToRealPixels = window.devicePixelRatio || 1;
    console.log(window.devicePixelRatio);
    
    var displayWidth  = Math.floor(canvas.clientWidth  * cssToRealPixels);
    var displayHeight = Math.floor(canvas.clientHeight * cssToRealPixels);
  
    if (canvas.width  !== displayWidth ||
        canvas.height !== displayHeight) {
  
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }
  }

class LocationGetter{
    constructor(gl,program){
        this.gl=gl;
        this.program=program;
    }
    gU(name){
        return this.gl.getUniformLocation(this.program,name)
    }
    gA(name){
        return this.gl.getAttribLocation(this.program,name);
    }
}



/***/ }),

/***/ "./src/util/matrix.js":
/*!****************************!*\
  !*** ./src/util/matrix.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports m3, m4, radToDeg, degToRad */
let m3 = {
    translation: function (tx, ty) {
      return [
        1, 0, 0,
        0, 1, 0,
        tx, ty, 1,
      ];
    },
  
    rotation: function (angleInRadians) {
      let c = Math.cos(angleInRadians);
      let s = Math.sin(angleInRadians);
      return [
        c, -s, 0,
        s, c, 0,
        0, 0, 1,
      ];
    },
  
    scaling: function (sx, sy) {
      return [
        sx, 0, 0,
        0, sy, 0,
        0, 0, 1,
      ];
    },
    multiply: function (a, b) {
      let a00 = a[0 * 3 + 0];
      let a01 = a[0 * 3 + 1];
      let a02 = a[0 * 3 + 2];
      let a10 = a[1 * 3 + 0];
      let a11 = a[1 * 3 + 1];
      let a12 = a[1 * 3 + 2];
      let a20 = a[2 * 3 + 0];
      let a21 = a[2 * 3 + 1];
      let a22 = a[2 * 3 + 2];
      let b00 = b[0 * 3 + 0];
      let b01 = b[0 * 3 + 1];
      let b02 = b[0 * 3 + 2];
      let b10 = b[1 * 3 + 0];
      let b11 = b[1 * 3 + 1];
      let b12 = b[1 * 3 + 2];
      let b20 = b[2 * 3 + 0];
      let b21 = b[2 * 3 + 1];
      let b22 = b[2 * 3 + 2];
  
      return [
        b00 * a00 + b01 * a10 + b02 * a20,
        b00 * a01 + b01 * a11 + b02 * a21,
        b00 * a02 + b01 * a12 + b02 * a22,
        b10 * a00 + b11 * a10 + b12 * a20,
        b10 * a01 + b11 * a11 + b12 * a21,
        b10 * a02 + b11 * a12 + b12 * a22,
        b20 * a00 + b21 * a10 + b22 * a20,
        b20 * a01 + b21 * a11 + b22 * a21,
        b20 * a02 + b21 * a12 + b22 * a22,
      ];
    },
    projection: function (width, height) {
      // Note: This matrix flips the Y axis so that 0 is at the top.
      return [
        2 / width, 0, 0,
        0, 2 / height, 0,
        -1, -1, 1,
      ];
    },
    translate: function (m, tx, ty) {
      return m3.multiply(m, m3.translation(tx, ty));
    },
  
    rotate: function (m, angleInRadians) {
      return m3.multiply(m, m3.rotation(angleInRadians));
    },
  
    scale: function (m, sx, sy) {
      return m3.multiply(m, m3.scaling(sx, sy));
    },
  };
  
  let m4 = {
    translation: function (tx, ty, tz) {
      return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        tx, ty, tz, 1,
      ];
    },
  
    xRotation: function (angleInRadians) {
      let c = Math.cos(angleInRadians);
      let s = Math.sin(angleInRadians);
  
      return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1,
      ];
    },
  
    yRotation: function (angleInRadians) {
      let c = Math.cos(angleInRadians);
      let s = Math.sin(angleInRadians);
  
      return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1,
      ];
    },
  
    zRotation: function (angleInRadians) {
      let c = Math.cos(angleInRadians);
      let s = Math.sin(angleInRadians);
  
      return [
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];
    },
  
    scaling: function (sx, sy, sz) {
      return [
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1,
      ];
    },
    projection: function (width, height, depth) {
      // Note: This matrix flips the Y axis so 0 is at the top.
      return [
        2 / width, 0, 0, 0,
        0, 2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, -1, 0, 1,
      ];
    },
    makeZToWMatrix: function makeZToWMatrix(fudgeFactor) {
      return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1,
      ];
    },
    orthographic: function (left, right, bottom, top, near, far) {
      return [
        2 / (right - left), 0, 0, 0,
        0, 2 / (top - bottom), 0, 0,
        0, 0, 2 / (near - far), 0,
  
        (left + right) / (left - right),
        (bottom + top) / (bottom - top),
        (near + far) / (near - far),
        1,
      ];
    },
    perspective: function (fieldOfViewInRadians, aspect, near, far) {
      let f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
      let rangeInv = 1.0 / (near - far);
  
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (near + far) * rangeInv, -1,
        0, 0, near * far * rangeInv * 2, 0
      ];
    },
    cross: function(a, b) {
      return [
         a[1] * b[2] - a[2] * b[1],
         a[2] * b[0] - a[0] * b[2],
         a[0] * b[1] - a[1] * b[0],
      ];
    },
    lookAt: function (cameraPosition, target, up) {
      var zAxis = m4.normalize(
        m4.subtractVectors(cameraPosition, target));
      var xAxis = m4.normalize(m4.cross(up, zAxis));
      var yAxis = m4.normalize(m4.cross(zAxis, xAxis));
  
      return [
        xAxis[0], xAxis[1], xAxis[2], 0,
        yAxis[0], yAxis[1], yAxis[2], 0,
        zAxis[0], zAxis[1], zAxis[2], 0,
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        1,
      ];
    },
    translate: function (m, tx, ty, tz) {
      return m4.multiply(m, m4.translation(tx, ty, tz));
    },
  
    xRotate: function (m, angleInRadians) {
      return m4.multiply(m, m4.xRotation(angleInRadians));
    },
  
    yRotate: function (m, angleInRadians) {
      return m4.multiply(m, m4.yRotation(angleInRadians));
    },
  
    zRotate: function (m, angleInRadians) {
      return m4.multiply(m, m4.zRotation(angleInRadians));
    },
  
    scale: function (m, sx, sy, sz) {
      return m4.multiply(m, m4.scaling(sx, sy, sz));
    },
    multiply: function multiply(a, b) {
      var a00 = a[0 * 4 + 0];
      var a01 = a[0 * 4 + 1];
      var a02 = a[0 * 4 + 2];
      var a03 = a[0 * 4 + 3];
      var a10 = a[1 * 4 + 0];
      var a11 = a[1 * 4 + 1];
      var a12 = a[1 * 4 + 2];
      var a13 = a[1 * 4 + 3];
      var a20 = a[2 * 4 + 0];
      var a21 = a[2 * 4 + 1];
      var a22 = a[2 * 4 + 2];
      var a23 = a[2 * 4 + 3];
      var a30 = a[3 * 4 + 0];
      var a31 = a[3 * 4 + 1];
      var a32 = a[3 * 4 + 2];
      var a33 = a[3 * 4 + 3];
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      return [
        b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
        b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
        b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
        b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
        b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
        b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
        b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
        b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
        b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
        b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
        b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
        b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
        b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
        b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
        b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
        b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
      ];
    },
    inverse: function (m) {
      var m00 = m[0 * 4 + 0];
      var m01 = m[0 * 4 + 1];
      var m02 = m[0 * 4 + 2];
      var m03 = m[0 * 4 + 3];
      var m10 = m[1 * 4 + 0];
      var m11 = m[1 * 4 + 1];
      var m12 = m[1 * 4 + 2];
      var m13 = m[1 * 4 + 3];
      var m20 = m[2 * 4 + 0];
      var m21 = m[2 * 4 + 1];
      var m22 = m[2 * 4 + 2];
      var m23 = m[2 * 4 + 3];
      var m30 = m[3 * 4 + 0];
      var m31 = m[3 * 4 + 1];
      var m32 = m[3 * 4 + 2];
      var m33 = m[3 * 4 + 3];
      var tmp_0 = m22 * m33;
      var tmp_1 = m32 * m23;
      var tmp_2 = m12 * m33;
      var tmp_3 = m32 * m13;
      var tmp_4 = m12 * m23;
      var tmp_5 = m22 * m13;
      var tmp_6 = m02 * m33;
      var tmp_7 = m32 * m03;
      var tmp_8 = m02 * m23;
      var tmp_9 = m22 * m03;
      var tmp_10 = m02 * m13;
      var tmp_11 = m12 * m03;
      var tmp_12 = m20 * m31;
      var tmp_13 = m30 * m21;
      var tmp_14 = m10 * m31;
      var tmp_15 = m30 * m11;
      var tmp_16 = m10 * m21;
      var tmp_17 = m20 * m11;
      var tmp_18 = m00 * m31;
      var tmp_19 = m30 * m01;
      var tmp_20 = m00 * m21;
      var tmp_21 = m20 * m01;
      var tmp_22 = m00 * m11;
      var tmp_23 = m10 * m01;
  
      var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
      var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
      var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
      var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
  
      var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  
      return [
        d * t0,
        d * t1,
        d * t2,
        d * t3,
        d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
          (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
        d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
          (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
        d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
          (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
        d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
          (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
        d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
          (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
        d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
          (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
        d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
          (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
        d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
          (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
        d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
          (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
        d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
          (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
        d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
          (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
        d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
          (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02)),
      ];
    },
  
    subtractVectors: function (a, b) {
      return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    },
  
    normalize: function (v) {
      let length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      // make sure we don't divide by 0.
      if (length > 0.00001) {
        return [v[0] / length, v[1] / length, v[2] / length];
      } else {
        return [0, 0, 0];
      }
    },
    transformVector: function (m, v) {
      let dst = [];
      for (let i = 0; i < 4; ++i) {
        dst[i] = 0.0;
        for (let j = 0; j < 4; ++j) {
          dst[i] += v[j] * m[j * 4 + i];
        }
      }
      return dst;
    },
  };
  
  // export function normalize(v) {
  //   let length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  //   // make sure we don't divide by 0.
  //   if (length > 0.00001) {
  //     return [v[0] / length, v[1] / length, v[2] / length];
  //   } else {
  //     return [0, 0, 0];
  //   }
  // }
  
  // export function subtractVectors(a, b) {
  //   return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  // }
  
  // export function cross(a, b) {
  //   return [a[1] * b[2] - a[2] * b[1],
  //   a[2] * b[0] - a[0] * b[2],
  //   a[0] * b[1] - a[1] * b[0]];
  // }
  
  function radToDeg(r) {
    return r * 180 / Math.PI;
  }
  
  function degToRad(d) {
    return d * Math.PI / 180;
  }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b2199a0e183776610bea")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "svgl:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesvgl"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksvgl"] = self["webpackChunksvgl"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_index_js"], () => (__webpack_require__("./src/multiview/multiprogram.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map