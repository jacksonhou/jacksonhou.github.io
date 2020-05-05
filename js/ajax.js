var newsType = ['coronavirus', 'news', 'weather', 'entertainment', 'sports', 'money', 'lifestyle', 'health', 'foodanddrink', 'travel', 'autos', 'video'];
var category = {
    'ar-ae': 'COVID-19,الأخبار,الطقس,الترفيه,الرياضة,المال,نمط الحياة,الصحة واللياقة,الطعام والشراب,السفر,السيارات,فيديو',
    'ar-eg': 'COVID-19,الأخبار,الطقس,الترفيه,الرياضة,المال,نمط الحياة,الصحة واللياقة,الطعام والشراب,السفر,السيارات,فيديو',
    'ar-sa': 'COVID-19,الأخبار,الطقس,الترفيه,الرياضة,المال,نمط الحياة,الصحة واللياقة,الطعام والشراب,السفر,السيارات,فيديو',
    'da-dk': 'COVID-19,NYHEDER,vejr,UNDERHOLDNING,SPORT,FINANS,LIVSSTIL,SUNDHED,MAD OG DRIKKE,REJSER,BILER,VIDEO',
    'de-at': 'COVID-19,NACHRICHTEN,WETTER,UNTERHALTUNG,SPORT,FINANZEN,LIFESTYLE,GESUNDHEIT,GENUSS,REISEN,AUTOS,VIDEO',
    'de-ch': 'COVID-19,NACHRICHTEN,WETTER,UNTERHALTUNG,SPORT,FINANZEN,LIFESTYLE,GESUNDHEIT,GENUSS,REISEN,AUTOS,VIDEO',
    'de-de': 'COVID-19,NACHRICHTEN,WETTER,UNTERHALTUNG,SPORT,FINANZEN,LIFESTYLE,GESUNDHEIT,GENUSS,REISEN,AUTO,VIDEO',
    'el-gr': 'COVID-19,ΕΙΔHΣΕΙΣ,καιρός,ΨΥΧΑΓΩΓIΑ,ΑΘΛΗΤΙΣΜOΣ,ΟΙΚΟΝΟΜIΑ,ΕΥ ZΗΝ,ΥΓΕΙΑ ΚΑΙ ΆΣΚΗΣΗ,ΓΑΣΤΡΟΝΟΜIΑ,ΤΑΞIΔΙ,ΑΥΤΟΚIΝΗΤO,Βίντεο',
    'en-us': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORTS,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,AUTOS,VIDEO',
    'en-ae': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,VIDEO',
    'en-au': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,WELLBEING,FOOD,TRAVEL,MOTORING,VIDEO',
    'en-ca': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORTS,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD,TRAVEL,AUTOS,VIDEO',
    'en-gb': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,NA',
    'en-ie': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,NA',
    'en-in': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORTS,MONEY,LIFESTYLE,HEALTH,FOOD,TRAVEL,AUTOS,VIDEO',
    'en-my': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,VIDEO',
    'en-nz': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,WELLBEING,FOOD,TRAVEL,MOTORING,VIDEO',
    'en-ph': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORTS,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,AUTOS,VIDEO',
    'en-sg': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,VIDEO',
    'en-za': 'COVID-19,NEWS,WEATHER,ENTERTAINMENT,SPORT,MONEY,LIFESTYLE,HEALTH & FITNESS,FOOD & DRINK,TRAVEL,CARS,VIDEO',
    'es-ar': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,FINANZAS,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-cl': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-co': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-es': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO,BIENESTAR,RECETAS,VIAJES,MOTOR,VÍDEO',
    'es-mx': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-pe': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-us': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,VIDEO,SALUD,AUTOS,RECETAS,VIAJES',
    'es-ve': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'es-xl': 'COVID-19,NOTICIAS,EL TIEMPO,ENTRETENIMIENTO,DEPORTES,DINERO,ESTILO DE VIDA,SALUD,RECETAS,VIAJES,AUTOS,VIDEO',
    'fi-fi': 'COVID-19,UUTISET,SÄÄ,VIIHDE,URHEILU,TALOUS,LIFESTYLE,HYVINVOINTI,RUOKA JA JUOMA,MATKAILU,AUTOT,NA',
    'fr-be': 'COVID-19,ACTUALITÉ,MÉTÉO,DIVERTISSEMENT,SPORT,FINANCE,LIFESTYLE,BIEN-ÊTRE,NA,VOYAGE,AUTO,VIDÉO',
    'fr-ca': 'COVID-19,ACTUALITÉS,MÉTÉO,DIVERTISSEMENT,SPORTS,FINANCES,STYLE DE VIE,NA,CUISINE,NA,AUTOS,VIDÉO',
    'fr-ch': 'COVID-19,ACTUALITÉ,MÉTÉO,DIVERTISSEMENT,SPORT,FINANCE,LIFESTYLE,BIEN-ÊTRE,NA,VOYAGE,AUTO,VIDÉO',
    'fr-fr': 'COVID-19,ACTUALITÉ,NA,DIVERTISSEMENT,SPORT,FINANCE,LIFESTYLE,BIEN-ÊTRE,CUISINE,VOYAGE,AUTO,VIDÉO',
    'he-il': 'COVID-19,חדשות,מזג אוויר,תרבות ובידור,ספורט,כסף,לייפסטייל,בריאות וכושר,אוכל,תיירות,NA,וידאו',
    'id-id': 'COVID-19,BERITA,CUACA,HIBURAN,OLAHRAGA,EKONOMI,GAYA HIDUP,SEHAT DAN BUGAR,KULINER,TRAVEL,OTOMOTIF,VIDEO',
    'it-it': 'COVID-19,NOTIZIE,METEO,INTRATTENIMENTO,SPORT,MONEY,LIFESTYLE,BENESSERE,CUCINA,VIAGGI,MOTORI,VIDEO',
    'ja-jp': 'COVID-19,ニュース,天気,エンタメ,スポーツ,マネー,ライフスタイル,ヘルスケア,NA,トラベル,自動車,動画',
    'ko-kr': 'COVID-19,뉴스,날씨,엔터테인먼트,스포츠,금융,라이프,NA,NA,NA,자동차,NA',
    'nb-no': 'COVID-19,NYHETER,VÆR,UNDERHOLDNING,SPORT,ØKONOMI,LIVSSTIL,HELSE OG TRENING,MAT OG DRIKKE,REISE,MOTOR,VIDEO',
    'nl-be': 'COVID-19,NIEUWS,WEER,ENTERTAINMENT,SPORT,FINANCIËN,LIFESTYLE,GEZONDHEID,NA,REIZEN,AUTO,VIDEO',
    'nl-nl': 'COVID-19,NIEUWS,WEER,ENTERTAINMENT,SPORT,GELDZAKEN,LIFESTYLE,GEZONDHEID,ETEN,REIZEN,AUTO,VIDEO',
    'pl-pl': 'COVID-19,WIADOMOŚCI,NA,ROZRYWKA,SPORT,FINANSE,STYL ŻYCIA,ZDROWIE I FITNESS,KUCHNIA,PODRÓŻE,MOTORYZACJA,WIDEO',
    'pt-br': 'COVID-19,NOTÍCIAS,CLIMA,ENTRETENIMENTO,ESPORTES,DINHEIRO,ESTILO DE VIDA,NA,RECEITAS,NA,CARROS,Vídeo',
    'pt-pt': 'COVID-19,NOTÍCIAS,METEOROLOGIA,ENTRETENIMENTO,DESPORTO,FINANÇAS,LIFESTYLE,SAÚDE E BEM-ESTAR,RECEITAS,VIAGENS,MOTOR,VÍDEO',
    'ru-ru': 'COVID-19,НОВОСТИ,погода,РАЗВЛЕЧЕНИЯ,СПОРТ,ФИНАНСЫ,СТИЛЬ ЖИЗНИ,ЗДОРОВЬЕ И ФИТНЕС,ЕДА,ПУТЕШЕСТВИЯ,АВТО,ВИДЕО',
    'th-th': 'COVID-19,ข่าว,พยากรณ์อากาศ,บันเทิง,ไลฟ์สไตล์,กีฬา,การเงินและการลงทุน,สุขภาพและฟิตเนส,อาหารและเครื่องดื่ม,ท่องเที่ยว,ยานยนต์,วิดีโอ',
    'tr-tr': 'COVID-19,HABER,Hava Durumu,EĞLENCE,SPOR,FİNANS,YAŞAM,SAĞLIK,NA,SEYAHAT,OTOMOBİL,VİDEO',
    'vi-vn': 'COVID-19,TIN TỨC,Thời tiết,GIẢI TRÍ,THỂ THAO,TÀI CHÍNH,NA,NA,NA,NA,NA,NA',
    'zh-tw': 'COVID-19,新聞,天氣,娛樂,運動,財經,生活,健康,美食,旅遊,汽車,影音',
    'zh-hk': 'COVID-19,新聞,天氣,娛樂,體育,財經,生活,健康生活,識飲識食,旅遊生活,汽車,視頻',
    'sv-se': 'COVID-19,NYHETER,VÄDER,NÖJE,SPORT,EKONOMI,LIVSSTIL,HÄLSA,MAT & DRYCK,RESOR,MOTOR,VIDEO',
    'hi-in': 'COVID-19,समाचार,मौसम,मनोरंजन,खेल,बिजनेस,लाइफस्टाइल,NA,NA,NA,ऑटो,वीडियो',
    'CS-CZ': 'COVID-19,ZPRÁVY,POČASÍ,ZÁBAVA,SPORT,FINANCE,LIFESTYLE,ZDRAVÍ A FITNESS,GASTRO,CESTOVÁNÍ,AUTO,VIDEO',
    'HU-HU': 'COVID-19,HÍREK,IDŐJÁRÁS,SZÓRAKOZÁS,SPORT,PÉNZÜGYEK,ÉLETMÓD,EGÉSZSÉG & FITNESZ,GASZTRONÓMIA,UTAZÁS,AUTÓK,VIDEÓ'
};
var languageAndCountry = (navigator.language || navigator.userLanguage).toLowerCase();
var language = languageAndCountry.substring(0, 2)
console.log(languageAndCountry);
console.log(language);

var myAjax = {
    get: function (url, fn) {
        // XMLHttpRequest对象用于在后台与服务器交换数据
        var xhr = new XMLHttpRequest();
        //每当readyState改变时就会触发onreadystatechange函数
        //0: 请求未初始化
        //1: 服务器连接已建立
        //2: 请求已接收
        //3: 请求处理中
        //4: 请求已完成，且响应已就绪
        // xhr.setRequestHeader('Access-Control-Allow-Origin',"127.0.0.1");
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            //readyStatus == 4说明请求已经完成
            if (xhr.readyState == 4 && xhr.status == 200) {
                //从服务器获得数据
                fn(xhr.responseText);
            }
        };
        //发送数据
        xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post: function (url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn(xhr.responseText);
            }
        };
        //发送数据
        xhr.send(data);
    },
    postJson: function (url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn(xhr.responseText);
            }
        };
        //发送数据
        xhr.send(data);
    }
}
var _loadingFeedInfo = false;
var _firstLoad = true;

function getFeedInfo(type, pageNum, pageSize) {
    if (_loadingFeedInfo) {
        return;
    }
    _loadingFeedInfo = true;
    // var data = { "type": type, "pageNum": pageNum, "pageSize": pageSize };
    //http://bbb.lkjuio.com:8880/?type=weather&mkt=en-us&page=0&limit=30
    // http://staginghp.smartsearch.me/?api_key=wbro2Ygf&type=weather&mkt=en-us&page=0&limit=1&skip_limit=0&debug=0
    var url = 'https://staginghp.smartsearch.me/?api_key=2Hk9SjBe&type=' + type + '&mkt=' + language + '&page=' + pageNum + '&limit=' + pageSize;
    console.log(url);
    try {
        if (_firstLoad) {
            _firstLoad = false;
        } else {
            if (insertBefore) {} else {}
        }
        myAjax.get(url, insertFeedInfo);

    } finally {
        setTimeout(function () {
            _loadingFeedInfo = false;

        }, 500);
    }
}

var insertBefore = false;

function insertFeedInfo(data) {
    var d = JSON.parse(data);
    var ulHtml = '';
    for (var i = 0; i < d.length; i++) {
        var row = d[i];
        var _quality = row.image.quality;
        if (_quality) { //根据图片质量选择展示样式
            if (_quality < 80) {
                row.type = 1
            };
            if (_quality >= 90) {
                row.type = 2
            };
        }
        ulHtml += createDiv(row);
    }

    var ul = document.getElementsByClassName('news-list-wrap active_news')[0];
    if (insertBefore) {
        insertBefore = false;
        var lastVisit = createLastVisit();
        ulHtml = ulHtml + lastVisit;
        ul.innerHTML = ulHtml + ul.innerHTML.replace(lastVisit, '');
    } else {
        ul.innerHTML += ulHtml;
    }
    /**
     * 2020-03-04
     * 阿部察察
     * 懒加载
     */
    // 获取图片列表，即img标签列表
    // var imgs = document.querySelectorAll('img');
    // lazyload(imgs);
    resize();

}

function reflush_news() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    insertBefore = true;
    var cType = document.getElementsByClassName('active')[0].getAttribute('data-type');
    getFeedInfo(cType, ++pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 10);
}

function createLastVisit() {
    var html = `<a class="J-read-position read-position" onclick="reflush_news()">Last time I browsed here, click refresh.</a>`;
    return html;
}

/* 单图 default*/
function createTypeOne(row) {
    let html = `<section class="news-item news-item-s1">
                <a class="J-news" href="${row.url}" onclick="feedClick('${row.category}',${row.id})" data-ispicnews="0" data-hotnews="1" data-suptop="0001" data-recommendurl="null" data-recommendtype="-1_48faf7601a500068_1_4_0_" data-batcheid="null" data-type="shehui" data-subtype="null" data-pgnum="1" data-tagid="" data-idx="4">
                    <div class="news-wrap">
                        <div class="txt-wrap">
                            <h3>${row.title}</h3>
                            <p class="tags clearfix">
                                <em class="tag tag-src">${row.provider.name}</em>
                                <em class="tag tag-src"><img  class="providerLogo"  src="${row.provider.logo}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"></em>
                            </p>
                        </div>
                        <div class="img-wrap ">
                            <img  class="lazy"  src="${row.image.url}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                        </div>
                    </div>
                </a>
            </section>`
    return html;
}

/* 无图 1 */
function createTypeNoimg(row) {
    let html = `<section class="news-item news-item-noimg">
                <a class="J-news" href="${row.url}" onclick="feedClick('${row.category}',${row.id})" data-ispicnews="0" data-hotnews="1" data-suptop="0001" data-recommendurl="null" data-recommendtype="-1_48faf7601a500068_1_4_0_" data-batcheid="null" data-type="shehui" data-subtype="null" data-pgnum="1" data-tagid="" data-idx="4">
                    <div class="news-wrap">
                        <div class="txt-wrap">
                            <h3>${row.title}</h3>
                            <p class="tags clearfix">
                                <em class="tag tag-src">${row.provider.name}</em>
                                <em class="tag tag-src"><img  class="providerLogo"  src="${row.provider.logo}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"></em>
                            </p>
                        </div>
                    </div>
                </a>
            </section>`
    return html;
}

/* 三图 未使用*/
function createTypeThree(row) {
    let html = `<section class="news-item news-item-s2">
                <a class="J-news" href="${row.url}" onclick="feedClick('${row.category}',${row.id})" data-ispicnews="0" data-hotnews="1" data-suptop="0" data-recommendurl="null" data-recommendtype="crb_48faf7601a500068_1_1_0_" data-batcheid="null" data-type="yule" data-subtype="null" data-pgnum="1" data-tagid="" data-idx="1">
                    <div class="news-wrap">
                        <h3>${row.title}</h3>
                        <div class="img-wrap ">
                            <div class="img">
                                <img class="lazy"  src="${row.thumbnailPicS}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                            </div>
                            <div class="img">
                                <img class="lazy"  src="${row.thumbnailPicS02}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                            </div>
                            <div class="img">
                                <img class="lazy"  src="${row.thumbnailPicS03}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                            </div>
                        </div>
                        <p class="tags clearfix">
                            <em class="tag tag-src">${row.authorName}</em>
                            <em class="tag tag-view">${row.feedDate}</em>
                        </p>
                    </div>
                </a>
            </section>`;
    return html;
}

/* 大图 2 */
function createTypeBigImg(row) {
    let html = `<section class="news-item news-item-s3">
                <a class="J-news" href="${row.url}" onclick="feedClick('${row.category}',${row.id})" data-ispicnews="0" data-hotnews="1" data-suptop="0" data-recommendurl="null" data-recommendtype="crb_48faf7601a500068_1_1_0_" data-batcheid="null" data-type="yule" data-subtype="null" data-pgnum="1" data-tagid="" data-idx="1">
                    <div class="news-wrap">
                        <h3>${row.title}</h3>
                        <div class="img-wrap ">
                            <div class="img">
                                <img class="lazy"  src="${row.image.url}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                            </div>
                        </div>
                        <p class="tags clearfix">
                            <em class="tag tag-src">${row.provider.name}</em>
                            <em class="tag tag-src"><img  class="providerLogo"  src="${row.provider.logo}" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"></em>
                        </p>
                    </div>
                </a>
            </section>`;
    return html;
}

function createDiv(row) {
    let type = row.type;
    switch (type) {
        case 1:
            return createTypeNoimg(row); //无图
        case 2:
            return createTypeBigImg(row); //大图
        case 3:

        default:
            return createTypeOne(row);
    }
}

function feedClick(category, id) {
    var cType = document.getElementsByClassName('active')[0].getAttribute('data-type');
}

function headerHandle() {
    var ele = document.getElementById('_header');
    if (ele.getBoundingClientRect().top <= 0 && document.getElementsByTagName('header')[0].style.position != 'fixed') {
        var tempEle = document.getElementsByTagName('header')[0];
        tempEle.style.position = 'fixed';
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}
var pageObj = {
    'coronavirus': 1,
    'trending': 1,
    'news': 1,
    'weather': 1,
    'entertainment': 1,
    'sports': 1,
    'money': 1,
    'lifestyle': 1,
    'health': 1,
    'foodanddrink': 1,
    'travel': 1,
    'autos': 1,
    'video': 1
};
window.addEventListener('load', headerHandle);
window.addEventListener('scroll', headerHandle);
window.addEventListener('scroll', function () {
    var s = document.body.scrollTop + document.documentElement.scrollTop;
    if (!_loadingFeedInfo && s + document.documentElement.clientHeight * 1.5 > document.body.scrollHeight) {
        var cType = document.getElementsByClassName('active')[0].getAttribute('data-type');
        getFeedInfo(cType, ++pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 15);
    }
})
window.addEventListener('load', function () {
    var J_top_menu = document.getElementById('J_top_menu');
    var label = J_top_menu.getElementsByTagName('a');
    for (let i = 0; i < label.length; i++) {
        label[i].onclick = function () {
            var activeMeum = document.getElementsByClassName('active')[0];
            var flag = document.getElementsByClassName('active_news_' + label[i].getAttribute('data-type')).length > 0;
            if (flag) {
                document.getElementsByClassName('active_news')[0].style.display = 'none';
                document.getElementsByClassName('active_news')[0].setAttribute('class', 'news-list-wrap active_news_' + activeMeum.getAttribute('data-type'));
                document.getElementsByClassName('active_news_' + label[i].getAttribute('data-type'))[0].style.display = 'block';
                document.getElementsByClassName('active_news_' + label[i].getAttribute('data-type'))[0].setAttribute('class', 'news-list-wrap active_news');
            } else {
                document.getElementsByClassName('active_news')[0].style.display = 'none';
                document.getElementsByClassName('active_news')[0].setAttribute('class', 'news-list-wrap  active_news_' + activeMeum.getAttribute('data-type'));
                var J_content = document.getElementById('J_content');
                var node = document.createElement('div');
                node.setAttribute('class', 'news-list-wrap active_news');
                J_content.appendChild(node);
                getFeedInfo(label[i].getAttribute('data-type'), ++pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 15);


            }
            document.getElementsByClassName('active')[0].setAttribute('class', '');
            label[i].setAttribute('class', 'active');
        }
    }
});
// 获取到浏览器顶部的距离
function getTop(e) {
    return e.offsetTop;
}
// 懒加载实现
function lazyload(imgs) {
    // 可视区域高度
    var h = window.innerHeight;
    //滚动区域高度
    var s = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < imgs.length; i++) {
        //图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
        if ((h + s) > getTop(imgs[i])) {
            // 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
            (function (i) {
                setTimeout(function () {
                    // 不加立即执行函数i会等于9
                    // 隐形加载图片或其他资源，
                    //创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
                    var temp = new Image();
                    temp.src = imgs[i].getAttribute('data-src'); //只会请求一次
                    // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
                    temp.onload = function () {
                        // 获取自定义属性data-src，用真图片替换假图片
                        imgs[i].src = imgs[i].getAttribute('data-src')
                    }
                }, 2000)
            })(i)
        }
    }
}


function getNewsType() {
    var keys = Object.keys(category);
    var isExist = false;
    for (var i in keys) {
        if (languageAndCountry == keys[i]) {
            language = languageAndCountry;
            isExist = true;
            break;
        }
    }

    if (isExist) {
        renderHeader(category[languageAndCountry])
    } else {
        for (var i in keys) {
            if (keys[i].indexOf(language) > -1) {
                language = keys[i];
                renderHeader(category[keys[i]]);
                isExist = true;
                break;
            }
        }
    }

    /**
     * 没有匹配到任何语言
     */
    if (!isExist) {
        language = 'en-us';
        renderHeader(category['en-us']);
    }
}

/**
 * 生成类型头
 */
function renderHeader(data) {
    // console.log(data);
    // <a class="active" data-type="coronavirus">coronavirus</a>
    // <a data-type="trending">trending</a>
    var types = data.split(',');
    var contentHtml = '';
    for (var i in types) {
        if (i == 0) {
            contentHtml += '<a class="active" data-type="' + newsType[i] + '">' + types[i] + '</a>'
        } else {
            contentHtml += '<a data-type="' + newsType[i] + '">' + types[i] + '</a>'
        }
    }
    $('#J_top_menu').html(contentHtml);
}

window.addEventListener('load', function () {
    //sendCnLog('JS_load_end_event');
});
let sTop; // 触发touch事件时的距离选项卡底部的距离
let mTop; // touchmove时距离选项卡底部的位置
let eTop; // 记录touchend时的位置
// let isRefresh = false;
let startOffsetTop = 80; // 距离顶部的距离，tab的高度
let wScrollTop; // wrapper 节点是否滚动
let maxTop = 50; // 最多下拉100px
let minTop = 20; // 最小下拉20px,小于20px时不处理
var J_content = document.getElementById('J_content');
var topItem = document.getElementById('top-text');

getNewsType();
getFeedInfo(document.getElementsByClassName('active')[0].getAttribute('data-type'), pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 15);

J_content.addEventListener('touchstart', function (e) {
    sTop = e.touches[0].pageY - startOffsetTop;
});
J_content.addEventListener('touchmove', function (e) {
    wScrollTop = document.getElementsByTagName('header')[0].style.position;
    mTop = e.touches[0].pageY - startOffsetTop;
    if (wScrollTop == 'fixed') {
        // 下拉过程中设置list的位置
        let mOffsetTop = mTop - sTop + startOffsetTop + 'px';
        if (mTop > sTop) {
            if ((mTop - sTop) <= maxTop) {
                J_content.style.top = mOffsetTop;
            } else {
                J_content.style.top = maxTop + startOffsetTop + 'px'
            }
        }
    }
});
if (navigator.userAgent.indexOf('UCBrowser') != -1) {
    J_content.addEventListener('touchcancel', function (e) {
        eTop = J_content.offsetTop;

        if (eTop >= (minTop + startOffsetTop) && window.scrollY == 0) {
            topItem.innerHTML = 'Loading...';
            var cType = document.getElementsByClassName('active')[0].getAttribute('data-type');
            insertBefore = true;
            getFeedInfo(cType, ++pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 15);

        }
    });
} else {
    J_content.addEventListener('touchend', function (e) {
        eTop = J_content.offsetTop;
        if (eTop >= (minTop + startOffsetTop) && window.scrollY == 0) {
            topItem.innerHTML = 'Loading...';
            var cType = document.getElementsByClassName('active')[0].getAttribute('data-type');
            insertBefore = true;
            getFeedInfo(cType, ++pageObj[document.getElementsByClassName('active')[0].getAttribute('data-type')], 15);

        }
    });
}

function resize() {
    let time = setInterval(function () {
        let J_content = document.getElementById('J_content');
        let topItem = document.getElementById('top-text');
        let startOffsetTop = 80;
        if (document.getElementById('J_content').offsetTop <= startOffsetTop) {
            clearInterval(time);
            topItem.innerHTML = '';
        } else {
            J_content.style.top = J_content.offsetTop - 1 + 'px';
            topItem.innerHTML = 'Load complete.';
        }
    }, 1)
}