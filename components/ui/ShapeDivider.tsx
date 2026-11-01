import { shapes, type ShapeName } from "@/data/shapes";

type ShapeDividerProps = {
  name: ShapeName;
  position: "top" | "bottom";
  /** Tailwind classes controlling height (and width for wider-than-container shapes). */
  className?: string;
};

/**
 * Port of Elementor's `.elementor-shape`: an absolutely positioned SVG stretched
 * across the section edge. Bottom shapes are flipped 180° like Elementor does.
 */
export function ShapeDivider({ name, position, className = "" }: ShapeDividerProps) {
  const shape = shapes[name];
  const edge = position === "top" ? "top-[-1px]" : "bottom-[-1px] rotate-180";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 overflow-hidden leading-none ${edge}`}>
      <svg
        viewBox={shape.viewBox}
        preserveAspectRatio="none"
        className={`shape-fill-white relative left-1/2 block w-[calc(100%+1.3px)] -translate-x-1/2 ${className}`}
        dangerouslySetInnerHTML={{ __html: shape.markup }}
      />
    </div>
  );
}
