import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { WrapperContainer } from '../../../styles/Reusable/wrapperdivstyle';
import { softShadows, Sphere, PerspectiveCamera } from '@react-three/drei';

softShadows();

const Spinningcube = ({position, args, color}) => {

    const mesh = useRef(null);

    useFrame(()=> (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh castShadow position={position} ref={mesh}>
            <Sphere args={[1, 32, 32, 4]}>
                    <meshBasicMaterial attach="material" color="yellow" />
            </Sphere>
        </mesh>
    )
}

const LandingBackground = () => {

    

    return (
        <WrapperContainer hgt="100vh">
            <Canvas shadowMap colorManagement>
                <PerspectiveCamera position={[20, 0.1, 1000]} />
                <ambientLight intensity={0.3} />
                <directionalLight
                    
                    position={[0, 10, 0]} 
                    intensity={1} 
                />
                <pointLight position={[-10, 0] } intensity={0.5} />
                <pointLight position={[0,-10] } intensity={0.5} />

                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        <shadowMaterial attach='material' opacity={0.3} />
                    </mesh>
                    <Spinningcube position={[0, 1, 0]} args={[3,2,1]} color="red" />
                    <Spinningcube position={[-2, 1, -5]} color="blue"/>
                    <Spinningcube position={[5, 1, -2]} color="green" />
                </group>
                
                
                
            </Canvas>
        </WrapperContainer>
    )

}

export default LandingBackground;
