<template>
  <section class="post-wrapper">
    <vue-markdown :source="content" v-highlightjs />
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown-render";
export default {
  components: {
    VueMarkdown,
  },
  data: () => ({
    content: "",
  }),
  mounted() {
    const slug = this.$route.params.name;
    fetch(`http://155.133.23.97:3003/articles/${slug}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.content = res.article.description;
      });
  },
};
</script>

<style lang="css" scoped>
.post-wrapper {
  box-sizing: border-box;
  padding: 70px 90px;
  border-radius: 20px;
  box-shadow: 0 60px 30px hsla(0, 0%, 40%, 0.05);
  background-color: var(--app-main);
}
</style>
