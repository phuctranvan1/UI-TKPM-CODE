<template>
  <header class="header5" :style="headerStyle">
    <div class="logo-container-parent">
      <div class="logo-container1">
        <a class="logo5" @click="onLOGOTextClick">LOGO</a>
      </div>
      <div class="rectangle-parent83">
        <div class="frame-child131" />
        <div class="search-input3">
          <img class="memorysearch-icon3" alt="" src="/memorysearch.svg" />
        </div>
        <input class="search3" placeholder="Search" type="text" />
      </div>
    </div>
    <div class="user-icons-parent">
      <div class="user-icons">
        <img
          class="twemojiflag-vietnam-icon3"
          loading="lazy"
          alt=""
          src="/twemojiflagvietnam.svg"
        />
      </div>
      <img
        class="material-symbols-lightperson-icon3"
        loading="lazy"
        alt=""
        src="/materialsymbolslightpersonoutline.svg"
      />
      <div class="user-name1">
        <a class="trn-vn-phc3" @click="onTrnVnPhcClick">Trần Văn Phúc</a>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Header",
    props: {
      frameDivPadding: { type: [Object, Array, String, Number, Boolean] },
      onLOGOTextClick: { type: Function },
      onTrnVnPhcClick: { type: Function },
    },
    computed: {
      headerStyle(): CSS.Properties {
        return {
          padding: this.frameDivPadding,
        };
      },
    },
  });
</script>
<style scoped>
  .logo5 {
    text-decoration: none;
    align-self: stretch;
    height: 34.9px;
    position: relative;
    color: inherit;
    display: inline-block;
    flex-shrink: 0;
    white-space: nowrap;
    z-index: 1;
  }
  .logo-container1 {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-5) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child131 {
    height: 64px;
    width: 848px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .memorysearch-icon3 {
    width: 34.3px;
    height: 33px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .search-input3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .search3 {
    width: 110.3px;
    border: none;
    outline: none;
    font-family: var(--font-inter);
    font-size: var(--font-size-13xl);
    background-color: transparent;
    height: 39px;
    position: relative;
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    padding: 0;
    z-index: 1;
  }
  .rectangle-parent83 {
    flex: 1;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-10xl) var(--padding-xs);
    box-sizing: border-box;
    gap: var(--gap-base-7);
    max-width: 100%;
  }
  .logo-container-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .twemojiflag-vietnam-icon3 {
    align-self: stretch;
    height: 40px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .user-icons {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
  }
  .material-symbols-lightperson-icon3 {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .trn-vn-phc3 {
    text-decoration: none;
    position: relative;
    color: inherit;
    white-space: nowrap;
  }
  .user-name1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .user-icons-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .header5 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-smi) var(--padding-10xs) 0px;
    box-sizing: border-box;
    gap: var(--gap-42xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 700px) {
    .header5 {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 450px) {
    .header5 {
      gap: var(--gap-mini);
    }
  }
</style>
