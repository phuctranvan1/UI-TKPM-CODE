<template>
  <div class="personal-info">
    <header
      frameDivPadding="0px 20px 0px 0px"
      :onLOGOTextClick="onLOGOTextClick"
    />
    <main class="personal-info-inner">
      <section class="frame-group">
        <div class="frame-container">
          <div class="icomoon-freehome3-parent">
            <img
              class="icomoon-freehome3-icon9"
              loading="lazy"
              alt=""
              src="/icomoonfreehome3.svg"
              @click="onLOGOTextClick"
            />
            <div class="wpfask-question-container">
              <img
                class="icomoon-freehome3-icon9"
                loading="lazy"
                alt=""
                src="/wpfaskquestion.svg"
                @click="onWpfaskQuestionClick"
              />
              <img
                class="icomoon-freehome3-icon9"
                loading="lazy"
                alt=""
                src="/icoutlinefolder.svg"
                @click="onIcoutlineFolderClick"
              />
            </div>
            <div class="frame-parent1">
              <div class="wpfstatistics-wrapper">
                <img
                  class="wpfstatistics-icon10"
                  loading="lazy"
                  alt=""
                  src="/wpfstatistics.svg"
                  @click="onWpfstatisticsClick"
                />
              </div>
              <img
                class="icomoon-freehome3-icon9"
                loading="lazy"
                alt=""
                src="/phbookbold.svg"
                @click="onPhbookBoldClick"
              />
            </div>
            <img
              class="icomoon-freehome3-icon9"
              loading="lazy"
              alt=""
              src="/epsetting.svg"
              @click="onEpsettingClick"
            />
          </div>
        </div>
        <div class="frame-parent2">
          <div class="rectangle-parent18">
            <div class="frame-child34" />
            <div class="ci-t-ti">Cài đặt tài khoản</div>
            <div class="account-settings-form">
              <div class="frame-parent3">
                <div class="name-input-content-wrapper">
                  <div class="name-input-content">
                    <div class="h-v-tn">Họ và tên:</div>
                    <div class="name-input" />
                  </div>
                </div>
                <div class="frame-wrapper1">
                  <div class="email-parent">
                    <div class="email">Email:</div>
                    <div class="email-input" />
                  </div>
                </div>
                <div class="frame-wrapper2">
                  <div class="gii-tnh-parent">
                    <div class="h-v-tn">Giới tính:</div>
                    <div class="gender-input" />
                  </div>
                </div>
                <div class="trng-parent">
                  <div class="h-v-tn">Trường:</div>
                  <div class="school-input-wrapper">
                    <div class="school-input" />
                  </div>
                </div>
              </div>
              <div class="account-settings-form-inner">
                <div class="birthday-input-content-parent">
                  <div class="birthday-input-content">
                    <div class="h-v-tn">Ngày tháng năm sinh:</div>
                    <div class="gender-input" />
                  </div>
                  <div class="s-in-thoi-parent">
                    <div class="s-in-thoi">Số điện thoại:</div>
                    <div class="phone-input-wrapper">
                      <div class="school-input" />
                    </div>
                  </div>
                  <div class="input-separator-wrapper">
                    <div class="input-separator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lu-wrapper">
            <div class="lu2">Lưu</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    name: "PersonalInfo",
    components: { Header },
    methods: {
      onLOGOTextClick() {
        this.$router.push("/homepage");
      },
      onWpfaskQuestionClick() {
        this.$router.push("/question");
      },
      onIcoutlineFolderClick() {
        this.$router.push("/exam");
      },
      onWpfstatisticsClick() {
        this.$router.push("/examstatistic");
      },
      onPhbookBoldClick() {
        this.$router.push("/subjectlist");
      },
      onEpsettingClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .icomoon-freehome3-icon9 {
    width: 70px;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
  }
  .wpfask-question-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-2xs);
    gap: var(--gap-25xl);
  }
  .wpfstatistics-icon10 {
    height: 70px;
    width: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
  }
  .wpfstatistics-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .frame-parent1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .icomoon-freehome3-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-31xl);
    flex-shrink: 0;
  }
  .frame-container {
    height: 876px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child34 {
    width: 1302.9px;
    height: 910px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ci-t-ti {
    width: 426px;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .h-v-tn {
    align-self: stretch;
    position: relative;
    z-index: 1;
  }
  .name-input {
    align-self: stretch;
    height: 49px;
    position: relative;
    background-color: var(--color-gainsboro);
    z-index: 1;
  }
  .name-input-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    max-width: 100%;
  }
  .name-input-content-wrapper {
    width: 455px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-41xl) var(--padding-54xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .email {
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    width: 332px;
    height: 71px;
    z-index: 1;
  }
  .email-input {
    position: absolute;
    top: 48px;
    left: 112px;
    background-color: var(--color-gainsboro);
    width: 335px;
    height: 49px;
    z-index: 2;
  }
  .email-parent {
    height: 97px;
    width: 447px;
    position: relative;
    max-width: 100%;
  }
  .frame-wrapper1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-21xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
  }
  .gender-input {
    width: 335px;
    height: 49px;
    position: relative;
    background-color: var(--color-gainsboro);
    max-width: 100%;
    z-index: 1;
  }
  .gii-tnh-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3px;
    max-width: 100%;
  }
  .frame-wrapper2 {
    width: 401px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .school-input {
    align-self: stretch;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    max-width: 100%;
    z-index: 1;
  }
  .school-input-wrapper {
    width: 343px;
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .trng-parent {
    width: 399px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
    max-width: 100%;
  }
  .frame-parent3 {
    width: 507px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-6xl);
    min-width: 507px;
    max-width: 100%;
  }
  .birthday-input-content {
    width: 427px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    max-width: 100%;
  }
  .s-in-thoi {
    width: 264px;
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .phone-input-wrapper {
    align-self: stretch;
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .s-in-thoi-parent {
    width: 340px;
    height: 277px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    max-width: 100%;
  }
  .input-separator {
    align-self: stretch;
    width: 281px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro);
    z-index: 1;
  }
  .input-separator-wrapper {
    align-self: stretch;
    height: 103px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .birthday-input-content-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 104px;
    max-width: 100%;
  }
  .account-settings-form-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    min-width: 365px;
    max-width: 100%;
  }
  .account-settings-form {
    margin-left: -550px;
    width: 1190px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 122px;
    max-width: 186%;
    flex-shrink: 0;
    font-size: var(--font-size-17xl);
  }
  .rectangle-parent18 {
    width: 1302.9px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-21xl) 160px 83px 502px;
    box-sizing: border-box;
    gap: var(--gap-26xl);
    max-width: 100%;
  }
  .lu2 {
    align-self: stretch;
    position: relative;
    z-index: 2;
  }
  .lu-wrapper {
    width: 352px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 740px 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    margin-left: -336px;
    font-size: var(--font-size-29xl);
  }
  .frame-parent2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    max-width: 100%;
  }
  .frame-group {
    width: 1404px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xl-1);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
  .personal-info-inner {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-lg);
    box-sizing: border-box;
    max-width: 100%;
  }
  .personal-info {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px var(--padding-base) var(--padding-lg);
    box-sizing: border-box;
    gap: var(--gap-3xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .frame-parent3 {
      flex: 1;
      min-width: 100%;
    }

    .account-settings-form {
      flex-wrap: wrap;
      gap: var(--gap-42xl);
    }

    .rectangle-parent18 {
      padding-left: 251px;
      padding-right: 80px;
      box-sizing: border-box;
    }

    .frame-group {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1125px) {
    .account-settings-form-inner {
      min-width: 100%;
    }

    .rectangle-parent18 {
      padding-top: var(--padding-7xl);
      padding-bottom: 54px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 800px) {
    .ci-t-ti {
      font-size: var(--font-size-13xl);
    }

    .h-v-tn {
      font-size: var(--font-size-10xl);
    }

    .email {
      font-size: var(--font-size-10xl);
    }

    .s-in-thoi {
      font-size: var(--font-size-10xl);
    }

    .birthday-input-content-parent {
      gap: 52px;
    }

    .account-settings-form {
      gap: var(--gap-11xl);
    }

    .rectangle-parent18 {
      gap: var(--gap-3xl);
      padding-left: 125px;
      padding-right: var(--padding-21xl);
      box-sizing: border-box;
    }

    .lu2 {
      font-size: var(--font-size-19xl);
    }
  }
  @media screen and (max-width: 450px) {
    .ci-t-ti {
      font-size: var(--font-size-5xl);
    }

    .h-v-tn {
      font-size: var(--font-size-3xl);
    }

    .name-input-content-wrapper {
      padding-left: var(--padding-11xl);
      padding-right: var(--padding-11xl);
      box-sizing: border-box;
    }

    .email {
      font-size: var(--font-size-3xl);
    }

    .s-in-thoi {
      font-size: var(--font-size-3xl);
    }

    .birthday-input-content-parent {
      gap: var(--gap-7xl);
    }

    .account-settings-form {
      gap: var(--gap-mini);
    }

    .rectangle-parent18 {
      padding-left: var(--padding-xl);
      padding-top: var(--padding-xl);
      padding-bottom: 35px;
      box-sizing: border-box;
    }

    .lu2 {
      font-size: var(--font-size-10xl);
    }
  }
</style>
