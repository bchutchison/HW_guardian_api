<template lang="html">
  <div id="">
    <article-select :articles='articles'></article-select>
    <article-detail :selectedArticle="selectedArticle"></article-detail>
  </div>
</template>

<script>
import ArticleSelect from '@/components/ArticleSelect';
import ArticleDetail from '@/components/ArticleDetail';

export default {
  name: 'films',
  props: ['articles', 'selectedArticle'],
  components: {
    'article-select': ArticleSelect,
    'article-detail': ArticleDetail
  }
}

</script>

<style lang="css" scoped>
</style>
