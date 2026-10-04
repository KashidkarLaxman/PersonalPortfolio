import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Iridescent, slowly morphing "core" blob.
const blobVertex = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  void main() {
    vec3 p = position;
    float d = sin(p.x * 2.4 + uTime * 0.9) * sin(p.y * 2.1 + uTime * 1.1) * sin(p.z * 2.7 + uTime * 0.7);
    d += 0.5 * sin(p.y * 5.0 + uTime * 1.6) * sin(p.x * 4.0 - uTime);
    vDisp = d;
    p += normal * d * 0.22;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`

const blobFragment = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  void main() {
    vec3 cyan = vec3(0.13, 0.83, 0.93);
    vec3 violet = vec3(0.55, 0.36, 0.96);
    vec3 pink = vec3(0.93, 0.28, 0.6);
    float t = 0.5 + 0.5 * sin(vDisp * 3.0 + uTime * 0.6 + vNormal.y * 2.0);
    vec3 base = mix(violet, cyan, t);
    float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
    vec3 col = mix(base * 0.55, pink, fres * 0.9);
    col += fres * 0.35;
    gl_FragColor = vec4(col, 1.0);
  }
`

function Blob() {
    const mesh = useRef()
    const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])
    useFrame((state, delta) => {
        uniforms.uTime.value += delta
        mesh.current.rotation.y += delta * 0.15
        mesh.current.rotation.x += delta * 0.05
    })
    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[1.25, 48]} />
            <shaderMaterial vertexShader={blobVertex} fragmentShader={blobFragment} uniforms={uniforms} />
        </mesh>
    )
}

function Shell() {
    const mesh = useRef()
    useFrame((_, delta) => {
        mesh.current.rotation.y -= delta * 0.08
        mesh.current.rotation.z += delta * 0.04
    })
    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[2.05, 1]} />
            <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.18} />
        </mesh>
    )
}

function Ring({ radius, tilt, speed, color }) {
    const group = useRef()
    const satellite = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        satellite.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0)
    })
    return (
        <group ref={group} rotation={tilt}>
            <mesh>
                <torusGeometry args={[radius, 0.008, 8, 160]} />
                <meshBasicMaterial color={color} transparent opacity={0.5} />
            </mesh>
            <mesh ref={satellite}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </group>
    )
}

function Particles({ count = 1400 }) {
    const points = useRef()
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const r = 3 + Math.random() * 6
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            arr[i * 3 + 2] = r * Math.cos(phi)
        }
        return arr
    }, [count])
    useFrame((_, delta) => {
        points.current.rotation.y += delta * 0.02
    })
    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.025} color="#a5b4fc" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
        </points>
    )
}

// Tilts the whole scene toward the pointer for a parallax feel.
function Rig({ children }) {
    const group = useRef()
    useFrame((state) => {
        const { x, y } = state.pointer
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.4, 0.05)
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.3, 0.05)
    })
    return <group ref={group}>{children}</group>
}

export default function Scene3D() {
    const reduceMotion =
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 1.75]}
            frameloop={reduceMotion ? 'demand' : 'always'}
            gl={{ antialias: true, alpha: true }}
            eventSource={typeof document !== 'undefined' ? document.body : undefined}
        >
            <Rig>
                <Blob />
                <Shell />
                <Ring radius={2.5} tilt={[1.2, 0.2, 0]} speed={0.6} color="#22d3ee" />
                <Ring radius={2.8} tilt={[0.4, -0.9, 0.3]} speed={-0.45} color="#c084fc" />
                <Ring radius={3.1} tilt={[-0.6, 0.5, 1]} speed={0.35} color="#f472b6" />
            </Rig>
            <Particles />
        </Canvas>
    )
}
