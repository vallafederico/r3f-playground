import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Scene } from "./Scene";

export default function Gl() {
  return (
    <div className="cnv-wrap">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 2] }}
        gl={{
          alpha: true,
          antialias: true,
          logarithmicDepthBuffer: true,
          // setClearColor: "#ff0000",
        }}
      >
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
