<template>
  <div class="addquestion">
    <header
      frameDivPadding="0px 2px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="left-pane">
      <h2 class="ngn-hng-cu3">Ngân hàng câu hỏi</h2>
    </div>
    <div class="navigation4">
      <img
        class="icoutline-folder-icon14"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon14"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="navigation-inner" alt="" src="/group-36.svg" />
      <img
        class="arrowleftcirclefill-icon7"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="arrowleftcirclefill-icon8"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill-1.svg"
        @click="onArrowLeftCircleFillClick1"
      />
      <img
        class="icomoon-freehome3-icon13"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <img
        class="wpfask-question-icon14"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
      />
      <img
        class="wpfstatistics-icon14"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="line-parent3">
        <div class="frame-child42" />
        <div class="frame-child43" />
        <img
          class="zondiconsadd-solid2"
          loading="lazy"
          alt=""
          src="/zondiconsaddsolid.svg"
        />
        <div class="loi-cu-hi">Loại câu hỏi:</div>
        <div class="kh">Độ khó:</div>
        <div class="lp">Lớp:</div>
        <div class="mn3">Môn</div>
        <div class="phm-vi2">Phạm vi:</div>
        <div class="email-address" />
        <div class="rectangle-parent22">
          <div class="options-child" />
          <img
            class="weuiarrow-filled-icon10"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent23">
          <div class="options-child" />
          <img
            class="weuiarrow-filled-icon10"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent24">
          <div class="options-child" />
          <img
            class="weuiarrow-filled-icon10"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <div class="rectangle-parent25">
          <div class="options-child" />
          <img
            class="weuiarrow-filled-icon10"
            loading="lazy"
            alt=""
            src="/weuiarrowfilled@2x.png"
          />
        </div>
        <img
          class="phcode-bold-icon2"
          loading="lazy"
          alt=""
          src="/phcodebold.svg"
        />
        <div class="tm-x-x">Tìm x: x + 1 = 4</div>
        <div class="rectangle-parent26">
          <div class="options-child" />
          <div class="frame-child49" />
          <b class="x12">x</b>
        </div>
        <div class="rectangle-parent27">
          <div class="options-child" />
          <div class="frame-child49" />
          <b class="x12">x</b>
        </div>
        <div class="rectangle-parent28">
          <div class="options-child" />
          <div class="frame-child49" />
          <b class="x12">x</b>
        </div>
        <div class="rectangle-parent29">
          <div class="options-child" />
          <div class="frame-child49" />
          <b class="x12">x</b>
        </div>
        <div class="options">
          <div class="options-child" />
          <b class="thm-p-n2">+ Thêm đáp án</b>
        </div>
        <div class="save-button">
          <div
            class="save-button-background"
            @click="onArrowLeftCircleFillClick"
          />
          <b class="lu3">Lưu</b>
        </div>
      </div>
    </div>
    <div class="user-panel">
      <div class="action-buttons1">
        <div class="add-question1">
          <div class="search-bar">
            <h2 class="thm-cu-hi1">Thêm câu hỏi</h2>
          </div>
          <div class="add-question-placeholders">
            <div class="x32">x=3</div>
            <div class="x32">x=2</div>
            <div class="x32">x=4</div>
            <div class="x32">x=5</div>
          </div>
        </div>
        <h2 class="thm-nhm-cu">Thêm nhóm câu hỏi</h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "AddQuestion",
    components: { Header },
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
        this.$router.push("/settings");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/question");
      },
      onArrowLeftCircleFillClick1() {
        this.$router.push("/addgroupquestion1");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
    },
  });
</script>
<style scoped>
  .ngn-hng-cu3 {
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
  .left-pane {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-125xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .icoutline-folder-icon14 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon14 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .navigation-inner {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon7 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .arrowleftcirclefill-icon8 {
    position: absolute;
    top: 84px;
    left: 1322px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    object-fit: contain;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon13 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon14 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .wpfstatistics-icon14 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child42 {
    position: absolute;
    top: 241px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    display: none;
  }
  .frame-child43 {
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
  .zondiconsadd-solid2 {
    position: absolute;
    top: 201px;
    left: 163px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    z-index: 1;
  }
  .loi-cu-hi {
    position: absolute;
    top: 15px;
    left: 19px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .kh {
    position: absolute;
    top: 64px;
    left: 22px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .lp {
    position: absolute;
    top: 113px;
    left: 19px;
    display: inline-block;
    width: 153px;
    height: 28px;
    z-index: 4;
  }
  .mn3 {
    position: absolute;
    top: 158px;
    left: 22px;
    display: inline-block;
    width: 150px;
    height: 28px;
    z-index: 4;
  }
  .phm-vi2 {
    position: absolute;
    top: 204px;
    left: 22px;
    display: inline-block;
    width: 161px;
    height: 28px;
    z-index: 4;
  }
  .email-address {
    position: absolute;
    top: 260px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .weuiarrow-filled-icon10 {
    position: absolute;
    top: 2px;
    left: 1037px;
    width: 30px;
    height: 20px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent22 {
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
  .rectangle-parent23 {
    position: absolute;
    top: 113px;
    left: 172px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1067px;
    height: 28px;
    z-index: 5;
  }
  .rectangle-parent24 {
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
  .rectangle-parent25 {
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
  .phcode-bold-icon2 {
    position: absolute;
    top: 261px;
    left: 1061px;
    width: 42px;
    height: 42px;
    overflow: hidden;
    z-index: 5;
  }
  .tm-x-x {
    position: absolute;
    top: 270px;
    left: 53px;
    display: inline-block;
    width: 387px;
    height: 29px;
    z-index: 4;
  }
  .frame-child49 {
    position: absolute;
    top: 11px;
    left: 25px;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    z-index: 1;
  }
  .x12 {
    position: absolute;
    top: 12.4px;
    left: 1165px;
    line-height: 25px;
    display: inline-block;
    width: 35px;
    height: 14.1px;
    z-index: 1;
  }
  .rectangle-parent26 {
    position: absolute;
    top: 312px;
    left: 29px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1203px;
    height: 38px;
    z-index: 4;
  }
  .rectangle-parent27 {
    position: absolute;
    top: 415px;
    left: 29px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1203px;
    height: 38px;
    z-index: 4;
  }
  .rectangle-parent28 {
    position: absolute;
    top: 464px;
    left: 29px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1203px;
    height: 38px;
    z-index: 4;
  }
  .rectangle-parent29 {
    position: absolute;
    top: 365px;
    left: 29px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1203px;
    height: 38px;
    z-index: 4;
  }
  .options-child {
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
  .thm-p-n2 {
    position: absolute;
    top: 3px;
    left: 477px;
    display: inline-block;
    width: 319px;
    height: 29px;
    z-index: 5;
  }
  .options {
    position: absolute;
    top: 513px;
    left: 29px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1203px;
    height: 38px;
    z-index: 4;
  }
  .save-button-background {
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
    z-index: 4;
  }
  .lu3 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .save-button {
    position: absolute;
    top: 582px;
    left: 961px;
    width: 239px;
    height: 56px;
  }
  .line-parent3 {
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
  .navigation4 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
    font-size: var(--font-size-5xl);
  }
  .thm-cu-hi1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .search-bar {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-xl);
  }
  .x32 {
    align-self: stretch;
    position: relative;
    z-index: 5;
  }
  .add-question-placeholders {
    width: 212px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-3);
    font-size: var(--font-size-5xl);
  }
  .add-question1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-329xl);
  }
  .thm-nhm-cu {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
    z-index: 2;
  }
  .action-buttons1 {
    width: 1058px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .user-panel {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px 128px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .addquestion {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-235xl);
    box-sizing: border-box;
    gap: var(--gap-13xl-5);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 1200px) {
    .user-panel {
      padding-left: 64px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .ngn-hng-cu3 {
      font-size: var(--font-size-13xl);
    }

    .thm-cu-hi1 {
      font-size: var(--font-size-13xl);
    }

    .thm-nhm-cu {
      font-size: var(--font-size-13xl);
    }

    .action-buttons1 {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 750px) {
    .left-pane {
      padding-left: var(--padding-53xl);
      box-sizing: border-box;
    }

    .user-panel {
      padding-left: var(--padding-13xl);
      box-sizing: border-box;
    }

    .addquestion {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu3 {
      font-size: var(--font-size-5xl);
    }

    .left-pane {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .loi-cu-hi {
      font-size: var(--font-size-lgi);
    }

    .kh {
      font-size: var(--font-size-lgi);
    }

    .lp {
      font-size: var(--font-size-lgi);
    }

    .mn3 {
      font-size: var(--font-size-lgi);
    }

    .phm-vi2 {
      font-size: var(--font-size-lgi);
    }

    .tm-x-x {
      font-size: var(--font-size-lgi);
    }

    .x12 {
      font-size: var(--font-size-lgi);
      line-height: 20px;
    }

    .thm-p-n2 {
      font-size: var(--font-size-lgi);
    }

    .lu3 {
      font-size: var(--font-size-lgi);
    }

    .thm-cu-hi1 {
      font-size: var(--font-size-5xl);
    }

    .x32 {
      font-size: var(--font-size-lgi);
    }

    .add-question1 {
      gap: var(--gap-155xl);
    }

    .thm-nhm-cu {
      font-size: var(--font-size-5xl);
    }
  }
</style>
