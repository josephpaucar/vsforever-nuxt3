<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row py-3 gap-1 md:gap-5">
      <nuxt-link to="/" class="link w-fit">About us</nuxt-link>
      <nuxt-link to="/" class="link w-fit">Contact</nuxt-link>
      <nuxt-link to="/" class="link w-fit">Support</nuxt-link>
      <nuxt-link to="/" class="link w-fit">Policy</nuxt-link>
      <nuxt-link to="/" class="link w-fit">FAQS</nuxt-link>
    </div>
    <div
      class="flex flex-col-reverse lg:justify-between lg:items-end lg:flex-row"
    >
      <div class="mb-4">
        <p class="font-didact tracking-wider text-links">
          © 2019 learts. All Rights Reserved |
          <span class="font-semibold text-links-hover">(+00) 123 567990</span>
          |
          <a href="mailto:contact@vidasanaforever.com"
            >contact@vidasanaforever.com</a
          >
        </p>
      </div>
      <div class="my-3 flex gap-5">
        <a href="https://www.facebook.com/" target="_blank">
          <svg
            role="img"
            aria-describedby="facebook-icon-title"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="facebook-icon-title">Facebook Icon</title>
            <path
              d="M10 0.0400085C4.5 0.0400085 0 4.53001 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.85001C8.44 5.34001 9.93 3.96001 12.22 3.96001C13.31 3.96001 14.45 4.15001 14.45 4.15001V6.62001H13.19C11.95 6.62001 11.56 7.39001 11.56 8.18001V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5879 16.0622 18.3855 17.6099 16.5701C19.1576 14.7546 20.0053 12.4457 20 10.06C20 4.53001 15.5 0.0400085 10 0.0400085Z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <svg
            role="img"
            aria-describedby="instagram-icon-title"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="instagram-icon-title">Instagram Icon</title>
            <path
              d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
svg {
  @apply w-6 h-6 fill-links-hover;
}
</style>
