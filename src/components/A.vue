<template>
  <div class="sumChart">
      <div style="text-align: left; margin: 15px 20px" ><span v-if="!datePick">{{dateMock}}</span>
      <span v-if="datePick">{{rangeTime}} </span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 551.13 551.13" style="enable-background:new 0 0 512 512; margin-left: 68px" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m465.016 172.228h-51.668v34.446h34.446v310.011h-344.457v-310.011h34.446v-34.446h-51.669c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223z" fill="#3766ff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m258.342 65.931v244.08h34.446v-244.08l73.937 73.937 24.354-24.354-115.514-115.514-115.514 115.514 24.354 24.354z" fill="#3766ff" data-original="#000000" style="" class=""/></g></svg>  
          </div> 

      <div class="btnGroup">
        <b-button :class="active == 1 ? 'active': ''" style="font-size: 12px;" pill variant="outline-primary" @click="changeActive(1)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10" height="10" x="0" y="0" viewBox="0 0 478.2 478.2" style="enable-background:new 0 0 512 512; margin-bottom: 3px" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5   c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1   c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7   c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61   c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3   c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3   c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1   c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4   c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8   c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2   c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9   c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7   c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3   c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3   C444.875,295.3,440.675,304.4,431.975,313.4z" fill="#3766ff" data-original="#000000" style="fill: white"/></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>
            Like</b-button>

        <b-button :class="active == 2 ? 'active': ''" style="font-size: 12px;" pill variant="outline-primary" @click="changeActive(2)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10" height="10" x="0" y="0" viewBox="0 0 480 480" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m408 0h-336c-39.746094.0429688-71.9570312 32.253906-72 72v208c.0429688 39.746094 32.253906 71.957031 72 72h22.238281l-14.078125 70.398438c-.605468 3.027343.585938 6.128906 3.054688 7.976562s5.78125 2.109375 8.511718.671875l150.25-79.046875h166.023438c39.746094-.042969 71.957031-32.253906 72-72v-208c-.042969-39.746094-32.253906-71.9570312-72-72zm56 280c-.035156 30.914062-25.085938 55.964844-56 56h-168c-1.300781 0-2.578125.316406-3.726562.921875l-137.128907 72.175781 12.695313-63.496094c.480468-2.355468-.121094-4.800781-1.640625-6.660156-1.519531-1.863281-3.796875-2.941406-6.199219-2.941406h-32c-30.914062-.035156-55.964844-25.085938-56-56v-208c.035156-30.914062 25.085938-55.964844 56-56h336c30.914062.035156 55.964844 25.085938 56 56zm0 0" fill="#3766ff" data-original="#000000" style=""/></g></svg>
            Comment</b-button>

        <b-button :class="active == 3 ? 'active': ''" style="font-size: 12px;" pill variant="outline-primary" @click="changeActive(3)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10" height="10" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; margin-bottom: 3px" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m466 87.987h-116.058c15.216-21.824 13.112-52.143-6.344-71.598-21.834-21.835-57.361-21.835-79.195 0-2.451 2.451-5.378 6-8.402 12.003-3.025-6.003-5.951-9.552-8.402-12.003-21.834-21.835-57.361-21.835-79.195 0-19.455 19.455-21.559 49.773-6.344 71.598h-116.06c-25.364 0-46 20.636-46 46v36c0 20.484 13.461 37.877 32 43.814v252.186c0 25.364 20.636 46 46 46h146 64 146c25.364 0 46-20.636 46-46v-252.186c18.539-5.938 32-23.331 32-43.814v-36c0-25.364-20.636-46-46-46zm-194 96h-32v-64h32zm3.764-109.544c4.942-28.425 10.633-34.794 11.266-35.427 4.679-4.679 10.825-7.018 16.971-7.018s12.292 2.339 16.971 7.018c9.357 9.358 9.357 24.583 0 33.941-.629.629-6.96 6.288-35.17 11.221-4.106.718-8.113 1.319-11.81 1.816.486-3.612 1.072-7.527 1.772-11.551zm-84.735-35.427c4.679-4.679 10.825-7.018 16.971-7.018s12.292 2.339 16.971 7.018c.629.629 6.288 6.96 11.221 35.169.718 4.106 1.319 8.114 1.816 11.811-3.612-.487-7.528-1.073-11.551-1.773-28.425-4.942-34.794-10.633-35.427-11.266-9.358-9.357-9.358-24.583-.001-33.941zm-159.029 94.971c0-7.72 6.28-14 14-14h162v64h-160-2c-7.72 0-14-6.28-14-14zm32 332v-250h144v264h-130c-7.72 0-14-6.28-14-14zm176 14v-264h32v264zm208-14c0 7.72-6.28 14-14 14h-130v-264h144zm32-296c0 7.72-6.28 14-14 14h-2-160v-64h162c7.72 0 14 6.28 14 14z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g></svg>
            Point</b-button>

        <b-button :class="active == 4 ? 'active': ''" style="font-size: 12px;" pill variant="outline-primary" @click="changeActive(4)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="10" height="10" x="0" y="0" viewBox="0 0 512.007 512.007" style="enable-background:new 0 0 512 512; margin-bottom: 3px" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M510.025,139.609l-85.333-102.4c-1.621-1.937-4.019-3.063-6.554-3.063H93.871c-2.534,0-4.932,1.118-6.554,3.063    l-85.333,102.4c-2.125,2.543-2.586,6.084-1.178,9.079c1.408,2.995,4.42,4.915,7.731,4.915h494.933c3.311,0,6.323-1.92,7.731-4.915    C512.602,145.702,512.15,142.16,510.025,139.609z M26.757,136.537l71.108-85.333h316.271l71.108,85.333H26.757z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M263.898,39.402c-1.323-3.191-4.437-5.265-7.885-5.265H93.88c-3.055,0-5.871,1.63-7.398,4.284s-1.519,5.905,0.026,8.55    l59.733,102.4c1.331,2.278,3.644,3.823,6.272,4.164c0.367,0.043,0.734,0.068,1.092,0.068c2.253,0,4.429-0.887,6.042-2.5    l102.4-102.4C264.487,46.263,265.221,42.593,263.898,39.402z M155.397,131.212l-46.669-80.008h126.677L155.397,131.212z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M511.109,141.281c-1.434-2.91-4.403-4.753-7.646-4.753H8.53c-3.243,0-6.204,1.843-7.646,4.753    c-1.434,2.91-1.101,6.383,0.87,8.96l247.467,324.267c1.613,2.116,4.122,3.362,6.784,3.362s5.171-1.246,6.767-3.362    l247.467-324.267C512.21,147.664,512.542,144.191,511.109,141.281z M256.005,455.274L25.784,153.604h460.442L256.005,455.274z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M264.146,466.76l-102.4-324.267c-1.126-3.55-4.412-5.965-8.141-5.965H8.538c-3.243,0-6.204,1.843-7.646,4.753    c-1.434,2.91-1.101,6.383,0.87,8.96l247.467,324.267c1.655,2.176,4.19,3.362,6.784,3.362c1.331,0,2.679-0.307,3.925-0.973    C263.617,474.995,265.391,470.711,264.146,466.76z M25.784,153.604H147.35l85.811,271.736L25.784,153.604z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M425.537,38.421c-1.519-2.654-4.343-4.284-7.398-4.284H256.005c-3.447,0-6.562,2.074-7.885,5.265    c-1.323,3.191-0.589,6.861,1.852,9.301l102.4,102.4c1.604,1.613,3.78,2.5,6.033,2.5c0.367,0,0.734-0.026,1.101-0.068    c2.62-0.341,4.941-1.877,6.272-4.164l59.733-102.4C427.047,44.326,427.056,41.075,425.537,38.421z M356.613,131.212    l-80.009-80.008h126.677L356.613,131.212z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M511.126,141.299c-1.434-2.91-4.403-4.753-7.646-4.753H358.413c-3.729,0-7.023,2.415-8.141,5.965l-102.4,324.267    c-1.246,3.942,0.529,8.226,4.207,10.138c1.246,0.648,2.594,0.956,3.925,0.956c2.586,0,5.12-1.186,6.784-3.345l247.467-324.267    C512.227,147.681,512.559,144.208,511.126,141.299z M278.849,425.339l85.811-271.736h121.566L278.849,425.339z" fill="#3766ff" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>
            Diamond</b-button>
    </div>
    <div id="lineChart"></div>
</div>
</template>

<script>
import echarts from 'echarts'


export default {
    mounted() {
        this.chart()
    },
    props: {
        datePick: Object
    },
    data() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

      let dateObj = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

      let months = monthNames[start.getMonth()];
      let days = String(start.getDate()).padStart(2, '0');
      let years = start.getFullYear();
      let outputs = days + ' ' + months  + ' ' + years ;

      let month = monthNames[dateObj.getMonth()];
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear();
      let output = day + ' ' + month  + ' ' + year ;

      let test = outputs + ' - ' + output
        return {
            active: 1,
            a: [40, 35, 55, 65, 55, 60, 57],
            dateMock: test,
            rangeTime: ''
        }
    },
    watch: {
        datePick(val) {
            this.rangeTime = val[0] + ' - ' + val[1]
        }
    },
    methods: {
        changeActive(id) {
            this.active = id
             switch (id){
            case 1 :
                this.a = [40, 35, 55, 65, 55, 60, 57]
                break;
            case 2 :
                this.a = [30,50,45,55,80,30,60]
                break;
            case 3 :
                this.a = [100,120,800,200,220,180,210]
                break;
            case 4 :
                this.a = [40,50,35,45,33,47,60]

                break;
            }  
            this.chart()
            console.log(this.a)
        },
        chart() {
        var myChart = echarts.init(document.getElementById('lineChart'))
        var option = {
            xAxis: {
                name: 'Dec',
                type: 'category',
                data: [10, 11, 12, 13, 14, 15, 16],
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.a,
                type: 'line',
                symbolSize: 10,
                lineStyle: {
                    color: '#3766FF',
                    width: 2,
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#3766FF',
                    color: '#3766FF'
                }
            }]
        };
        myChart.setOption(option);
        }
    }
  }
</script>

<style>
#lineChart {
    width: 375px;
    height: 375px;
}

.btn {
    margin: 0px 5px;
}

.btn :active {
    color: black;
}



</style>