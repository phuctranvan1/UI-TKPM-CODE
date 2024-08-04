<template>
  <div class="subjectlist">
    <header
      frameDivPadding="unset"
      :onLOGOTextClick="onLOGOTextClick"
      :onTrnVnPhcClick="onTrnVnPhcClick"
    />
    <div class="content2">
      <main class="icoutline-folder-parent1">
        <img
          class="icoutline-folder-icon13"
          loading="lazy"
          alt=""
          src="/icoutlinefolder.svg"
          @click="onIcoutlineFolderClick"
        />
        <img
          class="epsetting-icon13"
          loading="lazy"
          alt=""
          src="/epsetting.svg"
          @click="onEpsettingClick"
        />
        <img
          class="icomoon-freehome3-icon12"
          loading="lazy"
          alt=""
          src="/icomoonfreehome3.svg"
          @click="onLOGOTextClick"
        />
        <img
          class="wpfask-question-icon13"
          loading="lazy"
          alt=""
          src="/wpfaskquestion.svg"
          @click="onWpfaskQuestionClick"
        />
        <img
          class="wpfstatistics-icon13"
          loading="lazy"
          alt=""
          src="/wpfstatistics.svg"
          @click="onWpfstatisticsClick"
        />
        <div class="subject-list-header">
          <div class="subject-list-header-child" />
          <h2 class="danh-sch-mn1">Danh sách môn học</h2>
          <img class="subject-list-header-item" alt="" src="/group-4.svg" />
          <img class="subject-list-header-inner" alt="" />
          <img class="line-icon" loading="lazy" alt="" />
          <img class="subject-list-header-child1" loading="lazy" alt="" />
        </div>
        <div class="contact-icon">
          <img class="contact-icon-child" alt="" src="/ellipse-1.svg" />
          <img
            class="phbook-bold-icon7"
            loading="lazy"
            alt=""
            src="/phbookbold.svg"
          />
        </div>
      </main>
      <img class="vector-icon" loading="lazy" alt="" src="/vector1.svg" />
      <img class="vector-icon1" loading="lazy" alt="" src="/vector1.svg" />
      <img class="vector-icon2" loading="lazy" alt="" src="/vector1.svg" />
    </div>
    <AddSubject />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import AddSubject from "../components/AddSubject.vue";

  export default defineComponent({
    name: "SubjectList",
    components: { Header, AddSubject },
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
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
    },
  });
</script>
<style scoped>
  .icoutline-folder-icon13 {
    position: absolute;
    top: 248px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon13 {
    position: absolute;
    top: 806px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .icomoon-freehome3-icon12 {
    position: absolute;
    top: 14px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon13 {
    position: absolute;
    top: 134px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon13 {
    position: absolute;
    top: 379px;
    left: 85px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .subject-list-header-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
    display: none;
  }
  .danh-sch-mn1 {
    margin: 0;
    position: absolute;
    top: 10px;
    left: 455.9px;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    width: 378px;
    height: 49px;
    z-index: 2;
  }
  .subject-list-header-item {
    position: absolute;
    top: 116px;
    left: 15.9px;
    width: 1287px;
    height: 772px;
    z-index: 3;
  }
  .subject-list-header-inner {
    position: absolute;
    top: 110px;
    left: 211.9px;
    width: 2px;
    height: 248px;
    object-fit: contain;
    z-index: 5;
  }
  .line-icon {
    position: absolute;
    top: 110px;
    left: 211.9px;
    width: 2px;
    height: 250px;
    object-fit: contain;
    z-index: 6;
  }
  .subject-list-header-child1 {
    position: absolute;
    top: 110px;
    left: 735.9px;
    width: 2px;
    height: 250px;
    object-fit: contain;
    z-index: 5;
  }
  .subject-list-header {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 183.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    width: 1302.9px;
    z-index: 1;
  }
  .contact-icon-child {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 243.4px;
  }
  .phbook-bold-icon7 {
    position: absolute;
    top: 22.5px;
    left: 41px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .contact-icon {
    position: absolute;
    top: 487.5px;
    left: 46px;
    width: 197.4px;
    height: 115.5px;
  }
  .icoutline-folder-parent1 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    width: 1486px;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .vector-icon {
    position: absolute;
    top: 142px;
    left: 1321px;
    width: 20px;
    height: 20px;
    z-index: 4;
  }
  .vector-icon1 {
    position: absolute;
    top: 311px;
    left: 1321px;
    width: 20px;
    height: 20px;
    z-index: 4;
  }
  .vector-icon2 {
    position: absolute;
    top: 228px;
    left: 1321px;
    width: 20px;
    height: 20px;
    z-index: 4;
  }
  .content2 {
    width: 100%;
    height: 910px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: 16px;
    left: 0px;
  }
  .subjectlist {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-xl) var(--padding-96xl)
      var(--padding-lg);
    box-sizing: border-box;
    gap: 220px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 750px) {
    .danh-sch-mn1 {
      font-size: var(--font-size-13xl);
    }

    .subjectlist {
      gap: 110px;
    }
  }
  @media screen and (max-width: 450px) {
    .danh-sch-mn1 {
      font-size: var(--font-size-5xl);
    }

    .subjectlist {
      gap: 55px;
    }
  }
</style>
