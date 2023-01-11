<script setup>

</script>

<template>
  <div class="landing">
    <h1 class="title">
      Rejoins le CMJ en seulement 3 étapes.
    </h1>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.landing {
  display: flex;
  align-items: center;
  padding: 14% 0;
  text-align: center;
  width: 60%;

  .title {
    font-family: fonts.$greycliff;
    color: colors.$black;
    font-size: 6rem;
    line-height: 1;
    letter-spacing: -0.06em;
  }
}
</style>
