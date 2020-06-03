<template>
    <div>
        <div>
          <span class="backbtn" @click="$router.back()"><i class="fa fa-long-arrow-left"></i></span>
          <span>作业号：{{ $route.query.rowInfo.id}}</span>
        </div>
        <el-divider></el-divider>
        <div>
            <h4>标题：{{$route.query.rowInfo.name}}</h4>
            <p>内容：{{$route.query.rowInfo.desc}}</p>
        </div>
        <div style="height: 500px">
                <quill-editor
                v-model="form.content"
                :style="{height: '400px'}"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @change="onEditorChange($event)"
                ></quill-editor>  
        </div>
        <div>
            <el-button type="primary" @click="handleSave">提交</el-button>
            <el-dialog title="预览效果" :visible.sync="dialogTableVisible">
                <div style="min-height: 60vh;">
                    <h1 class="news-title">{{ form.title }}</h1>
                    <div class="news-content" v-html="form.content"></div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    components: { quillEditor },
    data() {
        return {
            borderColor: "#dcdfe6",
            dialogTableVisible: false,
            form: {
                title: "",
                module: "",
                content: "",
            },
        editorOption: {
            placeholder: "",
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ size: ["small", false, "large", "huge"] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["clean"],
                    ["link", "image", "video"],
                ],
            },
        },
        rules: {
            title: [
            {
                required: true,
                message: "请输入标题",
                trigger: "blur",
            },
            ],
            module: [
            {
                required: true,
                message: "请选择模块",
                trigger: "change",
            },
            ],
            content: [
                {
                    required: true,
                    message: "请输入内容",
                    trigger: "blur",
                },
            ],
            },
        }
    },
    methods: {
    onEditorBlur(quill) {
      // 失去焦点事件

    //   this.$refs.form.validateField("content", (errorMsg) => {
    //     this.borderColor = "#dcdfe6";
    //     if (errorMsg) {
    //       this.borderColor = "#F56C6C";
    //     }
    //   });
    },
    onEditorChange({ quill, html, text }) {
      // 内容改变事件
      this.form.content = html;
    },
    // handleSee() {
    //   this.$refs["form"].validate((valid) => {
    //     this.$refs.form.validateField("content", (errorMsg) => {
    //       this.borderColor = "#dcdfe6";
    //       if (errorMsg) {
    //         this.borderColor = "#F56C6C";
    //       }
    //     });
    //     if (valid) {
    //       this.dialogTableVisible = true;
    //     } else {
    //       return false;
    //     }
    //   });
    // },
    handleSave() {
    //   this.$refs["form"].validate((valid) => {
    //     this.$refs.form.validateField("content", (errorMsg) => {
    //       this.borderColor = "#dcdfe6";
    //       if (errorMsg) {
    //         this.borderColor = "#F56C6C";
    //       }
    //     });
    //     if (valid) {
    //       this.$baseMessage("submit!", "success");
    //     } else {
    //       return false;
    //     }
    //   });
        console.log(this.form.content)
        this.$store.dispatch('pushWork', this.form)
    },
  }
}
</script>

<style lang="scss" scoped>
.backbtn {
    font-size: 1.2em;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    width: 50px;
    color: #409EFF;
}

// .news {
//   &-title {
//     text-align: center;
//   }

//   &-content {
//     ::v-deep {
//       p {
//         line-height: 30px;

//         img {
//           display: block;
//           margin-right: auto;
//           margin-left: auto;
//         }
//       }
//     }
//   }
// }
</style>