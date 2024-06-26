/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 paperworld.glb --instance -i --shadows -s --keepmaterials -M 
Files: paperworld.glb [1.69MB] > C:\Users\JDTorreda\SM-Projects\Paper Portfolio\public\paperworld-transformed.glb [137.62KB] (92%)
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Outlines } from '@react-three/drei'

import { editable as e } from "@theatre/r3f";
import { useAtom } from "jotai";

import { worldLoadedAtom, dataThemeAtom } from "../GlobalState";
import { THEME } from "../data";

export default function PaperWorld(props) {
  const { nodes, materials } = useGLTF('/paperworld-transformed.glb')

  const [, setWorldLoaded] = useAtom(worldLoadedAtom);
  
  const [dataTheme] = useAtom(dataThemeAtom);
  
  useEffect(() => {
    setWorldLoaded(true);

    return () => {
      setWorldLoaded(false);
    };
  }, []);
  
  return (
    <e.group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane018.geometry} position={[0.082, 0, 1.202]} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Plane016.geometry} position={[0.082, 0, 1.202]} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </mesh>
      <instancedMesh args={[nodes.Plane005.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Plane005.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane.geometry, , 9]} castShadow receiveShadow instanceMatrix={nodes.Plane.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane001.geometry, , 20]} castShadow receiveShadow instanceMatrix={nodes.Plane001.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane003.geometry, , 8]} castShadow receiveShadow instanceMatrix={nodes.Plane003.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane006.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Plane006.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane004.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Plane004.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane007.geometry, , 6]} castShadow receiveShadow instanceMatrix={nodes.Plane007.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane009.geometry, , 7]} castShadow receiveShadow instanceMatrix={nodes.Plane009.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane010.geometry, , 6]} castShadow receiveShadow instanceMatrix={nodes.Plane010.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane012.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Plane012.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane013.geometry, , 13]} castShadow receiveShadow instanceMatrix={nodes.Plane013.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.TreeB_TreeB_0.geometry, , 20]} castShadow receiveShadow instanceMatrix={nodes.TreeB_TreeB_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.TreeG_TreeG_0.geometry, , 14]} castShadow receiveShadow instanceMatrix={nodes.TreeG_TreeG_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.TreeC_TreeC_0.geometry, , 9]} castShadow receiveShadow instanceMatrix={nodes.TreeC_TreeC_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.TreeA_TreeA_0.geometry, , 9]} castShadow receiveShadow instanceMatrix={nodes.TreeA_TreeA_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.TreeF_TreeF_0.geometry, , 8]} castShadow receiveShadow instanceMatrix={nodes.TreeF_TreeF_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Bushes_Bushes_0.geometry, , 8]} castShadow receiveShadow instanceMatrix={nodes.Bushes_Bushes_0.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder002.geometry, , 19]} castShadow receiveShadow instanceMatrix={nodes.Cylinder002.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Plane017.geometry, , 247]} castShadow receiveShadow instanceMatrix={nodes.Plane017.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder001.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Cylinder001.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder001_1.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Cylinder001_1.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder001_2.geometry, , 5]} castShadow receiveShadow instanceMatrix={nodes.Cylinder001_2.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder004.geometry, , 18]} castShadow receiveShadow instanceMatrix={nodes.Cylinder004.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder004_1.geometry, , 18]} castShadow receiveShadow instanceMatrix={nodes.Cylinder004_1.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder.geometry, , 11]} castShadow receiveShadow instanceMatrix={nodes.Cylinder.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder_1.geometry, , 11]} castShadow receiveShadow instanceMatrix={nodes.Cylinder_1.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
      <instancedMesh args={[nodes.Cylinder_2.geometry, , 11]} castShadow receiveShadow instanceMatrix={nodes.Cylinder_2.instanceMatrix} material-color={THEME[dataTheme].primary}>
        <Outlines
          color={THEME[dataTheme].secondary}
          thickness={0.008}
        />
      </instancedMesh>
    </e.group>
  )
}

useGLTF.preload('/paperworld-transformed.glb')
