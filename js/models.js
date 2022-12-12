let models = [
    "https://raw.githubusercontent.com/darwinfv/Web3D/master/models/dough.gltf",
    "https://raw.githubusercontent.com/darwinfv/Web3D/master/models/bonsai.gltf"
];

let index = 0;

const loader = new THREE.GLTFLoader();

function specialSetup(index) {
    
}

function loadModel(index) {
    loader.load(models[index], function(gltf) {
        scene.add(gltf.scene);
    }, undefined, function(error) {
        console.error(error);
    });
}

function nextModel(i) {
    index += i;
    if (index < 0) {
        index += models.length;
    }
    index %= models.length;
    scene.remove(scene.children[1]);
    specialSetup(index);
    loadModel(index);
}
