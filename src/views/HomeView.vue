<template>
  <section v-if="articles.length > 0">
    <wide-post
      :img="widePostInfo.body"
      :category="
        widePostInfo.tagList?.length > 0
          ? widePostInfo.tagList[0]
          : 'Неизвестная категория'
      "
      :title="widePostInfo.title"
      :description="widePostInfo.description"
      :slug="widePostInfo.slug"
    />
    <div class="posts-grid">
      <narrow-post
        v-for="article in narrowPostInfo"
        :key="article.id"
        :img="article.body"
        :category="
          article.taglist?.length > 0
            ? article.taglist[0]
            : 'Неизвестная категория'
        "
        :title="article.title"
        :description="article.description"
        :slug="article.slug"
      />
    </div>
  </section>
</template>

<script>
import WidePost from "@/components/Posts/WidePost.vue";
import NarrowPost from "@/components/Posts/NarrowPost.vue";

export default {
  components: { NarrowPost, WidePost },
  data: () => ({
    articles: [],
  }),
  computed: {
    widePostInfo() {
      return this.articles[0];
    },
    narrowPostInfo() {
      return this.articles?.slice(1, this.articles.length);
    },
  },
  mounted() {
    fetch("http://155.133.23.97:3003/articles", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.articles = res.articles;
      });
  },
};
</script>

<style>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 48.25%);
  grid-gap: 30px;
}
</style>
