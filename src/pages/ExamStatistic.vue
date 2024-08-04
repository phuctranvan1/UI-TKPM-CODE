<template>
  <div class="examstatistic">
    <FrameComponent
      frameDivHeight="unset"
      frameDivMinWidth="unset"
      frameDivHeight1="unset"
      frameDivWidth="unset"
    />
    <div class="thng-k-thi-c-parent">
      <div class="thng-k-thi">Thống kê thi cử</div>
      <div class="stats-details">
        <img
          class="icoutline-folder-icon16"
          loading="lazy"
          alt=""
          src="/icoutlinefolder.svg"
          @click="onIcoutlineFolderClick"
        />
        <img
          class="epsetting-icon16"
          loading="lazy"
          alt=""
          src="/epsetting.svg"
          @click="onEpsettingClick"
        />
        <img class="stats-details-child" alt="" src="/group-37.svg" />
        <img
          class="icomoon-freehome3-icon15"
          loading="lazy"
          alt=""
          src="/icomoonfreehome3.svg"
          @click="onIcomoonFreehomeClick"
        />
        <img
          class="wpfask-question-icon16"
          loading="lazy"
          alt=""
          src="/wpfaskquestion.svg"
          @click="onWpfaskQuestionClick"
        />
        <img
          class="wpfstatistics-icon16"
          loading="lazy"
          alt=""
          src="/wpfstatistics.svg"
        />
        <div class="rectangle-parent33">
          <div class="frame-child62" />
          <b class="s-hin">Số đề hiện có:</b>
          <b class="s">Số đề đã dùng:</b>
          <b class="s-hc-sinh">Số học sinh:</b>
          <b class="trung-bnh-im">Trung bình điểm:</b>
          <button class="report-button">
            <div class="report-button-child" />
            <b class="xut-bo-co">Xuất báo cáo</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "ExamStatistic",
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
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
    },
  });
</script>
<style scoped>
  .thng-k-thi {
    position: absolute;
    top: 10px;
    left: 593px;
    display: inline-block;
    width: 378px;
    height: 49px;
    z-index: 2;
  }
  .icoutline-folder-icon16 {
    position: absolute;
    top: 248px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .epsetting-icon16 {
    position: absolute;
    top: 806px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
  }
  .stats-details-child {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -46px;
    max-height: 100%;
    width: 1486px;
    z-index: 1;
  }
  .icomoon-freehome3-icon15 {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfask-question-icon16 {
    position: absolute;
    top: 134px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
  }
  .wpfstatistics-icon16 {
    position: absolute;
    top: 379px;
    left: 39px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
  .frame-child62 {
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
  .s-hin {
    position: absolute;
    top: 26px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .s {
    position: absolute;
    top: 135px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .s-hc-sinh {
    position: absolute;
    top: 244px;
    left: 16px;
    display: inline-block;
    width: 233px;
    height: 39px;
    z-index: 3;
  }
  .trung-bnh-im {
    position: absolute;
    top: 353px;
    left: 16px;
    display: inline-block;
    width: 288px;
    height: 39px;
    z-index: 3;
  }
  .report-button-child {
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
  .xut-bo-co {
    position: absolute;
    top: 12px;
    left: 39px;
    font-size: var(--font-size-5xl);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-black);
    text-align: left;
    width: 155px;
    height: 29px;
    z-index: 4;
  }
  .report-button {
    cursor: pointer;
    border: 1px solid var(--color-black);
    padding: 0;
    background-color: var(--color-palegreen);
    position: absolute;
    top: 705px;
    left: 981px;
    border-radius: var(--br-xl);
    box-sizing: border-box;
    width: 215px;
    height: 56px;
    white-space: nowrap;
    z-index: 3;
  }
  .report-button:hover {
    background-color: var(--color-lightgreen);
    border: 1px solid var(--color-darkslategray);
    box-sizing: border-box;
  }
  .rectangle-parent33 {
    position: absolute;
    top: 80px;
    left: 153px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1263px;
    height: 808px;
    z-index: 2;
  }
  .stats-details {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    font-size: var(--font-size-13xl);
  }
  .thng-k-thi-c-parent {
    align-self: stretch;
    height: 910px;
    position: relative;
  }
  .examstatistic {
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
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 750px) {
    .thng-k-thi {
      font-size: var(--font-size-13xl);
    }

    .s-hin {
      font-size: var(--font-size-7xl);
    }

    .s {
      font-size: var(--font-size-7xl);
    }

    .s-hc-sinh {
      font-size: var(--font-size-7xl);
    }

    .trung-bnh-im {
      font-size: var(--font-size-7xl);
    }
  }
  @media screen and (max-width: 450px) {
    .thng-k-thi {
      font-size: var(--font-size-5xl);
    }

    .s-hin {
      font-size: var(--font-size-lgi);
    }

    .s {
      font-size: var(--font-size-lgi);
    }

    .s-hc-sinh {
      font-size: var(--font-size-lgi);
    }

    .trung-bnh-im {
      font-size: var(--font-size-lgi);
    }
  }
</style>
