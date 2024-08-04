<template>
  <div class="settings">
    <header
      frameDivPadding="unset"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <main class="icoutline-folder-container">
      <img
        class="icoutline-folder-icon7"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="icomoon-freehome3-icon6"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon7"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon7"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <img
        class="phbook-bold-icon4"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onPhbookBoldClick"
      />
      <div class="frame-wrapper">
        <div class="vector-parent">
          <img class="ellipse-icon" alt="" src="/ellipse-1.svg" />
          <img
            class="epsetting-icon7"
            loading="lazy"
            alt=""
            src="/epsetting.svg"
          />
        </div>
      </div>
      <section class="frame-section">
        <div class="frame-child22" />
        <SettingsOptions />
        <div class="account-actions">
          <div class="rectangle-parent10" @click="onGroupContainerClick">
            <div class="frame-child23" />
            <div class="i-mt-khu">Đổi mật khẩu</div>
          </div>
          <div class="rectangle-parent11" @click="onGroupContainerClick1">
            <div class="frame-child23" />
            <div class="i-mt-khu">Đăng xuất</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import SettingsOptions from "../components/SettingsOptions.vue";

  export default defineComponent({
    name: "Settings",
    components: { Header, SettingsOptions },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
      onIcoutlineFolderClick() {
        this.$router.push("/exam");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
      onGroupContainerClick() {
        // Please sync "ChangePass" to the project
      },
      onGroupContainerClick1() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon7 {
    position: absolute;
    top: 248px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon6 {
    position: absolute;
    top: 14px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon7 {
    position: absolute;
    top: 134px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon7 {
    position: absolute;
    top: 379px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .phbook-bold-icon4 {
    position: absolute;
    top: 494px;
    left: 81px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .ellipse-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .epsetting-icon7 {
    position: absolute;
    top: 26.5px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .vector-parent {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -45px;
  }
  .frame-wrapper {
    position: absolute;
    top: 779.5px;
    left: 45px;
    width: 198.4px;
    height: 115.5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-child22 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .frame-child23 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 27px;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro);
    width: 277px;
  }
  .i-mt-khu {
    position: absolute;
    top: 35px;
    left: 0px;
    display: inline-block;
    width: 332px;
    height: 71px;
    z-index: 1;
  }
  .rectangle-parent10 {
    height: 109px;
    flex: 1;
    position: relative;
    min-width: 216px;
    max-width: 100%;
    cursor: pointer;
    z-index: 2;
  }
  .rectangle-parent11 {
    height: 109px;
    flex: 1;
    position: relative;
    min-width: 216px;
    max-width: 100%;
    cursor: pointer;
    z-index: 2;
    margin-left: -9px;
  }
  .account-actions {
    width: 655px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .frame-section {
    position: absolute;
    top: 0px;
    left: 183.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 1301.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-21xl) 68px 101px var(--padding-38xl);
    box-sizing: border-box;
    gap: 321px;
    max-width: 100%;
    z-index: 1;
    text-align: center;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .icoutline-folder-container {
    margin-right: -21px;
    width: 1486px;
    height: 910px;
    position: relative;
    max-width: 106%;
    flex-shrink: 0;
    z-index: 1;
  }
  .settings {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-xl) var(--padding-base)
      var(--padding-lg);
    box-sizing: border-box;
    gap: var(--gap-3xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 900px) {
    .i-mt-khu {
      font-size: var(--font-size-10xl);
    }

    .icoutline-folder-container {
      height: auto;
      min-height: 910;
    }

    .settings {
      height: auto;
    }
  }
  @media screen and (max-width: 450px) {
    .i-mt-khu {
      font-size: var(--font-size-3xl);
    }

    .rectangle-parent11 {
      margin-left: 0;
    }
  }
</style>
