import { Icons } from "./icons";

const Icon = ({name}: any) => {
  interface Path {
    d: string;
    class?: string;
  }
  let icon = (Icons as any)[name] || {};
  let paths: Path[] = icon.paths || [];

  return (
    <>
      <svg
        className={icon.class}
        height={icon.height}
        viewBox={icon.viewBox}
        width={icon.width}
        fill={icon.fill}
        clipRule={icon.clipRule}
        fillRule={icon.fillRule}
        stroke={icon.stroke}
        strokeWidth={icon.strokeWidth}
        strokeLinecap={icon.strokeLinecap}
        strokeLinejoin={icon.strokeLinejoin}
      >
        <title>{icon.title}</title>
        {paths.map((path: Path, idx: number) => (
          <path d={path.d} className={path.class || ""} key={idx} />
        ))}
      </svg>
    </>
  );
};

export default Icon;
