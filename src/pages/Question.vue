<template>
  <div class="question">
    <FrameComponent
      frameDivHeight="64px"
      frameDivMinWidth="250px"
      frameDivHeight1="36px"
      frameDivWidth="34.3px"
      searchPlaceholder="Search"
      searchPlaceholder1="Search"
      searchPlaceholder2="Search"
      searchPlaceholder3="Search"
      searchPlaceholder4="Search"
      searchPlaceholder5="Search"
      searchPlaceholder6="Search"
      searchPlaceholder7="Search"
      searchPlaceholder8="Search"
      searchPlaceholder9="Search"
      searchPlaceholder10="Search"
      searchPlaceholder11="Search"
      searchPlaceholder12="Search"
    />
    <main class="group-main">
      <img
        class="icoutline-folder-icon11"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
        @click="onIcoutlineFolderClick"
      />
      <img
        class="epsetting-icon11"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img
        class="icomoon-freehome3-icon10"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onIcomoonFreehomeClick"
      />
      <div class="frame-wrapper3">
        <div class="vector-group">
          <img class="frame-child35" alt="" src="/ellipse-1.svg" />
          <img
            class="wpfask-question-icon11"
            loading="lazy"
            alt=""
            src="/wpfaskquestion.svg"
          />
        </div>
      </div>
      <img
        class="wpfstatistics-icon11"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <div class="rectangle-parent19">
        <div class="frame-child36" />
        <div class="ngn-hng-cu-hi-wrapper">
          <h1 class="ngn-hng-cu2">Ngân hàng câu hỏi</h1>
        </div>
        <div class="question-navigation">
          <div class="frame-parent4">
            <div class="arrowleftcirclefill-parent">
              <img
                class="arrowleftcirclefill-icon5"
                loading="lazy"
                alt=""
                src="/arrowleftcirclefill.svg"
                @click="onIcomoonFreehomeClick"
              />
              <div class="tt-c-cu-hi-wrapper">
                <h1 class="tt-c-cu">Tất cả câu hỏi</h1>
              </div>
            </div>
            <div class="pagination">
              <div class="trang-wrapper">
                <h2 class="trang">Trang:</h2>
              </div>
              <div class="page-input-parent">
                <div class="page-input">
                  <div class="page-input-inner">
                    <div class="weuiarrow-filled-parent">
                      <img
                        class="weuiarrow-filled-icon8"
                        loading="lazy"
                        alt=""
                        src="/weuiarrowfilled1.svg"
                      />
                      <img
                        class="weuiarrow-filled-icon9"
                        alt=""
                        src="/weuiarrowfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div class="add-question">
                    <div class="plus-icon-wrapper">
                      <img
                        class="plus-icon"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <img
                      class="basiladd-outline-icon"
                      loading="lazy"
                      alt=""
                      src="/basiladdoutline.svg"
                      @click="onBasiladdOutlineIconClick"
                    />
                  </div>
                </div>
                <div class="rectangle-parent20">
                  <div class="frame-child37" />
                  <img
                    class="bilist-icon"
                    loading="lazy"
                    alt=""
                    src="/bilist.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-header">
          <div class="line-parent2">
            <div class="frame-child38" />
            <div class="frame-child39" />
            <img class="header-separator-icon" loading="lazy" alt="" />
            <img class="action-backgrounds-icon" alt="" />
            <img class="action-backgrounds-icon1" alt="" />
            <div class="action-backgrounds">
              <div class="action-icons" @click="onActionIconsClick" />
              <div class="xem">Xem</div>
            </div>
            <div class="action-backgrounds1">
              <div class="action-icons" @click="onRectangleClick" />
              <div class="xa">Xóa</div>
            </div>
            <div class="action-backgrounds2">
              <div class="action-backgrounds-item" @click="onRectangleClick1" />
              <div class="sa">Sửa</div>
            </div>
            <div class="action-backgrounds3">
              <div
                class="action-backgrounds-inner"
                @click="onActionIconsClick"
              />
              <div class="xem1">Xem</div>
            </div>
            <div class="action-backgrounds4">
              <div class="action-backgrounds-inner" @click="onRectangleClick" />
              <div class="xa1">Xóa</div>
            </div>
            <div class="action-backgrounds5">
              <div class="action-icons" @click="onRectangleClick2" />
              <div class="xa">Sửa</div>
            </div>
            <div class="action-backgrounds6">
              <div class="action-icons" @click="onRectangleClick3" />
              <div class="xem">Xem</div>
            </div>
            <div class="action-backgrounds7">
              <div class="action-icons" @click="onRectangleClick" />
              <div class="xa">Xóa</div>
            </div>
            <div class="action-backgrounds8">
              <div class="action-backgrounds-item" @click="onRectangleClick1" />
              <div class="sa">Sửa</div>
            </div>
            <div class="action-backgrounds9">
              <div class="action-icons" @click="onRectangleClick3" />
              <div class="xem">Xem</div>
            </div>
            <div class="action-backgrounds10">
              <div class="action-icons" @click="onRectangleClick" />
              <div class="xa">Xóa</div>
            </div>
            <div class="action-backgrounds11">
              <div class="action-backgrounds-item" @click="onRectangleClick2" />
              <div class="sa">Sửa</div>
            </div>
            <div class="action-backgrounds12">
              <div class="action-icons" @click="onRectangleClick3" />
              <div class="xem">Xem</div>
            </div>
            <div class="action-backgrounds13">
              <div class="action-icons" @click="onRectangleClick" />
              <div class="xa">Xóa</div>
            </div>
            <div class="action-backgrounds14">
              <div class="action-backgrounds-item" @click="onRectangleClick2" />
              <div class="sa">Sửa</div>
            </div>
            <div class="action-backgrounds15">
              <div
                class="action-backgrounds-inner"
                @click="onActionIconsClick"
              />
              <div class="xem1">Xem</div>
            </div>
            <div class="action-backgrounds16">
              <div class="action-backgrounds-inner" @click="onRectangleClick" />
              <div class="xa1">Xóa</div>
            </div>
            <div class="action-backgrounds17">
              <div class="action-icons" @click="onRectangleClick2" />
              <div class="xa">Sửa</div>
            </div>
            <div class="action-backgrounds18">
              <div
                class="action-backgrounds-inner"
                @click="onActionIconsClick"
              />
              <div class="xem1">Xem</div>
            </div>
            <div class="action-backgrounds19">
              <div class="action-backgrounds-inner" @click="onRectangleClick" />
              <div class="xa1">Xóa</div>
            </div>
            <div class="action-backgrounds20">
              <div class="action-icons" @click="onRectangleClick2" />
              <div class="xa">Sửa</div>
            </div>
            <div class="action-backgrounds21">
              <div
                class="action-backgrounds-inner"
                @click="onRectangleClick3"
              />
              <div class="xem1">Xem</div>
            </div>
            <div class="action-backgrounds22">
              <div class="action-backgrounds-inner" @click="onRectangleClick" />
              <div class="xa1">Xóa</div>
            </div>
            <div class="action-backgrounds23">
              <div class="action-icons" @click="onRectangleClick2" />
              <div class="xa">Sửa</div>
            </div>
          </div>
          <img class="content-separator-icon" alt="" />
        </div>
      </div>
      <img
        class="phbook-bold-icon6"
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

  export default defineComponent({
    name: "Question",
    components: { FrameComponent },
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
      onBasiladdOutlineIconClick() {
        this.$router.push("/addquestion");
      },
      onActionIconsClick() {
        this.$router.push("/viewgroupqetion");
      },
      onRectangleClick() {
        this.$router.push("/deleteconfirmquestion");
      },
      onRectangleClick1() {
        this.$router.push("/editgroupquestion");
      },
      onRectangleClick2() {
        this.$router.push("/editquestion");
      },
      onRectangleClick3() {
        this.$router.push("/viewquestion");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon11 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon11 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon10 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child35 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wpfask-question-icon11 {
    position: absolute;
    top: 18.5px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .vector-group {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -46px;
  }
  .frame-wrapper3 {
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
  .wpfstatistics-icon11 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child36 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng-cu2 {
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
  .ngn-hng-cu-hi-wrapper {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .arrowleftcirclefill-icon5 {
    height: 61px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .tt-c-cu {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .tt-c-cu-hi-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .arrowleftcirclefill-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .trang {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .trang-wrapper {
    width: 127px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
  }
  .weuiarrow-filled-icon8 {
    align-self: stretch;
    width: 24px;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    min-height: 36px;
    z-index: 2;
  }
  .weuiarrow-filled-icon9 {
    align-self: stretch;
    width: 24px;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 36px;
    z-index: 2;
  }
  .weuiarrow-filled-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .page-input-inner {
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-8xs);
    box-sizing: border-box;
  }
  .plus-icon {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 2;
  }
  .plus-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .basiladd-outline-icon {
    height: 50px;
    width: 50px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .add-question {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xl);
  }
  .page-input {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    min-width: 151px;
    gap: var(--gap-xl);
  }
  .frame-child37 {
    height: 46px;
    width: 137px;
    position: relative;
    background-color: var(--color-gainsboro);
    display: none;
  }
  .bilist-icon {
    height: 30px;
    width: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 3;
  }
  .rectangle-parent20 {
    width: 137px;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-base);
    box-sizing: border-box;
    z-index: 2;
  }
  .page-input-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-8xl);
    min-width: 257px;
    max-width: 100%;
  }
  .pagination {
    width: 636px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-94xl);
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .frame-parent4 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .question-navigation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child38 {
    position: absolute;
    top: 244px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    display: none;
  }
  .frame-child39 {
    position: absolute;
    top: 3px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .header-separator-icon {
    position: absolute;
    top: 0px;
    left: 631px;
    width: 1px;
    height: 718px;
    object-fit: contain;
    z-index: 1;
  }
  .action-backgrounds-icon {
    position: absolute;
    top: 166px;
    left: -2px;
    width: 1265px;
    height: 4px;
    object-fit: contain;
    z-index: 4;
  }
  .action-backgrounds-icon1 {
    position: absolute;
    top: 366px;
    left: -2px;
    width: 1265px;
    height: 7px;
    object-fit: contain;
    z-index: 4;
  }
  .action-icons {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 5;
  }
  .xem {
    position: absolute;
    top: 3px;
    left: 25px;
    display: inline-block;
    width: 49px;
    height: 24px;
    z-index: 6;
  }
  .action-backgrounds {
    position: absolute;
    top: 134px;
    left: 1px;
    width: 91px;
    height: 32px;
  }
  .xa {
    position: absolute;
    top: 3px;
    left: 26px;
    display: inline-block;
    width: 49px;
    height: 24px;
    z-index: 6;
  }
  .action-backgrounds1 {
    position: absolute;
    top: 134px;
    left: 183px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds-item {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 6;
  }
  .sa {
    position: absolute;
    top: 3px;
    left: 26px;
    display: inline-block;
    width: 49px;
    height: 24px;
    z-index: 7;
  }
  .action-backgrounds2 {
    position: absolute;
    top: 134px;
    left: 92px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds-inner {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 4;
  }
  .xem1 {
    position: absolute;
    top: 3px;
    left: 25px;
    display: inline-block;
    width: 49px;
    height: 24px;
    z-index: 5;
  }
  .action-backgrounds3 {
    position: absolute;
    top: 684px;
    left: 632px;
    width: 91px;
    height: 32px;
  }
  .xa1 {
    position: absolute;
    top: 3px;
    left: 26px;
    display: inline-block;
    width: 49px;
    height: 24px;
    z-index: 5;
  }
  .action-backgrounds4 {
    position: absolute;
    top: 684px;
    left: 814px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds5 {
    position: absolute;
    top: 684px;
    left: 723px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds6 {
    position: absolute;
    top: 513px;
    left: 632px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds7 {
    position: absolute;
    top: 513px;
    left: 814px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds8 {
    position: absolute;
    top: 513px;
    left: 723px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds9 {
    position: absolute;
    top: 337px;
    left: 634px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds10 {
    position: absolute;
    top: 337px;
    left: 816px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds11 {
    position: absolute;
    top: 337px;
    left: 725px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds12 {
    position: absolute;
    top: 136px;
    left: 629px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds13 {
    position: absolute;
    top: 136px;
    left: 811px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds14 {
    position: absolute;
    top: 136px;
    left: 720px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds15 {
    position: absolute;
    top: 684px;
    left: 1px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds16 {
    position: absolute;
    top: 684px;
    left: 183px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds17 {
    position: absolute;
    top: 684px;
    left: 92px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds18 {
    position: absolute;
    top: 510px;
    left: 0px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds19 {
    position: absolute;
    top: 510px;
    left: 182px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds20 {
    position: absolute;
    top: 510px;
    left: 91px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds21 {
    position: absolute;
    top: 332px;
    left: 1px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds22 {
    position: absolute;
    top: 332px;
    left: 183px;
    width: 91px;
    height: 32px;
  }
  .action-backgrounds23 {
    position: absolute;
    top: 332px;
    left: 92px;
    width: 91px;
    height: 32px;
  }
  .line-parent2 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .content-separator-icon {
    position: absolute;
    top: 544px;
    left: 4px;
    width: 1265px;
    height: 4px;
    object-fit: contain;
    z-index: 4;
  }
  .table-header {
    align-self: stretch;
    height: 718px;
    position: relative;
    font-size: var(--font-size-xl);
  }
  .rectangle-parent19 {
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
    gap: var(--gap-6xl);
    max-width: 100%;
    z-index: 1;
  }
  .phbook-bold-icon6 {
    position: absolute;
    top: 502px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .group-main {
    width: 1486px;
    height: 910px;
    position: relative;
    max-width: 104%;
    flex-shrink: 0;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .question {
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

  @media screen and (max-width: 1050px) {
    .frame-parent4 {
      flex-wrap: wrap;
      justify-content: center;
    }

    .group-main {
      height: auto;
      min-height: 910;
    }

    .question {
      height: auto;
    }
  }
  @media screen and (max-width: 1000px) {
    .ngn-hng-cu2 {
      font-size: var(--font-size-13xl);
    }

    .tt-c-cu {
      font-size: var(--font-size-13xl);
    }

    .trang {
      font-size: var(--font-size-7xl);
    }
  }
  @media screen and (max-width: 725px) {
    .pagination {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng-cu2 {
      font-size: var(--font-size-5xl);
    }

    .tt-c-cu {
      font-size: var(--font-size-5xl);
    }

    .arrowleftcirclefill-parent {
      flex-wrap: wrap;
    }

    .trang {
      font-size: var(--font-size-lgi);
    }

    .page-input-parent {
      flex-wrap: wrap;
    }

    .xem {
      font-size: var(--font-size-base);
    }

    .xa {
      font-size: var(--font-size-base);
    }

    .sa {
      font-size: var(--font-size-base);
    }

    .xem1 {
      font-size: var(--font-size-base);
    }

    .xa1 {
      font-size: var(--font-size-base);
    }
  }
</style>
