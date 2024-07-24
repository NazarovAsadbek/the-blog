<template>
  <router-link class="animate" :to="{ name: 'post', params: { name: slug } }">
    <article class="post">
      <div class="post-image">
        <div class="post-image__wrapper visible">
          <img :src="img" alt="post" />
          <img :src="img" alt="post" />
        </div>
      </div>
      <div class="post-info">
        <div class="post-info__tag">
          <i></i>
          {{ category }}
        </div>
        <h2 class="post-info__title">
          {{ title }}
        </h2>
        <p class="post-info__description">
          {{ description }}
        </p>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  props: {
    img: String,
    category: String,
    title: String,
    description: String,
    slug: String,
  },
};
</script>

<style lang="css" scoped>
@keyframes animate-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.animate {
  display: block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  animation: animate-in 0.6s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards;
  animation-iteration-count: 1;
}

.post {
  display: flex;
  height: 350px;
  box-sizing: border-box;
  border: 1px;
  border-radius: 15px;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  cursor: pointer;
  margin-bottom: 40px;
  background-color: var(--app-main);
  color: var(--app-main);
}

.post:hover {
  transform: translateY(-3px);
  box-shadow: 0 50px 50px -20px rgba(50, 50, 93, 0.03),
    0 30px 10px -30px rgba(0, 0, 0, 0.06);
  border: 1px solid;
}

.post:hover .post-image .post-image__wrapper img:last-of-type {
  opacity: 0.35;
}

@keyframes post-image-loader {
  0% {
    background-color: rgba(0, 0, 0, 0.07);
  }
  50% {
    background-color: rgba(0, 0, 0, 0.11);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.07);
  }
}

.post-image {
  width: 480px;
  border-radius: 15px 0 0 15px;
  min-height: 260px;
  text-align: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.07);
  animation: post-image-loader 1s linear infinite;
}

.post-image__wrapper {
  width: 480px;
  height: 100%;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.post-image__wrapper img:first-of-type {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border-radius: 15px 0 0 15px;
}

.post-image__wrapper img:last-of-type {
  transition: all 0.15s ease-in-out;
  width: 95%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 49%;
  top: 10px;
  transform: translateX(-50%);
  filter: blur(25px) saturate(12);
  opacity: 0;
}

.post-image__wrapper.visible {
  opacity: 1;
}

.post-info {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
}

.post-info__tag {
  display: inline-block;
  text-transform: capitalize;
  color: var(--app-main-info-tag);
}

i {
  display: inline-block;
  margin-right: 10px;
  height: 10px;
  width: 10px;
  border-radius: 30px;
  font-style: italic;
  background-color: rgb(132, 114, 214);
}

.post-info__title {
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 40px;
  color: var(--app-main-title);
  word-break: break-all;
}

.post-info__description {
  margin: 0;
  font-family: Inter, system-ui, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--app-main-description);
  word-break: break-all;
}
</style>
