<template>
  <div>
    <nav class="nav-inner">
      <div>
        <div class="toggle-btn">
          <button
            @click="toggleSidebar"
            :class="{ 'rotate-icon': sidebarOpen }"
            class="sidebar-toggle-btn"
          >
            <img src="../assets/icons/Icons (1).svg" alt="Иконка" />
          </button>
          <div class="logo">
            <img
              v-if="sidebarOpen"
              class="medium-logo"
              src="../assets/Medium.png"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <aside
            :class="{
              'sidebar-open': sidebarOpen,
              'sidebar-closed': !sidebarOpen,
            }"
          >
            <div class="menu">
              <div :class="sidebarOpen ? 'open' : 'closed'">
                <router-link class="button" to="/">
                  <img
                    src="../assets/icons/Icons-4.svg"
                    alt="Панель графиков"
                  />
                  <span class="text">Панель графиков</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-5.svg" alt="Шахматка" />
                  <span class="text">Шахматка</span>
                </router-link>
                <router-link class="button" to="/serviceReception">
                  <img src="../assets/icons/Icons-6.svg" alt="Служба приёма" />
                  <span class="text">Служба приёма</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-7.svg" alt="Список гостей" />
                  <span class="text">Список гостей</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-8.svg" alt="Финансы" />
                  <span class="text">Финансы</span>
                </router-link>
                <router-link class="button" to="/">
                  <img
                    src="../assets/icons/Icons-9.svg"
                    alt="Статистика и отчёты"
                  />
                  <span class="text">Статистика и отчёты</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-10.svg" alt="Счеты" />
                  <span class="text">Счеты</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-11.svg" alt="Доска номеров" />
                  <span class="text">Доска номеров</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-12.svg" alt="Чат" />
                  <span class="text">Чат</span>
                </router-link>
                <router-link class="button" to="/">
                  <img
                    src="../assets/icons/Icons-13.svg"
                    alt="Менеджер каналов"
                  />
                  <span class="text">Менеджер каналов</span>
                </router-link>
                <router-link class="button" to="/">
                  <img src="../assets/icons/Icons-14.svg" alt="Настройки" />
                  <span class="text">Настройки</span>
                </router-link>

                <div class="anbutton">
                  <router-link class="button-space" to="/">
                    <img src="../assets/icons/Icons-2.svg" alt="Настройки" />
                  </router-link>
                  <router-link class="button-space" to="/">
                    <img src="../assets/icons/Icons-1.svg" alt="Настройки" />
                  </router-link>
                  <router-link class="button-space" to="/">
                    <img src="../assets/icons/Icons.svg" alt="Настройки" />
                  </router-link>
                </div>
              </div>
            </div>
          </aside>
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
      sidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Digital-7 Mono";
  src: url("@/assets/fonts/digital-7 (mono).ttf") format("truetype");
}
@font-face {
  font-family: "SF-Pro-Display-Black";
  src: url("@/assets/fonts/SF-Pro-Display-Black.otf") format("otf");
}

.logo {
  margin-left: 1px;
}
.toggle-btn {
  min-height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
}
.medium-logo {
  width: 48px;
  height: 20px;
  border: none;
  padding: 0;
  margin: 0;
}
.sidebar-toggle-btn {
  position: absolute;
  top: 15px;
  left: 2em;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}
.sidebar-toggle-btn .img {
  width: 29px;
  height: 24px;
}

.menu .button {
  display: flex;
  align-items: center;
  color: #8f97a3;
  text-decoration: none;
  padding: 1.3rem 1.5rem;
  transition: 0.2;
  min-height: 20px;
}
.open {
  min-width: 15%;
}
.closed {
  width: 1px;
}
.menu .button:hover .text,
.menu .button:hover {
  background-color: #e5f2ff;
  border-radius: 12px;
  color: #0066ff;
}
.menu .button .img {
  transition: 0.2s ease-out;
}

.menu .button .text {
  opacity: 0;
  transition: 0s ease-out;
  color: #8f97a3;
  font-family: "SF-Pro-Display-Black", sans-serif;
  font-size: 14px;
  white-space: nowrap;
}
.menu .button .text:hover {
  color: #0066ff;
}
.anbutton {
  padding: 1.3rem 1.5rem;
}
.anbutton .button-space {
  display: flex;
  align-items: center;
  color: #8f97a3;
  text-decoration: none;
  transition: 0.2s ease-out;
  padding: 1rem 0;
  padding-right: 5rem;
  width: 20px;
  height: 20px;
}
.anbutton .button-space:hover {
  background-color: #e5f2ff;
  border-radius: 12px;
}

.anbutton.menu .button-space .img {
  transition: 0.2s ease-out;
}
.anbutton.menu .button-space .img:hover {
  color: #0056b3;
}

.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}
.sidebar-open .button .text {
  opacity: 1;
  margin: 0.5rem;
}
.sidebar-open .button .text:hover {
  background-color: #e5f2ff;
}
.nav {
  display: flex;
  justify-content: center;
}
</style>
