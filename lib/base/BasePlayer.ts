import type { Object3D } from "three";

export class BasePlayer {
    mesh: Object3D;

    constructor(mesh: Object3D) {
        this.mesh = mesh;
    }
}