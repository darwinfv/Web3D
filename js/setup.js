let scale = 1.25;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
document.getElementsByClassName('content')[0].appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const lights = lightSetup();
lights.forEach((light => {
    scene.add(light);
});

camera.position.z = 5;
// controls.update();
animate();
window.addEventListener('resize', onWindowResize, false);
defaultCube();

function lightSetup() {
    light = new THREE.AmbientLight(0x404040, 4);
    scene.add(light);

    // directionalLight = new THREE.DirectionalLight(0xffffff,1);
    // directionalLight.position.set(0,1,0);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);
    // light = new THREE.PointLight(0xc4c4c4,10);
    // light.position.set(0,300,500);
    // scene.add(light);
    // light2 = new THREE.PointLight(0xc4c4c4,10);
    // light2.position.set(500,100,0);
    // scene.add(light2);
    // light3 = new THREE.PointLight(0xc4c4c4,10);
    // light3.position.set(0,100,-500);
    // scene.add(light3);
    // light4 = new THREE.PointLight(0xc4c4c4,10);
    // light4.position.set(-500,300,500);
    // scene.add(light4);

    return lights;
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function defaultCube(color = 0x00ff00) {
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial( { color: color } );
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function onWindowResize() {
    renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

// https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models