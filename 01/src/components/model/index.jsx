import { useRef } from "react";
import { DoubleSide } from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "../util/load-texture.jsx";

import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

// https://stackoverflow.com/questions/53897042/custom-shader-on-object-not-correct-when-object-is-rotating

const Program = new shaderMaterial(
  {
    u_time: { value: 0 },
    u_diff: { value: null },
    u_ldiff: { value: null },
    u_rough: { value: null },
    u_nor: { value: null },
    u_mouse: { value: [0, 0] },
  },
  vertex,
  fragment
);
extend({ Program });

export function Model({ position = [0, 0, 0] }) {
  const mesh = useRef();
  const { scene } = useGLTF("/rock/rocks.glb");

  const { viewport } = useThree();

  const [texture, ltexture, rough, nor] = useTexture([
    "/rock/rocks_diffuse.jpg",
    "/rock/light_rocks_diffuse.jpg",
    "/rock/rocks_roughness.jpg",
    "/rock/rocks_normal.jpg",
  ]);

  useFrame(({ clock, mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.5;
    mesh.current.material.uniforms.u_mouse.value = [x, y];

    mesh.current.rotation.x = clock.getElapsedTime() * 0.4;
  });

  return (
    <mesh
      geometry={scene.children[0].geometry}
      ref={mesh}
      scale={0.015}
      position={position}
    >
      <program
        key={Program.key}
        side={DoubleSide}
        uniforms-u_diff-value={texture}
        uniforms-u_ldiff-value={ltexture}
        uniforms-u_rough-value={rough}
        uniforms-u_nor-value={nor}
      />
    </mesh>
  );
}
