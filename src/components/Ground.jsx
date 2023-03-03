import { MeshDistortMaterial, MeshReflectorMaterial, MeshRefractionMaterial, Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from "three";
import texture from "./../assets/Road.jpg"

const Ground = () => {
    const groundBg= useLoader(TextureLoader,texture)
    return (
        <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
            <Plane args={[20,20]}/>
            <MeshReflectorMaterial/>
        </mesh>
    );
}

export default Ground;