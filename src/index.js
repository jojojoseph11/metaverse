
document.body.appendChild(VRButton.createButton(renderer));
renderer.xr.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040);
const dlight = new THREE.DirectionalLight(0xffffff, 0.5);

light.add(dlight);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: '#ff33ff' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


//import "./KeyInput";
const geometry1 = new THREE.BoxGeometry(50, 0.1, 50);
const material1 = new THREE.MeshPhongMaterial({ color: '#808080' });
const ground = new THREE.Mesh(geometry1, material1);

// camera.position.z = 5;


scene.add(ground);
camera.position.set(5, 15, 15);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(5, 10, 10);

scene.add(box);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.lookAt(ground.position)
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


renderer.setAnimationLoop(animate() {

    renderer.render(scene, camera);

});







