import { ContactShadows, Environment, OrbitControls, Sky,Text,Billboard } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useRef, useState } from "react";
import * as THREE from 'three'

export const Experience = () => {

  return (
    <>
      <OrbitControls enableRotate={true} enableZoom={false} />
      <Sky></Sky>
      <Environment preset="sunset"></Environment>
      <group position-y={-1} position-z={0} position-x={0} rotateZ={Math.PI/5}>
        <ContactShadows
        opacity={0.50}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color='#000000'
        ></ContactShadows>
      <Avatar></Avatar>
      {/* <mesh scale={[0.8,0.5,0.8]} position-y={0.25}>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color='yellow'></meshStandardMaterial>
      </mesh> */}
      <mesh scale={100} rotation-x={-Math.PI*0.5} position-y={-0.001}>
        <planeGeometry ></planeGeometry>
        <meshStandardMaterial color='white'></meshStandardMaterial>
      </mesh>
      {/* <mesh scale={5} position-x={0} position-y={0} position-z={-2}>
      
        <planeGeometry ></planeGeometry>
        <meshStandardMaterial color='yellow'></meshStandardMaterial>
       
      </mesh> */}
      {/* <Billboard
      castShadow={true}
        position={[0, 0.35, 0.1]}
  follow={true}
  lockX={false}
  lockY={false}
  lockZ={false} // Lock the rotation on the z axis (default=false)
>
  <Text fontSize={0.5} color={'black'} >Dinesh Kumar</Text>
</Billboard>
<Billboard
      castShadow={true}
        position={[0, 1, 0.2]}
  follow={true}
  lockX={false}
  lockY={false}
  lockZ={false} // Lock the rotation on the z axis (default=false)
>
  <Text fontSize={0.5} color={'#E3B448'}>Penikalapati</Text>
</Billboard>

<Billboard
      castShadow={true}
        position={[0, 1.75, -0.1]}
  follow={true}
  lockX={false}
  lockY={false}
  lockZ={false} // Lock the rotation on the z axis (default=false)
>
  <Text fontSize={0.5} color={'#3A6B35'}>This is</Text>
</Billboard> */}

      </group>
    </>
  );
};
