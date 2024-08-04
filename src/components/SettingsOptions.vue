<template>
  <div class="settings-options">
    <div class="frame-parent10">
      <div class="ci-t-wrapper">
        <div class="ci-t1">Cài đặt</div>
      </div>
      <div class="region-settings">
        <div class="language-option">
          <div class="vng-wrapper">
            <div class="vng">Vùng:</div>
          </div>
          <div class="region-selector">
            <div class="region-selector-child" />
          </div>
        </div>
      </div>
      <div class="language-settings">
        <div class="language-option">
          <div class="ngn-ng-wrapper">
            <div class="vng">Ngôn ngữ:</div>
          </div>
          <div class="language-selector">
            <div class="language-selector-child" />
          </div>
        </div>
        <div class="theme-settings">
          <div class="theme-option">
            <div class="mu-giao-din">Màu giao diện:</div>
            <div class="theme-option-child" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SettingsOptions",
  });
</script>
<style scoped>
  .ci-t1 {
    width: 304px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 2;
  }
  .ci-t-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-27xl);
    font-size: var(--font-size-21xl);
  }
  .vng {
    align-self: stretch;
    position: relative;
    flex-shrink: 0;
    z-index: 2;
  }
  .vng-wrapper {
    width: 332px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .region-selector-child {
    margin-left: -213px;
    width: 600px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    flex-shrink: 0;
    max-width: 156%;
    z-index: 3;
  }
  .region-selector {
    height: 52px;
    width: 387px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .region-settings {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .ngn-ng-wrapper {
    width: 332px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .language-selector-child {
    margin-left: -129px;
    width: 567px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    flex-shrink: 0;
    max-width: 130%;
    z-index: 3;
  }
  .language-selector {
    height: 58px;
    width: 438px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .language-option {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 20px;
    max-width: 100%;
  }
  .mu-giao-din {
    height: 71px;
    width: 264px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 2;
  }
  .theme-option-child {
    height: 53px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 341px;
    max-width: 100%;
    z-index: 3;
  }
  .theme-option {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .theme-settings {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-6xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .language-settings {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xl);
    max-width: 100%;
  }
  .frame-parent10 {
    width: 795px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-20xl-5);
    max-width: 100%;
  }
  .settings-options {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 900px) {
    .ci-t1 {
      font-size: var(--font-size-13xl);
    }

    .vng {
      font-size: var(--font-size-10xl);
    }

    .language-option {
      flex-wrap: wrap;
    }

    .mu-giao-din {
      font-size: var(--font-size-10xl);
    }
  }
  @media screen and (max-width: 700px) {
    .theme-option-child {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .ci-t1 {
      font-size: var(--font-size-5xl);
    }

    .vng {
      font-size: var(--font-size-3xl);
    }

    .mu-giao-din {
      font-size: var(--font-size-3xl);
    }
  }
</style>
