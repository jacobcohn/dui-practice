import elements from './elements';
import './createImageSlider.css';

const initialDom = (() => {
  const clearImageSliderContainer = () => {
    while (elements.imageSliderContainer.firstChild) {
      elements.imageSliderContainer.removeChild(
        elements.imageSliderContainer.firstChild,
      );
    }
  };

  const addImageSliderContent = () => {
    const imageSliderContent = document.createElement('div');
    imageSliderContent.id = 'imageSliderContent';
    elements.imageSliderContainer.appendChild(imageSliderContent);
  };

  const addImagesToImageSliderContent = (specificArray) => {
    const imageSliderContent = document.getElementById('imageSliderContent');

    const addOneImage = (imageSrc, idName) => {
      const image = document.createElement('img');
      image.src = imageSrc;
      image.id = idName;
      imageSliderContent.appendChild(image);
    };

    const addEachImage = (array) => {
      array.forEach((imageSrc) => {
        const image = document.createElement('img');
        image.src = imageSrc;
        imageSliderContent.appendChild(image);
      });
    };

    const imagesArray = specificArray.map((array) => array[0]);
    addOneImage(imagesArray[imagesArray.length - 1], 'lastImageClone');
    addEachImage(imagesArray);
    addOneImage(imagesArray[0], 'firstImageClone');
  };

  const initiate = (specificArray) => {
    clearImageSliderContainer();
    addImageSliderContent();
    addImagesToImageSliderContent(specificArray);
  };

  return { initiate };
})();

const main = (() => {
  const findSpecificArrayWithTitle = (title) => {
    const finalArray = elements.imagesAndLinksArray.find(
      (array) => array[0] === title,
    );
    return finalArray[1];
  };

  const initiate = (title) => {
    const specificArray = findSpecificArrayWithTitle(title);
    initialDom.initiate(specificArray);
  };

  return { initiate };
})();

export default main;
