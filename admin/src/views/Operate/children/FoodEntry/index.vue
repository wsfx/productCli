<template>
  <div>
    <Content title="分类管理">
      <el-button type="primary" @click="dialogFormVisible = true">添加分类</el-button>
      <FoodEntryList :tableData="food_entry_list" />
    </Content>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="上传图标" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.image" :src="form.image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择父类" :label-width="formLabelWidth">
          <el-select v-model="form.parent_id" placeholder="请选择">
            <el-option
              v-for="item in food_entry_list"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addFoodEntry">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import FoodEntryList from './components/FoodEntryList'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        dialogFormVisible: false,
        imageUrl: '',
        formLabelWidth: '100',
        form: {
          name: '',
          description: '',
          image: '',
          parent_id: ''
        }
      }
    },
    computed: {
      ...mapState('foodEntry', ['food_entry_list'])
    },
    created () {
      console.log(process.env.BASE_URL)
      this.getFoodEntry()
    },
    components: {
      FoodEntryList
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.form.image = baseUrl+res.file.filename;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
      addFoodEntry () {
        this.$store.dispatch('foodEntry/AddFoodEntry', this.form).then((data) => {
          console.log(data, '成功')
          this.dialogFormVisible = false
        })
        
      },
      getFoodEntry () {
        if (navigator.geolocation) {
          var timeoutVal = 10 * 1000 * 1000;
          navigator.geolocation.getCurrentPosition(
            displayPosition, 
            displayError,
            { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
          );
        }
        else {
          alert("Geolocation is not supported by this browser");
        }

        function displayPosition(position) {
          alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
        }

        function displayError(error) {
          console.log(error)
          var errors = { 
            1: '申请拒绝',
            2: '无法精确匹配地址',
            3: '请求超时'
          };
          alert("错误: " + errors[error.code]);
        }
        this.$store.dispatch('foodEntry/GetFoodEntry')
      }
    }
  }
</script>

<style lang="less">
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>