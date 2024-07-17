<template>
  <div class="posts-grid">
    <note-card></note-card>
    <note-card></note-card>
  </div>
</template>

<script>
import NoteCard from "@/components/Notes/NoteCard.vue";

export default {
  components: { NoteCard },
};
</script>

<style lang="css" scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 48.25%);
  grid-gap: 30px;
}
</style>
