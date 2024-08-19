// silder color change
const slider = document.querySelector("#hue-brightness-slider");
const sliderValueDisplay = document.querySelector("#slider-value");

slider.addEventListener("input", () => {
  const sliderValue = slider.value;

  let cardColor;

  const grayToGreenRatio = sliderValue / 100;

  const lightness = 23.76 + (65.21 - 23.76) * grayToGreenRatio;

  const hue = 106.37 + (115.395 - 106.37) * grayToGreenRatio;

  const chroma = 0 + 0.19 * grayToGreenRatio;

  cardColor = `oklch(${lightness}% ${chroma} ${hue})`;

  document.querySelector(".card").style.backgroundColor = cardColor;

  sliderValueDisplay.textContent = sliderValue;
});
