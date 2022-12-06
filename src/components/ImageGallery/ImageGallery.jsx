import ImageGalleryItem from "components/ImageGalleryItem"
import { List } from "./ImageGallery.styled";

function ImageGallery ({cards, modalImg}) {
  return (
    <List className="gallery ImageGallery">
      {cards.map(({id, webformatURL, largeImageURL}) => {
        return (
          <ImageGalleryItem key={id} url={webformatURL} modalImg={largeImageURL} />
        )
      })}
    </List>
  )
}

export default ImageGallery;

