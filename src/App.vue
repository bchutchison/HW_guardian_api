<template lang="html">
  <div>
    <h2 class="text-centre">Guardian Article App</h2>
    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'films'}">Films</router-link>
    </nav>
    <router-view id="view"></router-view>
    <article-select :articles="articles"></article-select>
    <article-detail :article="selectedArticle"></article-detail>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import ArticleSelect from '@/components/ArticleSelect.vue';
import ArticleDetail from '@/components/ArticleDetail.vue';

export default {
  components: {
    'article-select': ArticleSelect,
    'article-detail': ArticleDetail
  },
  data() {
    return {
      articles: [],
      selectedArticle: null
    };
  },
  mounted() {
    eventBus.$on('article-selected', (selectedIndex) => {
      this.selectedArticle = this.articles[selectedIndex];
    });
    fetch('https://content.guardianapis.com/search?section=film&api-key=test')
      .then(res => res.json())
      .then(articles => this.articles = articles.response.results);
  }
}
</script>



<style lang="css" scoped>

h2 {
  color: #FFE303;
  background: DarkBlue;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 40px;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin: 0 auto;
}

a {
  color: #FFE303;
  text-decoration: none;
  background-color: DarkBlue;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 3px 3px
}

a:active {
box-shadow: 2px 2px #FFE303;
  transform: translateY(2px);
}


#view {
}



</style>
