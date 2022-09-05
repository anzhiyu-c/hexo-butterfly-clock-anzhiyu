function clockUpdateTime(info, city) {
  let currentColor = '#000'
  switch (info.now.icon) {
    case '100':
      currentColor = '#fdcc45'
      break
    case '101':
      currentColor = '#fe6976'
      break
    case '102':
    case '103':
      currentColor = '#fe7f5b'
      break
    case '104':
    case '150':
    case '151':
    case '152':
    case '153':
    case '154':
    case '800':
    case '801':
    case '802':
    case '803':
    case '804':
    case '805':
    case '806':
    case '807':
      currentColor = '#2152d1'
      break
    case '300':
    case '301':
    case '305':
    case '306':
    case '307':
    case '308':
    case '309':
    case '310':
    case '311':
    case '312':
    case '313':
    case '314':
    case '315':
    case '316':
    case '317':
    case '318':
    case '350':
    case '351':
    case '399':
      currentColor = '#49b1f5'
      break
    case '302':
    case '303':
    case '304':
      currentColor = '#fdcc46'
      break
    case '400':
    case '401':
    case '402':
    case '403':
    case '404':
    case '405':
    case '406':
    case '407':
    case '408':
    case '409':
    case '410':
    case '456':
    case '457':
    case '499':
      currentColor = '#a3c2dc'
      break
    case '500':
    case '501':
    case '502':
    case '503':
    case '504':
    case '507':
    case '508':
    case '509':
    case '510':
    case '511':
    case '512':
    case '513':
    case '514':
    case '515':
      currentColor = '#97acba'
      break
    case '900':
    case '999':
      currentColor = 'red'
      break
    case '901':
      currentColor = '#179fff;'
      break
    default:
      break
  }
  var clock_box = document.getElementById('hexo_electric_clock')
  
  clock_box_html = `
  <div class="clock-row">
    <span id="card-clock-clockdate" class="card-clock-clockdate"></span>
    <span class="card-clock-weather"><i class="qi-${info.now.icon}-fill" style="color: ${currentColor}"></i> ${info.now.text} <span>${info.now.temp}</span> ℃</span>
    <span class="card-clock-humidity">💧 ${info.now.humidity}%</span>
  </div>
  <div class="clock-row">
    <span id="card-clock-time" class="card-clock-time"></span>
  </div>
  <div class="clock-row">
    <span class="card-clock-windDir"> <i class="qi-gale"></i> ${info.now.windDir}</span>
    <span class="card-clock-location">${city}</span>
    <span id="card-clock-dackorlight" class="card-clock-dackorlight"></span>
  </div>
  `
  var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  var card_clock_loading_dom = document.getElementById('card-clock-loading')
  if (card_clock_loading_dom) {
    card_clock_loading_dom.innerHTML = ''
  }
  clock_box.innerHTML = clock_box_html
  function updateTime() {
    var cd = new Date()
    var card_clock_time =
      zeroPadding(cd.getHours(), 2) +
      ':' +
      zeroPadding(cd.getMinutes(), 2) +
      ':' +
      zeroPadding(cd.getSeconds(), 2)
    var card_clock_date =
      zeroPadding(cd.getFullYear(), 4) +
      '-' +
      zeroPadding(cd.getMonth() + 1, 2) +
      '-' +
      zeroPadding(cd.getDate(), 2) +
      ' ' +
      week[cd.getDay()]
    var card_clock_dackorlight = cd.getHours()
    var card_clock_dackorlight_str
    if (card_clock_dackorlight > 12) {
      card_clock_dackorlight -= 12
      card_clock_dackorlight_str = ' P M'
    } else {
      card_clock_dackorlight_str = ' A M'
    }
    if (document.getElementById('card-clock-time')) {
      var card_clock_time_dom = document.getElementById('card-clock-time')
      var card_clock_date_dom = document.getElementById('card-clock-clockdate')
      var card_clock_dackorlight_dom = document.getElementById('card-clock-dackorlight')
      card_clock_time_dom.innerHTML = card_clock_time
      card_clock_date_dom.innerHTML = card_clock_date
      card_clock_dackorlight_dom.innerHTML = card_clock_dackorlight_str
    }
  }
  function zeroPadding(num, digit) {
    var zero = ''
    for (var i = 0; i < digit; i++) {
      zero += '0'
    }
    return (zero + num).slice(-digit)
  }
  var timerID = setInterval(updateTime, 1000)
  updateTime()
}
function getIpInfo() {
  let defaultInfo = {
    city: '长沙市',
    qweather_url: ''
  }
  if (clock_default_rectangle_enable === 'true' && defaultInfo) {
    fetch(`https://restapi.amap.com/v3/geocode/regeo?key=${gaud_map_key}&location=${clock_rectangle}`)
    .then(regeo_res => regeo_res.json())
    .then(regeo_data => {
      if (regeo_data.status === "1") {
        const addressComponent = regeo_data.regeocode.addressComponent
        return Array.isArray(addressComponent.city) ? addressComponent.province : addressComponent.city
      }
    })
    .then((rectangleCity) => {
      fetch(`https://devapi.qweather.com/v7/weather/now?location=${
        clock_rectangle
      }&key=${qweather_key}`)
      .then(res => res.json())
      .then(data => {
        if (document.getElementById('hexo_electric_clock')) {
          let city = Array.isArray(rectangleCity) ? defaultInfo.city : rectangleCity
  
          clockUpdateTime(data, city)
        }
      })
    })
  } else {
    fetch(`https://restapi.amap.com/v3/ip?key=${gaud_map_key}`)
    .then(res => res.json())
    .then(data => {
      // ip未获取到 使用默认地理位置
      let qweather_url_location = Array.isArray(data.rectangle) ? clock_rectangle : data.rectangle.split(';')[0]

      defaultInfo.qweather_url = `https://devapi.qweather.com/v7/weather/now?location=${
        qweather_url_location
      }&key=${qweather_key}`

      if (Array.isArray(data.rectangle)) {
        fetch(`https://restapi.amap.com/v3/geocode/regeo?key=${gaud_map_key}&location=${clock_rectangle}`)
          .then(regeo_res => regeo_res.json())
          .then(regeo_data => {
            if (regeo_data.status === "1") {
              const addressComponent = regeo_data.regeocode.addressComponent
              defaultInfo.city = Array.isArray(addressComponent.city) ? addressComponent.province : addressComponent.city
            }
            return data
          })
          .then((data3) => {
            // 同步获取天气数据，否则城市获取将会异常
            fetch(defaultInfo.qweather_url)
              .then(r => r.json())
              .then(resNotfindByIp => {
                if (document.getElementById('hexo_electric_clock')) {
                  let city = Array.isArray(data3.city) ? defaultInfo.city : data3.city
                  clockUpdateTime(resNotfindByIp, city)
                }
              })
          })
      } else {
        fetch(defaultInfo.qweather_url)
          .then(res2 => res2.json())
          .then(data2 => {
            if (document.getElementById('hexo_electric_clock')) {
              // 通过请求ip 获取到位置
              let city = Array.isArray(data.city) ? defaultInfo.city : data.city
              clockUpdateTime(data2, city)
            }
        })
      }
    })
  }

}
getIpInfo()