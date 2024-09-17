<template>
  <div>Redirecting...</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  created() {
    this.handleAuthCallback();
  },
  methods: {
    handleAuthCallback() {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");
      const refreshToken = urlParams.get("refreshToken");
      const expiresIn = urlParams.get("expiresIn");

      if (accessToken && refreshToken && expiresIn) {
        this.storeTokenData(accessToken, refreshToken, expiresIn);
        // Redirect to home page
        const router = useRouter();
        router.push("/home");
      } else {
        console.error("Authentication callback missing tokens");
      }
    },
    //store token
    storeTokenData(accessToken, refreshToken, expiresIn) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("tokenExpiry", expiresIn);
    },
  },
};
</script>
