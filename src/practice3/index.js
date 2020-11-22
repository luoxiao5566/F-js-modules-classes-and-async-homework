export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", { method: "GET" })
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      const { origin, author, content } = response;
      const poetry = [];
      poetry.push(origin);
      poetry.push(author);
      poetry.push(content);
      return poetry;
    })
    .catch((err) => {
      console.error(err);
    });
};
