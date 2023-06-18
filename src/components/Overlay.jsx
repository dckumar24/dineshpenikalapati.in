import { Html } from "@react-three/drei";
import './Overlay.css';

export const Overlay=()=>{
    return (
        <group >
        <Html  fullscreen distanceFactor={10} occlude="blending" 
        material={
            <meshStandardMaterial color={'yellow'} />
          }>
            <div className="card">
            <h1 className="title">Hey! This is Dinesh Kumar Penikalapati</h1>
            <p className="desc">This website is under development.</p>
            <p className="desc">Thanks for visiting.</p>
            </div>
            
        </Html>
        </group>
    ) 
}