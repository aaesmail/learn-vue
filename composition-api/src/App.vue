<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastNameInput">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData';

export default {
  components: {
    UserData
  },

  setup() {
    // const userName = ref('Ali Adel');
    // const userAge = ref(22);
    // const user = reactive({
    //   name: 'Ali Adel',
    //   age: 21
    // });
    const uAge = ref(22);

    provide('userAge', uAge);

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    watch([firstName, lastName], (newValues, oldValues) => {
      console.log('Old Name: ', oldValues);
      console.log('New Name: ', newValues);
    });

    const setNewAge = () => {
      uAge.value = 50;
    };

    const setFirstName = event => {
      firstName.value = event.target.value;
    };

    const setLastName = event => {
      lastName.value = event.target.value;
    };

    const setLastNameInput = () => {
      lastName.value = lastNameInput.value.value;
    };

    const fullName = computed(() => firstName.value + ' ' + lastName.value);

    // setTimeout(() => {
    //   // userName.value = 'Ali';
    //   // userAge.value = 25;
    //   user.name = 'Ali';
    //   user.age = 25;
    // }, 2000);

    return {
      // user: user,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      fullName,
      firstName,
      lastName,
      lastNameInput,
      setLastNameInput
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
