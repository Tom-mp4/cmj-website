<script setup>
</script>

<template>
  <div class="informations">
    <h1 class="title">Des projets qui se réitèrent.</h1>
    <p class="description">
      Le CMJ tente d'organiser des évènements durable et continuelle. Des projects qui sont unique
      mais capable de se renouveler tout en gardant leur originalité. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl,
      eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam
      nisl, eget aliquam nunc nisl eu nunc.
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.informations {
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 15px;
  padding-bottom: 8%;

  .title {
    font-family: fonts.$greycliff;
    color: colors.$black;
    font-size: 3.5rem;
    line-height: 1;
    letter-spacing: -0.06em;
  }

  .description {
    font-family: fonts.$montserrat;
    color: colors.$black;
    font-size: 1.2rem;
    line-height: 1;
  }
}

</style>
