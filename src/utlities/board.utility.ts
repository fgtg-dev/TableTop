import type { Direction } from "../types/direction.type";
import type { Marker } from "../types/marker.type";

export class BoardUtilities {
    static parseBoardInput(
      input: string
    ): Marker {
      const [coordinates, direction] =
        input.split(" ");
    
      const [x, y] = coordinates
        .split(",")
        .map(Number);
    
      return {
        x,
        y,
        direction:
          direction as Direction,
      };
    }

}