import React from 'react';

const imgUrls = [];

export default class FeaturedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredItems: null,
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({ currentImageIndex: index });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({ currentImageIndex: index });
  }

  render() {
    return (
      <div className="featured-carousel">
        <Arrow direction="left" clickFunction={this.prevSlide} glyph="&#9664;" />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div onClick={clickFunction} className={`slide-arrow ${direction}`}>
    {glyph}
  </div>
);

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" styles={styles}></div>
  );
};
