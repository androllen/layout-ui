<template>
  <div class="el-box" id="shell">
    <div class="el-nav" id="shell">
      <div class="logo">
        <a-button type="primary">Button></a-button>
      </div>
      <div id="dmenu" class="nui-scroll">
        <a-menu :default-selected-keys="['1']" :open-keys.sync="openKeys" mode="inline" @click="handleClick">
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="1"> Option 1 </a-menu-item>
            <a-menu-item key="2"> Option 2 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2" @titleClick="titleClick">
            <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
            <a-menu-item key="3"> Option 3 </a-menu-item>
            <a-menu-item key="4"> Option 4 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
            <a-menu-item key="5"> Option 5 </a-menu-item>
            <a-menu-item key="6"> Option 6 </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="setting"></div>
    </div>

    <div class="el-content" id="shell">
      <div class="title">11</div>
      <div class="views nui-scroll">
        <div>
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
      <div class="logger">33</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

/*
 DIV高度为浏览器窗口的高度
 通过深入Document内部对body进行检测，获取浏览器窗口高度
*/
function autodivheight() {
  let winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight;
  }
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  document.getElementById('shell').style.height = winHeight + 'px';
  document.getElementById('dmenu').style.height = winHeight - 160 + 'px';
}
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      input: '',
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
  mounted() {
    window.onload = () => {
      autodivheight();
    };
    window.onresize = () => {
      autodivheight();
    };
  },
};
</script>

<style>
.el-box {
  overflow: hidden;
  display: flex;
}

.title {
  background-color: #333;
  height: 60px;
}
.logger {
  background-color: #333;
  height: 150px;
}

.views {
  background-color: transparent;
  flex: 1;
  height: 100%;
}

.el-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: auto;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.el-nav {
  display: flex;
  flex-direction: column;
  width: 250px;
  flex: none;
}
.logo {
  background: #1f3359;
  height: 60px;
}
.setting {
  background-color: #8eb1e8;
  height: 100px;
}

#item {
  background-color: turquoise;
  padding: 0 10px 10px 10px;
  flex: 200px;
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

.nui-scroll {
  border-style: solid;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #000;
  width: auto;
  overflow: auto;
}

.nui-scroll::-webkit-scrollbar {
  width: 9px;
  height: 3px;
  /* display: none; */
}

/*正常情况下滑块的样式*/
.nui-scroll::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #e8b28e;
}

/*正常时候的主干部分*/
.nui-scroll::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 1px;
}
</style>
