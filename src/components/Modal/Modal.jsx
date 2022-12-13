import { Component } from "react"
import PropTypes from "prop-types";
import { Overlay, LargeImg, ModalImg } from "./Modal.styled"

class Modal extends Component {
  static propTypes = {
    modalImg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClose);
  }

  onEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onBackdropClick}>
        <LargeImg>
          <ModalImg src={this.props.modalImg} alt="" />
        </LargeImg>
      </Overlay>
    )
  }
}

export default Modal