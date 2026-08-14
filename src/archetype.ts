import { seededRandom } from "./rng";

export class MazeGrid {
  private eaten = 0;
  private total = 0;
  constructor(public readonly w = 10, public readonly h = 8) {}
  consume(): number { this.eaten++; return this.eaten; }
  setPellets(n: number): void { this.total = n; }
  remaining(): number { return Math.max(0, this.total - this.eaten); }
}
export class ChaseAI {
  constructor(private readonly rng: () => number = seededRandom(7)) {}
  step(x: number, y: number, tx: number, ty: number): [number, number] {
    if (Math.abs(tx - x) > Math.abs(ty - y)) return [x + (tx > x ? 1 : -1), y];
    return [x, y + (ty > y ? 1 : -1)];
  }
  scatter(): [number, number] { return [Math.floor(this.rng() * 3) - 1, Math.floor(this.rng() * 3) - 1]; }
}