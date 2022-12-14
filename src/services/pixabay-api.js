function fetchPixabay(text, page) {
  return fetch(`https://pixabay.com/api/?q=${text}&page=${page}&key=30527370-b4cc229e59d49cd6447e1ea14&image_type=photo&orientation=horizontal&per_page=12`)
    .then(r => {
      if (r.ok) {
        return r.json();
      }
      
      return Promise.reject(new Error('такой картинки нет'));
    });
}

const api = {
  fetchPixabay,
}

export default api;