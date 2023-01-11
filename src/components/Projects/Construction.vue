<template>
  <a target="_blank" class="construction" :href="url">
    <img :src="imageUrl" alt="project_illustration" class="img">
    <h2 class="project-title">
      {{title}}
    </h2>
    <p class="project-description">
      {{description}}
    </p>
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
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 90%;
  gap: 10px;
  background-color: colors.$gray;
  padding: 20px;
  border-radius: 20px;

  .img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
  }

  .project-title {
    color: colors.$black;
    text-decoration: none;
    font-size: 24px;
  }

  .project-description {
    color: colors.$black;
    font-size: 16px;
  }
}

</style>
