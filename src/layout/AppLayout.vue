<template>
  <div class="wrapper">
    <AppHeader />
    <div class="container">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Layout/AppHeader.vue";

export default {
  components: { AppHeader },
};
</script>

<style lang="scss" scoped></style>
