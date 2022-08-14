<template>
  <div class="forget clearfix">
    <div class="left login-item">
      <div class="img-wrap">
        <img class="img" src="../../assets/image/forget.png" alt="" />
      </div>
    </div>
    <div class="right login-item">
      <div class="form-wrap">
        <div class="form-title">重置密码</div>
        <div class="form-item">
          <div class="form-label">邮箱</div>
          <div class="input-wrap">
            <input
              class="input"
              @input="clearTip"
              v-model="user_email"
              type="text"
            />
          </div>
          <div class="input-tip" v-if="emailTip !== ''">{{ emailTip }}</div>
        </div>
        <div class="form-button" @click="handleForget">发送</div>
      </div>

      <div class="link-wrap">
        <div class="login-link">
          您已有账号？ <span class="link-text" @click="toLogin">用户登录</span>
        </div>
        <div class="register-link">
          建立新账号？
          <span class="link-text" @click="toRegister">用户注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { forget } from "../../api/forget";
import { isEmail, debounce } from "../../api/utils";
import Message from "../../components/message.js";
const router = useRouter();
const user_email = ref("");
const emailTip = ref("");

const clearTip = () => {
  emailTip.value = "";
};

// 发送邮箱 请求
const handleForget = debounce(async () => {
  if (user_email.value.trim() === "") {
    emailTip.value = "请输入邮箱";
  } else if (!isEmail(user_email.value)) {
    emailTip.value = "请输入合法的邮箱";
  }

  if (isEmail(user_email.value)) {
  
    let data = {
      email: user_email.value
    };
    const res = await forget(data);
    if (res.data.code === "200") {
      //成功 跳转到重置密码页面
      Message({
        text: res.data.msg,
        type: "success",
      });
      localStorage.setItem('email',data.email)
      router.push({ name: "reset" });
    }else{
       Message({
        text: res.data.msg,
        type: "error",
      });
    }
  }
});

const toLogin = () => {
  router.push({ name: "login" });
};

const toRegister = () => {
  router.push({ name: "register" });
};
</script>
<style lang="less" scoped>
input {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding-left: 20px;
}
.forget {
  height: 1024px;
  width: 100%;
  .left {
    float: left;
    width: 720px;
    height: 1024px;
    background: rgba(154, 154, 235, 0.5);
    position: relative;
    .img-wrap {
      position: absolute;
      width: 567px;
      height: 339px;
      left: 47px;
      top: 271px;
    }
  }

  .right {
    overflow: hidden;
    height: 100%;
    background-color: #fff;

    .form-wrap {
      width: 446px;
      margin: 0 auto;
      margin-top: 297px;
      .form-title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 43px;
      }
      .form-item {
        margin-bottom: 44px;
        height: 103px;
        .form-label {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;
          margin-bottom: 20px;
        }
        .input-wrap {
          .input {
            height: 55px;
            width: 446px;
            background: none;
            outline: none;
            border: 1px solid #4d4ddb;
            border-radius: 4px;
          }
        }
        .input-tip {
          margin-top: 5px;
          float: right;
          color: #f56c6c;
          font-size: 12px;
        }
      }

      .form-button {
        width: 446px;
        height: 55px;
        background: #1e1e1e;
        border-radius: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 55px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
      }
    }
    .link-wrap {
      margin: 0 auto;
      margin-top: 43px;
      width: 446px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      .link-text {
        cursor: pointer;
        color: #4d4ddb;
      }
    }
  }
}
</style>
