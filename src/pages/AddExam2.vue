<template>
  <div class="addexam3">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="ngn-hng-thi-wrapper1">
      <div class="ngn-hng7">Ngân hàng đề thi</div>
    </div>
    <div class="xem-trc-wrapper">
      <div class="xem-trc1">Xem trước</div>
    </div>
    <div class="header-divider">
      <div class="header-divider-child" />
    </div>
    <div class="navigation6">
      <img
        class="epsetting-icon20"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="navigation-child2" alt="" src="/group-39.svg" />
      <img
        class="arrowleftcirclefill-icon12"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon19"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon20"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon20"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <footer class="rectangle-parent40">
        <div class="frame-child78" />
        <div class="export-button-group" @click="onGroupContainerClick">
          <div class="export-button1" />
          <b class="xut-file1">Xuất file</b>
        </div>
        <div class="save-button-parent" @click="onGroupContainerClick1">
          <div class="export-button1" />
          <b class="lu-v-quay">Lưu và quay về</b>
        </div>
        <div class="footer-divider" />
        <b class="tiu2">Tiêu đề:</b>
        <b class="mn6">Môn:</b>
        <b class="thi-lng4">Thời lượng:</b>
        <b class="lng-cu-hi2">Lượng câu hỏi:</b>
        <b class="phm-vi-kin2">Phạm vi kiến thức:</b>
      </footer>
      <img
        class="icoutline-folder-icon20"
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
    name: "AddExam2",
    components: { Header },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
      onEpsettingClick() {
        this.$router.push("/settings");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/addexam2");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onGroupContainerClick() {
        this.$router.push("/exportexam");
      },
      onGroupContainerClick1() {
        this.$router.push("/exam");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng7 {
    width: 378px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .ngn-hng-thi-wrapper1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .xem-trc1 {
    position: relative;
    z-index: 2;
  }
  .xem-trc-wrapper {
    width: 690px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .header-divider-child {
    align-self: stretch;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .header-divider {
    align-self: stretch;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-90xl);
    box-sizing: border-box;
  }
  .epsetting-icon20 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .navigation-child2 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon12 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon19 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon20 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon20 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child78 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .export-button1 {
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
  .xut-file1 {
    position: absolute;
    top: 13px;
    left: 58px;
    display: inline-block;
    width: 155px;
    height: 56px;
    z-index: 1;
  }
  .export-button-group {
    position: absolute;
    top: 640px;
    left: 1035px;
    width: 215px;
    height: 69px;
    cursor: pointer;
    z-index: 3;
    font-size: var(--font-size-5xl);
  }
  .lu-v-quay {
    position: absolute;
    top: 15px;
    left: 20px;
    display: inline-block;
    width: 208px;
    height: 56px;
    z-index: 1;
  }
  .save-button-parent {
    position: absolute;
    top: 640px;
    left: 770px;
    width: 228px;
    height: 71px;
    cursor: pointer;
    z-index: 3;
    font-size: var(--font-size-5xl);
  }
  .footer-divider {
    position: absolute;
    top: 598px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .tiu2 {
    position: absolute;
    top: 20px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .mn6 {
    position: absolute;
    top: 129px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .thi-lng4 {
    position: absolute;
    top: 238px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .lng-cu-hi2 {
    position: absolute;
    top: 347px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .phm-vi-kin2 {
    position: absolute;
    top: 456px;
    left: 16px;
    display: inline-block;
    width: 326px;
    height: 39px;
    z-index: 3;
  }
  .rectangle-parent40 {
    position: absolute;
    top: 173px;
    left: 153px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1263px;
    height: 715px;
    z-index: 2;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .icoutline-folder-icon20 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .navigation6 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .addexam3 {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-136xl);
    box-sizing: border-box;
    gap: var(--gap-12xl-7);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .ngn-hng7 {
      font-size: var(--font-size-13xl);
    }

    .xem-trc1 {
      font-size: var(--font-size-13xl);
    }

    .tiu2 {
      font-size: var(--font-size-7xl);
    }

    .mn6 {
      font-size: var(--font-size-7xl);
    }

    .thi-lng4 {
      font-size: var(--font-size-7xl);
    }

    .lng-cu-hi2 {
      font-size: var(--font-size-7xl);
    }

    .phm-vi-kin2 {
      font-size: var(--font-size-7xl);
    }

    .addexam3 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .ngn-hng-thi-wrapper1 {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng7 {
      font-size: var(--font-size-5xl);
    }

    .ngn-hng-thi-wrapper1 {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .xem-trc1 {
      font-size: var(--font-size-5xl);
    }

    .xut-file1 {
      font-size: var(--font-size-lgi);
    }

    .lu-v-quay {
      font-size: var(--font-size-lgi);
    }

    .tiu2 {
      font-size: var(--font-size-lgi);
    }

    .mn6 {
      font-size: var(--font-size-lgi);
    }

    .thi-lng4 {
      font-size: var(--font-size-lgi);
    }

    .lng-cu-hi2 {
      font-size: var(--font-size-lgi);
    }

    .phm-vi-kin2 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
