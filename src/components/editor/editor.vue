<template>
  <div>
    富文本编辑器12
    <div class="editor">
      <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; // 导入quillEditor组件
import 'quill/dist/quill.js';
export default {
  data() {
    return {
      content: "this is a simple demo", // 编辑器的内容
      editorOption: {
        // 编辑器的配置
        // something config
        theme: "bubble"
      }
    };
  },
  components: {
    quillEditor
  },
};
</script>
<style>
.editor {
  width: 800px;
  height: 300px;
  margin: 0 auto;
}
</style>

