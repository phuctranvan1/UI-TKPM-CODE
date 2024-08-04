<template>
  <div class="header3">
    <header class="content5">
      <div class="top-content1">
        <div class="logo-wrapper">
          <a class="logo4" @click="onLOGOTextClick">LOGO</a>
        </div>
        <div class="search-bar1">
          <div class="search-bar-child" />
          <div class="search-input2">
            <img class="memorysearch-icon2" alt="" src="/memorysearch.svg" />
          </div>
          <input class="search2" placeholder="Search" type="text" />
        </div>
      </div>
      <div class="profile1">
        <div class="profile-info1">
          <img
            class="twemojiflag-vietnam-icon2"
            loading="lazy"
            alt=""
            src="/twemojiflagvietnam.svg"
          />
        </div>
        <img
          class="material-symbols-lightperson-icon2"
          loading="lazy"
          alt=""
          src="/materialsymbolslightpersonoutline.svg"
        />
        <div class="profile-name1">
          <a class="trn-vn-phc2" @click="onTrnVnPhcClick">Trần Văn Phúc</a>
        </div>
      </div>
    </header>
    <div class="title">
      <h2 class="ngn-hng-cu8">{{ngnHngCuHi}}</h2>
    </div>
    <div class="title1" :style="titleStyle">
      <h2 class="sa-nhm-cu">{{saNhmCuHi}}</h2>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Header1",
    props: {
      ngnHngCuHi: { type: String },
      saNhmCuHi: { type: String },
      saNhmCuWidth: { type: [Object, Array, String, Number, Boolean] },
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
      titleStyle(): CSS.Properties {
        return {
          width: this.saNhmCuWidth,
        };
      },
    },
  });
</script>
<style scoped>
  .logo4 {
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
  .logo-wrapper {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-5) 0px 0px;
    box-sizing: border-box;
  }
  .search-bar-child {
    height: 64px;
    width: 848px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .memorysearch-icon2 {
    width: 34.3px;
    height: 33px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .search-input2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .search2 {
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
  .search-bar1 {
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
  .top-content1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .twemojiflag-vietnam-icon2 {
    align-self: stretch;
    height: 40px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .profile-info1 {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
  }
  .material-symbols-lightperson-icon2 {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .trn-vn-phc2 {
    text-decoration: none;
    position: relative;
    color: inherit;
    white-space: nowrap;
    cursor: pointer;
  }
  .profile-name1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .profile1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .content5 {
    align-self: stretch;
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
  .ngn-hng-cu8 {
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
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-127xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .sa-nhm-cu {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .title1 {
    width: 834px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .header3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl-5);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .ngn-hng-cu8 {
      font-size: var(--font-size-13xl);
    }

    .sa-nhm-cu {
      font-size: var(--font-size-13xl);
    }
  }
  @media screen and (max-width: 675px) {
    .content5 {
      gap: var(--gap-11xl);
    }

    .title {
      padding-left: var(--padding-54xl);
      box-sizing: border-box;
    }

    .header3 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .content5 {
      gap: var(--gap-mini);
    }

    .ngn-hng-cu8 {
      font-size: var(--font-size-5xl);
    }

    .title {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .sa-nhm-cu {
      font-size: var(--font-size-5xl);
    }
  }
</style>
