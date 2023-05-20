<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.link {
  @apply font-didact uppercase text-base tracking-wider relative pb-[2px] font-medium text-links;

  &:hover {
    @apply text-links-hover;
  }

  &::before {
    content: "";
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
    @apply absolute w-full h-[1px] rounded bg-links-hover bottom-0 left-0;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
}
</style>
