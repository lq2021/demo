<template>
  <div class="header">
    <div class="main">
      <div class="header-nav-wrap clearfix">
        <div class="nav-left clearfix">
          <img class="icon-img" src="../../assets/image/search.png" alt="" />
          <span class="title-text">创思找工作</span>
        </div>
        <div class="nav-right clearfix">
          <div class="nav-item margin-49">首页</div>
          <div class="nav-item margin-63">岗位展示</div>
          <div class="nav-item margin-44">工作分类</div>
          <div class="nav-item margin-66">关于创思</div>
          <div class="nav-item margin-72">登录</div>
          <div class="nav-btn">发布岗位</div>
        </div>
      </div>
      <div class="header-content">
        <div class="content-title">269+ 岗位需求</div>
        <div class="content-big-title">预祝你在创思信息找到心仪工作</div>
        <div class="content-text">
          创思信息以“工匠精神”推动产业互联网升级，推动政府事务单位业务处理自动化，助力工业4.0转型升级
          ！
        </div>
        <div class="content-btn">查看岗位</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 771.5px;
  background-image: url(../../assets/image/Navbar.png);
  padding-top: 23px;
  padding-left: 65px;
  .main {
    height: 559px;
    width: 1302px;
    .header-nav-wrap {
      .nav-left {
        float: left;
        .icon-img {
          float: left;
          margin-right: 15px;
        }
        .title-text {
          float: left;
          height: 95px;
          line-height: 95px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          color: #ffffff;
        }
      }
      .nav-right {
        float: right;
        height: 95px;
        .nav-item {
          height: 100%;
          line-height: 95px;
          float: left;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
        }
        .nav-btn {
          margin-top: 20px;
          cursor: pointer;
          float: left;
          width: 177px;
          height: 55px;
          background: #000000;
          border-radius: 8px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 55px;
          color: #fff;
          text-align: center;
        }
        .margin-49 {
          margin-right: 49px;
        }
        .margin-63 {
          margin-right: 63px;
        }
        .margin-44 {
          margin-right: 44px;
        }
        .margin-66 {
          margin-right: 66px;
        }
        .margin-72 {
          margin-right: 72px;
        }
      }
    }
    .header-content {
      font-family: "Roboto";
      font-style: normal;
      color: #fff;
      margin-top: 100px;
      .content-title {
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
      }
      .content-big-title {
        margin: 32px 0;
        font-weight: 400;
        font-size: 56px;
        line-height: 66px;
      }
      .content-text {
        width: 528px;
        height: 127px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
      }
      .content-btn {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        width: 144px;
        height: 51px;
        line-height: 51px;
        background-color: #000;
        border-radius: 8px;
        text-align: center;
      }
    }
  }
}
</style>
