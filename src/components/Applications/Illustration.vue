<script setup>

</script>

<template>
  <div class="illustration">
    <h1 class="title">Nous avons hâte de te lire !</h1>
    <img src="@/assets/image/team-illustration.png" alt="team-illustration">
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

  .illustration {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10%;
    gap: 5rem;

    .title {
      font-family: fonts.$greycliff;
      color: colors.$black;
      font-size: 5rem;
      line-height: 1;
      letter-spacing: -0.06em;
      width: 70%;
      text-align: center;
    }

    img {
      width: 50%;
    }
  }

</style>
