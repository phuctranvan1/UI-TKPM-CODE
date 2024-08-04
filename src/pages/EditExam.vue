<template>
  <div class="editexam1">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="ngn-hng-thi-wrapper">
      <h2 class="ngn-hng2">Ngân hàng đề thi</h2>
    </div>
    <div class="sa-thi-wrapper">
      <h2 class="sa-thi">Sửa đề thi</h2>
    </div>
    <div class="epsetting-parent">
      <img
        class="epsetting-icon6"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="group-icon" alt="" src="/group-33.svg" />
      <img
        class="arrowleftcirclefill-icon2"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon5"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon6"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon6"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="line-container">
        <div class="frame-child16" />
        <div class="frame-child17" />
        <div class="trng">Trường</div>
        <div class="tn">Tên đề:</div>
        <div class="thi-lng">Thời lượng:</div>
        <div class="mn">Môn</div>
        <div class="rectangle-parent6">
          <div class="frame-child18" />
          <img
            class="weuiarrow-filled-icon"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent7">
          <div class="frame-child18" />
          <img
            class="weuiarrow-filled-icon1"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent8">
          <div class="frame-child18" />
          <img
            class="weuiarrow-filled-icon"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent9">
          <div class="frame-child18" />
          <img
            class="weuiarrow-filled-icon"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="table-header-columns" />
        <div class="table-header-columns1" />
        <div
          class="table-footer-separator-parent"
          @click="onGroupContainerClick"
        >
          <div class="table-footer-separator" />
          <b class="tip1">Tiếp</b>
        </div>
        <div class="chnh-thc">
          <p class="chnh">Đề chính</p>
          <p class="chnh">thức:</p>
        </div>
        <div class="m">Mã đề:</div>
        <img
          class="zondiconsadd-solid"
          loading="lazy"
          alt=""
          src="/zondiconsaddsolid.svg"
        />
        <div class="phm-vi">Phạm vi:</div>
      </div>
      <img
        class="icoutline-folder-icon6"
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
    name: "EditExam",
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
        this.$router.push("/editexam2");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng2 {
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
  .ngn-hng-thi-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .sa-thi {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .sa-thi-wrapper {
    width: 686px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .epsetting-icon6 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .group-icon {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon2 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon5 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon6 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon6 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child16 {
    position: absolute;
    top: 241px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    display: none;
  }
  .frame-child17 {
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
  .trng {
    position: absolute;
    top: 15px;
    left: 19px;
    display: inline-block;
    width: 153px;
    height: 28px;
    z-index: 4;
  }
  .tn {
    position: absolute;
    top: 64px;
    left: 22px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .thi-lng {
    position: absolute;
    top: 113px;
    left: 19px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .mn {
    position: absolute;
    top: 158px;
    left: 22px;
    display: inline-block;
    width: 150px;
    height: 28px;
    z-index: 4;
  }
  .frame-child18 {
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
  .weuiarrow-filled-icon {
    position: absolute;
    top: 2px;
    left: 1037px;
    width: 30px;
    height: 20px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent6 {
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
  .weuiarrow-filled-icon1 {
    position: absolute;
    top: 4px;
    left: 42px;
    width: 30px;
    height: 20px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent7 {
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
  .rectangle-parent8 {
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
  .rectangle-parent9 {
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
  .table-header-columns {
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
  .table-header-columns1 {
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
  .table-footer-separator {
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
  .tip1 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 56px;
    z-index: 1;
  }
  .table-footer-separator-parent {
    position: absolute;
    top: 582px;
    left: 961px;
    width: 239px;
    height: 67px;
    cursor: pointer;
    z-index: 4;
  }
  .chnh {
    margin: 0;
  }
  .chnh-thc {
    position: absolute;
    top: 207px;
    left: 22px;
    display: inline-block;
    width: 212px;
    height: 21px;
    z-index: 5;
  }
  .m {
    position: absolute;
    top: 282px;
    left: 22px;
    display: inline-block;
    width: 212px;
    height: 29px;
    z-index: 5;
  }
  .zondiconsadd-solid {
    position: absolute;
    top: 341px;
    left: 164px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    z-index: 4;
  }
  .phm-vi {
    position: absolute;
    top: 344px;
    left: 23px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 5;
  }
  .line-container {
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
  .icoutline-folder-icon6 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .epsetting-parent {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
    font-size: var(--font-size-5xl);
  }
  .editexam1 {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) 786px;
    box-sizing: border-box;
    gap: var(--gap-13xl-5);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .ngn-hng2 {
      font-size: var(--font-size-13xl);
    }

    .sa-thi {
      font-size: var(--font-size-13xl);
    }

    .editexam1 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 675px) {
    .ngn-hng-thi-wrapper {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng2 {
      font-size: var(--font-size-5xl);
    }

    .ngn-hng-thi-wrapper {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .sa-thi {
      font-size: var(--font-size-5xl);
    }

    .trng {
      font-size: var(--font-size-lgi);
    }

    .tn {
      font-size: var(--font-size-lgi);
    }

    .thi-lng {
      font-size: var(--font-size-lgi);
    }

    .mn {
      font-size: var(--font-size-lgi);
    }

    .tip1 {
      font-size: var(--font-size-lgi);
    }

    .chnh-thc {
      font-size: var(--font-size-lgi);
    }

    .m {
      font-size: var(--font-size-lgi);
    }

    .phm-vi {
      font-size: var(--font-size-lgi);
    }
  }
</style>
