<template>
  <div class="uk-container section" id="skills">
    <div class="double-title-wrapper">
      <h1 class="uk-text-lighter double-title-shadow">Skills</h1>
      <h1 class="uk-text-lighter double-title-principal">Skills</h1>
    </div>
    <div class="uk-child-width-expand@s uk-margin-large-top" uk-grid>
      <div>
        <h4>
          <span class="uk-margin-small-right" uk-icon="code"></span>Programming
        </h4>
        <ul class="uk-list uk-list-circle list-two-columns">
          <li>Js</li>
          <li>C#</li>
          <li>Html</li>
          <li>Css</li>
          <li>Java</li>
          <li>Php</li>
        </ul>
      </div>

      <div>
        <h4>
          <span class="uk-margin-small-right" uk-icon="image"></span>Design
        </h4>
        <ul class="uk-list uk-list-circle">
          <li>Adobe Xd</li>
          <li>Sketch</li>
          <li>Photoshop</li>
        </ul>
      </div>

      <div>
        <h4>
          <span class="uk-margin-small-right" uk-icon="commenting"></span
          >Languages
        </h4>
        <ul class="uk-list uk-list-circle">
          <li>English</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
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

.list-two-columns {
  columns: 2;
}
</style>
