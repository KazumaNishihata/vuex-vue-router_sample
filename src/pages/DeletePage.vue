<template>
  <main>
    「{{todo}}」を削除しますか？
    <form>
      <input type="button" value="削除" @click="deleteTodo">
    </form>
     <input type="button" value="戻る" @click="back">
  </main>
</template>

<script lang="ts" src="./DeletePage.ts"></script>

<style></style>
