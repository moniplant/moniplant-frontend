/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 -o src/app/components/Plant4.jsx -r public public/models/plant4.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { usePortalStore } from '../state-management/activePortal';
import { Tablet } from './Tablet';
import { motion } from "framer-motion-3d"
import { PLANT_SPRING, PLANT_VISIBILITY_VARIANTS } from '../AnimationConstants';
import PlantCard from '../UI/monitor/PlantCard';

export function Plant4(props) {
  const { nodes, materials } = useGLTF('/models/plant4.glb')
  const { activePortal, hoveredPortal } = usePortalStore();
  return (
    <group {...props} dispose={null}>
      <PlantCard visibility={!activePortal && hoveredPortal === props.name ? 'visible' : 'hidden'} plantData={props.data} />
      { activePortal === props.name && <Tablet plantData={props.data} {...props}/>}
      <group position-y={-3} rotation={[Math.PI / 2, 0, 0]} scale={[2.971, 3.372, 2.65]}>
        <motion.mesh geometry={nodes.awa_outdoor002.geometry} variants={PLANT_VISIBILITY_VARIANTS} initial='visible' transition={PLANT_SPRING} animate={(activePortal === props.name || activePortal === null) ? 'visible' : 'hidden' } material={materials['Material.007']} />
        <motion.mesh geometry={nodes.awa_outdoor002_1.geometry} variants={PLANT_VISIBILITY_VARIANTS} initial='visible' transition={PLANT_SPRING} animate={(activePortal === props.name || activePortal === null) ? 'visible' : 'hidden' } material={materials['Blatt.002']} />
        <motion.mesh geometry={nodes.awa_outdoor002_2.geometry} variants={PLANT_VISIBILITY_VARIANTS} initial='visible' transition={PLANT_SPRING} animate={(activePortal === props.name || activePortal === null) ? 'visible' : 'hidden' } material={materials['Material.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/plant4.glb')
