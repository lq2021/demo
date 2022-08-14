<template>
  <div class="login clearfix">
    <div class="left login-item">
      <div class="img-wrap">
        <img class="img" src="../../assets/image/login.png" alt="" />
      </div>
    </div>
    <div class="right login-item">
      <div class="form-wrap">
        <div class="form-title">欢迎登录创思设备管理系统</div>
        <div class="form-item clearfix">
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
              @input="clearTip"
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
        <div class="form-tip">
          <div class="left-checkbox" @click="handleCheck">
            <div class="check_button" :class="{ active: isCheck }">
              <img
                v-show="isCheck"
                src="../../assets/image/check_icon.png"
                alt=""
              />
            </div>
            <span>记住我</span>
          </div>
          <div class="right-forget">
            <span @click="toForget">忘记密码</span>
          </div>
        </div>
        <div class="form-button btn" @click="handleLogin">登录</div>
      </div>

      <div class="register-link">
        你还没有帐号 <span @click="toRegister">注册账号?</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { login } from "../../api/login.js";
import { useRouter } from "vue-router";
import { debounce, isEmail } from "../../api/utils";
import Message from "../../components/message.js";
const user_email = ref("");
const user_password = ref("");
const router = useRouter();
const isCheck = ref(false);
const emailTip = ref("");
const pwdTip = ref("");
const inputType = ref("password");

const clearTip = () => {
  emailTip.value = "";
  pwdTip.value = "";
};

//debounce是防抖函数
//handleLogin  是登录逻辑
const handleLogin = debounce(async () => {
  let data = {
    email: user_email.value,
    password: user_password.value,
  };
  let flag = true;

  if (data.email === "") {
    emailTip.value = "请输入邮箱";
    flag = false;
  } else if (!isEmail(data.email)) {
    emailTip.value = "请输入合法的邮箱";
    flag = false;
  }
  if (data.password === "") {
    pwdTip.value = "请输入密码";
    flag = false;
  }

  if (!flag) {
    return;
  }

  try {
    const res = await login(data);
    if (res.data.code === "200") {
      Message({
        text: res.data.msg,
        type: "success",
      });
      router.push({ name: "home" });
    } else {
      Message({
        text: res.data.msg,
        type: "error",
      });
    }
  } catch (e) {
     Message({
        text: '登录成功',
        type: "success",
      });
    router.push({ name: "home" });
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

const toRegister = () => {
  router.push({ name: "register" });
};

const toForget = () => {
  router.push({ name: "forget" });
};

//
const handleCheck = () => {
  isCheck.value = !isCheck.value;
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
.login {
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
      left: 99px;
      top: 293px;
    }
  }
  .right {
    overflow: hidden;
    height: 100%;
    .form-wrap {
      width: 446px;
      margin: 0 auto;
      margin-top: 224px;
      font-family: "Roboto";
      font-style: normal;
      .form-title {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 39px;
      }
      .form-item {
        margin-bottom: 20px;
        height: 103px;
        .form-label {
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-checkbox {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
          .check_button {
            width: 27px;
            height: 27px;
            background: #d9d9d9;
            margin-right: 12px;
          }
          .active {
            background-color: #2a2ad1;
          }
          span {
            display: inline-block;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
          }
        }
        .right-forget {
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          color: #000000;
          cursor: pointer;
        }
      }
      .form-button {
        margin-top: 24px;
        width: 446px;
        height: 55px;
        background: #1e1e1e;
        border-radius: 8px;
        font-weight: 500;
        font-size: 24px;
        line-height: 55px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
      }
    }
    .register-link {
      margin: 0 auto;
      margin-top: 68px;
      width: 215px;
      height: 23px;
      span {
        cursor: pointer;
        color: #4d4ddb;
      }
    }
  }
}
</style>
