<template>
  <div class="reset clearfix">
    <div class="left register-item">
      <div class="img-wrap">
        <img class="img" src="../../assets/image/reset.png" alt="" />
      </div>
    </div>
    <div class="right register-item">
      <div class="form-wrap">
        <div class="form-title">重置密码</div>
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
            <div class="input-tip" v-if="pwdTip !== ''">{{ pwdTip }}</div>
          </div>
        </div>
        <div class="form-item">
          <div class="form-label">重复密码</div>
          <div class="input-wrap">
            <input
              class="input"
              @input="clearTip"
              v-model="user_password1"
              :type="inputType1"
            />
            <img
              class="img-icon"
              src="../../assets/image/hidden_icon.png"
              alt=""
              @click="showPwd1"
            />
            <div class="input-tip" v-if="pwdTip1 !== ''">{{ pwdTip1 }}</div>
          </div>
        </div>
        <div class="form-tip">
          <span class="tip-text">密码强度</span>
          <span
            class="tip"
            :class="{ strong: password_level === '很强' }"
            v-show="user_password.length > 0"
            >:{{ password_level }}</span
          >
        </div>
        <div class="form-button btn" @click="handleReset">重置密码</div>
      </div>

      <div class="link-wrap">
        <div class="register-link">
          没有账号？ <span class="link-text" @click="toRegister">用户注册</span>
        </div>
        <div class="login-link">
          已有账号？ <span class="link-text" @click="toLogin">用户登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { debounce, testPassword } from "../../api/utils";
import { reset } from "../../api/reset";
import Message from "../../components/message.js";
const user_password = ref("");
const user_password1 = ref("");
const password_level = ref("简单");
const router = useRouter();

const pwdTip = ref("");
const pwdTip1 = ref("");
const inputType = ref("password");
const inputType1 = ref("password");
//显示密码
const showPwd = () => {
  if (inputType.value === "password") {
    inputType.value = "text";
  } else {
    inputType.value = "password";
  }
};
//显示第二个输入框密码
const showPwd1 = () => {
  if (inputType1.value === "password") {
    inputType1.value = "text";
  } else {
    inputType1.value = "password";
  }
};

const checkPwd = () => {
  let level = testPassword(user_password.value);
  if (level === 0) {
    password_level.value = "简单";
  } else if (level === 1) {
    password_level.value = "很强";
  }
  clearTip();
};

const clearTip = () => {
  pwdTip.value = "";
  pwdTip1.value = "";
};

const handleReset = debounce(async () => {
  let data = {
    email: localStorage.getItem("email"),
    password: user_password.value,
    password1: user_password1.value,
  };
  if (data.password.trim() === "") {
    pwdTip.value = "请输入密码";
  }
  if (data.password1.trim() === "") {
    pwdTip1.value = "请再输入一次密码";
  } else if (data.password !== data.password1) {
    pwdTip1.value = "两次输入密码不一致";
    return;
  }

  if (user_password.value.trim() !== "") {
    const res = await reset(data);
    console.log(res);
    if (res.data.code === "200") {
      Message({
        text: res.data.msg,
        type: "success",
      });
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
.reset {
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
      left: 139px;
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
      margin-top: 225px;

      .form-title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 38px;
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
        margin-top: 4px;
        margin-bottom: 24px;
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
        .input {
          width: 27px;
          height: 27px;
          border: 1px solid #2a2ad1;
          margin-right: 12px;
          cursor: pointer;
        }
        .agree-text {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
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
      margin-top: 47px;
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
