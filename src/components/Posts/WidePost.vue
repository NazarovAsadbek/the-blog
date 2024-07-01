<template>
  <router-link class="animate" to="/">
    <article class="post">
      <div class="post-image">
        <div class="post-image__wrapper visible">
          <img src="https://archakov.im/uploads/1666542894623.jpg" alt="post" />
          <img src="https://archakov.im/uploads/1666542894623.jpg" alt="post" />
        </div>
      </div>
      <div>
        <div>
          <i style="background-color: rgb(132, 114, 214)"></i>
          text
        </div>
        <h2></h2>
        <p></p>
      </div>
    </article>
  </router-link>
</template>

<script></script>

<style lang="css" scoped>
.animate {
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  animation: animateIn 0.6s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards;
  animation-iteration-count: 1;
}
.post {
  display: flex;
  height: 350px;
  box-sizing: border-box;
  border: 1px solid #f4f3f3;
  border-radius: 15px;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  cursor: pointer;
  margin-bottom: 40px;
  background-color: #fff;
}

.post:hover {
  transform: translateY(-3px);
  box-shadow: 0 50px 50px -20px rgba(50, 50, 93, 0.03),
    0 30px 10px -30px rgba(0, 0, 0, 0.06);
  border: 1px solid #eae8e8;
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
  height: 100px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.post-image__wrapper:first-of-type {
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border-radius: 15px 0 0 15px;
}

.post-image__wrapper:last-of-type {
  opacity: 0.35;
  transition: all 0.15s ease-in-out;
  width: 95%;
  height: 100px;
  object-fit: cover;
  position: absolute;
  left: 49%;
  top: 10px;
  transform: translateX(-50%);
  filter: blur(25px) saturate(12);
}

.post-image__wrapper.visible {
  opacity: 1;
}
</style>
