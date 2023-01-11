import React, { useEffect, useState } from "react";

function Slides({ slides }) {
  const numSlides = slides.length;
  const [i, setI] = useState(0);
  const [isLast, setIsLast] = useState(i === numSlides - 1);
  useEffect(
    () => (i === numSlides - 1 ? setIsLast(true) : setIsLast(false)),
    [i, numSlides]
  );

  const goNext = () => {
    if (!isLast) setI(i + 1);
  };

  const goPrev = () => {
    if (i !== 0) {
      setI(i - 1);
    }
  };

  const restart = () => {
    if (i !== 0) setI(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={restart}
          disabled={i <= 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={i === 0}
          onClick={goPrev}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={isLast}
          onClick={goNext}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[i].title}</h1>
        <p data-testid="text">{slides[i].text}</p>
      </div>
    </div>
  );
}

export default Slides;
