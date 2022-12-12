import ImageGalleryItem from "components/ImageGalleryItem"
import { List } from "./ImageGallery.styled";
import PropTypes from "prop-types";

function ImageGallery ({cards}) {
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

ImageGallery.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),),
}

export default ImageGallery;

