<template>
  <div class="add-question-button-wrapper">
    <div class="add-question-button">
      <img
        class="arrowleftcirclefill-icon15"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <div class="thm-nhm-cu-hi-wrapper">
        <h2 class="thm-nhm-cu1">{{thmNhmCuHi}}</h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent3",
    props: {
      thmNhmCuHi: { type: String },
    },
    methods: {
      onArrowLeftCircleFillClick() {
        this.$router.push("/addquestion");
      },
    },
  });
</script>
<style scoped>
  .arrowleftcirclefill-icon15 {
    height: 61px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .thm-nhm-cu1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .thm-nhm-cu-hi-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .add-question-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .add-question-button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 850px) {
    .thm-nhm-cu1 {
      font-size: var(--font-size-13xl);
    }
  }
  @media screen and (max-width: 675px) {
    .add-question-button {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .thm-nhm-cu1 {
      font-size: var(--font-size-5xl);
    }
  }
</style>
