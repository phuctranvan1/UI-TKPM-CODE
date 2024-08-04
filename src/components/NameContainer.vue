<template>
  <div class="name-container">
    <div class="name-container-child" />
    <div class="login-container">
      <div class="ng-nhp">Đăng nhập</div>
    </div>
    <div class="header4">
      <div class="header-child" />
      <input
        class="nhp-ti-khon"
        placeholder="Nhập tài khoản hoặc email"
        type="text"
      />
    </div>
    <div class="password-container">
      <div class="more-button-parent">
        <div class="more-button">
          <div class="header-child" />
          <input
            class="password-input-row"
            placeholder="Nhập mật khẩu"
            type="text"
          />
          <img
            class="arcticonsunseen-gallery"
            alt=""
            src="/arcticonsunseengallery.svg"
          />
        </div>
        <div class="qun-mt-khu" @click="onQunMtKhuClick">Quên mật khẩu?</div>
      </div>
      <div class="rectangle-parent81" @click="onGroupContainerClick">
        <div class="frame-child129" />
        <div class="ng-nhp1">ĐĂNG NHẬP</div>
      </div>
    </div>
    <div class="alternative-login-container">
      <div class="hoc-ng-nhp">Hoặc đăng nhập bằng</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NameContainer",
    methods: {
      onQunMtKhuClick() {
        // Please sync "Forget Password" to the project
      },
      onGroupContainerClick() {
        this.$router.push("/homepage");
      },
    },
  });
</script>
<style scoped>
  .name-container-child {
    width: 849px;
    height: 614px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .ng-nhp {
    position: relative;
    font-weight: 200;
    text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
    z-index: 1;
  }
  .login-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 0px var(--padding-9xs) var(--padding-12xs);
  }
  .header-child {
    height: 74px;
    width: 755px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .nhp-ti-khon {
    width: 487px;
    border: none;
    outline: none;
    display: inline-block;
    font-family: var(--font-gwendolyn);
    font-size: var(--font-size-13xl);
    background-color: transparent;
    height: 38px;
    position: relative;
    font-weight: 700;
    color: var(--color-dimgray);
    text-align: left;
    max-width: 100%;
    padding: 0;
    z-index: 2;
  }
  .header4 {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-10xl) var(--padding-lg);
    max-width: 100%;
    z-index: 1;
  }
  .password-input-row {
    width: 552px;
    border: none;
    outline: none;
    background-color: transparent;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
    font-family: var(--font-gwendolyn);
    font-weight: 700;
    font-size: var(--font-size-13xl);
    color: var(--color-dimgray);
    max-width: 100%;
  }
  .arcticonsunseen-gallery {
    height: 48px;
    width: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 2;
  }
  .more-button {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-2xs) var(--padding-2xs) var(--padding-2xs)
      var(--padding-9xl);
    max-width: 100%;
    gap: var(--gap-xl);
    z-index: 1;
  }
  .qun-mt-khu {
    width: 315px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    z-index: 1;
  }
  .more-button-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    max-width: 100%;
  }
  .frame-child129 {
    height: 74px;
    width: 755px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-mediumblue);
    display: none;
    max-width: 100%;
  }
  .ng-nhp1 {
    height: 56px;
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .rectangle-parent81 {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-mediumblue);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-xl) 0px;
    box-sizing: border-box;
    max-width: 100%;
    cursor: pointer;
    z-index: 1;
    font-size: var(--font-size-13xl);
    color: var(--color-white);
  }
  .password-container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xl);
    max-width: 100%;
    font-size: var(--font-size-5xl);
  }
  .hoc-ng-nhp {
    position: relative;
    z-index: 1;
  }
  .alternative-login-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-12xs) 0px 0px;
  }
  .name-container {
    width: 849px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-15xl) var(--padding-28xl) var(--padding-101xl);
    box-sizing: border-box;
    gap: var(--gap-11xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 850px) {
    .ng-nhp {
      font-size: var(--font-size-7xl);
    }

    .nhp-ti-khon {
      font-size: var(--font-size-7xl);
    }

    .more-button {
      flex-wrap: wrap;
    }

    .ng-nhp1 {
      font-size: var(--font-size-7xl);
    }

    .hoc-ng-nhp {
      font-size: var(--font-size-7xl);
    }

    .name-container {
      padding-left: var(--padding-4xl);
      padding-right: var(--padding-4xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 675px) {
    .name-container {
      padding-top: var(--padding-3xl);
      padding-bottom: var(--padding-59xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .ng-nhp {
      font-size: var(--font-size-lgi);
    }

    .nhp-ti-khon {
      font-size: var(--font-size-lgi);
    }

    .qun-mt-khu {
      font-size: var(--font-size-lgi);
    }

    .ng-nhp1 {
      font-size: var(--font-size-lgi);
    }

    .hoc-ng-nhp {
      font-size: var(--font-size-lgi);
    }

    .name-container {
      gap: var(--gap-mini);
    }
  }
</style>
