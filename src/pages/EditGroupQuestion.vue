<template>
  <div class="editgroupquestion">
    <Header1 ngnHngCuHi="Ngân hàng câu hỏi" saNhmCuHi="Sửa nhóm câu hỏi" />
    <div class="breadcrumbs">
      <div class="breadcrumb-items">
        <div class="x3">x=3</div>
        <div class="x3">x=2</div>
        <div class="x3">x=4</div>
        <div class="x3">x=5</div>
      </div>
    </div>
    <div class="navigation1">
      <img
        class="icoutline-folder-icon1"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon1"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="navigation-child" alt="" src="/group-31.svg" />
      <img
        class="icomoon-freehome3-icon1"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onIcomoonFreehomeClick"
      />
      <img
        class="wpfask-question-icon1"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
      />
      <img
        class="wpfstatistics-icon1"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="line-parent">
        <div class="frame-item" />
        <div class="frame-inner" />
        <div class="ti-liu">Tài liệu....</div>
        <div class="s-lng-cu">Số lượng câu hỏi:</div>
        <div class="list-divider" />
        <img
          class="phcode-bold-icon"
          loading="lazy"
          alt=""
          src="/phcodebold.svg"
        />
        <div class="cu-1-tm">Câu 1: Tìm x: x + 1 = 4</div>
        <div class="rectangle-group">
          <div class="rectangle-div" />
          <div class="list-actions" />
          <b class="x">x</b>
        </div>
        <div class="rectangle-container">
          <div class="rectangle-div" />
          <div class="list-actions" />
          <b class="x">x</b>
        </div>
        <div class="group-div">
          <div class="rectangle-div" />
          <div class="list-actions" />
          <b class="x">x</b>
        </div>
        <div class="rectangle-parent1">
          <div class="rectangle-div" />
          <div class="list-actions" />
          <b class="x">x</b>
        </div>
        <div class="list-header">
          <div class="rectangle-div" />
          <b class="thm-p-n">+ Thêm đáp án</b>
        </div>
        <div class="list-header1">
          <div class="list-header-item" @click="onRectangleClick" />
          <b class="lu">Lưu</b>
        </div>
        <button class="list-header2">
          <div class="list-header-inner" />
          <b class="cu-tip">Câu tiếp </b>
        </button>
      </div>
      <img
        class="phbook-bold-icon"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onPhbookBoldClick"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header1 from "../components/Header1.vue";

  export default defineComponent({
    name: "EditGroupQuestion",
    components: { Header1 },
    methods: {
      onIcoutlineFolderClick() {
        this.$router.push("/exam");
      },
      onEpsettingClick() {
        this.$router.push("/settings");
      },
      onIcomoonFreehomeClick() {
        this.$router.push("/homepage");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onRectangleClick() {
        this.$router.push("/question");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
    },
  });
</script>
<style scoped>
  .x3 {
    align-self: stretch;
    position: relative;
    z-index: 5;
  }
  .breadcrumb-items {
    width: 212px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-3);
  }
  .breadcrumbs {
    width: 666px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .icoutline-folder-icon1 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon1 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .navigation-child {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .icomoon-freehome3-icon1 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon1 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .wpfstatistics-icon1 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-item {
    position: absolute;
    top: 241px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    display: none;
  }
  .frame-inner {
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
  .ti-liu {
    position: absolute;
    top: 15px;
    left: 19px;
    display: inline-block;
    width: 257px;
    height: 28px;
    z-index: 4;
  }
  .s-lng-cu {
    position: absolute;
    top: 593px;
    left: 497px;
    display: inline-block;
    width: 257px;
    height: 28px;
    z-index: 4;
  }
  .list-divider {
    position: absolute;
    top: 260px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 4;
  }
  .phcode-bold-icon {
    position: absolute;
    top: 261px;
    left: 1061px;
    width: 42px;
    height: 42px;
    overflow: hidden;
    z-index: 5;
  }
  .cu-1-tm {
    position: absolute;
    top: 270px;
    left: 53px;
    display: inline-block;
    width: 387px;
    height: 29px;
    z-index: 4;
  }
  .rectangle-div {
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
  .list-actions {
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
  .x {
    position: absolute;
    top: 12.4px;
    left: 1165px;
    line-height: 25px;
    display: inline-block;
    width: 35px;
    height: 14.1px;
    z-index: 1;
  }
  .rectangle-group {
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
  .rectangle-container {
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
  .group-div {
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
  .rectangle-parent1 {
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
  .thm-p-n {
    position: absolute;
    top: 3px;
    left: 477px;
    display: inline-block;
    width: 319px;
    height: 29px;
    z-index: 5;
  }
  .list-header {
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
  .list-header-item {
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
  .lu {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .list-header1 {
    position: absolute;
    top: 582px;
    left: 961px;
    width: 239px;
    height: 56px;
  }
  .list-header-inner {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .cu-tip {
    position: absolute;
    top: 12px;
    left: 51px;
    font-size: var(--font-size-5xl);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-black);
    text-align: left;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .list-header2 {
    cursor: pointer;
    border: 1px solid var(--color-black);
    padding: 0;
    background-color: var(--color-palegreen);
    position: absolute;
    top: 582px;
    left: 22px;
    border-radius: var(--br-xl);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
    white-space: nowrap;
    z-index: 4;
  }
  .list-header2:hover {
    background-color: var(--color-lightgreen);
    border: 1px solid var(--color-darkslategray);
    box-sizing: border-box;
  }
  .line-parent {
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
  .phbook-bold-icon {
    position: absolute;
    top: 506px;
    left: 41px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .navigation1 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .editgroupquestion {
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
    gap: var(--gap-329xl);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .editgroupquestion {
      gap: var(--gap-155xl);
    }
  }
  @media screen and (max-width: 450px) {
    .x3 {
      font-size: var(--font-size-lgi);
    }

    .ti-liu {
      font-size: var(--font-size-lgi);
    }

    .s-lng-cu {
      font-size: var(--font-size-lgi);
    }

    .cu-1-tm {
      font-size: var(--font-size-lgi);
    }

    .x {
      font-size: var(--font-size-lgi);
      line-height: 20px;
    }

    .thm-p-n {
      font-size: var(--font-size-lgi);
    }

    .lu {
      font-size: var(--font-size-lgi);
    }

    .editgroupquestion {
      gap: 87px;
    }
  }
</style>
