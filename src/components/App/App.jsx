import { Component } from "react";
import ImageGallery from "components/ImageGallery";
import Searchbar from "components/Searchbar";
import api from "services/pixabay-api";
import Button from "components/Button/Button";
import { InfinitySpin } from  'react-loader-spinner'
import { AppStyled } from "./App.styled";

class App extends Component {
  state = {
    text: '',
    cards: [],
    page: 1,
    visible: false,
    loading: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const {text: prevText, page: firstPage} = prevState;
    const { text: nextText, page: nextPage } = this.state;
    if (prevText !== nextText || firstPage !== nextPage) {
      this.setState({ visible: false });
      this.setState({ loading: true });
      try {
        const fetchCards = await api.fetchPixabay(nextText, nextPage)
        const newCards = fetchCards.hits
        if (fetchCards.total === this.state.cards.length || newCards.length === 0) {
          alert('sdsda')
          return this.setState(({ visible }) => ({
            visible: false
          }))
        }
        newCards.forEach(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return this.setState(({ cards }) => ({
              cards: [...cards, { id, webformatURL, largeImageURL, tags }],
              visible: true,
            }));
          }
         )} catch (error) {
        console.log("ogo")
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = e => {
    this.setState({ text: e, cards: [], page: 1 })
  }

  render() {
    const {cards, visible, loading} = this.state
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        {cards.length > 0 && <ImageGallery cards={cards} />}
        {loading && <InfinitySpin 
          width='200'
          color="#4fa94d"
        />}
        {visible && <Button onClick={this.onLoadMore} />}
      </AppStyled>
      )
    }

};


export default App;
