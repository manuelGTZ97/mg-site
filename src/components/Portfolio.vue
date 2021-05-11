<template>
  <div class="uk-container section" id="portfolio">
    <div class="double-title-wrapper">
      <h1 class="uk-text-lighter double-title-shadow">Portfolio</h1>
      <h1 class="uk-text-lighter double-title-principal">Portfolio</h1>
    </div>
    <div
      class="uk-grid-small uk-child-width-2-4@s uk-margin-large-top uk-grid-large"
      uk-grid
    >
      <div class="portfolio-item">
        <div class="portfolio-background">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/400x200/FF0000"
            uk-img
          />
        </div>
        <div class="portfolio-description">
          <h4 class="uk-margin-remove">Description</h4>
          <h6 class="uk-margin-remove">Item Description</h6>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-background">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/400x200/FF0000"
            uk-img
          />
        </div>
        <div class="portfolio-description">
          <h4 class="uk-margin-remove">Description</h4>
          <h6 class="uk-margin-remove">Item Description</h6>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-background">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/400x200/FF0000"
            uk-img
          />
        </div>
        <div class="portfolio-description">
          <h4 class="uk-margin-remove">Description</h4>
          <h6 class="uk-margin-remove">Item Description</h6>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-background">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/400x200/FF0000"
            uk-img
          />
        </div>
        <div class="portfolio-description">
          <h4 class="uk-margin-remove">Description</h4>
          <h6 class="uk-margin-remove">Item Description</h6>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-background">
          <img
            class="water-image"
            data-src="https://via.placeholder.com/400x200/FF0000"
            uk-img
          />
        </div>
        <div class="portfolio-description">
          <h4 class="uk-margin-remove">Description</h4>
          <h6 class="uk-margin-remove">Item Description</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
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

.portfolio-item {
  width: 400px;
  max-width: 400px;
}

.portfolio-background {
  width: 100%;
}

.portfolio-description {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
