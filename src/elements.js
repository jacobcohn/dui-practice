import imagesAndLinks from './imagesAndLinksArray';

const createImageSliderRequirements = (() => {
  const imageSliderContainer = document.getElementById('imageSliderContent');
  const creditLink = document.getElementById('creditLink');
  const imagesAndLinksArray = imagesAndLinks.array;
  return { imageSliderContainer, creditLink, imagesAndLinksArray };
})();

export default createImageSliderRequirements;
