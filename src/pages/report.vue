<template>
  <div id="list">
      <div id="topbar">
        <div style="cursor: pointer" @click="changePages()">
            <span class="material-icons">arrow_back_ios</span>
            <span>Back</span>
        </div>
        <b>OKRs Report</b>
        <span class="material-icons">more_horiz</span>
    </div>
    <div class="reportInfo">
        <div style="text-align: left">
            <span class="material-icons" style="font-size: 40px;padding:13px 7px;color: #B3B3B3">account_circle</span>


        <div style="display: inline-block">
          <div class="name" style="font-size: 15px"><b>Ekarach Sripen</b></div>
          <div>Graphic Designer</div>
        </div>
        </div>

        <div style="text-align: left;margin-left:10px;font-size: 13px">
            <div class="content">Content 1</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            <div class="content">Content 2</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            <div class="content">Content 3</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            <div style="color:#929292;margin-top:40px" >Image</div>
            <span class="material-icons" style="font-size:80px;color: #B3B3B3">insert_photo</span>
            <span class="material-icons" style="font-size:80px;color: #B3B3B3">insert_photo</span>
            <span class="material-icons" style="font-size:80px;color: #B3B3B3">insert_photo</span>

            <div style="color:#929292;margin-top:20px" >Attach File</div>
            <span class="material-icons" style="margin-top:10px;transform: rotate(220deg);color: #B3B3B3">attach_file</span>
            <span style="color: #3766FF;font-size:16px">Update Design OKRs.pdf</span>
        </div>

            <div class="view" style="">
                <span style="margin:15px 15px">Read (12)</span>
                <span style="margin:15px 15px">Unread (25)</span>
                <span style="margin:15px 30px 0 15px">Likes (2)</span>
                <span style="margin:15px 0px 0 20px; color: #3766FF;cursor: pointer;">View 
                     </span>
                <span class="material-icons" style="margin-top: 12px;color: #3766FF;cursor: pointer;">navigate_next</span>

            </div>

            <div class="btnGroup" style="margin-top:20px"> 
                <b-button style="font-size: 14px;width:148px" pill variant="outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; margin-bottom: 3px" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m466 87.987h-116.058c15.216-21.824 13.112-52.143-6.344-71.598-21.834-21.835-57.361-21.835-79.195 0-2.451 2.451-5.378 6-8.402 12.003-3.025-6.003-5.951-9.552-8.402-12.003-21.834-21.835-57.361-21.835-79.195 0-19.455 19.455-21.559 49.773-6.344 71.598h-116.06c-25.364 0-46 20.636-46 46v36c0 20.484 13.461 37.877 32 43.814v252.186c0 25.364 20.636 46 46 46h146 64 146c25.364 0 46-20.636 46-46v-252.186c18.539-5.938 32-23.331 32-43.814v-36c0-25.364-20.636-46-46-46zm-194 96h-32v-64h32zm3.764-109.544c4.942-28.425 10.633-34.794 11.266-35.427 4.679-4.679 10.825-7.018 16.971-7.018s12.292 2.339 16.971 7.018c9.357 9.358 9.357 24.583 0 33.941-.629.629-6.96 6.288-35.17 11.221-4.106.718-8.113 1.319-11.81 1.816.486-3.612 1.072-7.527 1.772-11.551zm-84.735-35.427c4.679-4.679 10.825-7.018 16.971-7.018s12.292 2.339 16.971 7.018c.629.629 6.288 6.96 11.221 35.169.718 4.106 1.319 8.114 1.816 11.811-3.612-.487-7.528-1.073-11.551-1.773-28.425-4.942-34.794-10.633-35.427-11.266-9.358-9.357-9.358-24.583-.001-33.941zm-159.029 94.971c0-7.72 6.28-14 14-14h162v64h-160-2c-7.72 0-14-6.28-14-14zm32 332v-250h144v264h-130c-7.72 0-14-6.28-14-14zm176 14v-264h32v264zm208-14c0 7.72-6.28 14-14 14h-130v-264h144zm32-296c0 7.72-6.28 14-14 14h-2-160v-64h162c7.72 0 14 6.28 14 14z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g></svg>
                    Give Point</b-button>

                <b-button style="font-size: 14px;width: 142px" pill variant="outline-primary" >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 478.2 478.2" style="enable-background:new 0 0 512 512; margin-bottom: 3px;fill: #3766FF" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5   c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1   c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7   c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61   c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3   c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3   c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1   c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4   c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8   c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2   c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9   c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7   c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3   c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3   C444.875,295.3,440.675,304.4,431.975,313.4z" fill="#3766ff" data-original="#000000" style=""/></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>
                    Like</b-button>
            </div>

            <div style="width:375px;height:103px;border: 1px solid #C8C8C8;margin-top:20px;text-align:left">
                <span class="material-icons" style="margin:40px 10px 20px 20px;color: #B3B3B3;font-size:25px">panorama</span>
                <span class="material-icons" style="margin:40px 10px 20px 10px;transform: rotate(220deg);color: #B3B3B3;font-size:25px">attach_file</span>
                <span class="material-icons" style="margin:40px 15px 20px 10px;color: #B3B3B3;font-size:25px">alternate_email</span>

                <div class="comment" style="color:#939393">Comment</div>

            </div>
            

        
    </div>
</div>
</template>

<script>
export default {
    methods: {
        changePages() {
          this.$router.push({path: '/'})
        }
    }
  }
</script>

<style>
#topbar {
    width: 375px;
    height: 111px;
    background-color: #3766FF;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    
}

.reportInfo {
    width: 375px;
    height: 785px;
    overflow: auto;
}

.content {
    color:#929292;
    margin-top:20px
}

.view {
    width:375px;
    height:45px;
    background-color: rgb(55, 156, 255, 0.15);
    margin-top:30px;
    text-align:left;
    display: flex;
    align-content: center;
}

.btnGroup{
    display: flex;
    justify-content: space-around;

}

.comment {
    width:200px;
    height: 50px;
    position: absolute;
    margin-top: 25px;
    display: inline-block;
    border: 1px solid #939393;
    padding: 15px;
    border-radius: 20px;
}
</style>