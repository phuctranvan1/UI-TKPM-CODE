<template>
  <div class="login-screen"><NameContainer /></div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import NameContainer from "../components/NameContainer.vue";

  export default defineComponent({
    name: "LoginScreen",
    components: { NameContainer },
  });
</script>
<style scoped>
  .login-screen {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 226px var(--padding-xl) var(--padding-165xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
</style>
