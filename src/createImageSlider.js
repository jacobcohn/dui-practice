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

  const addGraphicsToImageSliderContent = (specificArray) => {
    // add transparentDiv
    const transparentDiv = document.createElement('div');
    transparentDiv.id = 'transparentDiv';
    const imageSliderContent = document.getElementById('imageSliderContainer');
    imageSliderContent.appendChild(transparentDiv);

    // add left icon
    const leftIconDiv = document.createElement('div');
    leftIconDiv.id = 'leftIconDiv';
    transparentDiv.appendChild(leftIconDiv);
    const leftIcon = document.createElement('i');
    leftIcon.id = 'leftIcon';
    leftIcon.classList.toggle('fas');
    leftIcon.classList.toggle('fa-arrow-left');
    leftIcon.classList.toggle('arrow');
    leftIconDiv.appendChild(leftIcon);

    // add right icon
    const rightIconDiv = document.createElement('div');
    rightIconDiv.id = 'rightIconDiv';
    transparentDiv.appendChild(rightIconDiv);
    const rightIcon = document.createElement('i');
    rightIcon.id = 'rightIcon';
    rightIcon.classList.toggle('fas');
    rightIcon.classList.toggle('fa-arrow-right');
    rightIcon.classList.toggle('arrow');
    rightIconDiv.appendChild(rightIcon);

    // add circles at bottom for knowing position
    const circlesDiv = document.createElement('div');
    circlesDiv.id = 'circlesDiv';
    transparentDiv.appendChild(circlesDiv);
    const numberOfCircles = specificArray.length;
    for (let i = 0; i < numberOfCircles; i += 1) {
      const circle = document.createElement('div');
      circle.id = `circle${i}`;
      circle.classList.toggle('circle');
      circlesDiv.appendChild(circle);
    }
  };

  const initiate = (specificArray) => {
    clearImageSliderContainer();
    addImageSliderContent();
    addImagesToImageSliderContent(specificArray);
    addGraphicsToImageSliderContent(specificArray);
  };

  return { initiate };
})();

const changeSlides = (() => {
  let slideCounter;
  let allowedToChangeSlide = true;

  const imageWidth = 700;
  const transitionTime = 300;

  const resetSlideCounter = () => {
    slideCounter = 0;
  };

  const changeImageWithTransition = () => {
    const amountOfPixelsTransformed = (slideCounter + 1) * imageWidth * -1;
    const imageSliderContent = document.getElementById('imageSliderContent');
    imageSliderContent.style.cssText = `
      transform: translateX(${amountOfPixelsTransformed}px);
      transition: ${transitionTime}ms;
    `;
    allowedToChangeSlide = false;
    setTimeout(() => {
      allowedToChangeSlide = true;
    }, transitionTime);
  };

  const changeImageWithoutTransition = () => {
    const amountOfPixelsTransformed = (slideCounter + 1) * imageWidth * -1;
    const imageSliderContent = document.getElementById('imageSliderContent');
    imageSliderContent.style.cssText = `
      transform: translateX(${amountOfPixelsTransformed}px);
    `;
  };

  const checkSlideCounter = (numberOfPhotos) => {
    if (slideCounter === -1) {
      slideCounter = numberOfPhotos - 1;
      setTimeout(() => changeImageWithoutTransition(), transitionTime);
    } else if (slideCounter === numberOfPhotos) {
      slideCounter = 0;
      setTimeout(() => changeImageWithoutTransition(), transitionTime);
    }
  };

  const changeFilledCircle = () => {
    const allCircles = Array.from(document.querySelectorAll('.circle'));
    allCircles.forEach((circle) => {
      if (circle.classList.contains('filled')) {
        circle.classList.toggle('filled');
      }
    });

    const specificCircleId = `circle${slideCounter}`;
    const specificCircle = document.getElementById(specificCircleId);
    specificCircle.classList.toggle('filled');
  };

  const changeLink = (specificArray) => {
    const creditLinkTextContent = specificArray[slideCounter][1][0];
    elements.creditLink.textContent = creditLinkTextContent;
    const creditLinkActualLink = specificArray[slideCounter][1][1];
    elements.creditLink.href = creditLinkActualLink;
  };

  const changeSlide = (specificArray) => {
    changeImageWithTransition();
    checkSlideCounter(specificArray.length);
    changeFilledCircle();
    changeLink(specificArray);
  };

  const events = (specificArray) => {
    const leftArrow = document.getElementById('leftIcon');
    leftArrow.addEventListener('click', () => {
      if (allowedToChangeSlide === true) {
        slideCounter += -1;
        changeSlide(specificArray);
      }
    });

    const rightArrow = document.getElementById('rightIcon');
    rightArrow.addEventListener('click', () => {
      if (allowedToChangeSlide === true) {
        slideCounter += 1;
        changeSlide(specificArray);
      }
    });

    const automaticallyChangeSlides = setInterval(() => {
      if (allowedToChangeSlide === true) {
        slideCounter += 1;
        changeSlide(specificArray);
      }
    }, 4000);

    const observer = new MutationObserver(() => {
      clearInterval(automaticallyChangeSlides);
      observer.disconnect();
    });

    observer.observe(elements.imageSliderContainer, { childList: true });
  };

  const initiate = (specificArray) => {
    resetSlideCounter();
    changeSlide(specificArray);
    events(specificArray);
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
    changeSlides.initiate(specificArray);
  };

  return { initiate };
})();

export default main;
