<template>
  <div class="home-wrapper">
    <div
      class="uk-container uk-box-shadow-medium home-container uk-position-relative"
    >
      <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
        <div class="uk-flex uk-flex-middle">
          <h1 class="uk-text-lighter title">Hi, I'm Manuel<br />Gutierrez</h1>
        </div>
        <div
          class="uk-flex uk-flex-right@m uk-flex-middle uk-margin-medium-top uk-margin-remove-top@m"
        >
          <img
            class="water-image"
            data-src="https://via.placeholder.com/600/FF0000"
            uk-img
          />
        </div>
      </div>
      <div class="uk-position-absolute home-navbar">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Parent</a>
          </li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
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
  transform: translate(-50%, 0%);
  bottom: 2px;
  left: 50%;
}
</style>
