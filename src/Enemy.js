//@flow

import type Engine from "Engine";
import type Point from "Point";

import mech from "mech.png";

import Actor from "Actor";

export default class Enemy extends Actor {
	position: Point;
	size: { w: number, h: number };
	registration: { x: number, y: number };
	walkSpeed: number;
	v: number;
	h: number;
	constructor(params: Object) {
		super();
		this.walkSpeed = 50;
		this.size = { w: 50, h: 50 };
		this.registration = { x: 0.5, y: 1 };

		Object.assign(this, params);
	}
	action: ?Generator<*, *, *>;
	update(engine: Engine) {
		if (!this.action) {
			this.action = ai.bind(this)(engine);
		}
		if (this.action.next().done) {
			this.action = null;
		}
		engine.ctx.drawSprite(mech, this.position, this.size, 0, this.registration);
	}
}

export function* ai(engine: Engine): Generator<*, *, *> {
	// console.log(this);
	(this: Enemy);
	let direction = 1;
	while (true) {
		let hDelta = engine.deltaTime * this.walkSpeed * direction;
		if (!this.canMoveHori(hDelta)) {
			direction = -direction;
		} else {
			this.position.x += hDelta;
		}

		this.gravity();
		yield;
	}
}
