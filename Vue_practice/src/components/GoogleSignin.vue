<template>
  <div>
    <div
      id="g_id_onload"
      data-client_id="847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com"
      data-login_uri="http://localhost:5173"
      data-auto_prompt="false"
    ></div>
    <div id="g_signin_button">
      <!-- Google Sign-In button will be rendered here -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.google.accounts.id.initialize({
      client_id:
        "847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com",
      callback: this.handleCallback,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("g_signin_button"),
      { theme: "outline", size: "large", width: 240, shape: "pill" }
    );
  },
  methods: {
    handleCallback(response) {
      console.log(response);
      // Handle the response object here (e.g., send token to your server)
    },
  },
};
</script>
