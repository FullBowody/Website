import * as THREE from 'three';

class ThreeView {
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
        window.addEventListener("load", () => this.resize());
        window.addEventListener("resize", () => this.resize());

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.width / this.canvas.height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.onUpdateCallback = null;

        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        const light = new THREE.AmbientLight(0xffffff);
        this.scene.add(light);

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

    applyToCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.renderer.domElement.remove();
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.resize();
    }

    resize() {
        this.canvas.width = 0;
        this.canvas.height = 0;
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";

        setTimeout(() => {
            const canvasRect = this.canvas.getBoundingClientRect();
            this.canvas.width = canvasRect.width;
            this.canvas.height = canvasRect.height;

            this.camera.aspect = this.canvas.width / this.canvas.height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.canvas.width, this.canvas.height);
        }, 20);
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

let ThreeViewInstance: ThreeView|null = null;
function Create(canvas: HTMLCanvasElement) {
    if (ThreeViewInstance === null) {
        ThreeViewInstance = new ThreeView(canvas);
    } else {
        ThreeViewInstance.applyToCanvas(canvas);
    }
    return ThreeViewInstance;
}

export default {
    Create
};