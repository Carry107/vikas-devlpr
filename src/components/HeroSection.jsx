// src/components/HeroSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Typing Text Component
const TypingText = () => {
  const phrases = ["VIKAS Developer", "VIKAS JavaScript", "VIKAS Python", "VIKAS React"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setIsDeleting(true);
          setTypingSpeed(1000);
          setTimeout(() => setTypingSpeed(50), 1000);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTypingSpeed(150);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed]);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h1 className="text-5xl font-bold text-white mb-4">
        {displayText}<span className="animate-pulse">|</span>
      </h1>
      <p className="text-xl text-zinc-300">Full Stack Developer & Creative Coder</p>
    </div>
  );
};

// Stars Component with Phong material for shine
const Stars = () => {
  const starsRef = useRef();

  useEffect(() => {
    const stars = starsRef.current.children;
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    stars.forEach((star) => {
      tl.to(star.scale, {
        x: Math.random() * 1.5 + 0.5,
        y: Math.random() * 1.5 + 0.5,
        z: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 2 + 1,
        ease: "power2.inOut"
      }, Math.random() * 0.5);
    });
    return () => tl.kill();
  }, []);

  return (
    <group ref={starsRef}>
      {Array(200).fill().map((_, i) => (
        <mesh key={i} position={[
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 50 - 25
        ]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshPhongMaterial
            color="#ffffff"
            shininess={100}
            emissive="#ffffff"
            emissiveIntensity={Math.random() * 2 + 0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

// 3D Hexagon — rotated so face looks at camera
const Hexagon = ({ mousePosition }) => {
  const hexRef = useRef();
  const initialPos = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (hexRef.current) {
      // smooth follow
      gsap.to(hexRef.current.rotation, {
        x: mousePosition.y * 0.1 + Math.PI / 2,
        y: mousePosition.x * 0.1,
        z: mousePosition.x * 0.1,
        duration: 0.5
      });
      // subtle float
      hexRef.current.position.y = initialPos.current.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  useEffect(() => {
    gsap.from(hexRef.current.scale, {
      x: 0, y: 0, z: 0,
      duration: 2, ease: "elastic.out(1, 0.3)"
    });
    gsap.to(hexRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
    initialPos.current.copy(hexRef.current.position);
  }, []);

  return (
    <group ref={hexRef} rotation={[Math.PI / 2, 0, 0]}>
      {/* Outer hexagon */}
      <mesh>
        <cylinderGeometry args={[3, 3, 0.5, 6]} />
        <meshPhongMaterial
          color="#4a00e0"
          transparent
          opacity={0.7}
          shininess={100}
          emissive="#2c0060"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Inner glowing hexagon */}
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[2.5, 2.5, 0.5, 6]} />
        <meshPhongMaterial
          color="#00c6ff"
          transparent
          opacity={0.9}
          shininess={100}
          emissive="#00c6ff"
          emissiveIntensity={1}
        />
      </mesh>
      {/* Glow ring */}
      <mesh position={[0, 0, -0.1]}>
        <cylinderGeometry args={[3.2, 3.2, 0.2, 6]} />
        <meshBasicMaterial
          color="#00c6ff"
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

// Scene with Bloom
const Scene = ({ mousePosition }) => (
  <>
    <ambientLight intensity={0.2} />
    <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
    <Stars />
    <Hexagon mousePosition={mousePosition} />
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.3}
        luminanceSmoothing={0.9}
        intensity={1.5}
      />
    </EffectComposer>
  </>
);

// Hero Section with id="home"
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    });
  };

  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
      <TypingText />
    </div>
  );
};

export default HeroSection;
