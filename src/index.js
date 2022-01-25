import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const shape = new THREE.BoxGeometry(1, 1, 1, 100, 100, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true, sided: THREE.DoubleSide});
const mesh = new THREE.Mesh(shape, material);
scene.add(mesh);

const el = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const controls = new OrbitControls(camera, renderer.domElement);

const light = new THREE.PointLight(0xFFFF00, 1, 100);
light.position.set(0, 10, 5);
scene.add(light);

renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();