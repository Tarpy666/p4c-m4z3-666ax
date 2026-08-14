import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { MazeGrid, ChaseAI } from "../src/archetype";

describe("P4C-M4Z3-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(2);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const ai = new ChaseAI();
const [nx, ny] = ai.step(2, 2, 5, 2);
expect(nx).toBe(3);
const maze = new MazeGrid();
maze.setPellets(4);
expect(maze.consume()).toBe(1);
expect(maze.remaining()).toBe(3);
  });
});
