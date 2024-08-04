<template>
  <div class="add-subject1">
    <div class="add-subject-header">
      <div class="add-subject-header-child" />
      <div class="add-subject-header-child" />
      <div class="subject-form">
        <div class="add-subject-header-child" />
        <div class="subject-name-input">
          <div class="subject-name-container">
            <div class="subject-name-field">
              <div class="thm-mn-hc">Thêm môn học</div>
              <div class="subject-name-field-inner">
                <div class="frame-child128" />
              </div>
            </div>
            <div class="subject-description-input">
              <div class="subject-description-container">
                <div class="subject-description-field">
                  <div class="subject-description-field-child" />
                  <div class="description-input">
                    <div class="description-icon" />
                  </div>
                  <input
                    class="tn-mn-hc"
                    placeholder="Tên môn học"
                    type="text"
                  />
                </div>
                <div class="subject-actions">
                  <div class="actions-container">
                    <div class="actions-container-child" />
                    <div class="action-buttons3">
                      <div class="action-icon" />
                    </div>
                    <input class="tn-mn-hc" placeholder="Mô tả" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="form-buttons">
          <div class="button-container1">
            <div class="buttons">
              <div class="buttons-child" />
              <b class="thm1">Thêm</b>
            </div>
            <div class="buttons1">
              <div class="buttons-child" />
              <b class="lu6">Lưu</b>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AddSubject",
  });
</script>
<style scoped>
  .add-subject-header-child {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 4;
  }
  .thm-mn-hc {
    width: 387px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 4;
  }
  .frame-child128 {
    width: 49px;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 2;
  }
  .subject-name-field-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .subject-name-field {
    width: 541px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .subject-description-field-child {
    height: 95px;
    width: 1203px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .description-icon {
    width: 16px;
    height: 17px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    z-index: 5;
  }
  .description-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs) 0px 0px;
  }
  .tn-mn-hc {
    width: 212px;
    border: none;
    outline: none;
    font-family: var(--font-inter);
    font-size: var(--font-size-5xl);
    background-color: transparent;
    height: 29px;
    position: relative;
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    padding: 0;
    z-index: 5;
  }
  .subject-description-field {
    align-self: stretch;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-6xl) var(--padding-41xl);
    gap: var(--gap-3xl);
    max-width: 100%;
    z-index: 4;
  }
  .actions-container-child {
    height: 108px;
    width: 1203px;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .action-icon {
    width: 16px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
    z-index: 5;
  }
  .action-buttons3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .actions-container {
    flex: 1;
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-43xl);
    gap: var(--gap-xl);
    max-width: 100%;
    z-index: 4;
  }
  .subject-actions {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .subject-description-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    max-width: 100%;
  }
  .subject-description-input {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .subject-name-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-28xl);
    max-width: 100%;
  }
  .subject-name-input {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl) var(--padding-8xs) var(--padding-7xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .thm1 {
    position: absolute;
    top: 11px;
    left: 70px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .buttons {
    height: 56px;
    width: 225px;
    position: relative;
  }
  .buttons-child {
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
  .lu6 {
    position: absolute;
    top: 11px;
    left: 84px;
    display: inline-block;
    width: 155px;
    height: 29px;
    z-index: 5;
  }
  .buttons1 {
    height: 56px;
    width: 239px;
    position: relative;
  }
  .button-container1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .form-buttons {
    width: 1222px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .subject-form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-31xl);
    max-width: 100%;
  }
  .add-subject-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-60xl);
    max-width: 100%;
  }
  .add-subject1 {
    width: 1271px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 675px) {
    .subject-name-field {
      flex-wrap: wrap;
    }

    .subject-name-container {
      gap: var(--gap-4xl);
    }

    .button-container1 {
      flex-wrap: wrap;
    }

    .subject-form {
      gap: var(--gap-6xl);
    }

    .add-subject-header {
      gap: var(--gap-20xl);
    }
  }
  @media screen and (max-width: 450px) {
    .thm-mn-hc {
      font-size: var(--font-size-lgi);
    }

    .tn-mn-hc {
      font-size: var(--font-size-lgi);
    }

    .thm1 {
      font-size: var(--font-size-lgi);
    }

    .lu6 {
      font-size: var(--font-size-lgi);
    }

    .add-subject-header {
      gap: var(--gap-xl);
    }
  }
</style>
