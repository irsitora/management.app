<template>
  <div>
    <nav class="nav-inner">
      <div class="nav">
        <div class="search">
          <button class="search-btn">Поиск номеров</button>
        </div>
        <div class="time">
          <p>{{ currentTime }}</p>
          <div class="date">
            <p>{{ currentDate }} Ташкент</p>
          </div>
        </div>
        <div class="notification">
          <button @click="showNotification" class="notification-btn">
            <span class="icon"><i class="fas fa-bell" style="white"></i></span>
            {{ notificationCount }}
          </button>
        </div>
        <div class="avatar">
          <img src="../assets/ava.png" alt="ava" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  data() {
    return {
      profileImage: "profile.jpeg",
      notificationCount: 24,
      showNotifications: false,
      currentDate: "",
      currentTime: "",
    };
  },

  mounted() {
    this.updateDateTime();

    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();

      this.currentTime = `${hours < 10 ? "0" : ""}${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;

      this.currentDate = `${day < 10 ? "0" : ""}${day}.${
        month < 10 ? "0" : ""
      }${month}.${year}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Digital-7 Mono";
  src: url("@/assets/fonts/digital-7 (mono).ttf") format("truetype");
}
@font-face {
  font-family: "SF-Pro-Display-Black";
  src: url("@/assets/fonts/SF-Pro-Display-Black.otf") format("otf");
}

.nav {
  display: flex;
  justify-content: center;
}
.search {
  position: absolute;
  top: 1em;
  left: 20em;
}
.search-btn {
  background-color: #fff;
  color: blue;
  border: 1px solid blue;
  border-radius: 8px;
  padding: 10px 10px;
  cursor: pointer;
  outline: none;
}
.search-btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}

.time {
  position: absolute;
  display: flex;
  top: 0.5em;
  left: 21em;
  font-family: "Digital-7 Mono", monospace;
  font-size: 34px;
  color: #08162b;
}
.date {
  display: flex;
  position: absolute;
  left: 5em;
  top: 0.4em;
  font-family: "SF-Pro-Display-Black", sans-serif;
  font-size: 22px;
  color: #8f97a3;
  white-space: nowrap;
}

.notification {
  position: absolute;
  top: 1em;
  right: 6em;
}
.notification-btn {
  background-color: #fff;
  color: blue;
  border: 1px solid blue;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px 40px;
}

.notification-btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}
.avatar {
  position: absolute;
  top: 1em;
  right: 2em;
}

.avatar img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
