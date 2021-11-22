<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div>
      <span>Logged in as...</span>
      <button @click="handleClick">Logout</button>
    </div>
    <!-- for logged out users -->
    <div>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const handleClick = () => {
      store.dispatch('logout')
    }

    return { handleClick }
  }
}
</script>