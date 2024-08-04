<template>
  <div class="main-content">
    <div class="question-content3">
      <div class="question1">
        <div class="top-question">
          <div class="divider3" />
        </div>
        <div class="bottom-question">
          <div class="bottom-question-child" />
          <div class="cu-1-tm-x-x-1-4-wrapper">
            <div class="cu-1-tm2">Câu 1: Tìm x: x + 1 = 4</div>
          </div>
        </div>
        <div class="answer">
          <div class="options1">
            <div class="x35">x=3</div>
            <div class="x35">x=2</div>
            <div class="x35">x=4</div>
            <div class="x35">x=5</div>
          </div>
        </div>
      </div>
      <div class="navigation8">
        <div class="controls">
          <div class="previous">
            <button class="previous-button">
              <div class="previous-button-child" />
              <b class="cu-trc">Câu trước</b>
            </button>
          </div>
          <div class="counter">
            <div class="x35">Số lượng câu hỏi:</div>
          </div>
          <div class="next">
            <div class="progress" />
            <b class="cu-tip-theo">Câu tiếp theo</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MainContent",
  });
</script>
<style scoped>
  .divider3 {
    height: 1px;
    width: 49px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 2;
  }
  .top-question {
    width: 1086px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .bottom-question-child {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .cu-1-tm2 {
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 4;
  }
  .cu-1-tm-x-x-1-4-wrapper {
    width: 493px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-34xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .bottom-question {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    max-width: 100%;
  }
  .x35 {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .options1 {
    width: 212px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-3);
  }
  .answer {
    width: 396px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .question1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid-5);
    max-width: 100%;
  }
  .previous-button-child {
    height: 56px;
    width: 215px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-palegreen);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .cu-trc {
    width: 155px;
    position: relative;
    font-size: var(--font-size-5xl);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-black);
    text-align: left;
    flex-shrink: 0;
    z-index: 5;
  }
  .previous-button {
    cursor: pointer;
    border: 1px solid var(--color-black);
    padding: var(--padding-3xs) var(--padding-xl) var(--padding-smi);
    background-color: var(--color-palegreen);
    width: 215px;
    border-radius: var(--br-xl);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    white-space: nowrap;
    z-index: 4;
  }
  .previous-button:hover {
    background-color: var(--color-lightgreen);
    border: 1px solid var(--color-darkslategray);
    box-sizing: border-box;
  }
  .previous {
    width: 268px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .counter {
    width: 257px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
  }
  .progress {
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
  .cu-tip-theo {
    position: absolute;
    top: 12px;
    left: 33px;
    display: inline-block;
    width: 206px;
    height: 29px;
    z-index: 5;
  }
  .next {
    height: 56px;
    width: 239px;
    position: relative;
  }
  .controls {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .navigation8 {
    width: 1222px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .question-content3 {
    width: 1263px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-64xl);
    max-width: 100%;
  }
  .main-content {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 900px) {
    .controls {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 700px) {
    .cu-1-tm-x-x-1-4-wrapper {
      padding-left: var(--padding-7xl);
      padding-right: var(--padding-7xl);
      box-sizing: border-box;
    }

    .question-content3 {
      gap: var(--gap-22xl);
    }
  }
  @media screen and (max-width: 450px) {
    .cu-1-tm2 {
      font-size: var(--font-size-lgi);
    }

    .x35 {
      font-size: var(--font-size-lgi);
    }

    .cu-tip-theo {
      font-size: var(--font-size-lgi);
    }

    .question-content3 {
      gap: var(--gap-2xl);
    }
  }
</style>
