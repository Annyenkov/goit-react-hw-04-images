import { useEffect, useState } from "react";
import Modal from "components/Modal";
import { Img, Item } from "./ImageGalleryItem.styled";

const ImageGalleryItems = ({url, modalImg, tags}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)
  
  useEffect(() => {
    if (isModalOpen === false) {
      return
    }
    const onEscClose = e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    }
  }, [isModalOpen])
  return (
    <>
      <Item>
        <Img src={url} alt={tags} onClick={toggleModal}/>
      </Item>
      {isModalOpen && <Modal modalImg={modalImg} onClose={toggleModal} />}
    </>
  )
}

export default ImageGalleryItems