<template>
  <v-footer app color="#c9def1" height="86px" class="footer">
    <div class="containers footer__containers">
      <address class="footer__adress">
        <p>moscow 123456, b124 st. 212dsadasd</p>
      </address>
      <div class="footer__copy">all rights reserved</div>
    </div>
  </v-footer>
</template>
<script>
export default {};
</script>
<style>
.footer {
  font-size: 12px;
  line-height: 14px;
}
.footer__containers {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footer__adress {
  padding-top: 15px;
  padding-left: 20px;
}
.footer__copy {
  padding-top: 15px;
  padding-right: 20px;
}
</style>