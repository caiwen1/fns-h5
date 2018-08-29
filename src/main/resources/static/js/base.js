
$(function () {
	
	var t = Date.now();
	//休眠方法
	function sleep(d){
		while(Date.now - t <= d);
	} 

	
	//start  showSubpage 方法。开启子页面定时器方法
	var index=0;
	
	
    function showSubpage() 
    {
    	//规避数值 
    	if(index>=11){ 
    		index=0;
    		window.location.href = '../index.html';
    		sleep(10000);
    	}
        switch(index)  
        {
        case 0:
        	 $('.center_text').css('display', 'none');
             $('.t_cos3').css('display', 'block');
             echart_4();
          break;
        case 1:
        	$('.center_text').css('display', 'none');
			$('.t_cos4').css('display', 'block');
			echart_1();
          break;
        case 2:
            $('.center_text').css('display', 'none');
			$('.t_cos2').css('display', 'block');
			echart_2();
          break;
        case 3:
        	$('.center_text').css('display', 'none');
			$('.t_cos13').css('display', 'block');
			echart_13();
        	break;
        case 4:
        	 $('.center_text').css('display', 'none');
			$('.t_cos6').css('display', 'block');
			echart_6();
             break;
        case 5:
        	$('.center_text').css('display', 'none');
			$('.t_cos11').css('display', 'block');
			echart_11();
          break;
        case 6:
        	$('.center_text').css('display', 'none');
			$('.t_cos16').css('display', 'block');
			echart_16();
          break;
        case 7:
        	$('.center_text').css('display', 'none');
			$('.t_cos14').css('display', 'block');
			echart_14();
          break;
        case 8:
        	$('.center_text').css('display', 'none');
			$('.t_cos17').css('display', 'block');
			echart_17();
          break;
        case 9:
        	$('.center_text').css('display', 'none');
			$('.t_cos19').css('display', 'block');
			echart_19();
          break;
        case 10:
        	$('.center_text').css('display', 'none');
			$('.t_cos15').css('display', 'block');
			echart_15();
          break;  
          
          
        default:
        	 $('.center_text').css('display', 'none');
	        $('.t_cos5').css('display', 'block');
	        echart_3();
        }
        
        //使用偏移量做记录
        index++;
        console.log("第二页面脚标值为:"+index);
    }
    setInterval(showSubpage,10000);
   //start  showSubpage 方法
    echart_map();
    var date = ['8月13日','8月14日','8月15日','8月16日','8月17日'];
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
                y: '5%',
                //data: [ '北京', '深圳', '广州','成都','上海', '杭州'],
                data: ['上海', '北京','天津',  '西安','广州','深圳','杭州','成都','青岛','南京','南昌','湖州','武汉','烟台','东莞','哈尔滨','潍坊','济南','贵阳'],
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
                radius: [41, 210.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '50%'],
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
                        fontSize: 14
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
                        value: 30714,
                        name: '上海',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 30222,
                        name: '北京',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 15692,
                        name: '天津',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 5912,
                        name: '西安',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 5510,
                        name: '广州',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 4943,
                        name: '深圳',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },

                    {
                        value: 4795,
                        name: '杭州',
                        itemStyle: {
                            normal: {
                                color: '#ff4343'
                            }
                        }
                    },
                    {
                        value: 4467,
                        name: "成都",
                        itemStyle: {
                            normal: {
                                 color: '#f845f1'
                            }
                        }
                    },
                    {
                        value: 4763,
                        name: "青岛",
                        itemStyle: {
                            normal: {
                                 color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 4315,
                        name: "南京",
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 3363,
                        name: "南昌",
                        itemStyle: {
                            normal: {
                               color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 2170,
                        name: "湖州",
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 2363,
                        name: "武汉",
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 1838,
                        name: "烟台",
                        itemStyle: {
                            normal: {
                               color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 1335,
                        name: "东莞",
                        itemStyle: {
                            normal: {
                               color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 954,
                        name: "哈尔滨",
                        itemStyle: {
                            normal: {
                               color: '#ff4343'
                            }
                        }
                    },{
                        value: 880,
                        name: "潍坊",
                        itemStyle: {
                            normal: {
                                 color: '#ff1333'
                            }
                        }
                    },{
                        value: 560,
                        name: "济南",
                        itemStyle: {
                            normal: {
                              color: '#fefefe'
                            }
                        }
                    },{
                        value: 471,
                        name: "贵阳",
                        itemStyle: {
                            normal: {
                                color: '#f6d24a'
                            }
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
        var myChart = echarts.init(document.getElementById('chart_0'));
        myChart.clear();
      option = {
	    title : {
	        text: '',
	        subtext: '',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        top: '2%',
	        left: '1%',
	        data:[
	            '北京:47', '上海:42', '成都:9', '广州:11', '杭州:10', '深圳:10', '东莞:3', '贵阳:1', '哈尔滨:2', '湖州:7', '济南:4', '南昌:5', '南京:5', '青岛:12', '天津:25', '潍坊:6', '武汉:7', '西安:9', '烟台:10'
	            ],
	        textStyle:{
		    	fontSize:16,
		    	color: '#fff'
	       }
	    },
	    series : [
	        {
	            name: '运力',
	            type: 'pie',
	            radius : '60%',
	            center: ['50%', '50%'],
	            data:[
	            	 {value: 47, name: '北京:47'},
	                 {value: 42, name: '上海:42'},
	                 {value: 9, name: '成都:9'},
	                 {value: 11, name: '广州:11'},
	                 {value: 10, name: '杭州:10'},
	                 {value: 10, name: '深圳:10'},
	                 {value: 3, name: '东莞:3'},
	                 {value: 1, name: '贵阳:1'},
	                 {value: 2, name: '哈尔滨:2'},
	                 {value: 7, name: '湖州:7'},
	                 {value: 4, name: '济南:4'},
	                 {value: 5, name: '南昌:5'},
	                 {value: 5, name: '南京:5'},
	                 {value: 12, name: '青岛:12'},
	                 {value: 25, name: '天津:25'},
	                 {value: 6, name: '潍坊:6'},
	                 {value: 7, name: '武汉:7'},
	                 {value: 9, name: '西安:9'},
	                 {value: 10, name: '烟台:10'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },label: {
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
                value: 80
            }],
            [{
                name: '南昌'
            }, {
                name: '深圳',
                value: 80
            }],
            [{
                name: '南昌'
            }, {
                name: '广州',
                value: 80
            }],
			 [{
                name: '南昌'
            }, {
                name: '成都',
                value: 80
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
   
  //echart_13接单量趋势
    function echart_13() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_13'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['北京', '上海', '成都', '广州', '杭州', '深圳', '东莞', '贵阳', '哈尔滨', '湖州', '济南', '南昌', '南京', '青岛', '天津', '潍坊', '武汉', '西安', '烟台'],
                textStyle:{
                    color: '#fff',
                    fontSize: 15,
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
            color: ['#FF4949','#98FB98','#4BF0FF','#44AFF0','#9E9E9E','#584BFF','#BE4DFF','#F845F1', '#A6A6A6', '#CCCC66','#CC6600', '#FF0099', '#636363', '#8B1A1A', '#CD6600', '#CDB38B', '#FF4040', '#FFAEB9', '#CDCD00'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
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
                    data:[30100, 29056, 30215, 30217, 30222]
                },
                {
                    name:'上海',
                    type:'line',
                    data:[27123, 29124, 29427, 27223, 28124]
                },
                {
                    name:'成都',
                    type:'line',
                    data:[5151, 5283, 5112, 4472, 4467]
                },
                {
                    name:'广州',
                    type:'line',
                    data:[4971,5162,4971,4839,5510]
                },
                {
                    name:'杭州',
                    type:'line',
                    data:[4593,4993, 4625,4135,4795]
                },
                {
                    name:'深圳',
                    type:'line',
                    data:[4461, 4631, 4542,4737,4943]
                },
                {
                    name:'东莞',
                    type:'line',
                    data:[1234, 1145, 1534,1331,1335]
                },
                {
                    name:'贵阳',
                    type:'line',
                    data:[393, 434, 421,485,471]
                },
                {
                    name:'哈尔滨',
                    type:'line',
                    data:[894, 914, 854,942,954]
                },
                {
                    name:'湖州',
                    type:'line',
                    data:[2120, 1973, 2320,2331,2170]
                },
                {
                    name:'济南',
                    type:'line',
                    data:[495, 490, 543,522,560]
                },
                {
                    name:'南昌',
                    type:'line',
                    data:[2171, 2673, 2272,2451,2172]
                },
                {
                    name:'南京',
                    type:'line',
                    data:[4261, 4331, 4714,4325,4315]
                },
                {
                    name:'青岛',
                    type:'line',
                    data:[4361, 4631, 4744,4137,4195]
                },
                {
                    name:'天津',
                    type:'line',
                    data:[15392, 15192, 14692,15292,15692]
                },
                {
                    name:'杭州',
                    type:'line',
                    data:[4195, 4394, 4345,4596,4795]
                },
                {
                    name:'潍坊',
                    type:'line',
                    data:[889, 780, 831,812,880]
                },
                {
                    name:'武汉',
                    type:'line',
                    data:[2463, 2163, 2433,2161,2363]
                },
                {
                    name:'西安',
                    type:'line',
                    data:[5722, 5872, 5712,5822,5912]
                },
                {
                    name:'烟台',
                    type:'line',
                    data:[1738, 1833, 1738,1812,1838]
                }
            ]
        };
        myChart.setOption(option);
    }
    
   
    //异常统计
    function echart_6() {
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_6'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['异常取消单','差评单','投诉单','欺诈单'],
                textStyle:{
                    color: '#fff',
                    fontSize: 16
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
                data: date,
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
   
    //拓展运营城市
    function echart_4() {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts2.init(document.getElementById('chart_4'));
        var effect = {
            show: true,
            scaleSize: 1,
            period: 30, // 运动周期，无单位，值越大越慢
            color: '#fff',
            shadowColor: 'rgba(220,220,220,0.4)',
            shadowBlur: 5
        };

        function itemStyle(idx) {
            return {
                normal: {
                    color: '#FF0000',
                    borderWidth: 1,
                    borderColor: ['rgba(30,144,255,1)', 'lime'][idx],
                    lineStyle: {
                        //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                        //shadowBlur: 10,
                        //shadowOffsetX: 0,
                        //shadowOffsetY: 0,
                        type: 'solid'
                    }
                }
            }
        };
        option = {
            color: ['rgba(30,144,255,1)','#00FF00','#FF0000', 'lime'],
            title: {
                text: '',
                subtext: '',
                sublink: '',
                x: 'center',
                textStyle: {
                    color: '#FF0000'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            legend: {
                orient: 'vertical',
                x: '2%',
                y: '3%',
                selectedMode: 'single',
                data: ['运营中城市', '未来一年拓展','未来三年拓展'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                padding: [0 ,30, 0 ,0],
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                    name: '运营中城市',
                    type: 'map',
                    roam: true,
                    hoverable: false,
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 0.5,
                            areaStyle: {
                                color: '#1b1b1b',
                            }
                        }
                    },
                    data: [],
                    markLine: {
                        symbol: ['circle', 'circle'],
                        symbolSize: 1,
                        effect: effect,
                        itemStyle: itemStyle(0),
                        smooth: true,
                        data: [
                            [{
                                name: '南昌'
                            }, {
                                name: '北京'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '上海'
                            }],

                            [{
                                name: '南昌'
                            }, {
                                name: '成都'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '广州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '杭州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '深圳'
                            }], [{
                                 name: '南昌'
                             }, {
                                 name: '东莞'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '贵阳'
                             }],

                             [{
                                 name: '南昌'
                             }, {
                                 name: '哈尔滨'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '湖州'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '济南'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '南京'
                             }],

                             [{
                                 name: '南昌'
                             }, {
                                 name: '青岛'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '上海'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '天津'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '潍坊'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '武汉'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '西安'
                             }],
                             [{
                                 name: '南昌'
                             }, {
                                 name: '烟台'
                             }]
                        ]
                    }
                },{
                    name: '未来一年拓展',
                    type: 'map',
                    roam: true,
                    hoverable: false,
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 0.5,
                            areaStyle: {
                                color: '#FF0000',
                            }
                        }
                    },
                    data: [],
                    markLine: {
                        symbol: ['circle', 'circle'],
                        symbolSize: 1,
                        effect: effect,
                        itemStyle: itemStyle(1),
                        smooth: true,
                        data: [
                            [{
                                name: '南昌'
                            }, {
                                name: '重庆'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '太原'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '兰州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '长沙'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '沈阳'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '郑州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '石家庄'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '长春'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '合肥'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '福州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '南宁'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '昆明'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '大连'
                            }]
                        ]
                    }
                },
                {
                    name: '未来三年拓展',
                    type: 'map',
                    mapType: 'china',
                    itedmStyle: {
                        normal: {
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 0.5,
                            areaStyle: {
                                color: '#1b1b1b'
                            }
                        }
                    },
                    data: [],
                    markLine: {
                        symbol: ['circle', 'circle'],
                        symbolSize: 1,
                        effect: effect,
                        itemStyle: itemStyle(2),
                        smooth: true,
                        data: [

                            [{
                                name: '南昌'
                            }, {
                                name: '包头'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '大同'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '德州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '邯郸'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '怀化'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '淮安'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '焦作'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '九江'
                            }],

                            [{
                                name: '南昌'
                            }, {
                                name: '拉萨'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '连云港'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '临汾'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '柳州'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '洛阳'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '南阳'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '宁波'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '启东'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '日照'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '铜陵'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '乌鲁木齐'
                            }],
                            [{
                                name: '南昌'
                            }, {
                                name: '兖州'
                            }]
                        ]
                    },
                    geoCoord: {
                        '阿拉山口': [82.5757, 45.1706],
                        '包头': [109.8403, 40.6574],
                        '北京': [116.4075, 39.9040],
                        '成都': [104.0665, 30.5723],
                        '大连': [121.6147, 38.9140],
                        '大同': [113.3001, 40.0768],
                        '德州': [116.3575, 37.4341],
                        '福州': [119.2965, 26.0745],
                        '广州': [113.2644, 23.1292],
                        '贵阳': [106.6302, 26.6477],
                        '哈尔滨': [126.5363, 45.8023],
                        '邯郸': [114.5391, 36.6256],
                        '杭州': [120.1551, 30.2741],
                        '合肥': [117.2272, 31.8206],
                        '侯马': [111.3720, 35.6191],
                        '怀化': [109.9985, 27.5550],
                        '淮安': [119.0153, 33.6104],
                        '黄骅': [117.3300, 38.3714],
                        '济南': [117.1205, 36.6510],
                        '焦作': [113.2418, 35.2159],
                        '九江': [116.0019, 29.7051],
                        '九龙红磡': [114.1870, 22.3076],
                        '昆明': [102.8329, 24.8801],
                        '拉萨': [91.1409, 29.6456],
                        '兰州': [103.8343, 36.0611],
                        '黎塘': [109.1363, 23.2066],
                        '连云港': [119.2216, 34.5967],
                        '临汾': [111.5190, 36.0880],
                        '柳州': [109.4160, 24.3255],
                        '龙口': [120.4778, 37.6461],
                        '洛阳': [112.4540, 34.6197],
                        '满洲里': [117.3787, 49.5978],
                        '南昌': [115.8581, 28.6832],
                        '南京': [118.7969, 32.0603],
                        '南宁': [108.3661, 22.8172],
                        '南阳': [112.5283, 32.9908],
                        '宁波': [121.5440, 29.8683],
                        '启东': [121.6574, 31.8082],
                        '秦皇岛': [119.6005, 39.9354],
                        '青岛': [120.3826, 36.0671],
                        '日照': [119.5269, 35.4164],
                        '厦门': [118.0894, 24.4798],
                        '上海': [121.4737, 31.2304],
                        '深圳': [114.0579, 22.5431],
                        '神木': [110.4871, 38.8610],
                        '沈阳': [123.4315, 41.8057],
                        '台前': [115.8717, 35.9701],
                        '太原': [112.5489, 37.8706],
                        '汤阴': [114.3572, 35.9218],
                        '天津': [117.2010, 39.0842],
                        '铜陵': [117.8121, 30.9454],
                        '瓦塘': [109.7600, 23.3161],
                        '温州': [120.6994, 27.9943],
                        '乌鲁木齐': [87.6168, 43.8256],
                        '武汉': [114.3054, 30.5931],
                        '西安': [108.9402, 34.3416],
                        '新乡': [113.9268, 35.3030],
                        '信阳': [114.0913, 32.1470],
                        '烟台': [121.4479, 37.4638],
                        '湖州': [120.033577,30.865988],
                        '东莞': [113.761293,23.027574],
                        '兖州': [116.7838, 35.5531],
                        '月山': [113.0550, 35.2104],
                        '湛江': [110.3594, 21.2707],
                        '长治': [113.1163, 36.1954],
                        '郑州': [113.6254, 34.7466],
                        '潍坊': [119.154576,36.710567],
                        '重庆': [106.5516, 29.5630],
                        '长春':[125.35000,43.88333],
                        '石家庄':[114.48333,38.03333],
                        '长沙':[113.00000,28.21667]
                    }
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
       }
    //结算单量
    function echart_11(){
    	var myChart = echarts.init(document.getElementById("chart_11"))
        myChart.clear()
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: '2%',
                left: '1%',
                data: [
                    '北京', '成都', '广州', '杭州', '深圳','上海',  '东莞', '贵阳', '哈尔滨', '湖州', '济南', '天津','南昌', '南京', '青岛',  '潍坊', '武汉', '西安', '烟台'
                ],
	            textStyle: {
	                fontSize: 16,
	                color: '#fff'
	            }
            },
            color: ['#FF4949','#98FB98','#4BF0FF','#44AFF0','#9E9E9E','#584BFF','#BE4DFF','#F845F1', '#A6A6A6', '#CCCC66','#CC6600', '#FF0099', '#636363', '#8B1A1A', '#CD6600', '#CDB38B', '#FF4040', '#FFAEB9', '#CDCD00'],
            series: [
                {
                    name: '城市',
                    type: 'pie',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                        
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                        	value: 126677,
                        	name: ''
                        },
                    ]
                },
                {
                    name: '城市',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            },
                            textStyle: {
                                fontSize: 18
                            }
                        }
                        
                    },
                    data: [
                        {value: 30222, name: '北京'},
                        {value: 4467, name: '成都'},
                        {value: 5510, name: '广州'},
                        {value: 4795, name: '杭州'},
                        {value: 4943, name: '深圳'},
                        {value: 28124, name: '上海'},
                        {value: 1335, name: '东莞'},
                        {value: 471, name: '贵阳'},
                        {value: 954, name: '哈尔滨'},
                        {value: 2170, name: '湖州'},
                        {value: 560, name: '济南'},
                        {value: 15692, name: '天津'},
                        {value: 3363, name: '南昌'},
                        {value: 4315, name: '南京'},
                        {value: 4763, name: '青岛'},
                        {value: 880, name: '潍坊'},
                        {value: 2363, name: '武汉'},
                        {value: 5912, name: '西安'},
                        {value: 1838, name: '烟台'}
                    ],
                }
            ]
        }
        myChart.setOption(option);
    }
    
    //骑手增量
    function echart_14(){
    	var myChart = echarts.init(document.getElementById('chart_14'));
    	  myChart.clear()
          option = {
	      tooltip : {
	          trigger: 'axis'
	      },
	      /*legend: {
	          data:['未来五年骑手增长趋势']
	      },*/
	      toolbox: {
	          show : false,
	          feature : {
	              mark : {show: true},
	              dataView : {show: true, readOnly: false},
	              magicType : {show: true, type: ['line', 'bar']},
	              restore : {show: true},
	              saveAsImage : {show: true}
	          }
	      },
	      calculable : true,
	      xAxis : [
	          {
	              type : 'category',
	              data : ['2018年（万）','2019年（万）','2020年（万）','2021年（万）','2022年（万）'],
	              axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                        fontSize:'16'
	                    }
	                }
	          }
	      ],
	      yAxis : [
	          {
	              type : 'value',
	              axisLine: {
	                   lineStyle: {
	                       type: 'solid',
	                       color:'#fff',
	                       width:'2'
	                   }
	               },
	               axisLabel: {
	                   textStyle: {
	                       color: '#fff',
	                       fontSize:'16'
	                   }
	               }
	          }
	      ],
	      series : [
	          {
	              name:'未来五年骑手增长趋势',
	              type:'bar',
	              barWidth : 80,
	              itemStyle:{ 
	            	  normal:{
	            		  color:'#ab78ba'
	            	  } 
	              },
	              data:[0.8, 4, 10, 16, 24]
	          }
	      ]
	  };
    	  myChart.setOption(option)
    }
    
    //营业额增量
    function echart_15(){
    	var myChart = echarts.init(document.getElementById('chart_15'));
    	  myChart.clear()
          option = {
	      tooltip : {
	          trigger: 'axis'
	      },
	      /*legend: {
	          data:['未来五年骑手增长趋势']
	      },*/
	      toolbox: {
	          show : false,
	          feature : {
	              mark : {show: true},
	              dataView : {show: true, readOnly: false},
	              magicType : {show: true, type: ['line', 'bar']},
	              restore : {show: true},
	              saveAsImage : {show: true}
	          }
	      },
	      calculable : true,
	      xAxis : [
	          {
	              type : 'category',
	              data : ['2018年(亿元)','2019年(亿元)','2020年(亿元)','2021年(亿元)','2022年(亿元)'],
	              axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                        fontSize:'16'
	                    }
	                }
	          }
	      ],
	      yAxis : [
	          {
	              type : 'value',
	              axisLine: {
	                   lineStyle: {
	                       type: 'solid',
	                       color:'#fff',
	                       width:'2'
	                   }
	               },
	               axisLabel: {
	                   textStyle: {
	                       color: '#fff',
	                       fontSize:'16'
	                   }
	               }
	          }
	      ],
	      series : [
	          {
	              name:'未来五年营业额增长趋势',
	              type:'bar',
	              barWidth : 80,
	              itemStyle:{ 
	            	  normal:{
	            		  color:'#3398DB'
	            	  } 
	              },
	              data:[5, 25, 60, 100, 150]
	          }
	      ]
	  };
    	  myChart.setOption(option)
    }
    
    //城市GMV
    function echart_16(){
    	var myChart = echarts.init(document.getElementById('chart_16'));
    	myChart.clear()
        option = {

    	    title : {
    	        text: '',
    	        subtext: '',
    	        x:'center'
    	    },
    	    tooltip : {
    	        trigger: 'item',
    	        formatter: "{a} <br/>{b} : {c} ({d}%)"
    	    },
    	    legend: {
    	        orient: 'vertical',
    	        left: 'left',
    	        top: '2%',
    	        left: '1%',
    	        data:['北京', '成都', '广州', '杭州', '深圳','上海',  '东莞', '贵阳', '哈尔滨', '湖州', '济南', '天津','南昌', '南京', '青岛',  '潍坊', '武汉', '西安', '烟台'],
    	        textStyle:{
    		    	fontSize:16,
    		    	color: '#fff'
    	       }
    	    },
    	    series : [
    	        {
    	            name: '运力',
    	            type: 'pie',
    	            radius : '60%',
    	            center: ['50%', '50%'],
    	            data:[
    	            	{value:256488.83, name:'北京'},
    	            	{value: 4467, name: '成都'},
                        {value: 5510, name: '广州'},
                        {value: 4795, name: '杭州'},
                        {value: 4943, name: '深圳'},
                        {value:304459.89, name:'上海'},
                        {value: 2949.01, name: '东莞'},
                        {value: 3850.32, name: '贵阳'},
                        {value: 3384.03, name: '哈尔滨'},
                        {value: 13625.95, name: '湖州'},
                        {value: 5388.11, name: '济南'},
                        {value: 9420.77, name: '南昌'},
                        {value:118757.55, name:'天津'},
                        {value: 28386.24, name: '南京'},
                        {value: 55394.09, name: '青岛'},
                        {value: 10441.75, name: '潍坊'},
                        {value: 24171.26, name: '武汉'},
                        {value: 5912, name: '西安'},
                        {value: 14794.59, name: '烟台'}
    	            ],
    	            itemStyle: {
    	                emphasis: {
    	                    shadowBlur: 10,
    	                    shadowOffsetX: 0,
    	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
    	                }
    	            },label: {
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
    	 myChart.setOption(option)
    }
    
    //城市增量
    function echart_17(){
    	var myChart = echarts.init(document.getElementById('chart_17'));
    	  myChart.clear()
          option = {
	      tooltip : {
	          trigger: 'axis'
	      },
	      /*legend: {
	          data:['未来五年骑手增长趋势']
	      },*/
	      toolbox: {
	          show : false,
	          feature : {
	              mark : {show: true},
	              dataView : {show: true, readOnly: false},
	              magicType : {show: true, type: ['line', 'bar']},
	              restore : {show: true},
	              saveAsImage : {show: true}
	          }
	      },
	      calculable : true,
	      xAxis : [
	          {
	              type : 'category',
	              data : ['2018年','2019年','2020年','2021年','2022年'],
	              axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                        fontSize:'16'
	                    }
	                }
	          }
	      ],
	      yAxis : [
	          {
	              type : 'value',
	              axisLine: {
	                   lineStyle: {
	                       type: 'solid',
	                       color:'#fff',
	                       width:'2'
	                   }
	               },
	               axisLabel: {
	                   textStyle: {
	                       color: '#fff',
	                       fontSize:'16'
	                   }
	               }
	          }
	      ],
	      series : [
	          {
	              name:'未来五年城市增长趋势',
	              type:'bar',
	              barWidth : 80,
	              itemStyle:{ 
	            	  normal:{
	            		  color:'#4BF0FF'
	            	  } 
	              },
	              data:[19, 100, 240, 400, 600]
	          }
	      ]
	  };
    	  myChart.setOption(option)
    }
    
    function echart_18(){
    	var myChart = echarts.init(document.getElementById('chart_18'));
    	  myChart.clear()
      var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = { 
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}',
            fontSize: 16
        }
		
    }
};
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter : '{b}<br/>{a0}:{c0}<br/>{a2}:{c2}<br/>{a4}:{c4}<br/>{a6}:{c6}'
    },
    legend: {
        y: 55,
        top: '5%',
        left: '20%',
        textStyle:{
	    	fontSize:16,
	    	color: '#fff'
       },
        itemGap : document.getElementById('chart_18').offsetWidth / 8,
        data:['骑手数(千)', '商家数(万)', '营业额(百万)']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid: {
        y: 80,
        y2: 30
    },
    xAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color:'#fff',
                    width:'2'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }
            },
            position: 'top',
            splitLine: {show: false},
            axisLabel: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color:'#fff',
                    width:'2'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }
            },
            splitLine: {show: false},
            data : ['2022', '2021', '2020', '2019', '2018']
        }
    ],
    series : [
    	{
            name:'骑手数(千)',
            type:'bar',
            stack: '总量',
            barWidth : 60,
            itemStyle : dataStyle,
    		data:[45, 30, 18, 7.5,1.5]
        },
        {
            name:'骑手数(千)',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
        	data:[55, 70, 82, 92.5,98.5]
        },
        {
            name:'商家数(万)',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[68, 45, 27, 12,2]
        },
        {
            name:'商家数(万)',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[32, 55, 73, 88,98]
        },
       
        {
            name:'营业额(百万)',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[30, 20, 12, 5,1]
        },
        {
            name:'营业额(百万)',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[70, 80, 88, 95,99]
        }
    ]
};
    	  myChart.setOption(option)
    }
    
    //商户增量
    function echart_19(){
    	var myChart = echarts.init(document.getElementById('chart_19'));
    	  myChart.clear()
          option = {
	      tooltip : {
	          trigger: 'axis'
	      },
	      /*legend: {
	          data:['未来五年骑手增长趋势']
	      },*/
	      toolbox: {
	          show : false,
	          feature : {
	              mark : {show: true},
	              dataView : {show: true, readOnly: false},
	              magicType : {show: true, type: ['line', 'bar']},
	              restore : {show: true},
	              saveAsImage : {show: true}
	          }
	      },
	      calculable : true,
	      xAxis : [
	          {
	              type : 'category',
	              data : ['2018年(万)','2019年(万)','2020年(万)','2021年(万)','2022年(万)'],
	              axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                        fontSize:'16'
	                    }
	                }
	          }
	      ],
	      yAxis : [
	          {
	              type : 'value',
	              axisLine: {
	                   lineStyle: {
	                       type: 'solid',
	                       color:'#fff',
	                       width:'2'
	                   }
	               },
	               axisLabel: {
	                   textStyle: {
	                       color: '#fff',
	                       fontSize:'16'
	                   }
	               }
	          }
	      ],
	      series : [
	          {
	              name:'未来五年商户增长趋势',
	              type:'bar',
	              barWidth : 80,
	              itemStyle:{ 
	            	  normal:{
	            		  color:'#FFA74D'
	            	  } 
	              },
	              data:[12, 60, 150, 240, 360]
	          }
	      ]
	  };
    	  myChart.setOption(option)
    }
    
    //操作按钮
    $('.t_btn0').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
        echart_map();
    });
    $('.t_btn1').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos1').css('display', 'block');
        echart_2();
    });
    $('.t_btn2').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos2').css('display', 'block');
        echart_2();
    });
    $('.t_btn3').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos3').css('display', 'block');
        echart_4();
    });
    $('.t_btn6').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos6').css('display', 'block');
        echart_6();
    });
    $('.t_btn5').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_1();
    });
    $('.t_btn7').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        echart_7();
    });
    $('.t_btn8').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn9').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos9').css('display', 'block');
        echart_9();
    });
    $('.t_btn10').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn12').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos12').css('display', 'block');
        echart_12();
    });
    $('.t_btn13').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos13').css('display', 'block');
        echart_13();
    });
    $('.t_btn14').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos14').css('display', 'block');
        echart_14();
    });
    $('.t_btn15').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos15').css('display', 'block');
        echart_15();
    });
    $('.t_btn16').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos16').css('display', 'block');
        echart_16();
    });
    $('.t_btn17').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos17').css('display', 'block');
        echart_17();
    });
    $('.t_btn18').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos18').css('display', 'block');
        echart_18();
    });
    $('.t_btn19').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos19').css('display', 'block');
        echart_19();
    });
});