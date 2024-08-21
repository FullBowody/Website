import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type Point3 = {x: number, y: number, z: number};
const CAMERA_GLB_SRC = '/models/camera.glb';
const MARKER_GLB_SRC = '/models/marker.glb';

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const MATERIALS = [
    isDarkMode? 0x1e293b : 0xe2e8f0, // MAIN COLOR
    isDarkMode? 0x64748b : 0x94a3b8, // BORDER COLOR
    isDarkMode? 0x0f172a : 0x1e293b, // OTHER (camera hole or marker texture zone)
    isDarkMode? 0x0ea5e9 : 0x0ea5e9 // SELECTED COLOR
];

function assignModelMaterials(model: any) {
    const materials = MATERIALS.map(color => new THREE.MeshBasicMaterial({color}));
    model.traverse((child: any) => {
        if (child.isMesh) {
            const materialIndex = Math.floor(child.material.color.b * 2200); // getting index from hex value
            child.material = materials[materialIndex] ?? materials[0];
        }
    });
    if (!model.userData) model.userData = {};
    model.userData.borderMaterial = materials[1];
    model.userData.highlightMaterial = materials[3];
}

function createGLB(url: string) {
    return new Promise<THREE.Group>((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(url, (gltf: any) => {
            assignModelMaterials(gltf.scene);
            resolve(gltf.scene);
        }, undefined, reject);
    });
}

function createLine(p1: THREE.Vector3|Point3, p2: THREE.Vector3|Point3, color: number) { 
    const points = []; 
    points.push(new THREE.Vector3(p1.x, p1.y, p1.z)); 
    points.push(new THREE.Vector3(p2.x, p2.y, p2.z)); 
    const geometry = new THREE.BufferGeometry().setFromPoints(points); 
    const material = new THREE.LineBasicMaterial({color}); 
    return new THREE.Line(geometry, material); 
} 
 
function createAxis(size: number) { 
    const group = new THREE.Group(); 
    group.add(createLine({x: 0, y: 0, z: 0}, {x: size, y: 0, z: 0}, 0xff0000)); 
    group.add(createLine({x: 0, y: 0, z: 0}, {x: 0, y: size, z: 0}, 0x00ff00)); 
    group.add(createLine({x: 0, y: 0, z: 0}, {x: 0, y: 0, z: size}, 0x0000ff)); 
    return group; 
} 
 
function createLineGround(size: number, repetitions: number, color: number) { 
    const group = new THREE.Group(); 
    const total = size * repetitions / 2 + 1; 
    for (let i = -repetitions/2; i <= repetitions/2; i++) { 
        group.add(createLine({x: -total, y: 0, z: i}, {x:  total, y: 0, z: i}, color)); 
        group.add(createLine({x:  i, y: 0, z: -total}, {x:  i, y: 0, z:  total}, color)); 
    } 
    return group; 
} 

export default class ThreeScene {
    public scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.buildScene();
    }

    buildScene() {
        this.scene.clear();
        this.scene.add(new THREE.AmbientLight(0xffffff));

        const axis = createAxis(1); 
        axis.position.set(0, 0.001, 0) 
        this.scene.add(axis); 
        this.scene.add(createLineGround(1, 10, 0x888888));

        createGLB(CAMERA_GLB_SRC).then((camera) => {
            camera.position.set(-0.5, 1, 1);
            camera.rotateY(Math.PI * 0.75);
            camera.rotateX(Math.PI * 0.1);
            this.scene.add(camera);
        });

        createGLB(MARKER_GLB_SRC).then((marker) => {
            marker.position.set(0, 0, 0);
            marker.rotateX(-Math.PI / 2);
            this.scene.add(marker);
        });
    }
}
