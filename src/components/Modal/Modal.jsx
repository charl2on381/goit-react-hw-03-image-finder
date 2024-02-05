import React, { Component } from 'react';
import s from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.handleClickOnBackdrop}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}
