<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo">
        <router-link :to="{ name: 'edit', params: { id: index }}">編集</router-link>
        <router-link :to="{ name: 'delete', params: { id: index }}">削除</router-link>
        {{todo}}
      </li>
    </ul>
    <router-link to="/create/">新規追加</router-link>
  </div>
</template>

<script lang="ts" src="./TopPage.ts"></script>

<style></style>
