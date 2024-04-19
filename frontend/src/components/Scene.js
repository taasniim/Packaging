import React, { useRef, useEffect , useState} from "react";
import * as THREE from "three";
import { TopSmallPalette,BottomSmallPalete } from "./Palette";

const Scene = () => {
 return(
  <div className="Scene">  
  <TopSmallPalette/>  
  <canvas className="RealScene"> </canvas>
  <BottomSmallPalete/>
  </div>
 );
  };

export default Scene;