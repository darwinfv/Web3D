let scale = 1.25;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
document.getElementsByClassName('content')[0].appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);
cube.rotation.y += 10;
cube.rotation.x -= 40;
scene.add(cube);

camera.position.z = 5;
// controls.update();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();

// https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models


window.addEventListener('resize', onWindowResize, false);
function onWindowResize(){
    renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}