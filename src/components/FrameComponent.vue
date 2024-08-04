<template>
  <div class="exam-inner">
    <header class="frame-header">
      <div class="frame-parent14">
        <div class="logo-frame">
          <a class="logo6" @click="onLOGOTextClick">LOGO</a>
        </div>
        <div class="rectangle-parent84" :style="frameDivStyle">
          <div class="frame-child132" />
          <div class="memorysearch-wrapper" :style="frameDiv1Style">
            <img class="memorysearch-icon4" alt="" src="/memorysearch.svg" />
          </div>
          <input
            class="search4"
            type="text"
            :placeholder="searchPlaceholder12"
          />
        </div>
      </div>
      <div class="frame-parent15">
        <div class="twemojiflag-vietnam-wrapper">
          <img
            class="twemojiflag-vietnam-icon4"
            loading="lazy"
            alt=""
            src="/twemojiflagvietnam.svg"
          />
        </div>
        <img
          class="material-symbols-lightperson-icon4"
          loading="lazy"
          alt=""
          src="/materialsymbolslightpersonoutline.svg"
        />
        <div class="trn-vn-phc-wrapper">
          <a class="trn-vn-phc4" @click="onTrnVnPhcClick">Trần Văn Phúc</a>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "FrameComponent",
    props: {
      searchPlaceholder: { type: String },
      searchPlaceholder1: { type: String },
      searchPlaceholder2: { type: String },
      searchPlaceholder3: { type: String },
      searchPlaceholder4: { type: String },
      searchPlaceholder5: { type: String },
      searchPlaceholder6: { type: String },
      searchPlaceholder7: { type: String },
      searchPlaceholder8: { type: String },
      searchPlaceholder9: { type: String },
      searchPlaceholder10: { type: String },
      searchPlaceholder11: { type: String },
      searchPlaceholder12: { type: String },
      frameDivHeight: { type: [Object, Array, String, Number, Boolean] },
      frameDivMinWidth: { type: [Object, Array, String, Number, Boolean] },
      frameDivHeight1: { type: [Object, Array, String, Number, Boolean] },
      frameDivWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
    },
    computed: {
      frameDivStyle(): CSS.Properties {
        return {
          height: this.frameDivHeight,
          minWidth: this.frameDivMinWidth,
        };
      },
      frameDiv1Style(): CSS.Properties {
        return {
          height: this.frameDivHeight1,
          width: this.frameDivWidth,
        };
      },
    },
  });
</script>
<style scoped>
  .logo6 {
    text-decoration: none;
    align-self: stretch;
    height: 34.9px;
    position: relative;
    color: inherit;
    display: inline-block;
    flex-shrink: 0;
    white-space: nowrap;
    cursor: pointer;
    z-index: 1;
  }
  .logo-frame {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-5) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child132 {
    height: 64px;
    width: 848px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .memorysearch-icon4 {
    width: 34.3px;
    height: 33px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .memorysearch-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .search4 {
    border: none;
    outline: none;
    font-family: var(--font-inter);
    font-size: var(--font-size-13xl);
    background-color: transparent;
    height: 39px;
    width: 110px;
    position: relative;
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
    padding: 0;
    z-index: 1;
  }
  .rectangle-parent84 {
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
  .frame-parent14 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .twemojiflag-vietnam-icon4 {
    align-self: stretch;
    height: 40px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .twemojiflag-vietnam-wrapper {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
  }
  .material-symbols-lightperson-icon4 {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .trn-vn-phc4 {
    text-decoration: none;
    position: relative;
    color: inherit;
    white-space: nowrap;
    cursor: pointer;
  }
  .trn-vn-phc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .frame-parent15 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .frame-header {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-42xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .exam-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px var(--padding-lg);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 725px) {
    .frame-header {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 450px) {
    .frame-header {
      gap: var(--gap-mini);
    }
  }
</style>
