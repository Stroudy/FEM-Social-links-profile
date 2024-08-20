// silder color change
const slider = document.querySelector("#hue-brightness-slider");
const sliderValueDisplay = document.querySelector("#slider-value");

slider.addEventListener("input", () => {
  const sliderValue = slider.value;

  let cardColor;
  let textColor;
  let locationColor;

  const grayToGreenRatio = sliderValue / 100;
  // card
  const lightness = 23.76 + (65.21 - 23.76) * grayToGreenRatio;

  const hue = 106.37 + (115.395 - 106.37) * grayToGreenRatio;

  const chroma = 0 + 0.19 * grayToGreenRatio;
  //card end

  const colorChangeRatio = sliderValue / 100;

  const whiteToBlack = 100 + (0 - 100) * colorChangeRatio;

  const lightnessText = 91.21 + (40.15 - 91.21) * colorChangeRatio;

  const hueText = 0.217 + (0.264 - 0.217) * colorChangeRatio;

  const chromaText = 123.9 + (332.78 - 123.9) * colorChangeRatio;

  locationColor = `oklch(${lightnessText}% ${hueText} ${chromaText})`;

  textColor = `oklch(${whiteToBlack}% 3.5594404384177905e-8 106.37411429114086)`;

  document.querySelector(".card__location").style.color = locationColor;

  document.querySelector(".card__title").style.color = textColor;
  document.querySelector(".card__desc").style.color = textColor;

  cardColor = `oklch(${lightness}% ${chroma} ${hue})`;

  document.querySelector(".card").style.backgroundColor = cardColor;

  sliderValueDisplay.textContent = sliderValue;
});
