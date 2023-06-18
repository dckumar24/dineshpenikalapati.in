import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <>

    <Canvas  shadows camera={{ zoom: 40, position: [20, 10, 50] }} >
    {/* <Overlay></Overlay> */}
      <color attach="background" args={["grey"]} />
      
      <Experience />
    </Canvas>
    </>
  );
}

export default App;
