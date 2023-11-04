import palettes from './palettes.json'

export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageValue = (key) => {
  try {
      return JSON.parse(localStorage.getItem(key));
  } catch (err) {
      console.log(err);
      return null
  }
  //always wrap this in a try catch!!! so that if there is an error parsing, your console will know
};

export const getPalettes = () =>{ 
    return getLocalStorageValue('palettes') || [];  
};

export const setPalette = (name = 'palettes', newPalette) => { setLocalStorageKey(name, newPalette)};

export const initPalettesIfEmpty = () => {
  setPalette('palettes', palettes);
}

export const addPalette = (newPalette) => {
    setPalette('palettes', [newPalette, ...getPalettes()]);
}

export const removePalette = (paletteUUID) => {
    setPalette(getPalettes().filter(palette => palette.uuid !== uuid));
}

// export const initPalettesIfEmpty = () => {
//     setPalette(palettes);
// }

