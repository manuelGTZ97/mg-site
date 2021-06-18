<template>
  <div class="uk-container section" id="portfolio">
    <div class="double-title-wrapper">
      <h1 class="uk-text-lighter double-title-shadow">Portfolio</h1>
      <h1 class="uk-text-lighter double-title-principal">Portfolio</h1>
    </div>
    <div class="uk-child-width-1-3@s uk-grid-match uk-margin-large-top" uk-grid>
      <div v-for="item in portfolio" :key="item.id">
        <div class="uk-card ">
          <div class="uk-card-media-top">
            <img :src="require(`@/assets/${item.thumbnail}`)" alt="" uk-img />
          </div>
          <div class="uk-margin-small-top">
            <h5 class="uk-margin-remove">{{ item.title }}</h5>
            <small class="uk-margin-remove-top d-block uk-margin-bottom">
              {{ item.shortDescription }}
            </small>
            <a class="uk-button uk-button-text" href="#modal-full" uk-toggle
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close
        ></button>
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid
        >
          <div
            class="uk-background-cover"
            style="background-image: url('images/photo.jpg');"
            uk-height-viewport
          ></div>
          <div class="uk-padding-large">
            <h1>Headline</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolio } from "../texts";

export default {
  name: "Portfolio",
  data() {
    return {
      portfolio,
    };
  },
};
</script>

<style scoped lang="less">
.d-block {
  display: block;
}
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
