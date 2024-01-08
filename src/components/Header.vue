<template>
  <div class="main">
    <Navbar />

    <div class="main-content">
      <div class="sidebar-wrapper">
        <Sidebar />
      </div>
      <div class="content-wrapper">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content.vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Content,
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
}
.content-wrapper {
  margin-top: 4rem;
  width: 80%;
}
</style>
