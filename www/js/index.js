/*
 * Copyright (c) [2024] [BSF]
 * [https://byteee.fund]
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("device ready!");


  window.Alipay.getVersion(
    function (response) {
      document.getElementById("versionResult").innerText = response;
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginButton").addEventListener("click", auth);
    document.getElementById("payButton").addEventListener("click", pay);
});


function auth() {
  window.Alipay.authV2(
    { authInfo: 'apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdMJcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D' },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function pay() {
    window.Alipay.payV2(
        { orderInfo: "alipay_sdk=alipay-sdk-java-4.4.2.ALL&app_id=2021003110650758&biz_content=%7B%22body%22%3A%22%22%2C%22out_trade_no%22%3A%2210000240828090000010%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22%E8%A1%A3%E6%9C%B5%E4%BA%91%E9%AD%94%E6%96%B9-%E5%BA%94%E7%94%A8%E5%85%85%E5%80%BC%22%2C%22timeout_express%22%3A%2230m%22%2C%22total_amount%22%3A%220.01%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=https%3A%2F%2Fpay-cube.test.ydoyun.com%2Fali%2Fnotify&sign=jP606BIM2FoCB12QUQ0JgejtfINdebGnOqmDP9T7YmEOAiN4%2B8UV7zK1gXip%2Fch31EYfJEcvRDB2FG%2BGNzDT2FGq368YZHW2VrLXhARuLyJ37bXtL%2BQMCZdDNzkEsTIZZyAR4upI9zUp%2BW2L72k1fiGaY5angMa%2FXlf1jldh8XbVoqRKUfxmIcs4Yb3r%2Bgl7VEuB%2FDrA5Rqy8c%2BM60XGMxbHbYUgcAIvL7azQSQBSrx8%2FcinmLVAe%2FYQ5D3uKjQO8nMOPRHih9RY6%2FLkF7jH4hBHZkU3ZLcxJBqB6UAccIPFrGiRoWtZqIcaoRmuFPJqGhpaW8T3llYtBtI94yiD5Q%3D%3D&sign_type=RSA2&timestamp=2024-08-28+09%3A46%3A10&version=1.0" },
        function (response) {
            alert(JSON.stringify(response));
        },
        function (error) {
            alert(JSON.stringify(error));
        }
    );
}




