<template>
  <div class="exportexam">
    <Header1
      ngnHngCuHi="Ngân hàng đề thi"
      saNhmCuWidth="650px"
      saNhmCuHi="Xuất file"
    />
    <div class="import-export">
      <div class="import-export-options">
        <b class="in">In đề</b>
        <b class="xut-pdf">Xuất PDF</b>
      </div>
    </div>
    <div class="navigation2">
      <img
        class="epsetting-icon3"
        loading="lazy"
        alt=""
        src="/epsetting.svg"
        @click="onEpsettingClick"
      />
      <img class="navigation-item" alt="" src="/group-32.svg" />
      <img
        class="arrowleftcirclefill-icon1"
        loading="lazy"
        alt=""
        src="/arrowleftcirclefill.svg"
        @click="onArrowLeftCircleFillClick"
      />
      <img
        class="icomoon-freehome3-icon3"
        loading="lazy"
        alt=""
        src="/icomoonfreehome3.svg"
        @click="onIcomoonFreehomeClick"
      />
      <img
        class="wpfask-question-icon3"
        loading="lazy"
        alt=""
        src="/wpfaskquestion.svg"
        @click="onWpfaskQuestionClick"
      />
      <img
        class="wpfstatistics-icon3"
        loading="lazy"
        alt=""
        src="/wpfstatistics.svg"
        @click="onWpfstatisticsClick"
      />
      <footer class="group-footer">
        <div class="frame-child14" />
        <div class="separator-elements" />
        <div class="separator-elements1" />
        <div class="frame-child15" />
      </footer>
      <img
        class="icoutline-folder-icon3"
        loading="lazy"
        alt=""
        src="/icoutlinefolder.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header1 from "../components/Header1.vue";

  export default defineComponent({
    name: "ExportExam",
    components: { Header1 },
    methods: {
      onEpsettingClick() {
        this.$router.push("/settings");
      },
      onArrowLeftCircleFillClick() {
        this.$router.push("/addexam3");
      },
      onIcomoonFreehomeClick() {
        this.$router.push("/homepage");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examdetail");
      },
    },
  });
</script>
<style scoped>
  .in {
    height: 56px;
    width: 155px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 2;
  }
  .xut-pdf {
    height: 56px;
    width: 155px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 4;
  }
  .import-export-options {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .import-export {
    width: 455px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .epsetting-icon3 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .navigation-item {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .arrowleftcirclefill-icon1 {
    position: absolute;
    top: 84px;
    left: 175px;
    width: 70px;
    height: 61px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .icomoon-freehome3-icon3 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon3 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon3 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .frame-child14 {
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
  .separator-elements {
    position: absolute;
    top: 640px;
    left: 1035px;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
    z-index: 3;
  }
  .separator-elements1 {
    position: absolute;
    top: 640px;
    left: 760px;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
  }
  .frame-child15 {
    position: absolute;
    top: 598px;
    left: 0px;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1264px;
    height: 1px;
    z-index: 3;
  }
  .group-footer {
    position: absolute;
    top: 173px;
    left: 153px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1263px;
    height: 715px;
    z-index: 2;
  }
  .icoutline-folder-icon3 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .navigation2 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .exportexam {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-xl) 44px var(--padding-lg);
    box-sizing: border-box;
    gap: 685px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .exportexam {
      gap: 342px;
    }
  }
  @media screen and (max-width: 450px) {
    .in {
      font-size: var(--font-size-lgi);
    }

    .xut-pdf {
      font-size: var(--font-size-lgi);
    }

    .import-export-options {
      flex-wrap: wrap;
    }

    .exportexam {
      gap: 171px;
    }
  }
</style>
