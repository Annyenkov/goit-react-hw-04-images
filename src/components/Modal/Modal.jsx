import PropTypes from "prop-types";
import { Overlay, LargeImg, ModalImg } from "./Modal.styled"

const Modal = ({ modalImg, onClose }) => {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
    return (
      <Overlay onClick={onBackdropClick}>
        <LargeImg>
          <ModalImg src={modalImg} alt="" />
        </LargeImg>
      </Overlay>
    )
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal