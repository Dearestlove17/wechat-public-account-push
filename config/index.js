export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx79196e2af0d3a336",
    // 公众号appSecret
    appSecret: "f0476a0594c833f27d85c7110d85a9d7",
    // 模板消息id
    templateId: "WaKzZlaH1Bw7KnLvE9HZJwQE5YacWhJ1Rq6-HIkj_u4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oKMUE5wRy-yGT4pYhh3J2o-8F7rw","opaYy6aLILlhRZAqMgzMSK7n34wc"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "四川",
    // 所在城市
    city: "自贡",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "乖乖", "year": "1998", "date": "06-02", "type": 'new'},
      {"name": "哥哥", "year": "1996", "date": "01-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2016-11-05",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
