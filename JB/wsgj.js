/*

脚本功能：网速管家 解锁Vip
下载地址：http://mtw.so/5XqaXq
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


[rewrite_local]
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontents.com/zyp0426/script/main/JB/wsgj.js

[mitm] 
hostname = api-v3.speedtest.cn



*/



var chxm = JSON.parse($response.body); 
// 

zyp ={
  "code": 0,
  "data": {
    "id": "11641895",
    "username": "zyp0426",
    "email": null,
    "phone": "18583812120",
    "nickname": "zyp0426",
    "avatar": "https://file2.speedtest.cn/avatar/011/68/49/34/CUFrcGqPso5lGSiSfIX7Whq16x4ejde2X5CvoVYd.jpeg",
    "gender": null,
    "identified": "0",
    "disabled": "0",
    "password": "",
    "balance": 0,
    "integral": "666666666",
    "status": "1",
    "udid": null,
    "phoneProvince": null,
    "phoneCity": null,
    "vpnRegister": "0",
    "frozenIntegral": "0",
    "inviteId": "0",
    "winxinOpenid": null,
    "rememberToken": null,
    "loginCheck": null,
    "emailVerifiedAt": null,
    "isMajor": "1",
    "receiveSms": "0",
    "createdAt": "2022-06-22 20:53:20",
    "updatedAt": "2022-06-23 02:16:56",
    "deletedAt": null,
    "inviteTime": null,
    "vipExpire": "2099-09-09 21:21:21",
    "hashId": "veqPdo9J0WxOBwQzNj60",
    "profile": {
      "birthday": null,
      "location": null,
      "address": null,
      "website": null,
      "timezone": null,
      "introduction": null,
      "bio": null,
      "userId": "11641894",
      "countryCode": null,
      "provinceId": null,
      "cityId": null
    },
    "isVip": 1,
    "socialId": "oGACExIzJUwafX_X6TCuRjwQNpuw",
    "socialNickname": "zyp0426"
  },
  "msg": "ok"
}

$done({body:JSON.stringify(zyp)});
