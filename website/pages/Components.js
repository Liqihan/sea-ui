import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import style from './components.less';

const COMPONENTS = [
  'button',
  'carousel',
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Components extends Component {
  renderComponentList = () => (
    map(COMPONENTS, component => (<Link
      to={{
        pathname: `/component/${component}`,
        state: {
          componentName: capitalizeFirstLetter(component),
        },
      }}
      key={component}
    >
      <div className={style.component}>{capitalizeFirstLetter(component)}</div>
    </Link>))
  )

  render() {
    return (
      <div className={style.root}>
        <h1 className={style.title}>SEA MOBILE</h1>
        {this.renderComponentList()}
      </div>
    );
  }
}

export default Components;
