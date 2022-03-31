import React from 'react';
import styles from './index.scss';
import PropTypes from 'prop-types';

export default function SayHello(props) {
    const {names} = props;
    const isEmpty = value => value ==='';
  return names.map( name =>(
    <div key={name} >
        {`Hello ${name}`}
    </div>
  ));
}

SayHello.propTypes = {
    names : PropTypes.arrayOf(PropTypes.string),
};

SayHello.defaultProps = {
    names:['Aynonms'],
}