<template>
  <div class="footer">
    <div class="left">
      <div class="footer-title">
        <img class="icon-img" src="../../assets/image/search.png" alt="" />
        <span class="title-text">创思找工作</span>
      </div>
      <div class="text-item margin-32">祝你的工作能被项目组认同</div>
      <div class="text-item margin-24">chances@gmail.com</div>
      <div class="text-item margin-32">400-669-0559</div>
      <div class="text-item">欢迎来电咨询</div>
    </div>
    <div class="right">
      <div class="item">
        <div class="title">站内导航</div>
        <div class="text">关于创思</div>
        <div class="text">常见问题</div>
        <div class="text">岗位展示</div>
        <div class="text">薪资说明</div>
      </div>
      <div class="item">
        <div class="title">工作分类</div>
        <div class="text">java工程师</div>
        <div class="text">UI/UX工程师</div>
        <div class="text">Web工程师</div>
        <div class="text">行政管理</div>
      </div>
      <div class="submit-wrap">
        <div class="title">信息提交</div>
        <div class="input-wrap">
          <input type="text" class="submit-input" placeholder="邮箱" />
          <div class="submit-btn">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="less" scoped>
.footer {
  width: 1440px;
  height: 904px;
  background-image: url(../../assets/image/Footer.png);
  font-family: "Roboto";
  font-style: normal;
  color: #ffffff;
  display: flex;
  .left {
    margin-left: 63px;
    margin-top: 241px;
    margin-right: 290px;
    .footer-title {
      width: 270px;
      height: 95px;
      display: flex;
      align-items: center;
      margin-bottom: 17px;
      .icon-img {
        width: 95px;
        height: 95px;
        margin-right: 15px;
      }
      .title-text {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
      }
    }
    .text-item {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
    .margin-32 {
      margin-bottom: 32px;
    }
    .margin-24 {
      margin-bottom: 24px;
    }
  }
  .right {
    margin-top: 281px;

    display: flex;
    .item {
      height: 256px;
      margin-right: 66px;
      .title {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 34px;
      }
      .text {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 24px;
      }
    }
    .submit-wrap {
      margin-left: 9px;
      .title {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 32px;
      }
      .input-wrap {
        .submit-input {
          padding-top: 16px;
          padding-left: 11px;
          padding-bottom: 11px;
          outline: none;
          background-color: #000;
          border: 1px solid #fff;
          width: 348px;
          height: 55px;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          border-radius: 8px;
        }
        .submit-btn {
          position: relative;
          left: 220px;
          top: -47px;
          cursor: pointer;
          width: 122px;
          height: 40px;
          background: #4d4ddb;
          border-radius: 4px;
          text-align: center;
          line-height: 40px;
          font-weight: 400;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
