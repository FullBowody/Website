import * as THREE from 'three';

type Point3 = {x: number, y: number, z: number};

export default class ThreeScene {
    public scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.buildScene();
    }

    buildScene() {
        const axis = this.createAxis(1); 
        axis.position.set(0, 0.001, 0) 
        this.scene.add(axis); 
        this.scene.add(this.createLineGround(1, 10, 0x888888));
    }

    createLine(p1: THREE.Vector3|Point3, p2: THREE.Vector3|Point3, color: number) { 
        const points = []; 
        points.push(new THREE.Vector3(p1.x, p1.y, p1.z)); 
        points.push(new THREE.Vector3(p2.x, p2.y, p2.z)); 
        const geometry = new THREE.BufferGeometry().setFromPoints(points); 
        const material = new THREE.LineBasicMaterial({color}); 
        return new THREE.Line(geometry, material); 
    } 
     
    createAxis(size: number) { 
        const group = new THREE.Group(); 
        group.add(this.createLine({x: 0, y: 0, z: 0}, {x: size, y: 0, z: 0}, 0xff0000)); 
        group.add(this.createLine({x: 0, y: 0, z: 0}, {x: 0, y: size, z: 0}, 0x00ff00)); 
        group.add(this.createLine({x: 0, y: 0, z: 0}, {x: 0, y: 0, z: size}, 0x0000ff)); 
        return group; 
    } 
     
    createLineGround(size: number, repetitions: number, color: number) { 
        const group = new THREE.Group(); 
        const total = size * repetitions / 2 + 1; 
        for (let i = -repetitions/2; i <= repetitions/2; i++) { 
            group.add(this.createLine({x: -total, y: 0, z: i}, {x:  total, y: 0, z: i}, color)); 
            group.add(this.createLine({x:  i, y: 0, z: -total}, {x:  i, y: 0, z:  total}, color)); 
        } 
        return group; 
    } 
}
