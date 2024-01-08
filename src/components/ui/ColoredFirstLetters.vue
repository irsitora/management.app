<template>
  <span>
    <span v-for="(word, index) in words" :key="index">
      <span>
        <span :style="{ color: firstLetterColor, fontWeight: 'bold' }">{{
          word.charAt(0)
        }}</span>
        <span :style="{ color: otherLettersColor, fontWeight: 'bold' }">{{
          word.slice(1)
        }}</span>
      </span>
      <template v-if="index !== words.length - 1">&nbsp;</template>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    firstLetterColor: {
      type: String,
      default: "#003D99", // Цвет для первой буквы
    },
    otherLettersColor: {
      type: String,
      default: "#08162B", // Цвет для остальных букв
    },
  },
  computed: {
    words() {
      return this.content.split(" "); // Разделение текста на слова по пробелам
    },
  },
};
</script>

<style scoped>
/* Здесь можете добавить другие стили по вашему усмотрению */
</style>
