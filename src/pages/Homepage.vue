<template>
  <div class="homepage">
    <header frameDivPadding="unset" :onTrnVnPhcClick="onTrnVnPhcClick" />
    <main class="navigation-parent">
      <div class="navigation3">
        <div class="nav-items">
          <div class="home-item">
            <img class="home-item-child" alt="" src="/ellipse-11.svg" />
            <img
              class="icomoon-freehome3-icon4"
              loading="lazy"
              alt=""
              src="/icomoonfreehome3.svg"
            />
          </div>
        </div>
        <div class="questions-item">
          <div class="questions-options">
            <div class="wpfask-question-parent">
              <img
                class="wpfask-question-icon4"
                loading="lazy"
                alt=""
                src="/wpfaskquestion.svg"
                @click="onWpfaskQuestionClick"
              />
              <img
                class="icoutline-folder-icon4"
                loading="lazy"
                alt=""
                src="/icoutlinefolder.svg"
                @click="onIcoutlineFolderClick"
              />
            </div>
            <div class="stats-settings">
              <div class="stats-item">
                <img
                  class="wpfstatistics-icon4"
                  loading="lazy"
                  alt=""
                  src="/wpfstatistics.svg"
                  @click="onWpfstatisticsClick"
                />
              </div>
              <img
                class="wpfask-question-icon4"
                loading="lazy"
                alt=""
                src="/phbookbold.svg"
                @click="onPhbookBoldClick"
              />
            </div>
            <img
              class="icoutline-folder-icon4"
              loading="lazy"
              alt=""
              src="/epsetting.svg"
              @click="onEpsettingClick"
            />
          </div>
        </div>
      </div>
      <div class="title-bar">
        <div class="title-bar-child" />
        <div class="mn-hnh-chnh">Màn hình chính</div>
        <div class="wpfask-question-group" @click="onWpfaskQuestionClick">
          <img
            class="wpfask-question-icon5"
            loading="lazy"
            alt=""
            src="/wpfaskquestion-1.svg"
          />
          <div class="ci-t">Ngân hàng câu hỏi</div>
        </div>
        <div class="icoutline-folder-group" @click="onIcoutlineFolderClick">
          <img
            class="icoutline-folder-icon5"
            loading="lazy"
            alt=""
            src="/wpfaskquestion-11.svg"
          />
          <div class="ngn-hng1">Ngân hàng đề</div>
        </div>
        <div class="wpfstatistics-parent" @click="onWpfstatisticsClick">
          <img
            class="wpfstatistics-icon5"
            loading="lazy"
            alt=""
            src="/wpfaskquestion-12.svg"
          />
          <div class="thng-k">Thống kê</div>
        </div>
        <div class="ci-t-parent" @click="onEpsettingClick">
          <div class="ci-t">Cài đặt</div>
          <img
            class="wpfask-question-icon5"
            loading="lazy"
            alt=""
            src="/epsetting-1.svg"
          />
        </div>
        <div class="danh-sch-mn-hc-parent" @click="onPhbookBoldClick">
          <div class="danh-sch-mn">Danh sách môn học</div>
          <img
            class="phbook-bold-icon3"
            loading="lazy"
            alt=""
            src="/epsetting-11.svg"
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "Homepage",
    components: { Header },
    methods: {
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onIcoutlineFolderClick() {
        this.$router.push("/exam");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
      onEpsettingClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .home-item-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .icomoon-freehome3-icon4 {
    position: absolute;
    top: 15.5px;
    left: 84px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .home-item {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -45px;
  }
  .nav-items {
    height: 115.5px;
    width: 198.4px;
    margin: 0 !important;
    position: absolute;
    top: -1.5px;
    right: -89.4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .wpfask-question-icon4 {
    width: 70px;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-icon4 {
    width: 70px;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
  }
  .wpfask-question-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-25xl);
  }
  .wpfstatistics-icon4 {
    height: 70px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .stats-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .stats-settings {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .questions-options {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-42xl);
  }
  .questions-item {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 134px 0px 0px;
  }
  .navigation3 {
    height: 876px;
    width: 73px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .title-bar-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
    display: none;
  }
  .mn-hnh-chnh {
    position: absolute;
    top: 40px;
    left: 502.9px;
    font-size: var(--font-size-21xl);
    display: inline-block;
    width: 304px;
    height: 49px;
    z-index: 2;
  }
  .wpfask-question-icon5 {
    position: absolute;
    top: 0px;
    left: 95px;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }
  .wpfask-question-group {
    position: absolute;
    top: 159px;
    left: 64.9px;
    width: 332px;
    height: 261px;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-icon5 {
    position: absolute;
    top: 0px;
    left: 29px;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }
  .ngn-hng1 {
    position: absolute;
    top: 189px;
    left: 0px;
    display: inline-block;
    width: 332px;
    height: 71px;
  }
  .icoutline-folder-group {
    position: absolute;
    top: 159px;
    left: 539.9px;
    width: 332px;
    height: 260px;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon5 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }
  .thng-k {
    position: absolute;
    top: 189px;
    left: 9px;
    display: inline-block;
    width: 264px;
    height: 71px;
  }
  .wpfstatistics-parent {
    position: absolute;
    top: 159px;
    left: 976.9px;
    width: 273px;
    height: 260px;
    cursor: pointer;
    z-index: 2;
  }
  .ci-t {
    position: absolute;
    top: 190px;
    left: 0px;
    display: inline-block;
    width: 332px;
    height: 71px;
  }
  .ci-t-parent {
    position: absolute;
    top: 494px;
    left: 64.9px;
    width: 332px;
    height: 261px;
    cursor: pointer;
    z-index: 2;
    text-align: center;
  }
  .danh-sch-mn {
    position: absolute;
    top: 189px;
    left: 0px;
    display: inline-block;
    width: 399px;
    height: 71px;
  }
  .phbook-bold-icon3 {
    position: absolute;
    top: 0px;
    left: 96px;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }
  .danh-sch-mn-hc-parent {
    position: absolute;
    top: 494px;
    left: 472.9px;
    width: 399px;
    height: 260px;
    cursor: pointer;
    z-index: 2;
  }
  .title-bar {
    height: 910px;
    flex: 1;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    max-width: calc(100% - 102px);
    z-index: 1;
  }
  .navigation-parent {
    margin-right: -21px;
    width: 1486px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.5px var(--padding-12xs) 0px var(--padding-62xl);
    box-sizing: border-box;
    gap: var(--gap-10xl-1);
    max-width: 106%;
    flex-shrink: 0;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .homepage {
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
    gap: 20.5px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .navigation-parent {
      padding-left: var(--padding-21xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .questions-item {
      padding-top: var(--padding-68xl);
      box-sizing: border-box;
    }

    .navigation3 {
      display: none;
    }

    .mn-hnh-chnh {
      font-size: var(--font-size-13xl);
    }

    .ngn-hng1 {
      font-size: var(--font-size-10xl);
    }

    .thng-k {
      font-size: var(--font-size-10xl);
    }

    .ci-t {
      font-size: var(--font-size-10xl);
    }

    .danh-sch-mn {
      font-size: var(--font-size-10xl);
    }

    .title-bar {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .questions-item {
      padding-top: var(--padding-38xl);
      box-sizing: border-box;
    }

    .mn-hnh-chnh {
      font-size: var(--font-size-5xl);
    }

    .ngn-hng1 {
      font-size: var(--font-size-3xl);
    }

    .thng-k {
      font-size: var(--font-size-3xl);
    }

    .ci-t {
      font-size: var(--font-size-3xl);
    }

    .danh-sch-mn {
      font-size: var(--font-size-3xl);
    }
  }
</style>
