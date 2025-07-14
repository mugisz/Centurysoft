import Spline from "@splinetool/react-spline";

export function SplineScene() {
  return (
    <div className="absolute top-[-180px] sm:top-[-10%] left-0 w-full h-full z-0">
      <Spline
        scene="https://prod.spline.design/c9-3wEj3Hu7yPDQs/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      />
    </div>
  );
}
