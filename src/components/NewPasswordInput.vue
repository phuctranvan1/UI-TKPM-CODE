<template>
  <div class="new-password-input">
    <div class="new-password-input-child" />
    <div class="new-password-label">
      <div class="khi-phc-mt">Khôi phục mật khẩu</div>
    </div>
    <div class="confirm-password-input">
      <div class="input-fields1">
        <div class="input-fields-child" />
        <input class="nhp-mt-khu" placeholder="Nhập mật khẩu mới" type="text" />
      </div>
      <div class="input-fields2">
        <div class="input-fields-child" />
        <input
          class="input-fields-inner"
          placeholder="Xác nhận mật khẩu mới"
          type="text"
        />
        <img
          class="arcticonsunseen-gallery1"
          alt=""
          src="/arcticonsunseengallery.svg"
        />
      </div>
    </div>
    <div class="rectangle-parent82" @click="onGroupContainerClick">
      <div class="frame-child130" />
      <div class="khi-phc">KHÔI PHỤC</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NewPasswordInput",
    methods: {
      onGroupContainerClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .new-password-input-child {
    width: 849px;
    height: 614px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .khi-phc-mt {
    width: 464px;
    position: relative;
    font-weight: 200;
    display: inline-block;
    flex-shrink: 0;
    text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
    max-width: 100%;
    z-index: 1;
  }
  .new-password-label {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .input-fields-child {
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
  .nhp-mt-khu {
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
  .input-fields1 {
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
  .input-fields-inner {
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
  .arcticonsunseen-gallery1 {
    height: 48px;
    width: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 2;
  }
  .input-fields2 {
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
  .confirm-password-input {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-13xl);
    box-sizing: border-box;
    gap: var(--gap-11xl);
    max-width: 100%;
  }
  .frame-child130 {
    height: 74px;
    width: 755px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-mediumblue);
    display: none;
    max-width: 100%;
  }
  .khi-phc {
    height: 56px;
    width: 199px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .rectangle-parent82 {
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
    text-align: left;
    color: var(--color-white);
  }
  .new-password-input {
    width: 849px;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-15xl) var(--padding-28xl) var(--padding-170xl);
    box-sizing: border-box;
    gap: var(--gap-15xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 850px) {
    .khi-phc-mt {
      font-size: var(--font-size-7xl);
    }

    .nhp-mt-khu {
      font-size: var(--font-size-7xl);
    }

    .input-fields2 {
      flex-wrap: wrap;
    }

    .khi-phc {
      font-size: var(--font-size-7xl);
    }

    .new-password-input {
      padding-left: var(--padding-4xl);
      padding-right: var(--padding-4xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 675px) {
    .new-password-input {
      padding-top: var(--padding-3xl);
      padding-bottom: var(--padding-104xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .khi-phc-mt {
      font-size: var(--font-size-lgi);
    }

    .nhp-mt-khu {
      font-size: var(--font-size-lgi);
    }

    .khi-phc {
      font-size: var(--font-size-lgi);
    }

    .new-password-input {
      gap: var(--gap-mid);
    }
  }
</style>
