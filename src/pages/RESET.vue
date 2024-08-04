<template>
  <div class="reset">
    <img
      class="arrowleftcirclefill-icon9"
      loading="lazy"
      alt=""
      src="/arrowleftcirclefill1.svg"
      @click="onArrowLeftCircleFillClick"
    />
    <section class="new-password-input-wrapper"><NewPasswordInput /></section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import NewPasswordInput from "../components/NewPasswordInput.vue";

  export default defineComponent({
    name: "RESET",
    components: { NewPasswordInput },
    methods: {
      onArrowLeftCircleFillClick() {
        // Please sync "Forget Password" to the project
      },
    },
  });
</script>
<style scoped>
  .arrowleftcirclefill-icon9 {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
  }
  .new-password-input-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .reset {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-38xl) var(--padding-62xl) var(--padding-165xl);
    box-sizing: border-box;
    gap: var(--gap-50xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 850px) {
    .reset {
      gap: var(--gap-15xl);
      padding-left: var(--padding-21xl);
      padding-right: var(--padding-21xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .reset {
      gap: var(--gap-mid);
    }
  }
</style>
