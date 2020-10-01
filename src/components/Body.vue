<template>
  <div id="body">
    <div >
      <b-nav justified class="nav">
        <b-nav-item >Submission</b-nav-item>
      <span style="border: 1px solid #C9C9C9"></span>
        <b-nav-item active style="color: red">Engagement</b-nav-item>
      </b-nav>
    </div>

    <div class="timeNav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Daily" name="daily"><DayStatic :datePick=value2 v-if="active == 1"/><List :datePick=value2 v-if="active == 2"/></el-tab-pane>
        <el-tab-pane label="Weekly" name="weekly"><A :datePick=rangeVal v-if="active == 1"/><List :datePick=rangeVal v-if="active == 2"/></el-tab-pane>
        <el-tab-pane label="Monthly" name="monthly" style="margin: 15px 20px">No MockUp</el-tab-pane>
      </el-tabs>

    <div v-if="activeName == 'weekly'">
    <el-date-picker style="width:350px;margin-top:10px"
      v-model="rangeVal"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      value-format="dd MMMM yyyy"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  
  <div>
    <el-date-picker style="width:350px;margin-top:10px"
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      v-if="activeName == 'daily'"
      value-format="dd MMMM yyyy"
      :picker-options="dateDisable">
    </el-date-picker>
  </div>
    </div>

      <div class="btnContain" style="color: #D0CACA">
        <div style="margin: 5px;display: inline-block;cursor: pointer;" @click="changeActive(1)" :class="active == 1 ? 'active': ''">
          <span class="material-icons" style="font-size: 30px;">equalizer</span>
        </div>
        <div class="ss" style="display: inline-block;cursor: pointer;" @click="changeActive(2)" :class="active == 2 ? 'active': ''">
          <span class="material-icons" style="font-size: 30px;">view_list</span>
        </div>

      </div>
  
  </div>
</template>

<script>
import DayStatic from './DayStatic.vue'
import A from './A.vue'
import List from './List.vue'

export default {
  name: 'Body',
  components: {
    DayStatic,
    A,
    List
  },
  data() {
      // const monthNames = ["January", "February", "March", "April", "May", "June",
      //   "July", "August", "September", "October", "November", "December"];

      // let dateObj = new Date();
      
      // let month = monthNames[dateObj.getMonth()];
      // let day = String(dateObj.getDate()).padStart(2, '0');
      // let year = dateObj.getFullYear();
      // let output = day + ' ' + month  + ' ' + year;

      return {
          pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        
        value2: '',
        activeName: 'daily',
        active: 1,
        // selectedDate:  date + "-" + month + "-" + year  ,
        rangeVal: '',
        dateDisable: {
          disabledDate(time) {
            return time.getTime() > Date.now();
        }
      }};
    },
    watch: {
      value2(val) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        let dateObj = val;
        let month = monthNames[dateObj.getMonth()];
        let day = String(dateObj.getDate()).padStart(2, '0');
        let year = dateObj.getFullYear();
        this.output = day + ' ' + month  + ' ' + year;

        console.log(val)
        console.log(this.output)
      }
    },
    methods: {
      changeActive(id) {
            this.active = id
                    
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#body {
    width: 375px;
    height: 636.44px;
    background-color: #ffffff;
}

.active {
  color: #3766FF;
}

.timeNav {
  height:120px;
  border-bottom: 1px solid #D0CACA;
}

.el-date-editor .el-range-separator {
  width: 10%;
}

.el-tabs.el-tabs--top {
  height:50px;
}

.el-tabs__content {
  top: 70px;
}

.nav {
  width: 375px;
  border-bottom: 1px solid #C8C8C8;
  padding: 5px 0px
}

.el-tabs__nav-wrap {
  margin-left: 20px!important;
  width: 250px!important;
}

.el-tabs__item {
  color: #D0CACA; 
}

.dateFilter {
  height: 150px;
}

.topnav {
  background-color: white;
  overflow: hidden;
  border-bottom: 0.3px solid #D0CACA;
}

.topnav a {
  float: left;
  display: block;
  color: #D0CACA;
  text-align: center;
  margin-right: 20px;
  padding: 15px 12px 5px;
  text-decoration: none;
  font-size: 13px;
  border-bottom: 3px solid transparent;
}

.topnav a:hover {
  color: black;
}

.topnav a.active {
  border-bottom: 3px solid #3766FF;
  color: black;
}

.btnContain {
  position: absolute;
  top:163px;
  left: 285px;
  width: 90px;
}


</style>
