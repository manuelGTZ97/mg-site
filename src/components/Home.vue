<template>
  <div class="home-wrapper">
    <div
      class="uk-container uk-box-shadow-medium home-container uk-position-relative"
    >
      <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
        <div class="uk-flex uk-flex-middle">
          <h1 class="uk-text-lighter title">Hi, I'm Manuel<br />Gutierrez</h1>
        </div>
        <div class="uk-flex uk-flex-center@m uk-flex-middle">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/600/FF0000"
            uk-img
          />
        </div>
      </div>
      <div class="home-navbar uk-position-absolute">Navbar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="less">
.home-wrapper {
  height: 100vh;
  width: 100vw;
  display: table-cell;
  vertical-align: middle;
}
.home-container {
  padding: 5rem 2rem;
  @media screen and (min-width: 959px) {
    padding: 10rem 8rem;
  }
}

.title {
  font-size: 6rem;
}

.circle-image-wrapper {
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  border: 2px solid white;
  position: relative;
}

.water-image {
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

.home-navbar {
  bottom: 10px;
}
</style>
