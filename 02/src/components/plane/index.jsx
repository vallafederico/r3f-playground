import { useRef } from "react";
import { DoubleSide } from "three";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

const PlaneMaterial = new shaderMaterial(
  { u_time: { value: 0 } },
  vertex,
  fragment
);
extend({ PlaneMaterial });

export function Plane() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry />
      <planeMaterial key={PlaneMaterial.key} side={DoubleSide} />
    </mesh>
  );
}
