<template>
  <div class="main">
    <div class="centered-content">
      <img src="../assets/WaitingPage.png" alt="centerimg" />
      <p>
        Пожалуйста зарегистрируйте свой объект размещение для активации функций
        Bell PMS
      </p>
      <div class="register">
        <p>Обучающие ролики</p>
        <button class="btn">Регистрация</button>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  data() {
    return {};
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

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.centered-content p {
  font-family: "SF-Pro-Display-Black", sans-serif;
  font-size: 15px;
  color: #8f97a3;
  text-align: center;
  white-space: nowrap;
}
.register {
  display: flex;
  align-items: center;
}

.register .btn {
  margin-top: 40px;
  font-size: 17px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  font-weight: bold;
  margin: 10px 20px;
}
.register .btn:hover {
  background-color: #0056b3;
}
</style>
