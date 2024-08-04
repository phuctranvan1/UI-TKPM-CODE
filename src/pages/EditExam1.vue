<template>
  <div class="editexam2">
    <header class="header2">
      <div class="logo-parent">
        <div class="logo2">
          <a class="logo3" @click="onLOGOTextClick">LOGO</a>
        </div>
        <div class="frame-div">
          <div class="frame-child25" />
          <div class="search-input1">
            <img class="memorysearch-icon1" alt="" src="/memorysearch.svg" />
          </div>
          <input class="search1" placeholder="Search" type="text" />
        </div>
      </div>
      <div class="user-icon-parent">
        <div class="user-icon">
          <img
            class="twemojiflag-vietnam-icon1"
            loading="lazy"
            alt=""
            src="/twemojiflagvietnam.svg"
          />
        </div>
        <img
          class="material-symbols-lightperson-icon1"
          loading="lazy"
          alt=""
          src="/materialsymbolslightpersonoutline.svg"
        />
        <div class="user-name">
          <a class="trn-vn-phc1" @click="onTrnVnPhcClick">Trần Văn Phúc</a>
        </div>
      </div>
    </header>
    <div class="ngn-hng-thi-container">
      <div class="ngn-hng3">Ngân hàng đề thi</div>
    </div>
    <div class="sa-cu-hi-trong-wrapper">
      <div class="sa-cu-hi">Sửa câu hỏi trong đề:</div>
    </div>
    <div class="divider1">
      <div class="divider-item" />
    </div>
    <div class="content1">
      <img
        class="epsetting-icon8"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="content-item" alt="" src="/group-33.svg" />
      <img
        class="arrowleftcirclefill-icon3"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon7"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon8"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon8"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="rectangle-parent12">
        <div class="frame-child26" />
        <div class="next-button">
          <div
            class="next-button-background"
            @click="onNextButtonBackgroundClick"
          />
          <b class="tip2" @click="onNextButtonBackgroundClick">Tiếp</b>
        </div>
        <div class="question-header" />
        <div class="question-header1" />
        <div class="question-header2" />
        <div class="question-header3" />
        <div class="question-header4" />
        <div class="question-header5" />
        <b class="cu-hi5">Câu hỏi</b>
        <b class="cu-hi6">Câu hỏi</b>
        <b class="cu-hi7">Câu hỏi</b>
        <b class="cu-hi8">Câu hỏi</b>
        <b class="cu-hi9">Câu hỏi</b>
      </div>
      <img
        class="icoutline-folder-icon8"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EditExam1",
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
        this.$router.push("/editexam1");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onNextButtonBackgroundClick() {
        this.$router.push("/editexam3");
      },
    },
  });
</script>
<style scoped>
  .logo3 {
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
  .logo2 {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-5) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child25 {
    height: 64px;
    width: 848px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .memorysearch-icon1 {
    width: 34.3px;
    height: 33px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .search-input1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .search1 {
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
  .frame-div {
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
  .logo-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .twemojiflag-vietnam-icon1 {
    align-self: stretch;
    height: 40px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .user-icon {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
  }
  .material-symbols-lightperson-icon1 {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .trn-vn-phc1 {
    text-decoration: none;
    position: relative;
    color: inherit;
    white-space: nowrap;
    cursor: pointer;
  }
  .user-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .user-icon-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .header2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-42xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .ngn-hng3 {
    width: 378px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .ngn-hng-thi-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .sa-cu-hi {
    position: relative;
    z-index: 2;
  }
  .sa-cu-hi-trong-wrapper {
    width: 898px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .divider-item {
    align-self: stretch;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .divider1 {
    align-self: stretch;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-90xl);
    box-sizing: border-box;
  }
  .epsetting-icon8 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .content-item {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon3 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon7 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon8 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon8 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child26 {
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
  .next-button-background {
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
  .tip2 {
    position: absolute;
    top: 13px;
    left: 75px;
    display: inline-block;
    width: 155px;
    height: 29px;
    cursor: pointer;
    z-index: 4;
  }
  .next-button {
    position: absolute;
    top: 640px;
    left: 1035px;
    width: 230px;
    height: 56px;
    font-size: var(--font-size-5xl);
  }
  .question-header {
    position: absolute;
    top: 598px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .question-header1 {
    position: absolute;
    top: 112px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-header2 {
    position: absolute;
    top: 227px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-header3 {
    position: absolute;
    top: 342px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-header4 {
    position: absolute;
    top: 457px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-header5 {
    position: absolute;
    top: 572px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .cu-hi5 {
    position: absolute;
    top: 20px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi6 {
    position: absolute;
    top: 129px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi7 {
    position: absolute;
    top: 238px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi8 {
    position: absolute;
    top: 347px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi9 {
    position: absolute;
    top: 456px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 67px;
    z-index: 5;
  }
  .rectangle-parent12 {
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
  }
  .icoutline-folder-icon8 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .content1 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
    font-size: var(--font-size-13xl);
  }
  .editexam2 {
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
    .ngn-hng3 {
      font-size: var(--font-size-13xl);
    }

    .sa-cu-hi {
      font-size: var(--font-size-13xl);
    }

    .cu-hi5 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi6 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi7 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi8 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi9 {
      font-size: var(--font-size-7xl);
    }

    .editexam2 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .header2 {
      gap: var(--gap-11xl);
    }

    .ngn-hng-thi-container {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .header2 {
      gap: var(--gap-mini);
    }

    .ngn-hng3 {
      font-size: var(--font-size-5xl);
    }

    .ngn-hng-thi-container {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .sa-cu-hi {
      font-size: var(--font-size-5xl);
    }

    .tip2 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi5 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi6 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi7 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi8 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi9 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
