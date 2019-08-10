<template lang="html">
  <div>
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
</style>
