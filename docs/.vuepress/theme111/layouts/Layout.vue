<template>
  <div class="theme-container">
    <!-- <div class="navbar"><navbar></navbar></div>
    <div class="theme-content-left">左边</div>
    <div class="theme-content"><Content /></div>
    <div class="theme-content-right">右边</div> -->
  </div>
</template>
<script>
import navbar from "../components/Navbar.vue";
export default {
  components: {
    navbar,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.theme-container {
  display: flex;
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    height: 5%;
  }

  .theme-content-left,
  .theme-content-right {
    flex-direction: column;
    width: 15%;
  }
  .theme-content {
    width: 70%;
  }
}
</style>
