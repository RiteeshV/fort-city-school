import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Simplified dome matching website render
function Dome({ position, size = 0.6 }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.15, 0]}>
        <sphereGeometry args={[size, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#C85A54" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.15, 8]} />
        <meshStandardMaterial color="#8B7355" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#8B7355" roughness={0.6} />
      </mesh>
    </group>
  )
}

// Simple window
function Window({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.3, 0.38, 0.05]} />
      <meshStandardMaterial color="#6ba3b8" roughness={0.2} />
    </mesh>
  )
}

// Window grid for a building section
function WindowGrid({ startX, startY, z, rows, cols, spacingX = 0.45, spacingY = 0.9, rotation = [0, 0, 0] }) {
  const windows = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      windows.push(
        <Window
          key={`${r}-${c}`}
          position={[startX + c * spacingX, startY + r * spacingY, z]}
        />
      )
    }
  }
  return <group rotation={rotation}>{windows}</group>
}

// Single building block (one section with dome)
function BuildingBlock({ position, width, depth, hasDome = true, windowCols = 5, rotation = [0, 0, 0] }) {
  const floorHeight = 0.9
  const frontZ = depth / 2
  
  return (
    <group position={position} rotation={rotation}>
      {/* Main structure - 4 floors */}
      <mesh position={[0, floorHeight * 2, 0]}>
        <boxGeometry args={[width, floorHeight * 4, depth]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.7} />
      </mesh>
      
      {/* Brown horizontal bands */}
      {[floorHeight, floorHeight * 2, floorHeight * 3].map((y, i) => (
        <mesh key={`band-${i}`} position={[0, y, frontZ + 0.015]}>
          <boxGeometry args={[width + 0.02, 0.06, 0.01]} />
          <meshStandardMaterial color="#9b6b4f" />
        </mesh>
      ))}
      
      {/* Flat roof */}
      <mesh position={[0, floorHeight * 4 + 0.06, 0]}>
        <boxGeometry args={[width + 0.08, 0.12, depth + 0.08]} />
        <meshStandardMaterial color="#d9cec0" roughness={0.6} />
      </mesh>
      
      {/* Windows - 4 floors */}
      <WindowGrid
        startX={-(windowCols - 1) * 0.225}
        startY={0.5}
        z={frontZ + 0.03}
        rows={4}
        cols={windowCols}
        spacingX={0.45}
        spacingY={0.9}
      />
      
      {/* Dome on top */}
      {hasDome && <Dome position={[0, floorHeight * 4 + 0.12, 0]} size={0.55} />}
    </group>
  )
}

// Long wing building (for sides)
function WingBuilding({ position, length, depth, windowCols = 8, rotation = [0, 0, 0] }) {
  const floorHeight = 0.9
  const frontZ = depth / 2
  
  return (
    <group position={position} rotation={rotation}>
      {/* Main structure - 4 floors */}
      <mesh position={[0, floorHeight * 2, 0]}>
        <boxGeometry args={[length, floorHeight * 4, depth]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.7} />
      </mesh>
      
      {/* Brown horizontal bands */}
      {[floorHeight, floorHeight * 2, floorHeight * 3].map((y, i) => (
        <mesh key={`band-${i}`} position={[0, y, frontZ + 0.015]}>
          <boxGeometry args={[length + 0.02, 0.06, 0.01]} />
          <meshStandardMaterial color="#9b6b4f" />
        </mesh>
      ))}
      
      {/* Flat roof */}
      <mesh position={[0, floorHeight * 4 + 0.06, 0]}>
        <boxGeometry args={[length + 0.08, 0.12, depth + 0.08]} />
        <meshStandardMaterial color="#d9cec0" roughness={0.6} />
      </mesh>
      
      {/* Windows - 4 floors */}
      <WindowGrid
        startX={-(windowCols - 1) * 0.225}
        startY={0.5}
        z={frontZ + 0.03}
        rows={4}
        cols={windowCols}
        spacingX={0.45}
        spacingY={0.9}
      />
    </group>
  )
}

// Simple tree for landscaping
function SimpleTree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.8, 6]} />
        <meshStandardMaterial color="#6b5038" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <coneGeometry args={[0.35, 0.8, 8]} />
        <meshStandardMaterial color="#3d5c2f" roughness={0.8} />
      </mesh>
    </group>
  )
}

// Main Fort City School Complex - Complete Rectangle
export default function FortCitySchool3D() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.12
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 15, 25]} fov={50} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={12}
        maxDistance={45}
        autoRotate={false}
      />

      {/* Lighting */}
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[12, 18, 12]}
        intensity={1.5}
        castShadow
        color="#fff8ed"
      />
      <directionalLight position={[-8, 12, -6]} intensity={0.5} color="#b8d9f5" />
      <pointLight position={[0, 8, 6]} intensity={0.7} color="#ffd89b" distance={25} />

      {/* Environment */}
      <Environment preset="city" />

      <group ref={groupRef}>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial color="#89a76b" roughness={0.9} />
        </mesh>

        {/* Front entrance area/driveway */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 9]}>
          <planeGeometry args={[18, 12]} />
          <meshStandardMaterial color="#c9baa8" roughness={0.85} />
        </mesh>

        {/* CENTRAL COURTYARD - fully enclosed in the middle */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -1]}>
          <planeGeometry args={[12, 10]} />
          <meshStandardMaterial color="#99b37d" roughness={0.85} />
        </mesh>

        {/* ===== FRONT BUILDING (4 blocks with domes) ===== */}
        
        {/* Left front block */}
        <BuildingBlock 
          position={[-7.8, 0, 3]} 
          width={4.2} 
          depth={3.2} 
          windowCols={4}
          hasDome={true}
        />
        
        {/* Left-center front block */}
        <BuildingBlock 
          position={[-2.6, 0, 3]} 
          width={5.2} 
          depth={3.2} 
          windowCols={5}
          hasDome={true}
        />
        
        {/* Right-center front block */}
        <BuildingBlock 
          position={[2.6, 0, 3]} 
          width={5.2} 
          depth={3.2} 
          windowCols={5}
          hasDome={true}
        />
        
        {/* Right front block */}
        <BuildingBlock 
          position={[7.8, 0, 3]} 
          width={4.2} 
          depth={3.2} 
          windowCols={4}
          hasDome={true}
        />

        {/* ===== LEFT WING (extending backward) ===== */}
        <WingBuilding
          position={[-10.5, 0, -2]}
          length={10}
          depth={3.2}
          windowCols={9}
          rotation={[0, Math.PI / 2, 0]}
        />

        {/* ===== RIGHT WING (extending backward) ===== */}
        <WingBuilding
          position={[10.5, 0, -2]}
          length={10}
          depth={3.2}
          windowCols={9}
          rotation={[0, -Math.PI / 2, 0]}
        />

        {/* ===== BACK BUILDING (closing the rectangle) ===== */}
        <WingBuilding
          position={[0, 0, -7]}
          length={17.8}
          depth={3.2}
          windowCols={16}
          rotation={[0, Math.PI, 0]}
        />

        {/* Main entrance door */}
        <mesh position={[0, 0.65, 4.65]}>
          <boxGeometry args={[1.4, 1.3, 0.08]} />
          <meshStandardMaterial color="#5a3e28" />
        </mesh>

        {/* Office sign area (left front) */}
        <mesh position={[-7.8, 0.5, 4.65]}>
          <boxGeometry args={[1.2, 0.8, 0.08]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Entrance canopy */}
        <mesh position={[0, 1.4, 5.1]}>
          <boxGeometry args={[2.2, 0.12, 0.9]} />
          <meshStandardMaterial color="#9b6b4f" roughness={0.5} />
        </mesh>

        {/* Front entrance gate */}
        <group position={[0, 0, 15]}>
          {/* Pillars */}
          <mesh position={[-2.2, 0.7, 0]}>
            <boxGeometry args={[0.35, 1.4, 0.35]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          <mesh position={[2.2, 0.7, 0]}>
            <boxGeometry args={[0.35, 1.4, 0.35]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          {/* Gate structure */}
          <mesh position={[0, 0.7, 0]}>
            <boxGeometry args={[4, 1.3, 0.08]} />
            <meshStandardMaterial color="#9b6b4f" roughness={0.6} transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Boundary walls */}
        <group>
          {/* Front left wall */}
          <mesh position={[-9.5, 0.45, 15]}>
            <boxGeometry args={[9, 0.9, 0.2]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          {/* Front right wall */}
          <mesh position={[9.5, 0.45, 15]}>
            <boxGeometry args={[9, 0.9, 0.2]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          {/* Left side wall */}
          <mesh position={[-14, 0.45, 3]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[20, 0.9, 0.2]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          {/* Right side wall */}
          <mesh position={[14, 0.45, 3]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[20, 0.9, 0.2]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
          {/* Back wall */}
          <mesh position={[0, 0.45, -10]}>
            <boxGeometry args={[28, 0.9, 0.2]} />
            <meshStandardMaterial color="#e0d3c0" roughness={0.7} />
          </mesh>
        </group>

        {/* Trees around campus - outside perimeter */}
        <SimpleTree position={[-6, 0, 12]} scale={1.1} />
        <SimpleTree position={[6, 0, 12]} scale={1.0} />
        <SimpleTree position={[-12, 0, 10]} scale={0.9} />
        <SimpleTree position={[12, 0, 10]} scale={0.95} />
        <SimpleTree position={[-13, 0, 2]} scale={1.0} />
        <SimpleTree position={[13, 0, 2]} scale={1.05} />
        <SimpleTree position={[-13, 0, -5]} scale={0.85} />
        <SimpleTree position={[13, 0, -5]} scale={0.9} />
        <SimpleTree position={[0, 0, 13.5]} scale={0.75} />
        <SimpleTree position={[-3.5, 0, 13]} scale={0.7} />
        <SimpleTree position={[3.5, 0, 13]} scale={0.7} />
        <SimpleTree position={[-10, 0, -8]} scale={0.85} />
        <SimpleTree position={[10, 0, -8]} scale={0.9} />
        <SimpleTree position={[0, 0, -9]} scale={0.8} />

        {/* Trees in central courtyard */}
        <SimpleTree position={[-3, 0, -1]} scale={0.8} />
        <SimpleTree position={[3, 0, -1]} scale={0.75} />
        <SimpleTree position={[0, 0, -3]} scale={0.7} />

        {/* Potted plants near front entrance */}
        {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
          <group key={`pot-${i}`} position={[x * 1.2, 0, 6.5]}>
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.18, 0.4, 8]} />
              <meshStandardMaterial color="#a87d5a" />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[0.22, 8, 8]} />
              <meshStandardMaterial color="#4a7d3f" roughness={0.85} />
            </mesh>
          </group>
        ))}

        {/* Ground markings in courtyard */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -1]}>
          <ringGeometry args={[1.5, 1.65, 32]} />
          <meshStandardMaterial color="#c9671f" />
        </mesh>

        {/* Playground equipment in courtyard */}
        {/* Small play structures */}
        <mesh position={[-4, 0.3, -2]}>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshStandardMaterial color="#d4524f" roughness={0.7} />
        </mesh>
        <mesh position={[4, 0.3, -2]}>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshStandardMaterial color="#5a8fd4" roughness={0.7} />
        </mesh>
      </group>
    </>
  )
}