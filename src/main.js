import './style.css';
import palettes from './palettes.json';
import { v4 as uuidv4 } from 'uuid';

import { setLocalStorageKey, getLocalStorageValue, getPalettes, setPalette, addPalette, removePalette } from './data-store';
// getPalettes


console.log(palettes, "hello")


class displayPalette {
  constructor(paletteName, color1, color2, color3, temperature ){
      this.uuid = uuidv4();
      this.colors = [color1, color2, color3];
      this.title = paletteName;
      this.temperature = temperature;
  }
};

//event handlers

const submitFormHandler = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target)

    const obj = Object.fromEntries(formData);
    // console.log(obj)

    const newPalette = new displayPalette(obj.paletteName, obj.color1, obj.color2, obj.color3, obj.temperature);
    console.log(newPalette)

   
    addPalette(newPalette);

    event.target.reset();
};

const main = () => {
  // console.log(getPalettes());
  const form = document.getElementById('mainForm');  
  form.addEventListener("submit", submitFormHandler);
  console.log(getPalettes());
}

main();
