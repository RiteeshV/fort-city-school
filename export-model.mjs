/**
 * Run with: node export-model.mjs
 * Outputs: fort-city-school.glb  (import into Blender via File > Import > glTF 2.0)
 */

import * as THREE from 'three'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'


const __dirname = dirname(fileURLToPath(import.meta.url))

// ── helpers ────────────────────────────────────────────────────────────────

function mat(color, roughness = 0.7) {
  return new THREE.MeshStandardMaterial({ color, roughness })
}

function box(w, h, d, color, roughness) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, roughness))
  return mesh
}

// ── sub-components ─────────────────────────────────────────────────────────

function makeDome(size = 0.6) {
  const g = new THREE.Group()
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(size, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    mat('#C85A54', 0.4)
  )
  dome.position.set(0, 0.15, 0)
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.15, 8), mat('#8B7355', 0.6))
  spire.position.set(0, 0.45, 0)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), mat('#8B7355', 0.6))
  ball.position.set(0, 0.55, 0)
  g.add(dome, spire, ball)
  return g
}

function makeWindowGrid(startX, startY, z, rows, cols, spacingX = 0.45, spacingY = 0.9) {
  const g = new THREE.Group()
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.38, 0.05), mat('#6ba3b8', 0.2))
      w.position.set(startX + c * spacingX, startY + r * spacingY, z)
      g.add(w)
    }
  }
  return g
}

function makeBuildingBlock(width, depth, windowCols = 5, hasDome = true) {
  const fh = 0.9
  const frontZ = depth / 2
  const g = new THREE.Group()

  const body = box(width, fh * 4, depth, '#f5f0e8')
  body.position.set(0, fh * 2, 0)
  g.add(body)

  for (const y of [fh, fh * 2, fh * 3]) {
    const band = box(width + 0.02, 0.06, 0.01, '#9b6b4f', 1)
    band.position.set(0, y, frontZ + 0.015)
    g.add(band)
  }

  const roof = box(width + 0.08, 0.12, depth + 0.08, '#d9cec0', 0.6)
  roof.position.set(0, fh * 4 + 0.06, 0)
  g.add(roof)

  const windows = makeWindowGrid(-(windowCols - 1) * 0.225, 0.5, frontZ + 0.03, 4, windowCols)
  g.add(windows)

  if (hasDome) {
    const dome = makeDome(0.55)
    dome.position.set(0, fh * 4 + 0.12, 0)
    g.add(dome)
  }

  return g
}

function makeWingBuilding(length, depth, windowCols = 8) {
  const fh = 0.9
  const frontZ = depth / 2
  const g = new THREE.Group()

  const body = box(length, fh * 4, depth, '#f5f0e8')
  body.position.set(0, fh * 2, 0)
  g.add(body)

  for (const y of [fh, fh * 2, fh * 3]) {
    const band = box(length + 0.02, 0.06, 0.01, '#9b6b4f', 1)
    band.position.set(0, y, frontZ + 0.015)
    g.add(band)
  }

  const roof = box(length + 0.08, 0.12, depth + 0.08, '#d9cec0', 0.6)
  roof.position.set(0, fh * 4 + 0.06, 0)
  g.add(roof)

  const windows = makeWindowGrid(-(windowCols - 1) * 0.225, 0.5, frontZ + 0.03, 4, windowCols)
  g.add(windows)

  return g
}

function makeTree(scale = 1) {
  const g = new THREE.Group()
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.8, 6), mat('#6b5038', 0.9))
  trunk.position.set(0, 0.4, 0)
  const leaves = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.8, 8), mat('#3d5c2f', 0.8))
  leaves.position.set(0, 0.95, 0)
  g.add(trunk, leaves)
  g.scale.setScalar(scale)
  return g
}

// ── assemble full campus ───────────────────────────────────────────────────

const scene = new THREE.Scene()
const campus = new THREE.Group()

// Ground
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), mat('#89a76b', 0.9))
ground.rotation.x = -Math.PI / 2
campus.add(ground)

// Driveway
const drive = new THREE.Mesh(new THREE.PlaneGeometry(18, 12), mat('#c9baa8', 0.85))
drive.rotation.x = -Math.PI / 2
drive.position.set(0, 0.01, 9)
campus.add(drive)

// Courtyard
const court = new THREE.Mesh(new THREE.PlaneGeometry(12, 10), mat('#99b37d', 0.85))
court.rotation.x = -Math.PI / 2
court.position.set(0, 0.01, -1)
campus.add(court)

// Front blocks (4 with domes)
const frontConfigs = [
  { x: -7.8, w: 4.2, cols: 4 },
  { x: -2.6, w: 5.2, cols: 5 },
  { x:  2.6, w: 5.2, cols: 5 },
  { x:  7.8, w: 4.2, cols: 4 },
]
for (const { x, w, cols } of frontConfigs) {
  const b = makeBuildingBlock(w, 3.2, cols, true)
  b.position.set(x, 0, 3)
  campus.add(b)
}

// Left wing
const leftWing = makeWingBuilding(10, 3.2, 9)
leftWing.position.set(-10.5, 0, -2)
leftWing.rotation.y = Math.PI / 2
campus.add(leftWing)

// Right wing
const rightWing = makeWingBuilding(10, 3.2, 9)
rightWing.position.set(10.5, 0, -2)
rightWing.rotation.y = -Math.PI / 2
campus.add(rightWing)

// Back building
const back = makeWingBuilding(17.8, 3.2, 16)
back.position.set(0, 0, -7)
back.rotation.y = Math.PI
campus.add(back)

// Main door
const door = box(1.4, 1.3, 0.08, '#5a3e28')
door.position.set(0, 0.65, 4.65)
campus.add(door)

// Entrance canopy
const canopy = box(2.2, 0.12, 0.9, '#9b6b4f', 0.5)
canopy.position.set(0, 1.4, 5.1)
campus.add(canopy)

// Gate pillars + bar
const gateGroup = new THREE.Group()
gateGroup.position.set(0, 0, 15)
for (const x of [-2.2, 2.2]) {
  const pillar = box(0.35, 1.4, 0.35, '#e0d3c0')
  pillar.position.set(x, 0.7, 0)
  gateGroup.add(pillar)
}
const gatebar = box(4, 1.3, 0.08, '#9b6b4f', 0.6)
gatebar.position.set(0, 0.7, 0)
gateGroup.add(gatebar)
campus.add(gateGroup)

// Boundary walls
const wallDefs = [
  { pos: [-9.5, 0.45, 15],   size: [9,    0.9, 0.2], ry: 0 },
  { pos: [9.5,  0.45, 15],   size: [9,    0.9, 0.2], ry: 0 },
  { pos: [-14,  0.45, 3],    size: [20,   0.9, 0.2], ry: Math.PI / 2 },
  { pos: [14,   0.45, 3],    size: [20,   0.9, 0.2], ry: Math.PI / 2 },
  { pos: [0,    0.45, -10],  size: [28,   0.9, 0.2], ry: 0 },
]
for (const { pos, size, ry } of wallDefs) {
  const w = box(...size, '#e0d3c0')
  w.position.set(...pos)
  w.rotation.y = ry
  campus.add(w)
}

// Trees
const treeDefs = [
  [-6,0,12,1.1],  [6,0,12,1.0],   [-12,0,10,0.9],  [12,0,10,0.95],
  [-13,0,2,1.0],  [13,0,2,1.05],  [-13,0,-5,0.85], [13,0,-5,0.9],
  [0,0,13.5,.75], [-3.5,0,13,.7], [3.5,0,13,.7],   [-10,0,-8,.85],
  [10,0,-8,.9],   [0,0,-9,.8],    [-3,0,-1,.8],     [3,0,-1,.75],
  [0,0,-3,.7],
]
for (const [x, y, z, s] of treeDefs) {
  const t = makeTree(s)
  t.position.set(x, y, z)
  campus.add(t)
}

// Pots near entrance
for (const [i, xOff] of [[-1.5, 0], [-0.5, 1], [0.5, 2], [1.5, 3]].entries()) {
  const potGroup = new THREE.Group()
  potGroup.position.set(xOff[0] * 1.2, 0, 6.5)
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.4, 8), mat('#a87d5a'))
  pot.position.set(0, 0.2, 0)
  const plant = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), mat('#4a7d3f', 0.85))
  plant.position.set(0, 0.5, 0)
  potGroup.add(pot, plant)
  campus.add(potGroup)
}

// Courtyard ring marking
const ring = new THREE.Mesh(new THREE.RingGeometry(1.5, 1.65, 32), mat('#c9671f'))
ring.rotation.x = -Math.PI / 2
ring.position.set(0, 0.02, -1)
campus.add(ring)

// Playground structures
for (const [x, color] of [[-4, '#d4524f'], [4, '#5a8fd4']]) {
  const s = box(0.8, 0.6, 0.8, color, 0.7)
  s.position.set(x, 0.3, -2)
  campus.add(s)
}

scene.add(campus)

// ── export as .obj ─────────────────────────────────────────────────────────

const lines = ['# Fort City School - generated by export-model.mjs', '']
let vertOffset = 1
let normOffset = 1
let objIndex = 0

campus.updateMatrixWorld(true)

campus.traverse((node) => {
  if (!(node instanceof THREE.Mesh)) return
  const geo = node.geometry.clone()
  geo.applyMatrix4(node.matrixWorld)

  if (!geo.index) geo.toNonIndexed ? (geo = geo.toNonIndexed()) : null
  geo.computeVertexNormals()

  const pos = geo.attributes.position
  const nor = geo.attributes.normal

  lines.push(`o object_${objIndex++}`)

  for (let i = 0; i < pos.count; i++) {
    lines.push(`v ${pos.getX(i).toFixed(6)} ${pos.getY(i).toFixed(6)} ${pos.getZ(i).toFixed(6)}`)
  }
  for (let i = 0; i < nor.count; i++) {
    lines.push(`vn ${nor.getX(i).toFixed(6)} ${nor.getY(i).toFixed(6)} ${nor.getZ(i).toFixed(6)}`)
  }

  if (geo.index) {
    const idx = geo.index
    for (let i = 0; i < idx.count; i += 3) {
      const a = idx.getX(i)     + vertOffset
      const b = idx.getX(i + 1) + vertOffset
      const c = idx.getX(i + 2) + vertOffset
      const na = idx.getX(i)     + normOffset
      const nb = idx.getX(i + 1) + normOffset
      const nc = idx.getX(i + 2) + normOffset
      lines.push(`f ${a}//${na} ${b}//${nb} ${c}//${nc}`)
    }
    vertOffset += pos.count
    normOffset += nor.count
  } else {
    for (let i = 0; i < pos.count; i += 3) {
      const a = i + vertOffset
      const b = i + 1 + vertOffset
      const c = i + 2 + vertOffset
      const na = i + normOffset
      const nb = i + 1 + normOffset
      const nc = i + 2 + normOffset
      lines.push(`f ${a}//${na} ${b}//${nb} ${c}//${nc}`)
    }
    vertOffset += pos.count
    normOffset += nor.count
  }

  lines.push('')
})

const outPath = join(__dirname, 'fort-city-school.obj')
writeFileSync(outPath, lines.join('\n'))
console.log(`✅  Saved: ${outPath}`)
console.log('    → In Blender: File > Import > Wavefront (.obj)')
