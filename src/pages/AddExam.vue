<template>
  <div class="addexam1">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="exam-bank-title">
      <h2 class="ngn-hng4">Ngân hàng đề thi</h2>
    </div>
    <div class="addexam1-inner">
      <div class="frame-parent">
        <div class="thm-thi-wrapper">
          <h2 class="thm-thi">Thêm đề thi</h2>
        </div>
        <div class="rectangle-parent13">
          <div class="frame-child27" />
          <b class="ti-thi">Tải đề thi</b>
        </div>
      </div>
    </div>
    <div class="actions">
      <img
        class="epsetting-icon9"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="actions-child" alt="" src="/group-34.svg" />
      <img
        class="arrowleftcirclefill-icon4"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon8"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon9"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon9"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="line-parent1">
        <div class="frame-child28" />
        <div class="frame-child29" />
        <div class="trng1">Trường</div>
        <div class="tn1">Tên đề:</div>
        <div class="thi-lng1">Thời lượng:</div>
        <div class="mn1">Môn</div>
        <div class="rectangle-parent14">
          <div class="frame-child30" />
          <img
            class="weuiarrow-filled-icon4"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent15">
          <div class="frame-child30" />
          <img
            class="weuiarrow-filled-icon5"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent16">
          <div class="frame-child30" />
          <img
            class="weuiarrow-filled-icon4"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent17">
          <div class="frame-child30" />
          <img
            class="weuiarrow-filled-icon4"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="exam-headers" />
        <div class="exam-headers1" />
        <div class="continue-button-group" @click="onGroupContainerClick">
          <div class="continue-button1" @click="onGroupContainerClick" />
          <b class="tip3">Tiếp</b>
        </div>
        <div class="chnh-thc1">
          <p class="chnh1">Đề chính</p>
          <p class="chnh1">thức:</p>
        </div>
        <div class="m1">Mã đề:</div>
        <img
          class="zondiconsadd-solid1"
          loading="lazy"
          alt=""
          src="/zondiconsaddsolid.svg"
        />
        <div class="phm-vi1">Phạm vi:</div>
      </div>
      <img
        class="icoutline-folder-icon9"
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
    name: "AddExam",
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
        this.$router.push("/exam");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onGroupContainerClick() {
        this.$router.push("/addexam2");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng4 {
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
  .exam-bank-title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .thm-thi {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .thm-thi-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .frame-child27 {
    height: 56px;
    width: 215px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .ti-thi {
    width: 155px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 3;
  }
  .rectangle-parent13 {
    width: 215px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: var(--padding-5xs) var(--padding-11xs) var(--padding-mini);
    white-space: nowrap;
    z-index: 2;
    font-size: var(--font-size-5xl);
  }
  .frame-parent {
    width: 1064px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .addexam1-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px 174px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .epsetting-icon9 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .actions-child {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon4 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon8 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon9 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon9 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child28 {
    position: absolute;
    top: 241px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    display: none;
  }
  .frame-child29 {
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
  .trng1 {
    position: absolute;
    top: 15px;
    left: 19px;
    display: inline-block;
    width: 153px;
    height: 28px;
    z-index: 4;
  }
  .tn1 {
    position: absolute;
    top: 64px;
    left: 22px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .thi-lng1 {
    position: absolute;
    top: 113px;
    left: 19px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .mn1 {
    position: absolute;
    top: 158px;
    left: 22px;
    display: inline-block;
    width: 150px;
    height: 28px;
    z-index: 4;
  }
  .frame-child30 {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .weuiarrow-filled-icon4 {
    position: absolute;
    top: 2px;
    left: 1037px;
    width: 30px;
    height: 20px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent14 {
    position: absolute;
    top: 15px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1067px;
    height: 28px;
    z-index: 5;
  }
  .weuiarrow-filled-icon5 {
    position: absolute;
    top: 4px;
    left: 42px;
    width: 30px;
    height: 20px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent15 {
    position: absolute;
    top: 113px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 72px;
    height: 28px;
    z-index: 5;
  }
  .rectangle-parent16 {
    position: absolute;
    top: 64px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1067px;
    height: 28px;
    z-index: 5;
  }
  .rectangle-parent17 {
    position: absolute;
    top: 158px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1067px;
    height: 28px;
    z-index: 5;
  }
  .exam-headers {
    position: absolute;
    top: 207px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 38px;
    height: 38px;
    z-index: 4;
  }
  .exam-headers1 {
    position: absolute;
    top: 279px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1060px;
    height: 38px;
    z-index: 4;
  }
  .continue-button1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
    cursor: pointer;
  }
  .tip3 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 56px;
    z-index: 1;
  }
  .continue-button-group {
    position: absolute;
    top: 582px;
    left: 961px;
    width: 239px;
    height: 67px;
    cursor: pointer;
    z-index: 4;
  }
  .chnh1 {
    margin: 0;
  }
  .chnh-thc1 {
    position: absolute;
    top: 207px;
    left: 22px;
    display: inline-block;
    width: 212px;
    height: 21px;
    z-index: 5;
  }
  .m1 {
    position: absolute;
    top: 282px;
    left: 22px;
    display: inline-block;
    width: 212px;
    height: 29px;
    z-index: 5;
  }
  .zondiconsadd-solid1 {
    position: absolute;
    top: 341px;
    left: 164px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    z-index: 4;
  }
  .phm-vi1 {
    position: absolute;
    top: 344px;
    left: 23px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 5;
  }
  .line-parent1 {
    position: absolute;
    top: 173px;
    left: 153px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1263px;
    height: 715px;
    z-index: 3;
  }
  .icoutline-folder-icon9 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .actions {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
    font-size: var(--font-size-5xl);
  }
  .addexam1 {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) 783px;
    box-sizing: border-box;
    gap: var(--gap-11xl);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 1200px) {
    .addexam1-inner {
      padding-left: var(--padding-68xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .ngn-hng4 {
      font-size: var(--font-size-13xl);
    }

    .thm-thi {
      font-size: var(--font-size-13xl);
    }
  }
  @media screen and (max-width: 750px) {
    .exam-bank-title {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }

    .frame-parent {
      flex-wrap: wrap;
      justify-content: center;
    }

    .addexam1-inner {
      padding-left: 43px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng4 {
      font-size: var(--font-size-5xl);
    }

    .exam-bank-title {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .thm-thi {
      font-size: var(--font-size-5xl);
    }

    .addexam1-inner {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .trng1 {
      font-size: var(--font-size-lgi);
    }

    .tn1 {
      font-size: var(--font-size-lgi);
    }

    .thi-lng1 {
      font-size: var(--font-size-lgi);
    }

    .mn1 {
      font-size: var(--font-size-lgi);
    }

    .tip3 {
      font-size: var(--font-size-lgi);
    }

    .chnh-thc1 {
      font-size: var(--font-size-lgi);
    }

    .m1 {
      font-size: var(--font-size-lgi);
    }

    .phm-vi1 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
