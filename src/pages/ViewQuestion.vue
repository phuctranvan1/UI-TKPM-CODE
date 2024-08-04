<template>
  <div class="viewquestion">
    <FrameComponent
      frameDivHeight="unset"
      frameDivMinWidth="unset"
      frameDivHeight1="unset"
      frameDivWidth="unset"
    />
    <main class="icoutline-folder-parent3">
      <img
        class="icoutline-folder-icon17"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon17"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon16"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onIcomoonFreehomeClick"
      />
      <div class="frame-wrapper5">
        <div class="vector-container">
          <img class="frame-child63" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon17"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon17"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <img
        class="phbook-bold-icon9"
        loading="lazy"
        alt=""
        src="/phbookbold.svg"
        @click="onPhbookBoldClick"
      />
      <section class="rectangle-parent34">
        <div class="frame-child64" />
        <FrameComponent4 />
        <div class="line-parent5">
          <div class="frame-child65" />
          <div class="frame-child66" />
          <div class="zondiconsadd-solid4" />
          <div class="difficulty-filter">
            <div class="filter-label">
              <div class="loi-cu-hi1">Loại câu hỏi:</div>
              <div class="filter-label-inner">
                <div class="rectangle-parent35">
                  <div class="frame-child67" />
                  <img
                    class="weuiarrow-filled-icon16"
                    loading="lazy"
                    alt=""
                    src="/weuiarrowfilled@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="difficulty-filter1">
            <div class="kh-parent">
              <div class="loi-cu-hi1">Độ khó:</div>
              <div class="rectangle-parent36">
                <div class="frame-child67" />
                <img
                  class="weuiarrow-filled-icon16"
                  loading="lazy"
                  alt=""
                  src="/weuiarrowfilled@2x.png"
                />
              </div>
            </div>
          </div>
          <div class="subject-filter">
            <div class="subject-filter-inner">
              <div class="kh-parent">
                <div class="subject-dropdown2">
                  <div class="lp2">Lớp:</div>
                  <div class="subject-label">
                    <div class="mn4">Môn</div>
                  </div>
                  <div class="subject-label1">
                    <div class="mn4">Phạm vi:</div>
                  </div>
                </div>
                <div class="frame-parent6">
                  <div class="rectangle-parent37">
                    <div class="frame-child67" />
                    <img
                      class="weuiarrow-filled-icon16"
                      loading="lazy"
                      alt=""
                      src="/weuiarrowfilled@2x.png"
                    />
                  </div>
                  <div class="rectangle-parent37">
                    <div class="frame-child67" />
                    <img
                      class="weuiarrow-filled-icon16"
                      loading="lazy"
                      alt=""
                      src="/weuiarrowfilled@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="subject-filter-child" />
            <div class="question-content1">
              <div class="tm-x-x-1-4-parent">
                <div class="tm-x-x1">Tìm x: x + 1 = 4</div>
                <div class="input-fields">
                  <div class="input-field-container">
                    <div class="input-boxes">
                      <div class="input-boxes-inner">
                        <div class="frame-child71" />
                      </div>
                      <div class="x33">x=3</div>
                    </div>
                    <div class="input-boxes">
                      <div class="input-boxes-child">
                        <div class="frame-child71" />
                      </div>
                      <div class="x33">x=2</div>
                    </div>
                    <div class="input-boxes">
                      <div class="ellipse-wrapper">
                        <div class="frame-child71" />
                      </div>
                      <div class="x43">x=4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="last-input">
              <div class="frame-parent7">
                <div class="ellipse-wrapper">
                  <div class="frame-child71" />
                </div>
                <div class="x33">x=5</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import FrameComponent4 from "../components/FrameComponent4.vue";

  export default defineComponent({
    name: "ViewQuestion",
    components: { FrameComponent, FrameComponent4 },
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
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon17 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon17 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon16 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child63 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon17 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .vector-container {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .frame-wrapper5 {
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
  .wpfstatistics-icon17 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .phbook-bold-icon9 {
    position: absolute;
    top: 512px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child64 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .frame-child65 {
    width: 49px;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .frame-child66 {
    align-self: stretch;
    height: 715px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .zondiconsadd-solid4 {
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .loi-cu-hi1 {
    width: 161px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 4;
  }
  .frame-child67 {
    height: 28px;
    width: 1067px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .weuiarrow-filled-icon16 {
    height: 20px;
    width: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent35 {
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
  .filter-label-inner {
    width: 1059px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .filter-label {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 20px;
    max-width: 100%;
  }
  .difficulty-filter {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 0px var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle-parent36 {
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
  .kh-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .difficulty-filter1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .lp2 {
    width: 153px;
    position: relative;
    display: inline-block;
    z-index: 4;
  }
  .mn4 {
    flex: 1;
    position: relative;
    z-index: 4;
  }
  .subject-label {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xs) 0px var(--padding-10xs);
  }
  .subject-label1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .subject-dropdown2 {
    width: 164px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid-5);
  }
  .rectangle-parent37 {
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
  .frame-parent6 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
    min-width: 694px;
    max-width: 100%;
    margin-left: -11px;
  }
  .subject-filter-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) var(--padding-lgi) var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .subject-filter-child {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .tm-x-x1 {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .frame-child71 {
    width: 16px;
    height: 16px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .input-boxes-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs) 0px 0px;
  }
  .x33 {
    flex: 1;
    position: relative;
    display: inline-block;
    min-width: 32px;
    z-index: 4;
  }
  .input-boxes {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .input-boxes-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
  }
  .x43 {
    flex: 1;
    position: relative;
    display: inline-block;
    min-width: 33px;
    z-index: 4;
  }
  .input-field-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
  }
  .input-fields {
    width: 255px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
  }
  .tm-x-x-1-4-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
    max-width: 100%;
  }
  .question-content1 {
    width: 493px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-34xl) var(--padding-sm);
    box-sizing: border-box;
    max-width: 100%;
  }
  .ellipse-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .frame-parent7 {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .last-input {
    width: 361px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-38xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .subject-filter {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    max-width: 100%;
  }
  .line-parent5 {
    align-self: stretch;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px 214px;
    gap: var(--gap-2xl);
    max-width: 100%;
    z-index: 3;
  }
  .rectangle-parent34 {
    position: absolute;
    top: 0px;
    left: 183.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 1302.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-5xl) var(--padding-3xl)
      var(--padding-mini);
    box-sizing: border-box;
    gap: 28px;
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .icoutline-folder-parent3 {
    width: 1486px;
    height: 910px;
    position: relative;
    max-width: 104%;
    flex-shrink: 0;
    z-index: 1;
  }
  .viewquestion {
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

  @media screen and (max-width: 1250px) {
    .filter-label {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1050px) {
    .frame-parent6 {
      min-width: 100%;
      margin-left: 0;
    }

    .icoutline-folder-parent3 {
      height: auto;
      min-height: 910;
    }

    .viewquestion {
      height: auto;
    }
  }
  @media screen and (max-width: 450px) {
    .loi-cu-hi1 {
      font-size: var(--font-size-lgi);
    }

    .rectangle-parent36 {
      margin-left: 0;
    }

    .lp2 {
      font-size: var(--font-size-lgi);
    }

    .mn4 {
      font-size: var(--font-size-lgi);
    }

    .tm-x-x1 {
      font-size: var(--font-size-lgi);
    }

    .x33 {
      font-size: var(--font-size-lgi);
    }

    .x43 {
      font-size: var(--font-size-lgi);
    }
  }
</style>
