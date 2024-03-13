import React, { useRef, useEffect , useState} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import texture1 from '../images/texture1.jpg';
import texture2 from '../images/texture2.jpg';
import texture3 from '../images/texture3.jpg';
import texture4 from '../images/texture4.jpg';
import texture5 from '../images/texture5.jpg';
import texture6 from '../images/texture6.jpg';
import materialCarton from "../images/carton.jpg";
import materialBlanc from "../images/blancjpg.jpg";

const Scene = () => {
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const [ cubeDimensions, setCubeDimensions] = useState({ x: 4,
    y: 4,
    z: 4,});
    const [isColorPickerVisible, setColorPickerVisible] = useState(false);
    const [cubeColor, setCubeColor] = useState("#95c28c"); // Exemple de couleur initiale
  const [materialType, setMaterialType] = useState("matte");
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedTexture, setSelectedTexture] = useState(null);
  
  

  useEffect(() => {
    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth ,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1,100);
    camera.position.z = 10;
    

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setClearColor(0xF4F3F2);

    renderer.setSize(sizes.width  , sizes.height );
    let material;

    if (materialType === "brillant") {
      material = new THREE.MeshPhongMaterial({ color: cubeColor, shininess: 100 });
    }else  if (selectedMaterial === "carton") {
      material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(materialCarton) });
    } else if (selectedMaterial === "blanc") {
      material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(materialBlanc) });
    }
    else {
      const texture = selectedTexture ? new THREE.TextureLoader().load(selectedTexture) : null;
      material = new THREE.MeshBasicMaterial({ color: cubeColor, map: texture });
    }
    
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(cubeDimensions.x, cubeDimensions.y, cubeDimensions.z),
      material
    );
    scene.add(cube);
    
    // Ajouter une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);
    
    // Ajouter une lumière directionnelle
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(2, 3, 2);
    scene.add(directionalLight);
    
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableZoom = true;

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width , sizes.height );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    

    tick();
    const price = 0.5 * quantity; // Exemple : 0.5 dt par pièce

    // Mise à jour du texte de la quantité avec le prix
    document.getElementById("quantity-text").innerText = `  ${quantity} pc 
         ${price} dt`;

         

    return () => {
      // Cleanup code if needed
    };
  }, [cubeDimensions , cubeColor , materialType ,quantity , selectedMaterial ,selectedTexture]); // Run effect only on mount and unmount
  const handleColorChange = (color) => {
    setCubeColor(color);
    setColorPickerVisible(false); // Masquer le colorPicker après la sélection
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!isColorPickerVisible);
  };

  const handleDimensionChange = (axis, value) => {
    setCubeDimensions((prevDimensions) => ({
      ...prevDimensions,
      [axis]: parseFloat(value),
    }));
  };
  const handleTextureClick = (texture) => {
    setSelectedTexture(texture);
  };
  
 
  const handleMaterialTypeChange = (event) => {
    setMaterialType(event.target.value);
  };
  const handleMaterialClick = (materialType) => {
    setSelectedMaterial(materialType);
    setSelectedTexture(null); // Réinitialisez la texture sélectionnée lorsqu'un matériau est choisi
  };
  const handleZoomIn = () => {
    setCubeDimensions((prevDimensions) => ({
      ...prevDimensions,
      x: prevDimensions.x * 1.1,
      y: prevDimensions.y * 1.1,
      z: prevDimensions.z * 1.1,
    }));
  };

  const handleZoomOut = () => {
    setCubeDimensions((prevDimensions) => ({
      ...prevDimensions,
      x: prevDimensions.x * 0.9,
      y: prevDimensions.y * 0.9,
      z: prevDimensions.z * 0.9,
    }));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 0 : newQuantity);

  };
  const handleSelectedMaterialChange = (type) => {
    setSelectedMaterial(type);
    setSelectedTexture(null);
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", padding: "10px" }}>
      <div className="card">
      <label htmlFor="cubeSize">Size:</label>
      <div className="container">
      <div className="input-group" style={{ flexDirection: "row" }}>
  <label htmlFor="xAxis">X:</label>
  <input
    type="number"
    id="xAxis"
    name="xAxis"
    value={cubeDimensions.x}
    onChange={(e) => handleDimensionChange("x", e.target.value)}
    step="0.1"
  />
</div>

<div className="input-group" style={{ flexDirection: "inline-flex" }}>
  <label htmlFor="yAxis">Y:</label>
  <input
    type="number"
    id="yAxis"
    name="yAxis"
    value={cubeDimensions.y}
    onChange={(e) => handleDimensionChange("y", e.target.value)}
    step="0.1"
  />
</div>
</div>

<div className="input-group" style={{ flexDirection: "row" }}>
  <label htmlFor="zAxis">Z:</label>
  <input
    type="number"
    id="zAxis"
    name="zAxis"
    value={cubeDimensions.z}
    onChange={(e) => handleDimensionChange("z", e.target.value)}
    step="0.1"
  />
</div>

   <div className="color-switch">
      <div className="color-picker-container">
        <label htmlFor="colorPicker">Color:</label>
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={cubeColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
         <div className="real-color">
        
        <input
          type="text"
          value={cubeColor}
          readOnly
          onClick={toggleColorPicker}
        />
       
         </div>
      </div>
     
    </div>


      
      <div className="zoom-buttons">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>

        <div className="input-group1">
          <label>Texture:</label>
          <div className="texture-thumbnails">
            <img src={texture1} alt="Texture 1" onClick={() => handleTextureClick(texture1)} />
            <img src={texture2} alt="Texture 2" onClick={() => handleTextureClick(texture2)} />
            <img src={texture3} alt="Texture 3" onClick={() => handleTextureClick(texture3)} />
            <img src={texture4} alt="Texture 4" onClick={() => handleTextureClick(texture4)} />
            <img src={texture5} alt="Texture 5" onClick={() => handleTextureClick(texture5)} />
            <img src={texture6} alt="Texture 6" onClick={() => handleTextureClick(texture6)} />
            {/* Ajoutez ici d'autres balises img pour vos images de textures */}
          </div>
        </div>
        <div className="input-group1">
        <label>Material </label>
        
        <div className="material-thumbnails">
          
          <img src={materialCarton} alt="Carton" onClick={() => handleSelectedMaterialChange("carton")} />
          <img src={materialBlanc} alt="Blanc" onClick={() => handleSelectedMaterialChange("blanc")} />
          {/* Ajoutez ici d'autres balises img pour vos images de matériaux */}
        </div>
        </div>

        <label>Quantity </label>
        <div className="quantity-text">
          
          <p id="quantity-text"> {quantity}pc {0.5 * quantity} dt</p>
        
        </div>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          step="1"
        />
        <div className="preview">
          <label>Preview</label>
          <div className="preview-canvas">
            <canvas ref={previewCanvasRef} className="preview-webgl" />
           </div>
        </div>

      

     <div className="radio-group">
        <label>Material light:</label>
        <div>
          <input
            type="radio"
            id="brillant"
            name="materialType"
            value="brillant"
            checked={materialType === "brillant"}
            onChange={handleMaterialTypeChange}
          />
          <label htmlFor="brillant">Brillant</label>
        </div>
        <div>
          <input
            type="radio"
            id="matte"
            name="materialType"
            value="matte"
            checked={materialType === "matte"}
            onChange={handleMaterialTypeChange}
          />
          <label htmlFor="matte">Matte</label>
        </div>
      </div>

    </div>
      
      <canvas ref={canvasRef} className="webgl" />
    </div>
  );
  };

export default Scene;