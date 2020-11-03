<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="inputfile">
      <a-button type="primary" v-on:click="openFile()">选择文件</a-button>
      <a-input id="textbox" placeholder="open file" v-model="textarea" />
      <input
        type="file"
        name="filename"
        id="open"
        @change="specifiName($event)"
        @input="specifiName($event)"
        style="display: none"
      />
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      textarea: '',
    };
  },
  methods: {
    openFile() {
      document.getElementById('open').click();
    },
    specifiName(e) {
      document.getElementById('textbox').value = document.getElementById('open').files[0].path;
    },
  },
};
</script>
<style >
.inputfile {
  display: flex;
  margin: 10px;
}
#textbox{
  margin-left: 10px;
}
</style>