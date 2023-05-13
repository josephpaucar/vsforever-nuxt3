<script setup lang="ts">
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="text-5xl text-gray-dark font-marcellus">Login with Google:</div>
  <div class="mt-4">
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded">
      Log in With Google
    </button>
  </div>
</template>
