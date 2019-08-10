<template lang="html">

</template>

<script>

export default {
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    fetch('https://content.guardianapis.com/search?section=film&api-key=test')
      .then(res => res.json())
      .then(articles => this.articles = articles.response.results);
  }
}
</script>

<style lang="css" scoped>
</style>
