<template>
  <div>Home Page</div>
</template>

<script setup>
import useUserStorage from "../store/userInstance";

function handleAuthCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("accessToken");
  const refreshToken = urlParams.get("refreshToken");
  const expiresIn = urlParams.get("expiresIn");

  if (accessToken && refreshToken && expiresIn) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("tokenExpiry", Date.now() + expiresIn * 1000);
  }
}

console.log("home user ==>", useUserStorage().user);
</script>

<style lang="scss" scoped></style>
