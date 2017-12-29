<template>
  <main>
    <form>
      <input type="text" v-model="todoText">
      <input type="button" value="追加" @click="addTodo">
    </form>
     <input type="button" value="戻る" @click="back">
  </main>
</template>

<script lang="ts" src="./CreatePage.ts"></script>

<style></style>
