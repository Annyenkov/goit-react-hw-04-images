import { useState, useEffect } from "react";
import ImageGallery from "components/ImageGallery";
import Searchbar from "components/Searchbar";
import api from "services/pixabay-api";
import Button from "components/Button/Button";
import { InfinitySpin } from  'react-loader-spinner'
import { AppStyled } from "./App.styled";

const App = () => {
  const [text, setText] = useState('');
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text === '') {
      return
    }
    setLoading(true)
    async function fetchCards(text, page) {
      try {
        const fetchCards = await api.fetchPixabay(text, page)
        const newCards = fetchCards.hits
        if (newCards.length === 0) {
          alert('нет изображений')
          setVisible(false)
          return
        }
        newCards.forEach(
          ({ id, webformatURL, largeImageURL, tags }) => {
            setCards(prevCards =>[...prevCards, { id, webformatURL, largeImageURL, tags }]);
          })
        setVisible(true)
      } catch (error) {
        alert(' нет изображений')
      } finally {
        setLoading(false)
      }
    }
    fetchCards(text, page)
  }, [text, page])
  const onLoadMore = () => setPage(prevPage => prevPage + 1)
  const onSubmit = e => {
    setCards([]);
    setText(e);
    setPage(1);
  }
  return (
      <AppStyled>
        <Searchbar onSubmit={onSubmit} />
        {cards.length > 0 && <ImageGallery cards={cards} />}
        {loading && <InfinitySpin 
          width='200'
          color="#4fa94d"
        />}
        {visible && <Button onClick={onLoadMore} />}
      </AppStyled>
      )
}

export default App;
