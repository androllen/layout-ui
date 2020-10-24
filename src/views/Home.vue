<template>
  <el-container :style="{ height: winHeight + 'px' }">
    <el-aside :style="{ height: winHeight + 'px' }">
      <div class="block">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="scrolldiv nui-scroll">
        <div id="sample">
          <p>Sample flexbox example</p>
        </div>
        <div id="itemlist">
          <div id="item">
            <div>
              <p>First article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Second article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Third article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>First article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Second article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Third article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>First article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Second article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
          <div id="item">
            <div>
              <p>Third article</p>
              <article>
                So, this single declaration gives us everything we need — incredible, right? We have our multiple column layout
                with equal-sized columns, and the columns are all the same height. This is because the default values given to
                flex items (the children of the flex container) are set up to solve common problems such as this.
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </el-aside>
 
    <div class="contentpanel" :style="{ height: winHeight + 'px' }">
      <div class="title">11</div>
      <div class="views">22</div>
      <div class="logger">33</div>
    </div>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      winHeight: document.documentElement.clientHeight,
      input: '',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    };
  },
  mounted() {
    window.onresize = () => {
      this.winHeight = document.documentElement.clientHeight;
    };
  },
};
</script>

<style >
.title {
  background-color: #333;
  height: 60px;
}
.logger {
  background-color: #333;
  height: 150px;
}

.views {
  background-color: #8eb1e8;
  flex: 1;
}

.contentpanel {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.scrolldiv {
  height: 100%;
  overflow: hidden;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.block {
  background: #1f3359;
  z-index: 99;
}

#item {
  background-color: turquoise;
  padding: 0 10px 10px 10px;
  /* 强制设置最小宽度 */
  flex: 200px;
  /* flex-basis: 200px; */
}
#itemlist {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 10px;
}
.input {
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
}
.bottom {
  background-color: #8eb1e8;
  height: 100px;
}

.nui-scroll {
  border: 1px solid #000;
  width: auto;
  overflow: auto;
}

.nui-scroll::-webkit-scrollbar {
  width: 9px;
  height: 3px;
}

/*正常情况下滑块的样式*/
.nui-scroll::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #8eb1e8;
}

/*正常时候的主干部分*/
.nui-scroll::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 1px;
}
</style>
