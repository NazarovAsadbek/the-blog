<template>
  <section>
    <wide-post />
    <div class="posts-grid">
      <narrow-post />
      <narrow-post />
    </div>
  </section>
</template>

<script>
import WidePost from "@/components/Posts/WidePost.vue";
import NarrowPost from "@/components/Posts/NarrowPost.vue";

export default {
  components: { NarrowPost, WidePost },
};
</script>

<style>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 48.25%);
  grid-gap: 30px;
}
</style>
