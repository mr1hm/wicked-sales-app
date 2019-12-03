import React from 'react';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      selectedCategory: null
    };
  }

  render() {
    return (
      <div className="container-fluid categoriesContainer">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <button onClick={() => this.props.setViewCategory('computers', {})} className="categoriesSections">
              Pre-built Desktops
            </button>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              <button onClick={() => this.props.setViewCategory('hardware', {})}>Computer Hardware</button>
            </span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Accessories
            </span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Misc
            </span>
          </div>
        </div>
      </div>
    );
  }
}
