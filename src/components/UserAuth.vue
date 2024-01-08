<template>
  <div class="back">
    <div class="card">
      <form @submit.prevent="submitForm" class="blur">
        <div class="logo">
          <img src="../assets/Medium.png" alt="logo" />
          <ColoredFirstLetters :content="textContent"></ColoredFirstLetters>
        </div>
        <div class="form-control">
          <input
            type="text"
            id="login"
            v-model.trim="login"
            placeholder="Введите логин"
          />
          <i></i>
        </div>
        <div class="form-control">
          <input
            type="password"
            id="password"
            v-model.trim="password"
            placeholder="Введите пароль"
          />
        </div>
        <p v-if="!formIsValid" class="error-text">
          Пожалуйста, введите действительный логин и пароль (должно быть не
          менее 6 символов).
        </p>

        <div class="button-container">
          <button class="training-videos">Обучающие ролики</button>
          <button class="login-button" type="submit">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ColoredFirstLetters from "./ui/ColoredFirstLetters.vue";

export default {
  components: {
    ColoredFirstLetters,
  },

  data() {
    return {
      login: "",
      password: "",
      formIsValid: true,
      error: null,
      textContent: "Property Management System",
    };
  },

  setup() {
    const router = useRouter();
    const login = ref("");
    const password = ref("");
    const formIsValid = ref(true);
    const textContent = ref("Property Management System");

    const submitForm = () => {
      if (!login.value.includes("@") || password.value.length < 6) {
        formIsValid.value = false;
        alert("Email/Password is not valid");
        return;
      }
      router.push("/header");
    };

    return {
      login,
      password,
      formIsValid,
      textContent,
      submitForm,
    };
  },
};
</script>

<style scoped>
.back {
  background-image: url("../assets/back.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.card .blur {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 5rem auto;
  max-width: 40rem;
  border: 2px solid #fff;
  background: rgba(251, 253, 255, 0.65);
  max-height: 50%;
  backdrop-filter: blur(15px);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 468px;
  min-height: 412px;

  background: rgba(251, 253, 255, 0.65);
  backdrop-filter: blur(15px);
  font-family: "SF Pro Display", sans-serif;
}
.form-control {
  margin: 1rem 0;
}
.logo {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo img {
  display: block;
  width: 126px;
  padding-bottom: 0.75rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 26.25rem;
  height: 2.5rem;
  padding: 3px 5px;
}
.button-container {
  display: flex;
  justify-content: space-between;
}

.training-videos {
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: "SF Pro Display", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 70px;
}

.login-button {
  background-color: #0066ff;
  color: #ffffff;
  font-family: "SF Pro Display", sans-serif;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 180px;
  height: 48px;
}

.error-text {
  margin: 1rem;
}
</style>
