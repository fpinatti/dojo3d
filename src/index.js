import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const shape = new THREE.BoxGeometry(1, 1, 1, 100, 100, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true, side: THREE.DoubleSide});
// const mesh = new THREE.Mesh(shape, material);
// scene.add(mesh);

const el = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

new OrbitControls(camera, renderer.domElement);

// lights
const light = new THREE.PointLight(0xFFFF00, 1, 100);
light.position.set(0, 10, 5);
scene.add(light);

renderer.setSize(window.innerWidth, window.innerHeight);

// Load Glt file
const loader = new GLTFLoader();
loader.load('models/monkey.gltf', (monkey) => {
    const monkeyObj = new THREE.Group();
    scene.add(monkeyObj);
    monkey.scene.children.map((child) => {
        child.material = material;
        monkeyObj.add(child);
        return child;
    })
    // console.log(monkey);
    // scene.add(monkey.scene);
})

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();