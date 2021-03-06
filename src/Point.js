// @flow
/*
eases use of the points system
points stored in ingame coordinates
*/
import config from "config";
import Block from "Block";
// import type {State} from 'Game/state'

// import Engine from 'Engine';
// let engine = Engine.getInstance();

// export function screenToWorld(point:{x:number, y:number}, state:State): {x:number, y:number}{
//   return {
//     x: (point.x / state.view.state.scale) - state.view.state.offset.x,
//     y: (point.y / state.view.state.scale) - state.view.state.offset.y
//   };
// }
// export function worldToScreen(point:{x:number, y:number}, state:State):{x:number, y:number}{
//   return {
//     x: (state.view.state.offset.x + (point.x)) * state.view.state.scale,
//     y: (state.view.state.offset.y + (point.y)) * state.view.state.scale,
//   };
// }

// let state:State

export default class Point {
	x: number;
	y: number;
	constructor(pos: { x: number, y: number }): void {
		this.x = pos.x;
		this.y = pos.y;
	}

	clone() {
		return new Point({
			x: this.x,
			y: this.y
		});
	}

	add(diff: { x: number, y: number }) {
		return new Point({
			x: this.x + diff.x,
			y: this.y + diff.y
		});
	}
	subtract(diff: { x: number, y: number }) {
		return new Point({
			x: this.x - diff.x,
			y: this.y - diff.y
		});
	}
	multiply(num: number) {
		return new Point({
			x: this.x * num,
			y: this.y * num
		});
	}
	distanceTo(point: Point) {
		let diff = this.subtract(point);
		return Math.sqrt(Math.pow(diff.x, 2), Math.pow(diff.y, 2));
	}

	getBlock(): { x: number, y: number } {
		return {
			x: Math.floor(this.x / config.grid.width),
			y: Math.floor(this.y / config.grid.height)
		};
	}

	// get screen():{x:number, y:number}{
	//   if(!state) throw new Error('Point state not registered')
	//   return worldToScreen({x:this.x, y:this.y}, state);
	// }

	// static fromScreen(x:number,y:number):Point{
	//   if(!state) throw new Error('Point state not registered')
	//   let pos: {x: number, y: number} = screenToWorld({x,y}, state);
	//   return new Point(pos);
	// }

	get rounded(): Point {
		return new Point({
			x: Math.round(this.x),
			y: Math.round(this.y)
		});
	}
}
