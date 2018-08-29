$(function () {
	
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    echart_map();
    var date = ['8月13日','8月14日','8月15日','8月16日','8月17日'];
    //使用定时器打开第二个页面。作者：蔡文
    function showTowPage()
    {
    	console.log('定时器开始执行....');
    	window.location.href = './page/index.html';
    }
    setInterval(showTowPage,12000);
    //echart_1接单量统计
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}单"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: [ '北京', '深圳', '广州','成都','上海', '杭州'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 100.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}单',
                        textStyle:{fontSize:16}
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    {
                        value: 30222,
                        name: '北京',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 4943,
                        name: '深圳',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 4510,
                        name: '广州',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 4467,
                        name: '成都',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 28124,
                        name: '上海',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 4195,
                        name: '杭州',
                        itemStyle: {
                            normal: {
                                color: '#ff4343'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2运力分析
    function echart_2() {
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        myChart.clear();
      option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        textStyle:{fontSize:14}
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['北京:47','上海:42','广州:11','深圳:10','杭州:9','成都:9'],
        textStyle:{
        	fontSize:16,
        	color: '#fff'
        	}
    },
    series : [
        {
            name: '运力',
            type: 'pie',
            radius : '55%',
            center: ['60%', '60%'],
            data:[
                {value:47, name:'北京:47'},
                {value:42, name:'上海:42'},
                {value:11, name:'广州:11'},
                {value:10, name:'深圳:10'},
                {value:9, name:'杭州:9'},
				{value:9, name:'成都:9'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 16
                    }
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};

        myChart.setOption(option);
    }

    // echart_map中国地图
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var mapName = 'china'
        var data = []
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
       var geoCoordMap = {
			'南昌': [115.862285,28.69199],
            '北京': [116.403613,39.915573],
            '深圳': [114.065127,22.550859],
            '广州': [113.269129,23.140919],
            '成都': [104.078081,30.655077],
            '上海': [121.40, 31.73],
            '杭州': [120.205736,30.255827],
			
			'东莞': [113.761293,23.027574],
			'贵阳': [106.715918,26.56624],
			'哈尔滨': [126.555984,45.809828],
			'湖州': [120.033577,30.865988],
			'济南': [117.026939,36.654933],
			'南京': [118.800697,32.065876],
			'青岛': [120.39607,36.073744],
			'天津': [117.219294,39.13913],
			'潍坊': [119.154576,36.710567],
			'武汉': [114.298363,30.599213], 
			'西安': [108.952789,34.3456],
			'烟台': [121.453842,37.471644],
        };
       

        var GZData = [
			
            [{
                name: '南昌'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '南昌'
            }, {
                name: '深圳',
                value: 10
            }],
            [{
                name: '南昌'
            }, {
                name: '广州',
                value: 1
            }],
			 [{
                name: '南昌'
            }, {
                name: '成都',
                value: 10
            }],
            [{
                name: '南昌'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '南昌'
            }, {
                name: '杭州',
                value: 80
            }]
			,[{ name: '南昌'}, {name: '东莞',value: 80 }]
            ,[{ name: '南昌'}, {name: '贵阳',value: 80 }]
			,[{ name: '南昌'}, {name: '哈尔滨',value: 80 }]
			,[{ name: '南昌'}, {name: '湖州',value: 80 }]
			,[{ name: '南昌'}, {name: '济南',value: 80 }]
			,[{ name: '南昌'}, {name: '南京',value: 80 }]
			,[{ name: '南昌'}, {name: '青岛',value: 80 }]
			,[{ name: '南昌'}, {name: '天津',value: 80 }]
			,[{ name: '南昌'}, {name: '潍坊',value: 80 }]
			,[{ name: '南昌'}, {name: '武汉',value: 80 }]
            ,[{ name: '南昌'}, {name: '西安',value: 80 }]
            ,[{ name: '南昌'}, {name: '烟台',value: 80 }]

        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['南昌', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        option = {
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //echart_3接单量趋势
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['北京','深圳','广州','成都','上海','杭州'],
                textStyle:{
                    color: '#fff',
                    fontSize:16
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:  ['8月13日','8月14日','8月15日','8月16日','8月17日'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '订单量',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'北京',
                    type:'line',
                    data:[30100, 29056, 30215, 30217, 30122]
                },
                {
                    name:'深圳',
                    type:'line',
                    data:[5726, 5482, 5908, 4887, 4743]
                },
                {
                    name:'广州',
                    type:'line',
                    data:[5051, 5286, 5172, 4472, 4510]
                },
                {
                    name:'成都',
                    type:'line',
                    data:[4331,4162,4179,4479,4367]
                },
                {
                    name:'上海',
                    type:'line',
                    data:[34563,35468, 37832,27847,28124]
                },
                {
                    name:'杭州',
                    type:'line',
                    data:[4361, 4631, 4744,4137,4195]
                }
            ]
        };
        myChart.setOption(option);
    }
    //异常统计
    function echart_4() {
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                textStyle:{
                	fontSize:16,
                }
            },
            legend: {
                data:['异常取消单','差评单','投诉单','欺诈单'],
                top: '8%',
                textStyle:{
                	fontSize:16,
                	color: '#fff'
                }
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:  ['8月13日','8月14日','8月15日','8月16日','8月17日'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '订单量',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'异常取消单',
                    type:'line',
                    data:[593, 657 ,650, 560, 677]
                },
                {
                    name:'差评单',
                    type:'line',
                    data:[113, 105, 109, 75, 63]
                },
                {
                    name:'投诉单',
                    type:'line',
                    data:[0, 0, 0, 0, 0]
                },
                {
                    name:'欺诈单',
                    type:'line',
                    data:[0,0,0,0,0]
                }
            ]
        };
        myChart.setOption(option);

    }
    //湖南省飞机场
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

        function showProvince() {
                var geoCoordMap = {
                    '长沙黄花国际机场': [113.226512,28.192929],
                    '张家界荷花机场': [110.454598,29.107223],
                    '常德桃花源机场': [111.651508,28.921516],
                    '永州零陵机场': [111.622869,26.340994],
                    '怀化芷江机场': [109.714784,27.44615],
                };
                var data = [{
                        name: '长沙黄花国际机场',
                        value: 100
                    },
                    {
                        name: '张家界荷花机场',
                        value: 100
                    },
                    {
                        name: '常德桃花源机场',
                        value: 100
                    },
                    {
                        name: '永州零陵机场',
                        value: 100
                    },
                    {
                        name: '怀化芷江机场',
                        value: 100
                    }
                ];
                var max = 480,
                    min = 9; // todo 
                var maxSize4Pin = 100,
                    minSize4Pin = 20;
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };

                myChart.setOption(option = {
                    title: {
                        top: 20,
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['pm2.5'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [1],
                        inRange: {
                        }
                    },
                    geo: {
                        show: true,
                        map:'hunan',
                        mapType: 'hunan',
                        label: {
                            normal: {
                            },
                            //鼠标移入后查看效果
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        //鼠标缩放和平移
                        roam: true,
                        itemStyle: {
                            normal: {
                                //          	color: '#ddd',
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },
                    series: [{
                            name: 'light',
                            type: 'map',
                            coordinateSystem: 'geo',
                            data: convertData(data),
                            itemStyle: {
                                normal: {
                                    color: '#F4E925'
                                }
                            }
                        },
                        {
                            name: '点',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: function(val) {
                                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                var b = minSize4Pin - a * min;
                                b = maxSize4Pin - a * max;
                                return a * val[2] + b;
                            },
                            label: {
                                normal: {
                                    // show: true,
                                    // textStyle: {
                                    //     color: '#fff',
                                    //     fontSize: 9,
                                    // }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F62157', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        },
                        {  
                            name: 'light',
                            type: 'map',
                            mapType: 'hunan',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: data
                        },
                        {
                            name: ' ',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 5)),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#05C3F9',
                                    shadowBlur: 10,
                                    shadowColor: '#05C3F9'
                                }
                            },
                            zlevel: 1
                        },

                    ]
                });
        }
        showProvince();

        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //点击跳转
    $('#chart_map').click(function(){
        window.location.href = './page/index.html';
    });
    $('.t_btn2').click(function(){
        window.location.href = "./page/index.html?id=2";
    });
    $('.t_btn3').click(function(){
        window.location.href = "./page/index.html?id=3";
    });
    $('.t_btn4').click(function(){
        window.location.href = "./page/index.html?id=4";
    });
    $('.t_btn5').click(function(){
        window.location.href = "./page/index.html?id=5";
    });
    $('.t_btn6').click(function(){
        window.location.href = "./page/index.html?id=6";
    });
    $('.t_btn7').click(function(){
        window.location.href = "./page/index.html?id=7";
    });
    $('.t_btn8').click(function(){
        window.location.href = "./page/index.html?id=8";
    });
    $('.t_btn9').click(function(){
        window.location.href = "./page/index.html?id=9";
    });
});

