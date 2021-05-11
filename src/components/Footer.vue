<template>
  <div class="uk-section-default">
    <div class="uk-section uk-light footer-background">
      <div class="uk-container">
        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less">
.footer-background {
  background: rgb(64, 64, 64);
  background: linear-gradient(
      310deg,
      rgba(64, 64, 64, 0) 10%,
      rgba(64, 64, 64, 1) 28%
    ),
    url("../assets/water.jpg");
  background-repeat: repeat;
  background-position: right;
}
</style>
