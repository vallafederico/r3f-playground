import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { useGLTF } from "@react-three/drei";

// Texture loader
export const useTexture = (url) => {
  const loaded = useLoader(TextureLoader, url);

  if (typeof loaded === "object") loaded.forEach((t) => (t.flipY = false));
  else loaded.flipY = false;

  return loaded;
};

// Gltf Loader
export const useModel = (url) => {
  const { scene } = useGLTF(url);
  return scene;
};
