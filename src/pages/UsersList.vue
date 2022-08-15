<template>
  <button @click="onConfirm">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    onConfirm() {
      this.$router.back('/teams')
    }
  },
  // Аналогично варианту левее, только в компоненте
  beforeRouteEnter (to, from, next) {
    console.log('Локально в хуке компонента')
    console.log(to, from, next)
    next()
  },
  // Также есть хук, когда роут обновляется
  beforeRouteUpdate(to, from, next) {
    console.log(to, from, next)
    // Продолжаем или отклоняем путь роута при обнолвлении
  },
  // Хук, когда мы покидаем компонент/роут
  // Пример. Есть форма, где юзер случайно нажал на другую кнопку
  // Все данные удалились. Во избежание этого мы можем выдать ошибку
  // или предупреждение
  beforeRouteLeave(_, _2, next) {
    const isSaved = false

    if (isSaved) next()
    else {
      const isUserWantsToLeave = confirm('Your data has not been saved. Do you want to leave?')
      next(isUserWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>