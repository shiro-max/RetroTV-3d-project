/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 retro_tv.gltf
Author: Tom Seddon (https://sketchfab.com/bloodmeat08)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/retro-television-e938241a182a4229ad48a1fc589e676e
Title: Retro Television
*/

import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import BgVedioTv from './BgVedioTv'

export function RetroTv(props) {
  const { nodes, materials } = useGLTF('/retro_tv.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.2, 0]}>
        <group scale={1.5}>
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.004']} castShadow>
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} castShadow>
        <Html className="content" rotation-x={Math.PI / 2} position={[-0.7,-2.4, 2.5]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <BgVedioTv className='justify-center items-center text-pink-600'/>
              </div>
        </Html>
        </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/retro_tv.gltf')
