<template lang="html">
  <div class="article-detail">
    <ul v-if="article !== null">
      <li><span class="bold">Title: </span>{{ article.webTitle}}</li>
      <li><span class="bold">Section Name: </span>{{article.sectionName}}</li>
      <li><span class="bold">Publication Date: </span>{{article.webPublicationDate.toLocaleString().replace('Z', '').replace('T', ' ') }}</li>
      <li><span class="bold">Link: </span><a href="article.webUrl">{{article.webUrl}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  props: ['article']
}
</script>

<style lang="css" scoped>
.article-detail {
  font-family: "Helvetica";
  letter-spacing: 0.08em;
}

.bold {
  font-weight: bold;
}
</style>
