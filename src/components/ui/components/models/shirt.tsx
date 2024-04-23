"use client";

import * as THREE from "three";
import { useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  OrbitControls,
  PivotControls,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Html,
} from "@react-three/drei";
//@ts-nocheck

const DEFAULT_COLORS = {
  white: "#f0f8ff",
  beige: "#F3E5AB",
  red: "#FF0000",
  blue: "#4169e1",
  black: "#313131",
};

export const Shirt = (props: any) => {
  const gl = useThree((state) => state.gl);

  const [image, setImage] = useState(
    "https://ik.imagekit.io/freeflo/production/7b22dd96-285f-44c9-94e8-87782efb13a0.png?tr=w-3840,q-80&alt=media&pr-true"
  );
  // @ts-ignore
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  return (
    <>
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        // geometry={nodes.Cloth_mesh_4.geometry}
        material={materials["lambert1"]}
        // material={materials["Knit_Fleece_Terry_FRONT_2650"]}
        {...props}
        material-aoMapIntensity={1}
        dispose={null}
        scale={1.5}
      >
        <group position={[0, 0, 0.5]}>
          <PivotControls
            scale={0.2}
            activeAxes={[true, true, false]}
            onDrag={(local) => {
              const minAndMaxX = (x: number) => {
                if (x > 0.1123051291365908) return 0.08958316665788457;
                if (x < -0.0955177962853023) return -0.0955177962853023;
                return x;
              };

              const minAndMaxY = (y: number) => {
                if (y > 0.12393409500680214) return 0.12393409500680214;
                if (y < -0.2649047726189107) return -0.2649047726189107;
                return y;
              };
              const newposition = new THREE.Vector3();
              const scale = new THREE.Vector3();
              const quaternion = new THREE.Quaternion();
              local.decompose(newposition, quaternion, scale);
              const rotation = new THREE.Euler().setFromQuaternion(quaternion);
            }}
          />
        </group>
        <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.3}
          //@ts-ignore
          map={useTexture(props.image === "" ? image : props.image)}
        />
      </mesh>
    </>
  );
};
