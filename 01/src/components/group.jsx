import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Group(props) {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {props.children}
    </group>
  );
}
