<script setup>
const activeMenu = ref(false);
</script>

<template>
  <div
    class="container h-[80px] md:h-[100px] px-4 mx-auto flex justify-between items-center"
  >
    <div class="logo">
      <nuxt-link to="/" class="font-didact text-xl"> VS Forever </nuxt-link>
    </div>
    <nav class="hidden md:block">
      <nuxt-link to="/" class="link mr-4">Home</nuxt-link>
      <nuxt-link to="/" class="link mr-4">Shop</nuxt-link>
      <nuxt-link to="/" class="link">Contact us</nuxt-link>
    </nav>
    <div class="actions">
      <UserCard class="hidden md:block" />
      <svg
        role="img"
        aria-describedby="search-icon-title"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="search-icon-title">Search Icon</title>
        <path
          d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
        />
      </svg>
      <svg
        class="hidden md:block"
        role="img"
        aria-describedby="wishlist-icon-title"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="wishlist-icon-title">Wish List Icon</title>
        <path
          d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
        />
      </svg>
      <svg
        role="img"
        aria-describedby="shoppingcart-icon-title"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="shoppingcart-icon-title">Shopping Cart Icon</title>
        <path
          d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.9643 3.32843 20.0075 3.15747 20.0054 2.98406C20.0034 2.81064 19.956 2.64077 19.8681 2.49126C19.7803 2.34175 19.6548 2.21778 19.5043 2.13162C19.3538 2.04546 19.1834 2.00009 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
        />
      </svg>
      <button @click="activeMenu = !activeMenu">
        <svg
          role="img"
          aria-describedby="menu-icon-title"
          class="md:hidden block ham hamRotate ham1"
          :class="{ active: activeMenu }"
          viewBox="0 0 100 100"
          width="45"
        >
          <title id="menu-icon-title">Menu Icon</title>
          <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path class="line middle" d="m 30,50 h 40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="mobile-navigation" :class="{ hidden: !activeMenu }">
    <nav class="container h-full flex flex-col justify-center items-center">
      <nuxt-link to="/" class="link mb-5">Home</nuxt-link>
      <nuxt-link to="/" class="link mb-5">Shop</nuxt-link>
      <nuxt-link to="/" class="link mb-5">Contact us</nuxt-link>
      <UserCard class="block mb-5" />
      <div class="border-t pt-5 flex gap-5">
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
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.actions {
  @apply flex flex-row gap-6 items-center;

  svg {
    @apply w-5 h-5 fill-links-hover;
  }
  .ham {
    @apply w-11 h-11 ml-[-10px];
    cursor: pointer;
    transition: transform 400ms;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }
}

.mobile-navigation {
  @apply absolute top-[80px] md:top-[100px] z-20 bg-white w-screen;
  height: calc(100vh - 80px);

  svg {
    @apply w-5 h-5 fill-links-hover;
  }
}
</style>
