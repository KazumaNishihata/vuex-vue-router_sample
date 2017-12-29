<template>
  <main>
    {{todo}}を編集しますか？
    <form>
      <input type="text" v-model="editedText">
      <input type="button" value="編集" @click="editTodo">
    </form>
     <input type="button" value="戻る" @click="back">
  </main>
</template>

<script lang="ts" src="./EditPage.ts"></script>

<style></style>
