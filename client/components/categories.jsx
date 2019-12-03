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
            <a onClick={() => this.props.setViewCategory('computers', {})} className="categoriesSections">
              Custom Desktops
            </a>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <a className="categoriesSections" onClick={() => this.props.setViewCategory('hardware', {})}>Computer Hardware</a>
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
