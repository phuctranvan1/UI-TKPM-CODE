<template>
  <div class="editexam3">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="exam-bank-preview">
      <div class="ngn-hng6">Ngân hàng đề thi</div>
    </div>
    <div class="exam-bank-preview1">
      <div class="xem-trc">Xem trước</div>
    </div>
    <div class="horizontal-rule">
      <div class="horizontal-rule-child" />
    </div>
    <div class="navigation5">
      <img
        class="epsetting-icon19"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onLOGOTextClick"
      />
      <img class="navigation-child1" alt="" src="/group-38.svg" />
      <img
        class="arrowleftcirclefill-icon11"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon18"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon19"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon19"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <footer class="rectangle-parent39">
        <div class="frame-child76" />
        <div class="save-background-parent">
          <div class="save-background" @click="onSaveBackgroundClick" />
          <b class="lu4" @click="onSaveBackgroundClick">Lưu</b>
        </div>
        <div class="frame-child77" />
        <b class="tiu1">Tiêu đề:</b>
        <b class="mn5">Môn:</b>
        <b class="thi-lng3">Thời lượng:</b>
        <b class="lng-cu-hi1">Lượng câu hỏi:</b>
        <b class="phm-vi-kin1">Phạm vi kiến thức:</b>
      </footer>
      <img
        class="icoutline-folder-icon19"
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
    name: "EditExam2",
    components: { Header },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onTrnVnPhcClick() {
        this.$router.push("/personal-info");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/editexam2");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onSaveBackgroundClick() {
        this.$router.push("/exam");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng6 {
    width: 378px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .exam-bank-preview {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .xem-trc {
    position: relative;
    z-index: 2;
  }
  .exam-bank-preview1 {
    width: 690px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .horizontal-rule-child {
    align-self: stretch;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .horizontal-rule {
    align-self: stretch;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-90xl);
    box-sizing: border-box;
  }
  .epsetting-icon19 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .navigation-child1 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon11 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon18 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon19 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon19 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child76 {
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
  .save-background {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 215px;
    cursor: pointer;
    z-index: 3;
  }
  .lu4 {
    position: absolute;
    top: 13px;
    left: 79px;
    display: inline-block;
    width: 155px;
    height: 29px;
    cursor: pointer;
    z-index: 4;
  }
  .save-background-parent {
    position: absolute;
    top: 640px;
    left: 1035px;
    width: 234px;
    height: 56px;
    font-size: var(--font-size-5xl);
  }
  .frame-child77 {
    position: absolute;
    top: 598px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .tiu1 {
    position: absolute;
    top: 20px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .mn5 {
    position: absolute;
    top: 129px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .thi-lng3 {
    position: absolute;
    top: 238px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .lng-cu-hi1 {
    position: absolute;
    top: 347px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .phm-vi-kin1 {
    position: absolute;
    top: 456px;
    left: 16px;
    display: inline-block;
    width: 326px;
    height: 39px;
    z-index: 3;
  }
  .rectangle-parent39 {
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
  .icoutline-folder-icon19 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .navigation5 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .editexam3 {
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
    .ngn-hng6 {
      font-size: var(--font-size-13xl);
    }

    .xem-trc {
      font-size: var(--font-size-13xl);
    }

    .tiu1 {
      font-size: var(--font-size-7xl);
    }

    .mn5 {
      font-size: var(--font-size-7xl);
    }

    .thi-lng3 {
      font-size: var(--font-size-7xl);
    }

    .lng-cu-hi1 {
      font-size: var(--font-size-7xl);
    }

    .phm-vi-kin1 {
      font-size: var(--font-size-7xl);
    }

    .editexam3 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .exam-bank-preview {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng6 {
      font-size: var(--font-size-5xl);
    }

    .exam-bank-preview {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .xem-trc {
      font-size: var(--font-size-5xl);
    }

    .lu4 {
      font-size: var(--font-size-lgi);
    }

    .tiu1 {
      font-size: var(--font-size-lgi);
    }

    .mn5 {
      font-size: var(--font-size-lgi);
    }

    .thi-lng3 {
      font-size: var(--font-size-lgi);
    }

    .lng-cu-hi1 {
      font-size: var(--font-size-lgi);
    }

    .phm-vi-kin1 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
