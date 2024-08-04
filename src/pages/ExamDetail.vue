<template>
  <div class="examdetail">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="ngn-hng-thi-frame">
      <div class="ngn-hng5">Ngân hàng đề thi</div>
    </div>
    <div class="chi-tit-thi-wrapper">
      <div class="chi-tit">Chi tiết đề thi</div>
    </div>
    <div class="examdetail-inner">
      <div class="rectangle-parent21">
        <div class="frame-child40" />
        <b class="tiu">Tiêu đề:</b>
        <b class="tiu">Môn:</b>
        <div class="exam-info">
          <b class="tiu">Thời lượng:</b>
          <b class="lng-cu-hi">Lượng câu hỏi:</b>
          <b class="phm-vi-kin">Phạm vi kiến thức:</b>
        </div>
        <div class="frame-wrapper4">
          <div class="frame-parent5">
            <div class="export-button-parent" @click="onGroupContainerClick">
              <div class="export-button" />
              <b class="xut-file">Xuất file</b>
            </div>
            <div class="lock-button-parent">
              <div class="lock-button" />
              <b class="kha">Khóa đề</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="epsetting-group">
      <img
        class="epsetting-icon12"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="frame-child41" alt="" src="/group-35.svg" />
      <img
        class="arrowleftcirclefill-icon6"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon11"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon12"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon12"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <img
        class="icoutline-folder-icon12"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "ExamDetail",
    components: { Header },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
      onGroupContainerClick() {
        this.$router.push("/exportexam");
      },
      onEpsettingClick() {
        this.$router.push("/settings");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/exam");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng5 {
    width: 378px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .ngn-hng-thi-frame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .chi-tit {
    position: relative;
    z-index: 2;
  }
  .chi-tit-thi-wrapper {
    width: 749px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child40 {
    width: 1263px;
    height: 715px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .tiu {
    width: 233px;
    position: relative;
    display: inline-block;
    z-index: 3;
  }
  .lng-cu-hi {
    position: relative;
    z-index: 3;
  }
  .phm-vi-kin {
    align-self: stretch;
    position: relative;
    z-index: 3;
  }
  .exam-info {
    width: 326px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-28xl);
    box-sizing: border-box;
    gap: var(--gap-51xl);
    min-height: 304px;
    max-width: 100%;
  }
  .export-button {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
  }
  .xut-file {
    position: absolute;
    top: 13px;
    left: 58px;
    display: inline-block;
    width: 155px;
    height: 56px;
    z-index: 1;
  }
  .export-button-parent {
    height: 69px;
    flex: 1;
    position: relative;
    min-width: 140px;
    cursor: pointer;
    z-index: 1;
  }
  .lock-button {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .kha {
    position: absolute;
    top: 12px;
    left: 64px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 4;
  }
  .lock-button-parent {
    height: 56px;
    flex: 1;
    position: relative;
    min-width: 142px;
  }
  .frame-parent5 {
    width: 463px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xl);
    max-width: 100%;
  }
  .frame-wrapper4 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-28xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-5xl);
  }
  .rectangle-parent21 {
    width: 1263px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-mini) var(--padding-13xl);
    gap: var(--gap-51xl);
    max-width: 100%;
    z-index: 2;
  }
  .examdetail-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .epsetting-icon12 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .frame-child41 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon6 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon11 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon12 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon12 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-icon12 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .epsetting-group {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .examdetail {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-19xl);
    box-sizing: border-box;
    gap: 32.7px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .ngn-hng5 {
      font-size: var(--font-size-13xl);
    }

    .chi-tit {
      font-size: var(--font-size-13xl);
    }

    .tiu {
      font-size: var(--font-size-7xl);
    }

    .lng-cu-hi {
      font-size: var(--font-size-7xl);
    }

    .phm-vi-kin {
      font-size: var(--font-size-7xl);
    }

    .rectangle-parent21 {
      padding-bottom: var(--padding-2xl);
      box-sizing: border-box;
    }

    .examdetail {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .ngn-hng-thi-frame {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }

    .frame-wrapper4 {
      padding-left: var(--padding-4xl);
      padding-right: var(--padding-4xl);
      box-sizing: border-box;
    }

    .rectangle-parent21 {
      gap: var(--gap-16xl);
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng5 {
      font-size: var(--font-size-5xl);
    }

    .ngn-hng-thi-frame {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .chi-tit {
      font-size: var(--font-size-5xl);
    }

    .tiu {
      font-size: var(--font-size-lgi);
    }

    .lng-cu-hi {
      font-size: var(--font-size-lgi);
    }

    .phm-vi-kin {
      font-size: var(--font-size-lgi);
    }

    .exam-info {
      gap: var(--gap-16xl);
    }

    .xut-file {
      font-size: var(--font-size-lgi);
    }

    .kha {
      font-size: var(--font-size-lgi);
    }

    .rectangle-parent21 {
      gap: var(--gap-mid);
    }
  }
</style>
