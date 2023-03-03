import { ContactShadows, OrbitControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'
import Ground from './components/Ground'
import { RetroTv } from './components/Retro_tv'
// import Ground from './Ground'

function App() {

  return (
    <div>
      <h2 className='text-red-200'>hello</h2>
      <div className=' h-screen bg-slate-700'>
        {/* screen for gpl */}
        <Canvas dpr={[1,0.8]} camera={{ position: [8,20,40],fov:80}}>
          {/* light for object */}
          <ambientLight intensity={0.4}/>
          <pointLight position={[2, 2, 2]} intensity={1.5} />
          <directionalLight intensity={1} position={[2,3,3]}/>
          
          {/* grid */}
          {/* <axesHelper args={[20]} /> */}
          {/* <gridHelper args={[20, 20, 0xff0000, 'teal']} /> */}
          {/* <gridHelper rotation-z={Math.PI / 4} /> */}
          <Suspense fallback={null}>
            <RetroTv/>
            <ContactShadows position={[1.4,0,1]} opacity={2} scale={100} blur={3} far={10} resolution={260} color="#000000" />
            {/* <Ground/> */}
          </Suspense>

          {/* camera control */}
          <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.2} maxAzimuthAngle={[Math.PI/4]} minAzimuthAngle={[-Math.PI/4]}/>
        </Canvas>
      </div>
    </div>
  )
}

export default App
