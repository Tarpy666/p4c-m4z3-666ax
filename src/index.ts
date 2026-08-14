// P4C-M4Z3-666AX — clean-room maze-chase. Deterministic by construction.
// Inspiration (mechanics only, not source material): maze chase conventions (maze, pellets, four pursuers)
// Target engine for the render layer: canvas-2d (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { MazeGrid, ChaseAI } from "./archetype";

export const SPEC = "maze chase conventions (maze, pellets, four pursuers)";
export const MODULES = [{ id: "MazeGrid", name: "P4C-M4Z3-666AX :: MazeGrid" }, { id: "ChaseAI", name: "P4C-M4Z3-666AX :: ChaseAI" }];
export { seededRandom };
