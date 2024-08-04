<template>
  <div class="addexam2">
    <header class="navigation">
      <div class="logo-container">
        <div class="logo">
          <a class="logo1" @click="onLOGOTextClick">LOGO</a>
        </div>
        <div class="search-container">
          <div class="search-container-child" />
          <div class="search-input">
            <img class="memorysearch-icon" alt="" src="/memorysearch.svg" />
          </div>
          <input class="search" placeholder="Search" type="text" />
        </div>
      </div>
      <div class="profile">
        <div class="profile-info">
          <img
            class="twemojiflag-vietnam-icon"
            loading="lazy"
            alt=""
            src="/twemojiflagvietnam.svg"
          />
        </div>
        <img
          class="material-symbols-lightperson-icon"
          loading="lazy"
          alt=""
          src="/materialsymbolslightpersonoutline.svg"
        />
        <div class="profile-name">
          <a class="trn-vn-phc" @click="onTrnVnPhcClick">Trần Văn Phúc</a>
        </div>
      </div>
    </header>
    <div class="header">
      <div class="ngn-hng">Ngân hàng đề thi</div>
    </div>
    <div class="header1">
      <div class="thm-cu-hi">Thêm câu hỏi vào đề:</div>
    </div>
    <div class="divider">
      <div class="divider-child" />
    </div>
    <div class="content">
      <img
        class="epsetting-icon"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="content-child" alt="" src="/group-3.svg" />
      <img
        class="arrowleftcirclefill-icon"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="rectangle-parent">
        <div class="frame-child" />
        <div class="continue-button-parent" @click="onGroupContainerClick">
          <div class="continue-button" />
          <b class="tip">Tiếp</b>
        </div>
        <div class="question-items" />
        <div class="question-items1" />
        <div class="question-items2" />
        <div class="question-items3" />
        <div class="question-items4" />
        <div class="question-items5" />
        <b class="cu-hi">Câu hỏi</b>
        <b class="cu-hi1">Câu hỏi</b>
        <b class="cu-hi2">Câu hỏi</b>
        <b class="cu-hi3">Câu hỏi</b>
        <b class="cu-hi4">Câu hỏi</b>
      </div>
      <img
        class="icoutline-folder-icon"
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
    name: "AddExam1",
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
        this.$router.push("/addexam1");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onGroupContainerClick() {
        this.$router.push("/addexam3");
      },
    },
  });
</script>
<style scoped>
  .logo1 {
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
  .logo {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs-5) 0px 0px;
    box-sizing: border-box;
  }
  .search-container-child {
    height: 64px;
    width: 848px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .memorysearch-icon {
    width: 34.3px;
    height: 33px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .search-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .search {
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
  .search-container {
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
  .logo-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .twemojiflag-vietnam-icon {
    align-self: stretch;
    height: 40px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .profile-info {
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
  }
  .material-symbols-lightperson-icon {
    height: 64px;
    width: 64px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .trn-vn-phc {
    text-decoration: none;
    position: relative;
    color: inherit;
    white-space: nowrap;
    cursor: pointer;
  }
  .profile-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
  }
  .profile {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .navigation {
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
  .ngn-hng {
    width: 378px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .header {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .thm-cu-hi {
    position: relative;
    z-index: 2;
  }
  .header1 {
    width: 902px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .divider-child {
    align-self: stretch;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .divider {
    align-self: stretch;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-90xl);
    box-sizing: border-box;
  }
  .epsetting-icon {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .content-child {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child {
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
  .continue-button {
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
  .tip {
    position: absolute;
    top: 13px;
    left: 75px;
    display: inline-block;
    width: 155px;
    height: 56px;
    z-index: 1;
  }
  .continue-button-parent {
    position: absolute;
    top: 640px;
    left: 1035px;
    width: 230px;
    height: 69px;
    cursor: pointer;
    z-index: 3;
    font-size: var(--font-size-5xl);
  }
  .question-items {
    position: absolute;
    top: 598px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .question-items1 {
    position: absolute;
    top: 112px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-items2 {
    position: absolute;
    top: 227px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-items3 {
    position: absolute;
    top: 342px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-items4 {
    position: absolute;
    top: 457px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .question-items5 {
    position: absolute;
    top: 572px;
    left: -2px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 614px;
    height: 1px;
    z-index: 4;
  }
  .cu-hi {
    position: absolute;
    top: 20px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi1 {
    position: absolute;
    top: 129px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi2 {
    position: absolute;
    top: 238px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi3 {
    position: absolute;
    top: 347px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .cu-hi4 {
    position: absolute;
    top: 456px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 67px;
    z-index: 5;
  }
  .rectangle-parent {
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
  .icoutline-folder-icon {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .content {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
    font-size: var(--font-size-13xl);
  }
  .addexam2 {
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
    .ngn-hng {
      font-size: var(--font-size-13xl);
    }

    .thm-cu-hi {
      font-size: var(--font-size-13xl);
    }

    .cu-hi {
      font-size: var(--font-size-7xl);
    }

    .cu-hi1 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi2 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi3 {
      font-size: var(--font-size-7xl);
    }

    .cu-hi4 {
      font-size: var(--font-size-7xl);
    }

    .addexam2 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .navigation {
      gap: var(--gap-11xl);
    }

    .header {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .navigation {
      gap: var(--gap-mini);
    }

    .ngn-hng {
      font-size: var(--font-size-5xl);
    }

    .header {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .thm-cu-hi {
      font-size: var(--font-size-5xl);
    }

    .tip {
      font-size: var(--font-size-lgi);
    }

    .cu-hi {
      font-size: var(--font-size-lgi);
    }

    .cu-hi1 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi2 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi3 {
      font-size: var(--font-size-lgi);
    }

    .cu-hi4 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
