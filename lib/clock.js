function getIpInfo() {
  let defaultInfo = {
    city: '长沙市',
    qweather_url: ''
  }
  fetch(`https://restapi.amap.com/v3/ip?key=${gaud_map_key}`)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data.rectangle)) {
        defaultInfo.qweather_url = `https://devapi.qweather.com/v7/weather/now?location=${
          clock_rectangle
        }&key=${qweather_key}`
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
            fetch(defaultInfo.qweather_url)
              .then(res2 => res2.json())
              .then(data2 => {
                if (document.getElementById('hexo_electric_clock')) {
                  var res_text2 = data2
                  var clock_box = document.getElementById('hexo_electric_clock')
    
                  let currentColor = '#000'
                  switch (res_text2.now.icon) {
                    case '100':
                      currentColor = '#fdcc45'
                      break
                    case '101':
                      currentColor = '#fe6976'
                      break
                    case '102':
                      currentColor = '#fe7f5b'
                      break
                    case '103':
                      currentColor = '#fe7f5b'
                      break
                    case '104':
                      currentColor = '#2152d1'
                      break
                    case '150':
                      currentColor = '#2152d1'
                      break
                    case '151':
                      currentColor = '#2152d1'
                      break
                    case '152':
                      currentColor = '#2152d1'
                      break
                    case '153':
                      currentColor = '#2152d1'
                      break
                    case '154':
                      currentColor = '#2152d1'
                      break
                    case '300':
                      currentColor = '#49b1f5'
                      break
                    case '301':
                      currentColor = '#49b1f5'
                      break
                    case '302':
                      currentColor = '#fdcc46'
                      break
                    case '303':
                      currentColor = '#fdcc46'
                      break
                    case '304':
                      currentColor = '#fdcc46'
                      break
                    case '305':
                      currentColor = '#49b1f5'
                      break
                    case '306':
                      currentColor = '#49b1f5'
                      break
                    case '307':
                      currentColor = '#49b1f5'
                      break
                    case '308':
                      currentColor = '#49b1f5'
                      break
                    case '309':
                      currentColor = '#49b1f5'
                      break
                    case '310':
                      currentColor = '#49b1f5'
                      break
                    case '311':
                      currentColor = '#49b1f5'
                      break
                    case '312':
                      currentColor = '#49b1f5'
                      break
                    case '313':
                      currentColor = '#49b1f5'
                      break
                    case '314':
                      currentColor = '#49b1f5'
                      break
                    case '315':
                      currentColor = '#49b1f5'
                      break
                    case '316':
                      currentColor = '#49b1f5'
                      break
                    case '317':
                      currentColor = '#49b1f5'
                      break
                    case '318':
                      currentColor = '#49b1f5'
                      break
                    case '350':
                      currentColor = '#49b1f5'
                      break
                    case '351':
                      currentColor = '#49b1f5'
                      break
                    case '399':
                      currentColor = '#49b1f5'
                      break
                    case '400':
                      currentColor = '#a3c2dc'
                      break
                    case '401':
                      currentColor = '#a3c2dc'
                      break
                    case '402':
                      currentColor = '#a3c2dc'
                      break
                    case '403':
                      currentColor = '#a3c2dc'
                      break
                    case '404':
                      currentColor = '#a3c2dc'
                      break
                    case '405':
                      currentColor = '#a3c2dc'
                      break
                    case '406':
                      currentColor = '#a3c2dc'
                      break
                    case '407':
                      currentColor = '#a3c2dc'
                      break
                    case '408':
                      currentColor = '#a3c2dc'
                      break
                    case '409':
                      currentColor = '#a3c2dc'
                      break
                    case '410':
                      currentColor = '#a3c2dc'
                      break
                    case '456':
                      currentColor = '#a3c2dc'
                      break
                    case '457':
                      currentColor = '#a3c2dc'
                      break
                    case '499':
                      currentColor = '#a3c2dc'
                      break
                    case '500':
                      currentColor = '#97acba'
                      break
                    case '501':
                      currentColor = '#97acba'
                      break
                    case '502':
                      currentColor = '#97acba'
                      break
                    case '503':
                      currentColor = '#97acba'
                      break
                    case '504':
                      currentColor = '#97acba'
                      break
                    case '507':
                      currentColor = '#97acba'
                      break
                    case '508':
                      currentColor = '#97acba'
                      break
                    case '509':
                      currentColor = '#97acba'
                      break
                    case '510':
                      currentColor = '#97acba'
                      break
                    case '511':
                      currentColor = '#97acba'
                      break
                    case '512':
                      currentColor = '#97acba'
                      break
                    case '513':
                      currentColor = '#97acba'
                      break
                    case '514':
                      currentColor = '#97acba'
                      break
                    case '515':
                      currentColor = '#97acba'
                      break
                    case '800':
                      currentColor = '#2152d1'
                      break
                    case '801':
                      currentColor = '#2152d1'
                      break
                    case '802':
                      currentColor = '#2152d1'
                      break
                    case '803':
                      currentColor = '#2152d1'
                      break
                    case '804':
                      currentColor = '#2152d1'
                      break
                    case '805':
                      currentColor = '#2152d1'
                      break
                    case '806':
                      currentColor = '#2152d1'
                      break
                    case '807':
                      currentColor = '#2152d1'
                      break
                    case '900':
                      currentColor = 'red'
                      break
                    case '901':
                      currentColor = '#179fff;'
                      break
                    case '999':
                      currentColor = 'red'
                      break
                    default:
                      break
                  }
                  const city = Array.isArray(data3.city) ? defaultInfo.city : data3.city
                  if (clock_default_rectangle_enable === 'true' && defaultInfo) {
                    city = defaultInfo.city
                  }
                  clock_box_html = `
                  <div class="clock-row">
                    <span id="card-clock-clockdate" class="card-clock-clockdate"></span>
                    <span class="card-clock-weather"><i class="qi-${res_text2.now.icon}-fill" style="color: ${currentColor}"></i> ${res_text2.now.text} <span>${res_text2.now.temp}</span> ℃</span>
                    <span class="card-clock-humidity">💧 ${res_text2.now.humidity}%</span>
                  </div>
                  <div class="clock-row">
                    <span id="card-clock-time" class="card-clock-time"></span>
                  </div>
                  <div class="clock-row">
                    <span class="card-clock-windDir"> <i class="qi-gale"></i> ${res_text2.now.windDir}</span>
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
              })
        })
      } else {
        defaultInfo.qweather_url = `https://devapi.qweather.com/v7/weather/now?location=${
          clock_default_rectangle_enable ? clock_rectangle : data.rectangle.split(';')[0]
        }&key=${qweather_key}`

        fetch(defaultInfo.qweather_url)
          .then(res2 => res2.json())
          .then(data2 => {
            if (document.getElementById('hexo_electric_clock')) {
              var res_text2 = data2
              var clock_box = document.getElementById('hexo_electric_clock')

              let currentColor = '#000'
              switch (res_text2.now.icon) {
                case '100':
                  currentColor = '#fdcc45'
                  break
                case '101':
                  currentColor = '#fe6976'
                  break
                case '102':
                  currentColor = '#fe7f5b'
                  break
                case '103':
                  currentColor = '#fe7f5b'
                  break
                case '104':
                  currentColor = '#2152d1'
                  break
                case '150':
                  currentColor = '#2152d1'
                  break
                case '151':
                  currentColor = '#2152d1'
                  break
                case '152':
                  currentColor = '#2152d1'
                  break
                case '153':
                  currentColor = '#2152d1'
                  break
                case '154':
                  currentColor = '#2152d1'
                  break
                case '300':
                  currentColor = '#49b1f5'
                  break
                case '301':
                  currentColor = '#49b1f5'
                  break
                case '302':
                  currentColor = '#fdcc46'
                  break
                case '303':
                  currentColor = '#fdcc46'
                  break
                case '304':
                  currentColor = '#fdcc46'
                  break
                case '305':
                  currentColor = '#49b1f5'
                  break
                case '306':
                  currentColor = '#49b1f5'
                  break
                case '307':
                  currentColor = '#49b1f5'
                  break
                case '308':
                  currentColor = '#49b1f5'
                  break
                case '309':
                  currentColor = '#49b1f5'
                  break
                case '310':
                  currentColor = '#49b1f5'
                  break
                case '311':
                  currentColor = '#49b1f5'
                  break
                case '312':
                  currentColor = '#49b1f5'
                  break
                case '313':
                  currentColor = '#49b1f5'
                  break
                case '314':
                  currentColor = '#49b1f5'
                  break
                case '315':
                  currentColor = '#49b1f5'
                  break
                case '316':
                  currentColor = '#49b1f5'
                  break
                case '317':
                  currentColor = '#49b1f5'
                  break
                case '318':
                  currentColor = '#49b1f5'
                  break
                case '350':
                  currentColor = '#49b1f5'
                  break
                case '351':
                  currentColor = '#49b1f5'
                  break
                case '399':
                  currentColor = '#49b1f5'
                  break
                case '400':
                  currentColor = '#a3c2dc'
                  break
                case '401':
                  currentColor = '#a3c2dc'
                  break
                case '402':
                  currentColor = '#a3c2dc'
                  break
                case '403':
                  currentColor = '#a3c2dc'
                  break
                case '404':
                  currentColor = '#a3c2dc'
                  break
                case '405':
                  currentColor = '#a3c2dc'
                  break
                case '406':
                  currentColor = '#a3c2dc'
                  break
                case '407':
                  currentColor = '#a3c2dc'
                  break
                case '408':
                  currentColor = '#a3c2dc'
                  break
                case '409':
                  currentColor = '#a3c2dc'
                  break
                case '410':
                  currentColor = '#a3c2dc'
                  break
                case '456':
                  currentColor = '#a3c2dc'
                  break
                case '457':
                  currentColor = '#a3c2dc'
                  break
                case '499':
                  currentColor = '#a3c2dc'
                  break
                case '500':
                  currentColor = '#97acba'
                  break
                case '501':
                  currentColor = '#97acba'
                  break
                case '502':
                  currentColor = '#97acba'
                  break
                case '503':
                  currentColor = '#97acba'
                  break
                case '504':
                  currentColor = '#97acba'
                  break
                case '507':
                  currentColor = '#97acba'
                  break
                case '508':
                  currentColor = '#97acba'
                  break
                case '509':
                  currentColor = '#97acba'
                  break
                case '510':
                  currentColor = '#97acba'
                  break
                case '511':
                  currentColor = '#97acba'
                  break
                case '512':
                  currentColor = '#97acba'
                  break
                case '513':
                  currentColor = '#97acba'
                  break
                case '514':
                  currentColor = '#97acba'
                  break
                case '515':
                  currentColor = '#97acba'
                  break
                case '800':
                  currentColor = '#2152d1'
                  break
                case '801':
                  currentColor = '#2152d1'
                  break
                case '802':
                  currentColor = '#2152d1'
                  break
                case '803':
                  currentColor = '#2152d1'
                  break
                case '804':
                  currentColor = '#2152d1'
                  break
                case '805':
                  currentColor = '#2152d1'
                  break
                case '806':
                  currentColor = '#2152d1'
                  break
                case '807':
                  currentColor = '#2152d1'
                  break
                case '900':
                  currentColor = 'red'
                  break
                case '901':
                  currentColor = '#179fff;'
                  break
                case '999':
                  currentColor = 'red'
                  break
                default:
                  break
              }
              const city = Array.isArray(data.city) ? defaultInfo.city : data.city
              if (clock_default_rectangle_enable === 'true' && defaultInfo) {
                city = defaultInfo.city
              }
              clock_box_html = `
              <div class="clock-row">
                <span id="card-clock-clockdate" class="card-clock-clockdate"></span>
                <span class="card-clock-weather"><i class="qi-${res_text2.now.icon}-fill" style="color: ${currentColor}"></i> ${res_text2.now.text} <span>${res_text2.now.temp}</span> ℃</span>
                <span class="card-clock-humidity">💧 ${res_text2.now.humidity}%</span>
              </div>
              <div class="clock-row">
                <span id="card-clock-time" class="card-clock-time"></span>
              </div>
              <div class="clock-row">
                <span class="card-clock-windDir"> <i class="qi-gale"></i> ${res_text2.now.windDir}</span>
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
        })
      }
    })
}
getIpInfo()