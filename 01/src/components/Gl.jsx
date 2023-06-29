import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
  Grid,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { Model } from "./model";

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
        {/* <Plane /> */}

        <Model position={[0, 0, 0]} />

        <OrbitControls />

        {/* <EffectComposer>
          <Grid
            blendFunction={BlendFunction.OVERLAY} // blend mode
            scale={2.0} // grid pattern scale
            lineWidth={0.0} // grid pattern line width
          />
        </EffectComposer> */}
      </Canvas>
    </div>
  );
}
