import './style.css';
import palettes from './palettes.json';
import { v4 as uuidv4 } from 'uuid';

import { setLocalStorageKey, getLocalStorageValue, getPalettes, setPalette, addPalette, removePalette } from './data-store';


console.log(palettes, "hello");

const createPaletteDisplay = (palette) => {
  let currPalette = document.createElement('li');
  let paletteName = document.createElement('h3');
  paletteName.textContent = palette.title;
  currPalette.appendChild(paletteName);

  palette.colors.map(color => {
    let colorDiv = document.createElement('div');

    let colorFig = document.createElement('figure');
    colorFig.style.backgroundColor = color;
    colorFig.style.border = '3px dashed white';
    colorFig.style.height = '10px';
    colorFig.style.width = '10px';
    

    let textP = document.createElement('p');
    textP.textContent = 'Text ';
    textP.style.color = 'white';
    colorFig.appendChild(textP);

    let exampleP = document.createElement('p');
    exampleP.textContent = 'Example';
    exampleP.style.color = 'black';
    colorFig.appendChild(exampleP);
    colorDiv.appendChild(colorFig);

    //copy buttons
    let copyButton = document.createElement('button');
    copyButton.textContent = 'copy';
    colorDiv.appendChild(copyButton);
  })

}


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
    console.log(getPalettes()) //getPalettes()

    event.target.reset();
};



const main = () => {
  // console.log(getPalettes());
  const form = document.getElementById('mainForm');  
  form.addEventListener("submit", submitFormHandler);
  console.log(getPalettes());
}

main();
