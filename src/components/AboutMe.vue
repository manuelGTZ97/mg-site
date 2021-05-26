<template>
  <div class="uk-container section" id="aboutme">
    <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
      <div>
        <div class="double-title-wrapper">
          <h1 class="uk-text-lighter double-title-shadow">About Me</h1>
          <h1 class="uk-text-lighter double-title-principal">About Me</h1>
        </div>
        <div class="uk-margin-large-top">
          <p>
            I am a full-stack developer focus on web development and design.
            Innovation is the key to find success, thus I have learned how to
            improve my programming and design knowledge and techniques.
          </p>
        </div>
      </div>
      <div>
        <img
          class="water-image"
          data-src="https://via.placeholder.com/400/FF0000"
          uk-img
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped lang="less">
.double-title-wrapper {
  position: relative;
  margin-bottom: 5px;
}

.double-title-shadow {
  position: relative;
  left: 10px;
  margin: 0;
  font-size: 5rem;
  color: #efefefdb;
}

.double-title-principal {
  position: absolute;
  margin: 0;
  bottom: 1px;
}
</style>
