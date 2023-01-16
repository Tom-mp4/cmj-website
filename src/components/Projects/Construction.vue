<template>
  <a target="_blank" class="construction" :href="url">
    <img :src="imageUrl" alt="project_illustration" class="img">
    <div class="text">
      <h2 class="project-title">
        {{title}}
      </h2>
      <p class="project-description">
        {{description}}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: String,
    imageUrl: String,
    title: String,
    description: String,
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.construction {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 60%;
  gap: 3rem;
  border-radius: 20px;

  .img {
    border-radius: 20px;
    width: 45%;
  }

  .project-title {
    color: colors.$black;
    font-family: fonts.$greycliff;
    font-size: 3.5rem;
    line-height: 1;
    letter-spacing: -0.06em;
  }

  .project-description {
    color: colors.$black;
    font-size: 16px;
  }
}

</style>
