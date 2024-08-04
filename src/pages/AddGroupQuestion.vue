<template>
  <div class="addgroupquestion1">
    <FrameComponent
      frameDivHeight="unset"
      frameDivMinWidth="unset"
      frameDivHeight1="unset"
      frameDivWidth="unset"
    />
    <main class="icoutline-folder-parent2">
      <img
        class="icoutline-folder-icon15"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon15"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon14"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onIcomoonFreehomeClick"
      />
      <div class="question-prompt">
        <div class="prompt-icon">
          <img class="prompt-icon-child" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon15"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon15"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <section class="rectangle-parent30">
        <div class="frame-child56" />
        <div class="question-bank-title">
          <h2 class="ngn-hng-cu4">Ngân hàng câu hỏi</h2>
        </div>
        <FrameComponent3 thmNhmCuHi="Thêm nhóm câu hỏi" />
        <footer class="line-parent4">
          <div class="frame-child57" />
          <div class="frame-child58" />
          <div class="form-fields-wrapper">
            <div class="form-fields">
              <div class="subject-selection">
                <div class="subject-dropdown">
                  <div class="mn-hc">Lớp:</div>
                </div>
                <div class="subject-dropdown1">
                  <div class="mn-hc">Môn học:</div>
                </div>
                <div class="thm-ti-liu">Phạm vi:</div>
              </div>
              <div class="scope-selection">
                <div class="rectangle-parent31">
                  <div class="frame-child59" />
                  <img
                    class="weuiarrow-filled-icon14"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
                <div class="rectangle-parent31">
                  <div class="frame-child59" />
                  <img
                    class="weuiarrow-filled-icon14"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
                <div class="add-scope-button">
                  <img
                    class="zondiconsadd-solid3"
                    loading="lazy"
                    alt=""
                    src="/zondiconsaddsolid.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="frame-child61" />
          <div class="document-upload">
            <div class="document-container">
              <div class="document-details">
                <div class="document-title-wrapper">
                  <div class="document-title">
                    <div class="thm-ti-liu-wrapper">
                      <div class="thm-ti-liu">Thêm tài liệu</div>
                    </div>
                    <img
                      class="phcode-bold-icon3"
                      loading="lazy"
                      alt=""
                      src="/phcodebold.svg"
                    />
                  </div>
                </div>
                <textarea
                  class="document-placeholder"
                  placeholder="Tài liệu ở đây"
                  rows="16"
                  cols="60"
                />
              </div>
              <button class="upload-button">
                <div class="upload-button-container">
                  <div
                    class="button-background"
                    @click="onButtonBackgroundClick"
                  />
                  <b class="tip-tc">Tiếp tục</b>
                </div>
              </button>
            </div>
          </div>
        </footer>
      </section>
      <img
        class="phbook-bold-icon8"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onPhbookBoldClick"
      />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import FrameComponent3 from "../components/FrameComponent3.vue";

  export default defineComponent({
    name: "AddGroupQuestion",
    components: { FrameComponent, FrameComponent3 },
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
      onButtonBackgroundClick() {
        this.$router.push("/addgroupquestion2");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon15 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon15 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon14 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .prompt-icon-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon15 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .prompt-icon {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .question-prompt {
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
  .wpfstatistics-icon15 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child56 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng-cu4 {
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
  .question-bank-title {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child57 {
    width: 49px;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .frame-child58 {
    align-self: stretch;
    height: 715px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .subject-dropdown {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xs) 0px var(--padding-7xs);
  }
  .mn-hc {
    flex: 1;
    position: relative;
    z-index: 4;
  }
  .subject-dropdown1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .subject-selection {
    width: 164px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl);
  }
  .frame-child59 {
    height: 28px;
    width: 1067px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .weuiarrow-filled-icon14 {
    height: 20px;
    width: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent31 {
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
  .zondiconsadd-solid3 {
    height: 40px;
    width: 40px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .add-scope-button {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .scope-selection {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xl);
    min-width: 699px;
    max-width: 100%;
    margin-left: -20px;
  }
  .form-fields {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .form-fields-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) var(--padding-4xs) var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child61 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .thm-ti-liu {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .thm-ti-liu-wrapper {
    width: 387px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .phcode-bold-icon3 {
    height: 42px;
    width: 42px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 4;
  }
  .document-title {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .document-title-wrapper {
    width: 1098px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .document-placeholder {
    border: 1px solid var(--color-black);
    background-color: var(--color-white);
    height: 311px;
    width: auto;
    outline: none;
    align-self: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xl) 37px;
    font-family: var(--font-inter);
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    z-index: 4;
  }
  .document-details {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    max-width: 100%;
  }
  .button-background {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 4;
  }
  .tip-tc {
    position: absolute;
    top: 11px;
    left: 60px;
    font-size: var(--font-size-5xl);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-black);
    text-align: left;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .upload-button-container {
    height: 56px;
    flex: 1;
    position: relative;
    white-space: nowrap;
  }
  .upload-button {
    cursor: pointer;
    border: none;
    padding: 0px 56px;
    background-color: transparent;
    width: 327px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    box-sizing: border-box;
    max-width: 100%;
  }
  .document-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-8xl);
    max-width: 100%;
  }
  .document-upload {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xl) 0px var(--padding-10xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .line-parent4 {
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
    gap: var(--gap-base);
    max-width: 100%;
    z-index: 3;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .rectangle-parent30 {
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
  .phbook-bold-icon8 {
    position: absolute;
    top: 493px;
    left: 80px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icoutline-folder-parent2 {
    width: 1486px;
    height: 910px;
    position: relative;
    max-width: 104%;
    flex-shrink: 0;
    z-index: 1;
  }
  .addgroupquestion1 {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-3xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 850px) {
    .ngn-hng-cu4 {
      font-size: var(--font-size-13xl);
    }

    .scope-selection {
      min-width: 100%;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 675px) {
    .document-title {
      flex-wrap: wrap;
    }

    .icoutline-folder-parent2 {
      height: auto;
      min-height: 910;
    }

    .addgroupquestion1 {
      height: auto;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu4 {
      font-size: var(--font-size-5xl);
    }

    .mn-hc {
      font-size: var(--font-size-lgi);
    }

    .thm-ti-liu {
      font-size: var(--font-size-lgi);
    }
  }
</style>
