<template>
  <div class="register clearfix">
    <div class="left register-item">
      <div class="img-wrap">
        <img class="img" src="../../assets/image/login.png" alt="" />
      </div>
    </div>
    <div class="right register-item">
      <div class="form-wrap">
        <div class="form-title">欢迎注册创思设备管理系统</div>
        <div class="form-item">
          <div class="form-label">姓名</div>
          <div class="input-wrap">
            <input
              class="input"
              @input="clearTip"
              v-model="user_name"
              type="text"
            />
          </div>
          <div class="input-tip" v-if="nameTip !== ''">{{ nameTip }}</div>
        </div>
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
        <div class="form-item">
          <div class="form-label">密码</div>
          <div class="input-wrap">
            <input
              class="input"
              @input="checkPwd"
              v-model="user_password"
              :type="inputType"
            />
            <img
              class="img-icon"
              src="../../assets/image/hidden_icon.png"
              alt=""
              @click="showPwd"
            />
          </div>
          <div class="input-tip" v-if="pwdTip !== ''">{{ pwdTip }}</div>
        </div>
        <div class="form-tip">
          <span class="tip-text">密码强度</span>
          <span
            class="tip"
            :class="{ strong: password_level === '很强' }"
            v-show="user_password.length > 0"
            >: {{ password_level }}</span
          >
        </div>
        <div class="from-agree" @click="handleAgree">
          <div class="agree_button" :class="{ active: isAgree }">
            <img
              v-show="isAgree"
              src="../../assets/image/check_icon.png"
              alt=""
            />
          </div>
          <span class="agree-text"
            >我已阅读用户协议并同意
            <div class="input-tip" v-if="agreeTip !== ''">
              {{ agreeTip }}
            </div></span
          >
        </div>
        <div class="form-button btn" @click="handleregister">注册</div>
      </div>

      <div class="link-wrap">
        <div class="login-link">
          您已有平台账号 ？
          <span class="login-text" @click="toLogin">用户登录</span>
        </div>
        <div class="forget-link" @click="toForget">忘记密码</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../../api/register";
import { debounce, isEmail, testPassword } from "../../api/utils";
import Message from "../../components/message.js";
const user_name = ref("");
const user_email = ref("");
const user_password = ref("");
const router = useRouter();
const password_level = ref("简单");

const isAgree = ref(false);

const emailTip = ref("");
const pwdTip = ref("");
const nameTip = ref("");
const agreeTip = ref("");

const inputType = ref("password");

//检查密码强度
const checkPwd = () => {
  let level = testPassword(user_password.value);
  if (level === 0) {
    password_level.value = "简单";
  } else if (level === 1) {
    password_level.value = "很强";
  }
  clearTip();
};

// 清除提示信息
const clearTip = () => {
  emailTip.value = "";
  pwdTip.value = "";
  nameTip.value = "";
};

const handleregister = debounce(async () => {
  //发送注册请求
  //跳转到完善用户信息界面
  let data = {
    name: user_name.value,
    email: user_email.value,
    password: user_password.value,
  };
  if (data.name.trim() === "") {
    nameTip.value = "请输入姓名";
  }
  if (data.email.trim() === "") {
    emailTip.value = "请输入邮箱";
  } else if (!isEmail(data.email)) {
    emailTip.value = "请输入合法的邮箱";
  }
  if (data.password.trim() === "") {
    pwdTip.value = "请输入密码";
  }
  if (!isAgree.value) {
    agreeTip.value = "请勾选同意协议";
    return;
  }

  if (isAgree.value) {
    const res = await register(data);
    console.log(res);
    if (res.data.code === "200") {
      Message({
        text: res.data.msg,
        type: "success",
      });
      router.push({ name: "info" });
    } else {
      Message({
        text: res.data.msg,
        type: "error",
      });
      //错误处理
    }
  }
});

// 显示密码
const showPwd = () => {
  if (inputType.value === "password") {
    inputType.value = "text";
  } else {
    inputType.value = "password";
  }
};

const handleAgree = () => {
  isAgree.value = !isAgree.value;
  agreeTip.value = "";
};

const toLogin = () => {
  router.push({ name: "login" });
};

const toForget = () => {
  router.push({ name: "forget" });
};
</script>
<style lang="less" scoped>
.btn:active {
  transform: scaleX(1.01);
}
input {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding-left: 20px;
}
.register {
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
      left: 96px;
      top: 301px;
    }
  }

  .right {
    overflow: hidden;
    height: 100%;
    background-color: #fff;

    .form-wrap {
      width: 446px;
      margin: 0 auto;
      margin-top: 219px;

      .form-title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 44px;
      }
      .form-item {
        margin-bottom: 20px;
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
          .img-icon {
            position: relative;
            top: -40px;
            left: 400px;
            cursor: pointer;
          }
        }
        .input-tip {
          margin-top: 5px;
          float: right;
          color: #f56c6c;
          font-size: 12px;
        }
      }
      .form-tip {
        margin-bottom: 20px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        .tip-text {
          color: #000;
        }
        .tip {
          color: #fb0707;
        }
        .strong {
          color: #00ff85;
        }
      }
      .from-agree {
        display: flex;
        align-items: center;
        cursor: pointer;
        .agree_button {
          width: 27px;
          height: 27px;
          border: 1px solid #2a2ad1;
          margin-right: 12px;
          cursor: pointer;
        }
        .active {
          background-color: #2a2ad1;
        }
        .agree-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
        }
        .input-tip {
          float: right;
          margin-left: 100px;
          color: #f56c6c;
          font-size: 12px;
        }
      }
      .form-button {
        margin-top: 43px;
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
      margin-top: 45px;
      width: 446px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      .login-text {
        cursor: pointer;
        color: #4d4ddb;
      }
      .forget-link {
        cursor: pointer;
      }
    }
  }
}
</style>
