<template>
  <form @submit.prevent="handleSubmit">
    <div>points: {{ points }}</div>
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(email.value, password.value)
    }

    const store = useStore()

    const points = computed(() => store.state.points)

    return { handleSubmit, email, password, points }
  }
}
</script>