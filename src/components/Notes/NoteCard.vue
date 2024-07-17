<template>
  <router-link class="animate" to="/">
    <article class="post column">
      <div class="post-info">
        <div class="post-info__tag">
          <i style="background-color: #edd950"></i>
          JavaScript
        </div>
        <h2 class="post-info__title">
          Как с помощью Dadata определить город по IP?
        </h2>
        <p class="post-info__description">
          Делюсь информацией о том, как определить местоположение по IP
        </p>
      </div>
    </article>
  </router-link>
</template>

<script></script>

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
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  animation: animate-in 0.6s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards;
  animation-iteration-count: 1;
}

.post {
  display: flex;
  box-sizing: border-box;
  border: 1px;
  border-radius: 15px;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  cursor: pointer;
  background-color: var(--app-main);
  color: var(--app-main);
  flex-direction: column;
  height: auto;
  margin-bottom: 0;
}

.post:hover {
  transform: translateY(-3px);
  box-shadow: 0 50px 50px -20px rgba(50, 50, 93, 0.03),
    0 30px 10px -30px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--app-border-color);
}

.post:hover .post-image .post-image__wrapper img:last-of-type {
  opacity: 0.35;
}

.post-info {
  margin: 0;
  padding: 25px 30px 30px;
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
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
  line-height: 34px;
  color: var(--app-main-title);
}

.post-info__description {
  margin: 0;
  font-family: Inter, system-ui, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--app-main-description);
}
</style>
