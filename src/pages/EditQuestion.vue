<template>
  <div class="editquestion">
    <main class="icoutline-folder-parent5">
      <img
        class="icoutline-folder-icon21"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon21"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon20"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onLOGOTextClick"
      />
      <div class="content-area">
        <div class="question-header6">
          <img class="question-header-child" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon21"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon21"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <section class="rectangle-parent41">
        <div class="frame-child79" />
        <div class="question-bank-header">
          <h2 class="ngn-hng-cu6">Ngân hàng câu hỏi</h2>
        </div>
        <FrameComponent3 thmNhmCuHi="Sửa câu hỏi" />
        <div class="line-parent6">
          <div class="frame-child80" />
          <div class="frame-child81" />
          <div class="question-type-content-wrapper">
            <div class="question-type-content">
              <div class="loi-cu-hi2">Loại câu hỏi:</div>
              <div class="question-type-dropdown">
                <div class="rectangle-parent42">
                  <div class="frame-child82" />
                  <img
                    class="weuiarrow-filled-icon20"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="difficulty-content-wrapper">
            <div class="difficulty-content">
              <div class="loi-cu-hi2">Độ khó:</div>
              <div class="rectangle-parent43">
                <div class="frame-child82" />
                <img
                  class="weuiarrow-filled-icon20"
                  loading="lazy"
                  alt=""
                  src="/weuiarrowfilled@2x.png"
                />
              </div>
            </div>
          </div>
          <div class="subject-scope-content-wrapper">
            <div class="difficulty-content">
              <div class="subject-scope-fields">
                <div class="lp3">Lớp:</div>
                <div class="subject-scope-labels">
                  <div class="mn7">Môn</div>
                </div>
                <div class="subject-scope-labels1">
                  <div class="mn7">Phạm vi:</div>
                </div>
              </div>
              <div class="subject-scope-dropdowns">
                <div class="rectangle-parent44">
                  <div class="frame-child82" />
                  <img
                    class="weuiarrow-filled-icon20"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
                <div class="rectangle-parent44">
                  <div class="frame-child82" />
                  <img
                    class="weuiarrow-filled-icon20"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
                <div class="add-subject">
                  <img
                    class="zondiconsadd-solid5"
                    loading="lazy"
                    alt=""
                    src="/zondiconsaddsolid.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="frame-child86" />
          <div class="question-content2">
            <div class="question-input1">
              <div class="question-input-area">
                <div class="formatted-input">
                  <div class="input-wrapper">
                    <div class="tm-x-x2">Tìm x: x + 1 = 4</div>
                  </div>
                  <img
                    class="phcode-bold-icon4"
                    loading="lazy"
                    alt=""
                    src="/phcodebold.svg"
                  />
                </div>
              </div>
              <div class="rectangle-parent46">
                <div class="answer-inputs-child" />
                <div class="placeholder" />
                <div class="formula-variable">
                  <b class="x16">x</b>
                </div>
              </div>
            </div>
          </div>
          <div class="another-formula-input">
            <div class="rectangle-parent47">
              <div class="answer-inputs-child" />
              <div class="placeholder" />
              <input class="formula-variable1" placeholder="x" type="text" />
            </div>
          </div>
          <div class="answer-options">
            <div class="answer-input-area">
              <div class="rectangle-parent46">
                <div class="answer-inputs-child" />
                <div class="placeholder" />
                <div class="x-frame">
                  <b class="x16">x</b>
                </div>
              </div>
              <div class="rectangle-parent46">
                <div class="answer-inputs-child" />
                <div class="placeholder" />
                <div class="x-frame">
                  <b class="x16">x</b>
                </div>
              </div>
              <div class="answer-inputs">
                <div class="answer-inputs-child" />
                <b class="thm-p-n3">+ Thêm đáp án</b>
              </div>
            </div>
          </div>
          <div class="save-button-wrapper-wrapper">
            <div class="save-button-wrapper">
              <div
                class="save-button-background1"
                @click="onSaveButtonBackgroundClick"
              />
              <b class="lu5">Lưu</b>
            </div>
          </div>
        </div>
      </section>
      <img
        class="phbook-bold-icon11"
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
    <div class="status-bar">
      <div class="status-bar-icons">
        <div class="x34">x=3</div>
        <div class="x34">x=2</div>
        <div class="x34">x=4</div>
        <div class="x34">x=5</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent3 from "../components/FrameComponent3.vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "EditQuestion",
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
      onSaveButtonBackgroundClick() {
        this.$router.push("/question");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon21 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon21 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon20 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .question-header-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon21 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .question-header6 {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .content-area {
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
  .wpfstatistics-icon21 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child79 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng-cu6 {
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
  .question-bank-header {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child80 {
    width: 49px;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .frame-child81 {
    align-self: stretch;
    height: 715px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .loi-cu-hi2 {
    width: 161px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 4;
  }
  .frame-child82 {
    height: 28px;
    width: 1067px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .weuiarrow-filled-icon20 {
    height: 20px;
    width: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent42 {
    margin-left: -8px;
    align-self: stretch;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-9xs);
    flex-shrink: 0;
    max-width: 100%;
    z-index: 5;
  }
  .question-type-dropdown {
    width: 1059px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .question-type-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 20px;
    max-width: 100%;
  }
  .question-type-content-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-5xl) var(--padding-2xl) var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle-parent43 {
    flex: 1;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-9xs);
    min-width: 30px;
    max-width: 100%;
    z-index: 5;
    margin-left: -11px;
  }
  .difficulty-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .difficulty-content-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-5xl) var(--padding-2xl) var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .lp3 {
    width: 153px;
    position: relative;
    display: inline-block;
    z-index: 4;
  }
  .mn7 {
    flex: 1;
    position: relative;
    z-index: 4;
  }
  .subject-scope-labels {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xs) 0px var(--padding-10xs);
  }
  .subject-scope-labels1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .subject-scope-fields {
    width: 164px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid-5);
  }
  .rectangle-parent44 {
    align-self: stretch;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-9xs);
    max-width: 100%;
    z-index: 5;
  }
  .zondiconsadd-solid5 {
    height: 40px;
    width: 40px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .add-subject {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .subject-scope-dropdowns {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-base);
    min-width: 699px;
    max-width: 100%;
    margin-left: -20px;
  }
  .subject-scope-content-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-5xl) var(--padding-lgi) var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child86 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .tm-x-x2 {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .input-wrapper {
    width: 387px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .phcode-bold-icon4 {
    height: 42px;
    width: 42px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 5;
  }
  .formatted-input {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .question-input-area {
    width: 1098px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .placeholder {
    height: 16px;
    width: 16px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .x16 {
    align-self: stretch;
    height: 14.1px;
    position: relative;
    line-height: 25px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .formula-variable {
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs-4) 0px 0px;
    box-sizing: border-box;
  }
  .rectangle-parent46 {
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
  .question-input1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    max-width: 100%;
  }
  .question-content2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xl) var(--padding-mini) var(--padding-10xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .formula-variable1 {
    width: 35px;
    border: none;
    outline: none;
    background-color: transparent;
    height: 14.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs-4) 0px 0px;
    box-sizing: border-box;
    font-family: var(--font-inter);
    font-weight: 700;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
  }
  .rectangle-parent47 {
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
  .another-formula-input {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xl) var(--padding-xs) var(--padding-10xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .x-frame {
    height: 14.1px;
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs-4) 0px 0px;
    box-sizing: border-box;
  }
  .answer-inputs-child {
    height: 38px;
    width: 1203px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .thm-p-n3 {
    width: 319px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 5;
  }
  .answer-inputs {
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
  .answer-input-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    max-width: 100%;
  }
  .answer-options {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xl) var(--padding-12xl) var(--padding-10xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .save-button-background1 {
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
  .lu5 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .save-button-wrapper {
    height: 56px;
    flex: 1;
    position: relative;
  }
  .save-button-wrapper-wrapper {
    width: 365px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 63px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .line-parent6 {
    align-self: stretch;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px var(--padding-56xl);
    max-width: 100%;
    z-index: 3;
    font-size: var(--font-size-5xl);
  }
  .rectangle-parent41 {
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
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .phbook-bold-icon11 {
    position: absolute;
    top: 501px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-parent5 {
    width: 1486px;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    bottom: 16px;
    left: -46px;
    z-index: 1;
  }
  .x34 {
    align-self: stretch;
    position: relative;
    z-index: 5;
  }
  .status-bar-icons {
    width: 212px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-3);
  }
  .status-bar {
    width: 666px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .editquestion {
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

  @media screen and (max-width: 1275px) {
    .question-type-content {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1100px) {
    .subject-scope-dropdowns {
      min-width: 100%;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 750px) {
    .ngn-hng-cu6 {
      font-size: var(--font-size-13xl);
    }

    .formatted-input {
      flex-wrap: wrap;
    }

    .editquestion {
      gap: var(--gap-236xl);
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu6 {
      font-size: var(--font-size-5xl);
    }

    .loi-cu-hi2 {
      font-size: var(--font-size-lgi);
    }

    .rectangle-parent43 {
      margin-left: 0;
    }

    .lp3 {
      font-size: var(--font-size-lgi);
    }

    .mn7 {
      font-size: var(--font-size-lgi);
    }

    .tm-x-x2 {
      font-size: var(--font-size-lgi);
    }

    .x16 {
      font-size: var(--font-size-lgi);
      line-height: 20px;
    }

    .thm-p-n3 {
      font-size: var(--font-size-lgi);
    }

    .lu5 {
      font-size: var(--font-size-lgi);
    }

    .icoutline-folder-parent5 {
      height: auto;
      min-height: 910;
    }

    .x34 {
      font-size: var(--font-size-lgi);
    }

    .editquestion {
      gap: var(--gap-109xl);
    }
  }
</style>
