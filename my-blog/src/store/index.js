import { createStore } from "vuex";

// firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authstate: false,
  },
  mutations: {
    setUser(state, pload) {
      state.user = pload;
      console.log("change in user state", state.user);
    },
    authisready(state, pload) {
      state.authstate = pload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");

      // async function time
      const promise = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(promise);
      if (promise) {
        context.commit("setUser", promise.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async signin(context, { email, password }) {
      const promise = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logging in");
      if (promise) {
        context.commit("setUser", promise.user);
      } else {
        console.log("error with signin");
      }
    },
    async logout(context) {
      console.log("logging out");
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("authisready", true);
  store.commit("setUser", user);
  unsub();
});
// export the store
export default store;
