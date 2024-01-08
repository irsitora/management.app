<template>
  <div>
    <Navbar />
    <div class="main-content">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="book">
        <Book />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Book,
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
  gap: 4rem;
}
.book {
  margin-top: 100px;
  min-height: 100px;
  width: 85%;
  max-width: 85%;
}
</style>
