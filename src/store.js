// store.js
export const panierStore = {
    articles: [],
    ajouterArticle(article) {
      this.articles.push(article);
    },
    supprimerArticle(index) {
      this.articles.splice(index, 1);
    }
  };
  