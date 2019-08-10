<template lang="html">
  <ul v-if="article !== null">
    <li><span class="bold">Title: </span>{{ article.webTitle}}</li>
    <li><span class="bold">Section Name: </span>{{article.sectionName}}</li>
    <li><span class="bold">Publication Date: </span>{{article.webPublicationDate.toLocaleString().replace('Z', '').replace('T', ' ') }}</li>
    <li><span class="bold">Link: </span>{{article.webUrl}}</li>

  </ul>
</template>

<script>
export default {
  name: 'article-detail',
  props: ['article']
}
</script>

<style lang="css" scoped
.bold {
  font-weight: bold;
}
</style>
