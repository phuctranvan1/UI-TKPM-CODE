<template>
  <div class="addgroupquestion2">
    <main class="icoutline-folder-parent">
      <img
        class="icoutline-folder-icon2"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon2"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon2"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <div class="question-input">
        <div class="question-area">
          <img class="question-area-child" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon2"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon2"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="question-list-panel">
        <div class="question-list-panel-child" />
        <div class="question-list-header">
          <h2 class="ngn-hng-cu">Ngân hàng câu hỏi</h2>
        </div>
        <FrameComponent3 thmNhmCuHi="Thêm nhóm câu hỏi" />
        <div class="line-group">
          <div class="line-div" />
          <div class="frame-child6" />
          <div class="question-title">
            <div class="danh-sch-cu">Danh sách câu hỏi:</div>
          </div>
          <div class="question-divider">
            <div class="question-divider-child" />
            <div class="answer-container">
              <div class="answer-list">
                <div class="question-content">
                  <div class="code-snippet">
                    <div class="code-area">
                      <div class="cu-1-tm1">Câu 1: Tìm x: x + 1 = 4</div>
                    </div>
                    <img
                      class="phcode-bold-icon1"
                      loading="lazy"
                      alt=""
                      src="/phcodebold.svg"
                    />
                  </div>
                </div>
                <div class="answer-items">
                  <div class="rectangle-parent2">
                    <div class="answer-items-child" />
                    <div class="answer-icons" />
                    <div class="delete-answer-buttons">
                      <b class="x8">x</b>
                    </div>
                  </div>
                </div>
                <div class="answer-items1">
                  <div class="rectangle-parent2">
                    <div class="answer-items-child" />
                    <div class="answer-icons" />
                    <div class="x-wrapper">
                      <b class="x8">x</b>
                    </div>
                  </div>
                </div>
                <div class="rectangle-parent4">
                  <div class="answer-items-child" />
                  <div class="answer-icons" />
                  <div class="x-wrapper">
                    <b class="x8">x</b>
                  </div>
                </div>
                <div class="rectangle-parent4">
                  <div class="answer-items-child" />
                  <div class="answer-icons" />
                  <div class="x-wrapper">
                    <b class="x8">x</b>
                  </div>
                </div>
                <div class="answer-items2">
                  <div class="answer-items-child" />
                  <b class="thm-p-n1">+ Thêm đáp án</b>
                </div>
              </div>
            </div>
            <div class="action-buttons">
              <div class="button-container">
                <button class="control-buttons">
                  <div class="button-backgrounds" />
                  <b class="thm">Thêm</b>
                </button>
                <div class="question-count-display">
                  <div class="cu-1-tm1">Số lượng câu hỏi:</div>
                </div>
                <div class="control-buttons1">
                  <div
                    class="control-buttons-child"
                    @click="onRectangleClick"
                  />
                  <b class="lu1">Lưu</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="phbook-bold-icon1"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onPhbookBoldClick"
      />
    </main>
    <header
      frameDivPadding="unset"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="footer">
      <div class="separator-container">
        <div class="x31">x=3</div>
        <div class="x31">x=2</div>
        <div class="x31">x=4</div>
        <div class="x31">x=5</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent3 from "../components/FrameComponent3.vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "AddGroupQuestion1",
    components: { FrameComponent3, Header },
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
  .icoutline-folder-icon2 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon2 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon2 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .question-area-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon2 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .question-area {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .question-input {
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
  .wpfstatistics-icon2 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .question-list-panel-child {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng-cu {
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
  .question-list-header {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .line-div {
    width: 49px;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .frame-child6 {
    align-self: stretch;
    height: 715px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .danh-sch-cu {
    flex: 1;
    position: relative;
    z-index: 4;
  }
  .question-title {
    width: 295px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lgi);
    box-sizing: border-box;
  }
  .question-divider-child {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .cu-1-tm1 {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .code-area {
    width: 387px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .phcode-bold-icon1 {
    height: 42px;
    width: 42px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 5;
  }
  .code-snippet {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .question-content {
    width: 1098px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .answer-icons {
    height: 16px;
    width: 16px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .x8 {
    align-self: stretch;
    height: 14.1px;
    position: relative;
    line-height: 25px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .delete-answer-buttons {
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs-4) 0px 0px;
    box-sizing: border-box;
  }
  .rectangle-parent2 {
    flex: 1;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-4xs) var(--padding-9xs) var(--padding-4xs)
      var(--padding-5xl);
    max-width: 100%;
    gap: var(--gap-xl);
    z-index: 4;
  }
  .answer-items {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .x-wrapper {
    height: 14.1px;
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs-4) 0px 0px;
    box-sizing: border-box;
  }
  .answer-items1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle-parent4 {
    align-self: stretch;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-4xs) var(--padding-9xs) var(--padding-4xs)
      var(--padding-5xl);
    max-width: 100%;
    gap: var(--gap-xl);
    z-index: 4;
  }
  .answer-items-child {
    height: 38px;
    width: 1203px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .thm-p-n1 {
    width: 319px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 5;
  }
  .answer-items2 {
    align-self: stretch;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: var(--padding-12xs) var(--padding-388xl) var(--padding-9xs);
    max-width: 100%;
    z-index: 4;
  }
  .answer-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    max-width: 100%;
  }
  .answer-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xl) var(--padding-12xl) var(--padding-10xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .button-backgrounds {
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
    z-index: 4;
  }
  .thm {
    position: absolute;
    top: 11px;
    left: 70px;
    font-size: var(--font-size-5xl);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-black);
    text-align: left;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .control-buttons {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    height: 56px;
    width: 268px;
    position: relative;
  }
  .question-count-display {
    width: 257px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
  }
  .control-buttons-child {
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
  .lu1 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .control-buttons1 {
    height: 56px;
    width: 239px;
    position: relative;
  }
  .button-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .action-buttons {
    width: 1222px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .question-divider {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .line-group {
    align-self: stretch;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px var(--padding-56xl);
    gap: 217px;
    max-width: 100%;
    z-index: 3;
    font-size: var(--font-size-5xl);
  }
  .question-list-panel {
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
    gap: var(--gap-7xl-5);
    max-width: 100%;
    z-index: 1;
  }
  .phbook-bold-icon1 {
    position: absolute;
    top: 506px;
    left: 87px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-parent {
    width: 1486px;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    bottom: 16px;
    left: -46px;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .x31 {
    align-self: stretch;
    position: relative;
    z-index: 5;
  }
  .separator-container {
    width: 212px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-3);
  }
  .footer {
    width: 666px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .addgroupquestion2 {
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
    gap: var(--gap-492xl);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 925px) {
    .ngn-hng-cu {
      font-size: var(--font-size-13xl);
    }

    .button-container {
      flex-wrap: wrap;
    }

    .addgroupquestion2 {
      gap: var(--gap-236xl);
    }
  }
  @media screen and (max-width: 700px) {
    .code-snippet {
      flex-wrap: wrap;
    }

    .icoutline-folder-parent {
      height: auto;
      min-height: 910;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu {
      font-size: var(--font-size-5xl);
    }

    .danh-sch-cu {
      font-size: var(--font-size-lgi);
    }

    .cu-1-tm1 {
      font-size: var(--font-size-lgi);
    }

    .x8 {
      font-size: var(--font-size-lgi);
      line-height: 20px;
    }

    .thm-p-n1 {
      font-size: var(--font-size-lgi);
    }

    .thm {
      font-size: var(--font-size-lgi);
    }

    .lu1 {
      font-size: var(--font-size-lgi);
    }

    .x31 {
      font-size: var(--font-size-lgi);
    }

    .addgroupquestion2 {
      gap: var(--gap-109xl);
    }
  }
</style>
