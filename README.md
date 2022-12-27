# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Solution screenshot](./src/assets/screenshot.png)

### Links

- Solution URL: [FEM](https://www.frontendmentor.io/solutions/ecommerce-product-page-Utu7z3x4Ey)
- Live Site URL: [Netlify](https://e-commerce-fem.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- useContext and useReducer for state management
- Local Storage
- Flexbox
- Mobile-first workflow
- Sass

### What I learned

This is the first project where i've used useContext and useReducer widely. I also built a lot of components i'd never before, such as lightboxes, counters, carts. I enjoyed the challenge of using the counter value to determine how many items to add to the cart. It took me a while to figure that one out.

I also used local storage for the first time.

I was proud of using quite complicated lightbox data in multiple places, from thumbnails that opened larger images, modals, to implementing active styles, and having to reuse styles and functionality in different places on mobile. It was quite a challenge, and i'm not sure if i reused code in a DRY manner. There is a bit of duplicate code in places.

There were a lot of different things i did for the first time, like using JS to stop functions working on smaller devices, instead of css.

```js
 {currentImage && (
        <div className="lightbox-main-img">
          <img
            src={currentImage}
            onClick={() => {
              showImage(currentImage);
            }}
            className="lightbox__main-img"
            alt="large image"
          />

          <img
            src={prev}
            alt="previous btn"
            onClick={showPrevMobile}
            className="mobile-slider__item-prev"
          />

          <img
            src={next}
            alt="next btn"
            onClick={showNextMobile}
            className="mobile-slider__item-next"
          />
        </div>
      )}
      {overlay && <Overlay overlay={overlay} />}
      {/* main image thumbnails */}
      <div className="lightbox__thumbnails">
        {lightboxImgData.map((image, index) => (
          <img
            key={index}
            alt="thumbnail"
            onClick={() => {
              setCurrentImage(image.larger);
              setIsActive(true);
              setActiveIndex(index);
            }}
            src={image.thumbnail}
            className={classnames("thumbnail-img", {
              active: isActive && activeIndex === index,
            })}
          />
        ))}
```

### Continued development

With these challenges there's always at least one or two things that I found i hadn't considered until i realise i've forgotten to build them out. This time it was the active index being set by the previous and next buttons, and the same buttons being used on mobile devices. I think i need to do a bit more forward planning to ensure i am including everything.

I took two different approaches in the app, firstly a useContext approach for the cart section, and useState for the modal. I also used a bit of prop drilling for the overlay and sidebar elements, as i thought including them in useContext would be overkill. I'm not sure if overall this was the best approach, and if i should have a consistent way of handling state management. The modal images at first didn't seem to need to be passed around so much globally like the product/cart, but that's maybe because i didn't split out the elements so much. In future I will seek to have a more consistent approach.

I continue to improve my responsive design, but i found fiddly bits, like the open cart, a bit painful to get looking right on every screen size.

I also am not sure about get text aligning, wrapping onto new lines on specific words. I often feel like i'm hacking it and wonder if there's a better way, which i haven't found yet.

## Author

- Website - [Evan Parler](http://www.evanparker.co.uk/)
- Frontend Mentor - [@evancp87](https://www.frontendmentor.io/profile/evancp87)
