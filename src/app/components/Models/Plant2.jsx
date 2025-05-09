/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 -o src/app/components/Plant2.jsx -r public public/models/plant2.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { usePortalStore } from '../state-management/activePortal';
import { Tablet } from './Tablet';
import { motion } from "framer-motion-3d"
import { PLANT_SPRING, PLANT_VISIBILITY_VARIANTS } from '../AnimationConstants';
import PlantCard from '../UI/monitor/PlantCard';

export function Plant2(props) {
  const { nodes, materials } = useGLTF('/models/plant2.glb')
  const { activePortal, hoveredPortal } = usePortalStore();
  return (
    <group {...props} dispose={null}>
      <PlantCard visibility={!activePortal && hoveredPortal === props.name ? 'visible' : 'hidden'} plantData={props.data} />
      {activePortal === props.name && <Tablet plantData={props.data} {...props}/>}
      <group position-z={-1} position-y={-3} rotation={[Math.PI / 2, 0, 0]} scale={2.6}>
        <motion.mesh geometry={nodes.awa_outdoor.geometry} variants={PLANT_VISIBILITY_VARIANTS} initial='visible' transition={PLANT_SPRING} animate={(activePortal === props.name || activePortal === null) ? 'visible' : 'hidden' } material={materials['Material.002']} />
        <motion.mesh geometry={nodes.awa_outdoor_1.geometry} variants={PLANT_VISIBILITY_VARIANTS} initial='visible' transition={PLANT_SPRING} animate={(activePortal === props.name || activePortal === null) ? 'visible' : 'hidden' } material={materials.eb_house_plant_01} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/plant2.glb')
