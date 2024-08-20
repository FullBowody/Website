import * as THREE from 'three';

export default class CameraCurveController {
    public camera: THREE.PerspectiveCamera;
    public speed: number;
    public targetT: number;
    public t: number;
    public points: {pos: THREE.Vector3, look: THREE.Vector3, div: HTMLDivElement}[];

    constructor(camera: THREE.PerspectiveCamera, speed: number) {
        this.camera = camera;
        this.speed = speed;
        this.points = [];
        this.targetT = 0;
        this.t = 0;
    }

    update(dt: number) {
        this.t += (this.targetT - this.t) * this.speed * dt;
        const {pos, look} = this.getPosLook(this.t);
        this.camera.position.set(pos.x, pos.y, pos.z);
        this.camera.lookAt(look);
    }

    watchElementScroll(el: HTMLDivElement) {
        el.addEventListener('scroll', () => {
            let beforeDiv = null;
            let beforeDivIndex = -1;
            for (const { div } of this.points) {
                if (div.offsetTop > el.scrollTop) {
                    break;
                }
                beforeDiv = div;
                beforeDivIndex++;
            }
            if (!beforeDiv) return;
            let afterDiv = beforeDiv.nextElementSibling as HTMLDivElement;
            if (!afterDiv) afterDiv = beforeDiv;

            const beforeShift = beforeDiv.offsetTop;
            const afterShift = afterDiv.offsetTop;
            const currentShift = el.scrollTop;
            const ratio = (currentShift - beforeShift) / (afterShift - beforeShift);

            this.targetT = beforeDivIndex + (ratio||0);
        });
    }

    addPoint(pos: number[], look: number[], div: HTMLDivElement) {
        this.points.push({
            pos: new THREE.Vector3(pos[0], pos[1], pos[2]),
            look: new THREE.Vector3(look[0], look[1], look[2]),
            div: div
        });
    }

    getPosLook(t: number) {
        if (this.points.length === 0)
            return {
                pos: new THREE.Vector3(),
                look: new THREE.Vector3()
            };
        if (this.points.length === 1)
            return {
                pos: this.points[0].pos.clone(),
                look: this.points[0].look.clone()
            };
        if (t >= this.points.length - 1)
            return {
                pos: this.points[this.points.length - 1].pos.clone(),
                look: this.points[this.points.length - 1].look.clone()
            };
        if (t <= 0)
            return {
                pos: this.points[0].pos.clone(),
                look: this.points[0].look.clone()
            };

        const floored = Math.floor(t);
        const next = Math.min(floored + 1, this.points.length - 1);
        const ratio = t - floored;
        
        const pos = this.points[floored].pos.clone().lerp(this.points[next].pos, ratio);
        const look = this.points[floored].look.clone().lerp(this.points[next].look, ratio);
        return {pos, look};
    }
}