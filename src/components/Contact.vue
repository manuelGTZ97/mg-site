<template>
  <div class="uk-container section" id="contact">
    <div class="double-title-wrapper">
      <h1 class="uk-text-lighter double-title-shadow">Contact Me</h1>
      <h1 class="uk-text-lighter double-title-principal">Contact Me</h1>
    </div>

    <div class="uk-margin-large-top">
      <form>
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input" />
          </div>

          <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input" />
          </div>

          <div class="uk-margin">
            <textarea
              class="uk-textarea"
              rows="5"
              placeholder="Textarea"
            ></textarea>
          </div>
        </fieldset>
        <button class="uk-button uk-button-secondary">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
