var url = "http://live.new4k.tv/stalker_portal/server/load.php?type=stb&action=handshake&token=&prehash=0&JsHttpRequest=1-xml";
var xhr = new XMLHttpRequest();
Cookies.set("mac","value");
var random,tok,ur,bear;
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            var resu = JSON.parse(xhr.response);
            var js = resu["js"];
            tok = js["token"];
            random = js["random"];
            console.log(random,tok)
            ur="http://live.new4k.tv/stalker_portal/server/load.php?=&action=get_profile&random=".concat(random)
            
            ur=ur.concat("&mac=00%3A1A%3A79%3A89%3A88%3A54&type=stb&hd=1&sn=&stb_type=MAG250&client_type=STB&image_version=218&device_id=&hw_version=1.7-BD-00&hw_version_2=1.7-BD-00&auth_second_step=1&video_out=hdmi&num_banks=2&metrics=%7B%22mac%22%3A%2200%3A1A%3A79%3A89%3A88%3A54%22%2C%22sn%22%3A%22%22%2C%22model%22%3A%22MAG250%22%2C%22type%22%3A%22STB%22%2C%22uid%22%3A%22%22%2C%22random%22%3A%22")
            ur=ur.concat(random)
            ur=ur.concat("%22%7D&ver=ImageDescription%3A%200.2.18-r14-pub-250%3B%20ImageDate%3A%20Fri%20Jan%2015%2015%3A20%3A44%20EET%202016%3B%20PORTAL%20version%3A%205.6.1%3B%20API%20Version%3A%20JS%20API%20version%3A%20328%3B%20STB%20API%20version%3A%20134%3B%20Player%20Engine%20version%3A%200x566")
            console.log(ur)
            bear="Bearer ".concat(tok)
            console.log(bear)
            var url1 = ur;
            fetch(url1, 
            {
    headers: {
        'User-Agent': 'Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3',
        'Referrer': 'http://live.new4k.tv/stalker_portal/c/',
        'X-User-Agent': 'Model: MAG250; Link: WiFi',
        'Cache-Control': 'no-cache',
        'Authorization': bear,
        'Host': 'live.new4k.tv',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'Cookie': 'Cookie:mac=00%3A1A%3A79%3A89%3A88%3A54; stb_lang=en; timezone=Europe%2FParis'
    }
});


        
        }
    }
};
xhr.open("GET",url);
xhr.send();

