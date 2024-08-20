import * as THREE from 'three';

export default class ThreeView {
    public canvas: HTMLCanvasElement;
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public renderer: THREE.WebGLRenderer;
    public onUpdateCallback: ((dt: number) => void)|null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const canvasRect = this.canvas.getBoundingClientRect();
        this.canvas.width = canvasRect.width;
        this.canvas.height = canvasRect.height;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.width / this.canvas.height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.onUpdateCallback = null;

        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        );
        cube.position.set(0, 0, 0);
        this.scene.add(cube);

        const light = new THREE.AmbientLight(0x505050);
        this.scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 5, -5);
        this.scene.add(directionalLight);

        window.addEventListener('resize', () => this.resize());

        let lastTime = Date.now();
        const animate = () => {
            requestAnimationFrame(animate);

            const now = Date.now();
            const dt = (now - lastTime) / 1000;
            lastTime = now;

            this.onUpdateCallback?.(dt);
            this.update(dt);
            this.render(dt);
        };

        animate();
    }

    resize() {
        const canvasRect = this.canvas.getBoundingClientRect();
        this.canvas.width = canvasRect.width;
        this.canvas.height = canvasRect.height;

        this.camera.aspect = this.canvas.width / this.canvas.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.width, this.canvas.height);
    }

    onUpdate(callback: (dt: number) => void) {
        this.onUpdateCallback = callback;
    }

    update(dt: number) {

    }

    render(dt: number) {
        this.renderer.render(this.scene, this.camera);
    }
}
