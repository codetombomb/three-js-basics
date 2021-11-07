// ------Creating the scene------
// To actually be able to display anything with three.js, we need three things: scene, camera and 
// renderer, so that we can render the scene with camera.

// initialize a new scene
const scene = new THREE.Scene();



//initialize the camera

// PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
// fov(field of view) — Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is 50.
// aspect — Camera frustum aspect ratio, usually the canvas width / canvas height. Default is 1 (square canvas).
// near — Camera frustum near plane. Default is 0.1.
// far — Camera frustum far plane. Default is 2000.

const camera = new THREE.PerspectiveCamera(
    75, //fov (field of view)
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far
);



// initialize the renderer

// The WebGL renderer displays your beautifully crafted scenes using WebGL.
// https://threejs.org/docs/index.html?q=we#api/en/renderers/WebGLRenderer
//Construtor
// ---- WebGLRenderer( parameters : Object ) ----
// parameters - (optional) object with properties defining the renderer's behaviour. The constructor 
// also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are 
// missing. The following are valid parameters:

// canvas - A canvas where the renderer draws its output. This corresponds to the domElement property 
// below. If not passed in here, a new canvas element will be created.

// context - This can be used to attach the renderer to an existing RenderingContext. Default is null.

// precision - Shader precision. Can be "highp", "mediump" or "lowp". Defaults to "highp" if supported by 
// the device. See the note in "Things to Avoid".

// alpha - whether the canvas contains an alpha (transparency) buffer or not. Default is false.

// premultipliedAlpha - whether the renderer will assume that colors have premultiplied alpha. Default 
// is true.

// antialias - whether to perform antialiasing. Default is false.

// stencil - whether the drawing buffer has a stencil buffer of at least 8 bits. Default is true.

// preserveDrawingBuffer - whether to preserve the buffers until manually cleared or overwritten. 
// Default is false.

// powerPreference - Provides a hint to the user agent indicating what configuration of GPU is suitable 
// for this WebGL context. Can be "high-performance", "low-power" or "default". Default is "default". 
// See WebGL spec for details.

// failIfMajorPerformanceCaveat - whether the renderer creation will fail upon low performance is 
// detected. Default is false. See WebGL spec for details.

// depth - whether the drawing buffer has a depth buffer of at least 16 bits. Default is true.

// logarithmicDepthBuffer - whether to use a logarithmic depth buffer. It may be necessary to use this
// if dealing with huge differences in scale in a single scene. Note that this setting uses 
// gl_FragDepth if available which disables the Early Fragment Test optimization and can cause a 
// decrease in performance. Default is false. See the camera / logarithmicdepthbuffer example.

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate(){
    requestAnimationFrame( animate ); 

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    
    renderer.render( scene, camera );
}

animate()