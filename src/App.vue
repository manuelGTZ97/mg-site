<template>
  <Home />
  <AboutMe />
  <Skills />
  <Portfolio />
  <Contact />
  <Footer />
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

UIkit.use(Icons);

export default {
  name: "App",
  components: {
    Home,
    AboutMe,
    Skills,
    Portfolio,
    Contact,
    Footer,
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fafafa;
  color: #404040;
  font-size: 16px;
}

.section {
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
