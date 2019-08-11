<template lang="html">
  <div class="article-detail">
    <ul v-if="selectedArticle !== null">
      <li><span class="bold">Title: </span>{{ selectedArticle.webTitle}}</li>
      <li><span class="bold">Section Name: </span>{{selectedArticle.sectionName}}</li>
      <li><span class="bold">Publication Date: </span>{{selectedArticle.webPublicationDate.toLocaleString().replace('Z', '').replace('T', ' ') }}</li>
      <li ><span class="bold">Link: </span><a :href="selectedArticle.webUrl" target="_blank">take me to the story...</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  props: ['selectedArticle']
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

.article-detail {
  padding: 5px;
  margin-top: 10px;
  line-height: 24px;
  font-family: "Helvetica";
  letter-spacing: 0.08em;
}

.bold {

  font-weight: bold;
}
</style>
