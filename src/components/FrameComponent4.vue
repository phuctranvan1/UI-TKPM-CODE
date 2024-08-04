<template>
  <div class="frame-wrapper7">
    <div class="frame-parent12">
      <div class="ngn-hng-cu-hi-container">
        <h2 class="ngn-hng-cu9">Ngân hàng câu hỏi</h2>
      </div>
      <div class="frame-parent13">
        <div class="arrowleftcirclefill-parent1">
          <img
            class="arrowleftcirclefill-icon16"
            loading="lazy"
            alt=""
            src="/arrowleftcirclefill.svg"
            @click="onArrowLeftCircleFillClick"
          />
          <div class="cu-hi-wrapper">
            <h2 class="cu-hi10">Câu hỏi ....</h2>
          </div>
        </div>
        <div class="frame-wrapper8">
          <div class="divider-parent">
            <div class="divider2" />
            <h3 class="to-cu-hi">Tạo câu hỏi tương tự</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent4",
    methods: {
      onArrowLeftCircleFillClick() {
        this.$router.push("/question");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng-cu9 {
    margin: 0;
    width: 378px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .ngn-hng-cu-hi-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-10xl) 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .arrowleftcirclefill-icon16 {
    height: 61px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .cu-hi10 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .cu-hi-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .arrowleftcirclefill-parent1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .divider2 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro);
    width: 590px;
    z-index: 2;
  }
  .to-cu-hi {
    margin: 0;
    position: absolute;
    top: 11px;
    left: 115px;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    width: 525px;
    height: 44px;
    z-index: 3;
  }
  .divider-parent {
    height: 65px;
    flex: 1;
    position: relative;
    max-width: 100%;
  }
  .frame-wrapper8 {
    width: 640px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-17xl);
  }
  .frame-parent13 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frame-parent12 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl);
    max-width: 100%;
  }
  .frame-wrapper7 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-lg) 0px var(--padding-4xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 1050px) {
    .frame-parent13 {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 750px) {
    .ngn-hng-cu9 {
      font-size: var(--font-size-13xl);
    }

    .cu-hi10 {
      font-size: var(--font-size-13xl);
    }

    .to-cu-hi {
      font-size: var(--font-size-10xl);
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu9 {
      font-size: var(--font-size-5xl);
    }

    .cu-hi10 {
      font-size: var(--font-size-5xl);
    }

    .to-cu-hi {
      font-size: var(--font-size-3xl);
    }
  }
</style>
