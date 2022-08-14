<template>
  <div class="info clearfix">
    <div class="left register-item">
      <div class="img-wrap">
        <img class="img" src="../../assets/image/info.png" alt="" />
      </div>
    </div>
    <div class="right register-item">
      <div class="form-wrap">
        <div class="form-title">用户资料完善</div>
        <div class="form-avatar" @click="file_avater.click()">
          <img class="avatar" :src="user_avatar" />
          <input
            type="file"
            @change="selectAvatar"
            class="avatar_input"
            ref="file_avater"
          />
        </div>
        <div class="form-item">
          <div class="form-label">姓名</div>
          <div class="input-wrap">
            <input
              class="input"
              @input="clearTip"
              v-model="user_name"
              type="text"
            />
            <div class="input-tip" v-if="nameTip !== ''">{{ nameTip }}</div>
          </div>
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
            <div class="input-tip" v-if="emailTip !== ''">{{ emailTip }}</div>
          </div>
        </div>
        <div class="form-item">
          <div class="form-label">生日</div>
          <div class="input-wrap">
            <input class="input" @input="clearTip" v-model="user_birthday" />
            <div class="input-tip" v-if="birthdayTip !== ''">
              {{ birthdayTip }}
            </div>
          </div>
        </div>
        <div class="form-item">
          <div class="form-label">手机号码</div>
          <div class="input-wrap phone">
            <div class="phone_icon">
              <img src="../../assets/image/phone_icon.png" alt="" />
            </div>
            <input
              class="input phone_input"
              @input="clearTip"
              v-model="user_phone"
            />
            <div class="input-tip" v-if="phoneTip !== ''">{{ phoneTip }}</div>
          </div>
        </div>
        <div class="form-item">
          <div class="form-label">性别</div>
          <div class="input-wrap select">
            <input class="input" @input="clearTip" v-model="user_sex" />
            <div class="select_icon"></div>
            <div class="input-tip" v-if="sexTip !== ''">{{ sexTip }}</div>
          </div>
        </div>
        <div class="form-button" @click="handleregister">提交</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "../../api/utils";
import { isEmail } from "../../api/utils";
import Message from "../../components/message.js";
const router = useRouter();
const user_avatar = ref(require("../../assets/image/user_avatar.png"));
const file_avater = ref("");
const user_name = ref("");
const user_email = ref("");
const user_phone = ref("");
const user_birthday = ref("");
const user_sex = ref("");

const nameTip = ref("");
const emailTip = ref("");
const phoneTip = ref("");
const birthdayTip = ref("");
const sexTip = ref("");
const clearTip = () => {
  emailTip.value = "";
  nameTip.value = "";
  phoneTip.value = "";
  birthdayTip.value = "";
  sexTip.value = "";
};

//input file change事件
const selectAvatar = () => {
  //获取文件对象
  let file = file_avater.value.files[0];
  //获取绝对路径
  if (window.FileReader) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    //监听文件读取结束后事件
    reader.onloadend = function (e) {
      user_avatar.value = e.target.result;
    };
  }
};

//
const handleregister = debounce(async () => {
  let flag = true;
  if (user_name.value.trim() === "") {
    nameTip.value = "请输入姓名";
    flag = false;
  }
  if (user_email.value.trim() === "") {
    emailTip.value = "请输入邮箱";
    flag = false;
  } else if (!isEmail(user_email.value)) {
    emailTip.value = "请输入合法的邮箱";
    flag = false;
  }
  if (user_phone.value.trim() === "") {
    phoneTip.value = "请输入手机号码";
    flag = false;
  }
  if (user_birthday.value.trim() === "") {
    birthdayTip.value = "请输入生日";
    flag = false;
  }

  if (user_sex.value.trim() === "") {
    sexTip.value = "请选择性别";
    flag = false;
  }

  if (!flag) {
    return;
  }
  Message({
    text: "提交成功",
    type: "success",
  });
  router.push({ name: "home" });
});
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

.phone {
  position: relative;
  .phone_icon {
    border-right: 1px solid #000;
    position: absolute;
    width: 58px;
    height: 55px;
    padding: 6px 6px 5px 8px;
    img {
      height: 44px;
      width: 44px;
    }
  }
  .phone_input {
    padding-left: 78px;
  }
}

.select {
  position: relative;
  .select_icon {
    background-image: url("../../assets/image/down_arrow.png");
    width: 23px;
    height: 24px;
    position: absolute;
    top: 17px;
    right: 22px;
  }
}
.info {
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
      left: 18px;
      top: 226px;
    }
  }

  .right {
    overflow: hidden;
    height: 100%;
    background-color: #fff;

    .form-wrap {
      width: 446px;
      margin: 0 auto;
      margin-top: 50px;

      .form-title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
      }
      .form-avatar {
        margin: 0 auto;
        margin-top: 36px;
        margin-bottom: 17px;
        width: 152px;
        height: 160px;
        cursor: pointer;
        .avatar {
          height: 100%;
          width: 100%;
          // border-radius: 50%;
        }
        .avatar_input {
          display: none;
        }
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
          }
          .input-tip {
            margin-top: 5px;
            float: right;
            color: #f56c6c;
            font-size: 12px;
          }
        }
      }
      .form-button {
        margin: 0 auto;
        margin-top: 36px;
        width: 177px;
        height: 55px;
        background: #1e1e1e;
        border-radius: 8px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
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
    }
  }
}
</style>
