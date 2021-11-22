<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const store = useStore()

    const handleSubmit = () => {
      store.dispatch('signup', { email, password })
    }

    return { handleSubmit, email, password }
  }
}
</script>