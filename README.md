# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](/Social%20links%20profile%20screenshot.png)


### Links

- Solution URL: [Stroudy Solution](https://github.com/Stroudy/FEM-Social-links-profile)
- Live Site URL: [Git Hub pages live site](https://stroudy.github.io/FEM-Social-links-profile/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I explored the mobile-first approach using vanilla CSS, experimenting with multiple stylesheets and the cascade. I implemented a variable font instead of multiple static fonts, improving efficiency. I also reinforced the importance of using `<a>` tags for navigation over `<button>` for better semantic structure.

I encountered issues with automatic bolding of `<h1>` tags, which I resolved using dev tools. Working with typography in Figma was challenging as it listed font weights by name instead of numeric value. I added a color slider for extra practice and to deepen my understanding.

I structured my media queries for tablet and desktop but started with mobile-first. Using JS for the first time was challenging, but with some guidance from ChatGPT, I ensured I understood the structure and functionality. I organized my CSS into multiple files, linked appropriately, to establish good coding habits for larger projects.

I also learned the importance of using relative paths instead of absolute paths when working with GitHub Pages. Overall, this small project taught me a lot, and experimenting freely made it enjoyable.


HTML, Using links instead of buttons for screen readers:
```html
<ul class="card__list">
        <li class="card__list-link"><a>GitHub</a></li>
        <li class="card__list-link"><a>Frontend Mentor</a></li>
        <li class="card__list-link"><a>LinkedIn</a></li>
        <li class="card__list-link"><a>Twitter</a></li>
        <li class="card__list-link"><a>Instagram</a></li>
      </ul>
```
CSS, First silder styling
```css
#hue-brightness-slider {
  -webkit-appearance: none;
  border-radius: 12px;
}

#hue-brightness-slider::-webkit-slider-runnable-track {
  background: var(--clr-white);
  height: 5px;
  border-radius: 12px;
}

#hue-brightness-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 35px;
  width: 35px;
  margin-top: -15px;
  background-image: url("../assets/images/favicon-32x32.png");
  background-size: contain;
}

.slider-value {
  color: var(--clr-green);
  font-weight: 600;
}
```

JavaScript, Enjoyed using this playing around with it
```js
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
```
