import { useRef } from "react";
import { DoubleSide } from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useTexture, useModel } from "../util/loaders.jsx";

import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

const ModelMaterial = new shaderMaterial(
  {
    u_time: { value: 0 },
    u_mouse: { value: [0, 0] },
  },
  vertex,
  fragment
);
extend({ ModelMaterial });

export function Model({ position = [0, 0, 0], url }) {
  const mesh = useRef();
  const scene = useModel(url);

  useFrame(({ clock, mouse }) => {
    // const x = (mouse.x * viewport.width) / 2;
    // const y = (mouse.y * viewport.height) / 2;

    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh
      geometry={scene.children[0].geometry}
      ref={mesh}
      scale={0.015}
      position={position}
    >
      <modelMaterial key={ModelMaterial.key} side={DoubleSide} />
    </mesh>
  );
}
