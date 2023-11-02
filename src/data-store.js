import palettes from './palettes.json'


export const setLocalStorageKey = (key, value) => {
  console.log("acsccascs")
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageValue = (key) => {
  try {
    console.log(JSON.parse(localStorage.getItem(key)))
      return JSON.parse(localStorage.getItem(key));
  } catch (err) {
      console.log(err);
  }
  //always wrap this in a try catch!!! so that if there is an error parsing, your console will know
};

export const getPalettes = () =>{ 
    return getLocalStorageValue('palettes') || initPalettesIfEmpty();  
};

export const setPalette = (newPalette) => { setLocalStorageKey('palette', newPalette)} ;

export const addPalette = (newPalette) => {
    setPalette([newPalette, ...getPalettes()]);
}

export const removePalette = (paletteUUID) => {
    setPalette(getPalettes().filter(palette => palette.uuid !== uuid));
}

export const initPalettesIfEmpty = () => {
    setPalette(palettes);
}

