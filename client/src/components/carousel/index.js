import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: "https://picsum.photos/2000/600",
      //  
      caption: 'Life Is Passing You by'
  },
  { 
    id: 2,
    src: "https://picsum.photos/2000/599",
    // altText: 'Slide 2',
    caption: 'Stop Wasting Time Doing Nothing'
  },
  {
    id: 3,
    src: "https://picsum.photos/2000/601",
    altText: '',
    caption: 'You Are Better Than This!'
  }
];

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          {/* <img src="https://picsum.photos/200/300" alt={item.altText} /> */}
          <img src={item.src} alt={item.altText} />
        <CarouselCaption className= 'text-light ' captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 250px;
              background: black;
            }
            .text-light{
              text-shadow: 1px 1px #000
              
            }
            `
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default App;