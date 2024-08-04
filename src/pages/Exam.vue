<template>
  <div class="exam">
    <FrameComponent />
    <main class="app-toolbar">
      <div class="folder-button">
        <div class="vector-parent1">
          <img class="frame-child100" alt="" src="/ellipse-11.svg" />
          <img
            class="icoutline-folder-icon23"
            loading="lazy"
            alt=""
            src="/icoutlinefolder.svg"
          />
        </div>
      </div>
      <img
        class="epsetting-icon23"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <section class="test-bank-button">
        <div class="test-bank-button-child" />
        <div class="ngn-hng-thi-wrapper2">
          <h1 class="ngn-hng8">Ngân hàng đề thi</h1>
        </div>
        <div class="navigation7">
          <div class="navigation-controls">
            <div class="arrowleftcirclefill-container">
              <img
                class="arrowleftcirclefill-icon14"
                loading="lazy"
                alt=""
                src="/arrowleftcirclefill.svg"
                @click="onArrowLeftCircleFillClick"
              />
              <div class="tt-c-thi-wrapper">
                <h1 class="tt-c">Tất cả đề thi</h1>
              </div>
            </div>
            <div class="pagination1">
              <div class="trang-container">
                <a class="trang2">Trang: </a>
              </div>
              <div class="page-controls">
                <div class="frame-parent8">
                  <div class="frame-wrapper6">
                    <div class="weuiarrow-filled-group">
                      <img
                        class="weuiarrow-filled-icon26"
                        loading="lazy"
                        alt=""
                        src="/weuiarrowfilled1.svg"
                      />
                      <img
                        class="weuiarrow-filled-icon27"
                        alt=""
                        src="/weuiarrowfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div class="add-button">
                    <div class="add-icon-wrapper">
                      <img
                        class="add-icon"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <img
                      class="basiladd-outline-icon2"
                      loading="lazy"
                      alt=""
                      src="/basiladdoutline.svg"
                      @click="onBasiladdOutlineIconClick"
                    />
                  </div>
                </div>
                <div class="list-view-button">
                  <div class="list-view-button-child" />
                  <img
                    class="bilist-icon2"
                    loading="lazy"
                    alt=""
                    src="/bilist.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent9">
          <div class="list-divider-parent">
            <div class="list-divider1" />
            <div class="frame-child101" />
            <img class="list-divider-icon" loading="lazy" alt="" />
            <img class="frame-child102" alt="" />
            <img class="frame-child103" alt="" />
            <div class="rectangle-parent57" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent58" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent59" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent60" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent61" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent62">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent63">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent64">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent65">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent66">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent67">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent68">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent69">
              <div class="frame-child104" />
              <div class="xa17">Xóa</div>
            </div>
            <div class="rectangle-parent70" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent71" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent72" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent73" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent74" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent75" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent76" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent77" @click="onGroupContainerClick">
              <div class="frame-child104" />
              <div class="xem16">Xem</div>
            </div>
            <div class="rectangle-parent78" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent79" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
            <div class="rectangle-parent80" @click="onGroupContainerClick1">
              <div class="frame-child104" />
              <div class="xa17">Sửa</div>
            </div>
          </div>
          <img class="list-divider-icon1" alt="" />
        </div>
      </section>
      <img
        class="icomoon-freehome3-icon22"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="wpfask-question-icon23"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon23"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <img
        class="phbook-bold-icon12"
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
    name: "Exam",
    components: { FrameComponent },
    methods: {
      onEpsettingClick() {
        this.$router.push("/settings");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/homepage");
      },
      onBasiladdOutlineIconClick() {
        this.$router.push("/addexam1");
      },
      onGroupContainerClick() {
        this.$router.push("/examdetail");
      },
      onGroupContainerClick1() {
        this.$router.push("/editexam1");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
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
  .frame-child100 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .icoutline-folder-icon23 {
    position: absolute;
    top: 15px;
    left: 121px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 1;
  }
  .vector-parent1 {
    height: 100%;
    width: 243.4px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -82px;
  }
  .folder-button {
    position: absolute;
    top: 233px;
    left: 0px;
    width: 161.4px;
    height: 115.5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .epsetting-icon23 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .test-bank-button-child {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ngn-hng8 {
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
  .ngn-hng-thi-wrapper2 {
    width: 1258px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .arrowleftcirclefill-icon14 {
    height: 61px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .tt-c {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 2;
  }
  .tt-c-thi-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .arrowleftcirclefill-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .trang2 {
    text-decoration: none;
    align-self: stretch;
    position: relative;
    color: inherit;
    z-index: 2;
  }
  .trang-container {
    width: 127px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
  }
  .weuiarrow-filled-icon26 {
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
  .weuiarrow-filled-icon27 {
    align-self: stretch;
    width: 24px;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 36px;
    z-index: 2;
  }
  .weuiarrow-filled-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .frame-wrapper6 {
    width: 72px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-8xs);
    box-sizing: border-box;
  }
  .add-icon {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 2;
  }
  .add-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .basiladd-outline-icon2 {
    height: 50px;
    width: 50px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .add-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xl);
  }
  .frame-parent8 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    min-width: 151px;
    gap: var(--gap-xl);
  }
  .list-view-button-child {
    height: 46px;
    width: 137px;
    position: relative;
    background-color: var(--color-gainsboro);
    display: none;
  }
  .bilist-icon2 {
    height: 30px;
    width: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 3;
  }
  .list-view-button {
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
  .page-controls {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-8xl);
    min-width: 257px;
    max-width: 100%;
  }
  .pagination1 {
    width: 636px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-94xl);
    max-width: 100%;
    font-size: var(--font-size-13xl);
  }
  .navigation-controls {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .navigation7 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .list-divider1 {
    position: absolute;
    top: 244px;
    left: 519px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 49px;
    height: 1px;
    z-index: 2;
  }
  .frame-child101 {
    position: absolute;
    top: 3px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .list-divider-icon {
    position: absolute;
    top: 0px;
    left: 631px;
    width: 1px;
    height: 718px;
    object-fit: contain;
    z-index: 1;
  }
  .frame-child102 {
    position: absolute;
    top: 166px;
    left: -2px;
    width: 1265px;
    height: 4px;
    object-fit: contain;
    z-index: 4;
  }
  .frame-child103 {
    position: absolute;
    top: 366px;
    left: -2px;
    width: 1265px;
    height: 7px;
    object-fit: contain;
    z-index: 4;
  }
  .frame-child104 {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 32px;
    display: none;
  }
  .xem16 {
    position: absolute;
    top: 3px;
    left: 25px;
    display: inline-block;
    width: 49px;
    height: 31px;
    z-index: 1;
  }
  .rectangle-parent57 {
    position: absolute;
    top: 134px;
    left: 1px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent58 {
    position: absolute;
    top: 134px;
    left: 632px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent59 {
    position: absolute;
    top: 337px;
    left: 632px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent60 {
    position: absolute;
    top: 513px;
    left: 632px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent61 {
    position: absolute;
    top: 685px;
    left: 632px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 4;
  }
  .xa17 {
    position: absolute;
    top: 3px;
    left: 26px;
    display: inline-block;
    width: 49px;
    height: 31px;
    z-index: 1;
  }
  .rectangle-parent62 {
    position: absolute;
    top: 134px;
    left: 183px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent63 {
    position: absolute;
    top: 134px;
    left: 814px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent64 {
    position: absolute;
    top: 337px;
    left: 814px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent65 {
    position: absolute;
    top: 513px;
    left: 814px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent66 {
    position: absolute;
    top: 685px;
    left: 814px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 4;
  }
  .rectangle-parent67 {
    position: absolute;
    top: 333px;
    left: 183px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent68 {
    position: absolute;
    top: 512px;
    left: 183px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 5;
  }
  .rectangle-parent69 {
    position: absolute;
    top: 684px;
    left: 185px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    z-index: 4;
  }
  .rectangle-parent70 {
    position: absolute;
    top: 134px;
    left: 92px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent71 {
    position: absolute;
    top: 134px;
    left: 723px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent72 {
    position: absolute;
    top: 337px;
    left: 723px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent73 {
    position: absolute;
    top: 513px;
    left: 723px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent74 {
    position: absolute;
    top: 685px;
    left: 723px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent75 {
    position: absolute;
    top: 332px;
    left: 1px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent76 {
    position: absolute;
    top: 511px;
    left: 1px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .rectangle-parent77 {
    position: absolute;
    top: 683px;
    left: 3px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 4;
  }
  .rectangle-parent78 {
    position: absolute;
    top: 332px;
    left: 92px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent79 {
    position: absolute;
    top: 511px;
    left: 92px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 6;
  }
  .rectangle-parent80 {
    position: absolute;
    top: 683px;
    left: 94px;
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 91px;
    height: 34px;
    cursor: pointer;
    z-index: 5;
  }
  .list-divider-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .list-divider-icon1 {
    position: absolute;
    top: 544px;
    left: 4px;
    width: 1265px;
    height: 4px;
    object-fit: contain;
    z-index: 4;
  }
  .frame-parent9 {
    align-self: stretch;
    height: 718px;
    position: relative;
    font-size: var(--font-size-xl);
  }
  .test-bank-button {
    position: absolute;
    top: 0px;
    left: 137.1px;
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
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .icomoon-freehome3-icon22 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .wpfask-question-icon23 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .wpfstatistics-icon23 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .phbook-bold-icon12 {
    position: absolute;
    top: 502px;
    left: 40px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .app-toolbar {
    align-self: stretch;
    height: 910px;
    position: relative;
    max-width: 100%;
  }
  .exam {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-3xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1050px) {
    .navigation-controls {
      flex-wrap: wrap;
      justify-content: center;
    }

    .app-toolbar {
      height: auto;
      min-height: 910;
    }
  }
  @media screen and (max-width: 1000px) {
    .ngn-hng8 {
      font-size: var(--font-size-13xl);
    }

    .tt-c {
      font-size: var(--font-size-13xl);
    }

    .trang2 {
      font-size: var(--font-size-7xl);
    }
  }
  @media screen and (max-width: 725px) {
    .pagination1 {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .ngn-hng8 {
      font-size: var(--font-size-5xl);
    }

    .tt-c {
      font-size: var(--font-size-5xl);
    }

    .arrowleftcirclefill-container {
      flex-wrap: wrap;
    }

    .trang2 {
      font-size: var(--font-size-lgi);
    }

    .page-controls {
      flex-wrap: wrap;
    }

    .xem16 {
      font-size: var(--font-size-base);
    }

    .xa17 {
      font-size: var(--font-size-base);
    }
  }
</style>
