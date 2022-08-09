<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  created() {
    // Получаем teamId из параметров роута 
    // Выводится в адресной строке
    const teamId = this.$route.params.teamId;
    // Ищем ту команду в массиве, где ИД команды совпадает с ИД в адресной строке
    const selectedTeam = this.teams.find(team => teamId === team.id);
    // Получаем членов команды (обычный обьект)
    const members = selectedTeam.members;
    // Пустой массив выбранный членов команды
    const selectedMembers = [];

    // Перебираем членов команды, где пушим в наш массив тех,
    // кто совпадает по ИД
    for (const member of members) {
      const selectedUser = this.users.find(user => user.id === member);
      selectedMembers.push(selectedUser);
    }

    // Устанавлеваем значение из других массивов в нашу дату
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>