<script setup>
defineProps({
  btnType: {
    type: String,
    default: 'button',
  },
  btnClass: {
    type: String,
    default: 'btn-main',
  },
})
</script>
<template>
  <button :type="btnType" class="btn" :class="btnClass"><slot /></button>
</template>
<style lang="scss" scoped>
@import '../../assets/css/variables';
.btn {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &.btn-main {
    height: 40px;
    width: 100%;
    background: $btn-color-main;
    border-radius: 4px;
    color: #ffffff;
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
    text-align: center;

    &:hover {
      background: darken($btn-color-main, 3);
    }
  }

  &.btn-mini {
    max-width: 128px;
    width: 100%;
    height: 24px;
    background: $btn-color-mini;
    border-radius: 2px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 24px;
    font-weight: 600;
    color: #5763b3;

    &:hover {
      background: darken($btn-color-mini, 3);
    }
  }

  &.btn-link {
    color: $btn-color-link;
    font-size: 12px;
    line-height: 16px;
    text-decoration: underline dashed;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
