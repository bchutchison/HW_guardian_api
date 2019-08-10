<template lang="html">
  <article-select :articles="articles"></article-select>
</template>

<script>
import { eventBus } from '@/main.js';
import ArticleSelect from '@/components/ArticleSelect.vue';
// import ArticleSelect from '@/components/ArticleDetail.vue';

export default {
  components: {
    'article-select': ArticleSelect
  },
  data() {
    return {
      articles: [],
      selectedArticl: null
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
</style>
