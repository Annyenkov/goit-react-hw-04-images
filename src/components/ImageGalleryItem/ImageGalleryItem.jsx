import { Component } from "react";
import Modal from "components/Modal";
import { Img, Item } from "./ImageGalleryItem.styled";


class ImageGalleryItems extends Component {
  state = {
    isModalOpen: false,
  }

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }))
  }

  render() {
    const { url, modalImg, tags } = this.props
    const {isModalOpen} = this.state
    return (
      <>
        <Item>
          <Img src={url} alt={tags} onClick={this.toggleModal}/>
        </Item>
        {isModalOpen && <Modal modalImg={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
} 

export default ImageGalleryItems