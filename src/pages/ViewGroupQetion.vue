<template>
  <div class="viewgroupqetion">
    <main class="icoutline-folder-parent4">
      <img
        class="icoutline-folder-icon18"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon18"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon17"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <div class="content3">
        <div class="top-content">
          <img class="top-content-child" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon18"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon18"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <section class="bottom-content">
        <div class="bottom-content-child" />
        <div class="question-bank">
          <h2 class="ngn-hng-cu5">Ngân hàng câu hỏi</h2>
        </div>
        <div class="arrowleftcirclefill-group">
          <img
            class="arrowleftcirclefill-icon10"
            loading="lazy"
            alt=""
            src="/arrowleftcirclefill.svg"
            @click="onArrowLeftCircleFillClick"
          />
          <h2 class="nhm-cu-hi">Nhóm câu hỏi ...</h2>
          <img class="frame-child75" loading="lazy" alt="" src="/group-4.svg" />
        </div>
      </section>
      <img
        class="phbook-bold-icon10"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onEpsettingClick"
      />
    </main>
    <header
      frameDivPadding="0px 2px 12px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="document">
      <div class="ti-liu1">Tài liệu ....</div>
    </div>
    <MainContent />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import MainContent from "../components/MainContent.vue";

  export default defineComponent({
    name: "ViewGroupQetion",
    components: { Header, MainContent },
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
      onEpsettingClick() {
        this.$router.push("/subjectlist");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/question");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon18 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon18 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon17 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .top-content-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon18 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .top-content {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .content3 {
    position: absolute;
    top: 115.5px;
    left: 46px;
    width: 197.4px;
    height: 115.5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .wpfstatistics-icon18 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .bottom-content-child {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng-cu5 {
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
  .question-bank {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .arrowleftcirclefill-icon10 {
    position: absolute;
    top: 0px;
    left: 22px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .nhm-cu-hi {
    margin: 0;
    position: absolute;
    top: 8px;
    left: 112px;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .frame-child75 {
    position: absolute;
    top: 89px;
    left: 0px;
    width: 1263px;
    height: 715px;
    z-index: 3;
  }
  .arrowleftcirclefill-group {
    align-self: stretch;
    height: 804px;
    position: relative;
  }
  .bottom-content {
    position: absolute;
    top: 0px;
    left: 183.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 1302.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xl);
    box-sizing: border-box;
    gap: var(--gap-6xl);
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .phbook-bold-icon10 {
    position: absolute;
    top: 512px;
    left: 87px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-parent4 {
    width: 1486px;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    bottom: 16px;
    left: -46px;
    z-index: 1;
  }
  .ti-liu1 {
    width: 257px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 4;
  }
  .document {
    width: 565px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .viewgroupqetion {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-96xl);
    box-sizing: border-box;
    gap: 198px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 900px) {
    .ngn-hng-cu5 {
      font-size: var(--font-size-13xl);
    }

    .nhm-cu-hi {
      font-size: var(--font-size-13xl);
    }

    .viewgroupqetion {
      gap: 99px;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu5 {
      font-size: var(--font-size-5xl);
    }

    .nhm-cu-hi {
      font-size: var(--font-size-5xl);
    }

    .ti-liu1 {
      font-size: var(--font-size-lgi);
    }

    .viewgroupqetion {
      gap: 49px;
    }
  }
</style>
