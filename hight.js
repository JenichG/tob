let icPlayUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiklEQVRIx+2UzQ1AQBQGJW7OGlACPeiCKqiCLqhCEUpYDTi7SUb27Hflc7JTwCT7dt4LAo9nD5lKtNISKUSWiVwjsvTEGhHMlBqRZSDRiGChJlSILOOLKDjGPQrOcYuCa55HcSPqFCKjeNpKoxj2SKoIslIEKVmRmUKxtJ3ijBjFYXP/6I+Pv+cPbFrkcdWH6mjQAAAAAElFTkSuQmCC";
let icPauseUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAMElEQVRIx2NgGAWjABn8b0BAYsRxG4QEiBEfNWjUoFGDRg0aNWgADaJW4T8KRg4AABfpAict00b7AAAAAElFTkSuQmCC";

let switchStyle = "img[src*='data:image'] {width:22px; height: 22px;}"
                    ".switch {\n" +
                    "  position: relative;\n" +
                    "  top: 3px;" +
                    "  display: inline-block;\n" +
                    "  width: 24px;\n" +
                    "  height: 15px;\n" +
                    "}\n" +
                    "\n" +
                    "/* Hide default HTML checkbox */\n" +
                    ".switch input {display:none;}\n" +
                    "\n" +
                    "/* The slider */\n" +
                    ".slider {\n" +
                    "  position: absolute;\n" +
                    "  cursor: pointer;\n" +
                    "  top: 0;\n" +
                    "  left: 0;\n" +
                    "  right: 0;\n" +
                    "  bottom: 0;\n" +
                    "  background-color: #ccc;\n" +
                    "  -webkit-transition: .4s;\n" +
                    "  transition: .4s;\n" +
                    "}\n" +
                    "\n" +
                    ".slider:before {\n" +
                    "  position: absolute;\n" +
                    "  content: \"\";\n" +
                    "  height: 13px;\n" +
                    "  width: 13px;\n" +
                    "  left: 1px;\n" +
                    "  bottom: 1px;\n" +
                    "  background-color: white;\n" +
                    "  -webkit-transition: .4s;\n" +
                    "  transition: .4s;\n" +
                    "}\n" +
                    "\n" +
                    "input:checked + .slider {\n" +
                    "  background-color: #2196F3;\n" +
                    "}\n" +
                    "\n" +
                    "input:focus + .slider {\n" +
                    "  box-shadow: 0 0 1px #2196F3;\n" +
                    "}\n" +
                    "\n" +
                    "input:checked + .slider:before {\n" +
                    "  -webkit-transform: translateX(10px);\n" +
                    "  -ms-transform: translateX(10px);\n" +
                    "  transform: translateX(10px);\n" +
                    "}\n" +
                    "\n" +
                    "/* Rounded sliders */\n" +
                    ".slider.round {\n" +
                    "  border-radius: 10px;\n" +
                    "}\n" +
                    "\n" +
                    ".slider.round:before {\n" +
                    "  border-radius: 50%;\n" +
                    "}" +
                    "input[type='range'] {\n" +
                    "    -webkit-appearance: none !important;\n" +
                    "    background:white;\n" +
                    "    height:3px;\n" +
                    "}\n" +
                    "input[type='range']::-webkit-slider-thumb {\n" +
                    "    -webkit-appearance: none !important;\n" +
                    "    background:#2196F3;\n" +
                    "    border-radius: 100%;\n" +
                    "    height:10px;\n" +
                    "    width:10px;\n" +
                    "}" +
                    ".edit_text {\n" +
                    "    border-bottom: 2px solid #555;\n" +
                    "    background:#000;\n" +
                    "    font-size: 12px;\n" +
                    "    height:100px;\n" +
                    "    outline: none;\n" +
                    "}" +
                    ".edit_text:focus {\n" +
                    "    border-bottom: 2px solid #2196F3;\n" +
                    "}" +
                    ".btn-equip {color: #338899; display: inline-block; margin: 0 5px 3px 0; padding: 2px 4px; font-size: 12px; text-decoration: none;}";
let customStyle =   ".msg {\n" +
                        "padding: 5px;\n" +
                        "margin: 5px;\n" +
                        "background: #3339;\n" +
                        "border-radius: 5px;\n" +
                    "}" +
                    ".s, .hr, .shr {\n" +
                        "display: none !important;\n" +
                    "}" +
                    "a.b-r {\n" +
                        "display: none !important;\n" +
                    "}" +
                    "a {color: #338899;}" +
                    ".btn.btn-name, .btn.btn-name:hover, .btn-name {\n" +
                        "float: none !important;\n" +
                        "background: none !important;\n" +
                        "color: #339db4 !important\n" +
                    "}" +
                    ".chat-item {\n" +
                        "margin: 0 !important;\n" +
                        "padding: 0 !important;\n" +
                        "background: none !important;\n" +
                    "}" + 
                    ".menu-item, .mainmenu-item, .btn-a, .btn-flat, .btn-equip, .btn-attack, .btn-combat, .btn-send {\n" +
                        "background: #234 !important;\n" +
                        "border: 0px solid #333 !important;\n" +
                        "text-transform: lowercase;\n" +
                    "}" + 
                    ".footmenu-item {\n" +
                        "background: none !important;\n" +
                        "border: 0px solid #333 !important;\n" +
                        "color: #fff !important;" +
                        "text-transform: uppercase;" +
                        "height: auto !important;" +
                    "}" + 
                    ".search-form, input[type='kek'] {\n" +
                        "background: #4449 !important;\n" +
                        "border: 0px;\n" +
                        "padding: 5px;\n" +
                        "color: #fff;\n" +
                        "border-radius: 5px;\n" +
                    "}" +
                    ".btn-smiles {\n" +
                        "background: #345 !important;\n" +
                        "border-top-left-radius: 5px;\n" +
                        "border-top-right-radius: 5px;\n" +
                    "}" +
                    "textarea {\n" +
                        "background: #444 !important;\n" +
                        "border: 0px !important;\n" +
                        "padding: 5px !important;\n" +
                        "color: #fff !important;\n" +
                        "border-radius: 5px !important;\n" +
                        "box-shadow: none !important;\n" +
                    "}" +
                    "body {background: url(https://img.desktopwallpapers.ru/nature/pics/wide/1536x864/9e9806bb1e77efbd09189b87753bd4b8.jpg) no-repeat fixed 100% 50%!important;}" +
                    ".content {background: #2225 !important;}" +
                    ".btn-send {background: #234; padding: 5px; border: 0 !important; font-transform: uppercase;}" +
                    ".btn-name {display:inline-block !important;}" +
                    ".sep-top, .sep-bot {display:none !important;}" +
                    ".ml a, .ml2 a {background: #234; padding: 5px; margin-top: 1px; width: auto !important; border: 0 !important; font-transform: lowercase;}" +
                    ".ml a:hover, .ml2 a:hover{background: #222 !important;}" +
                    ".ml li.sep {display: none !important;}" +
                    ".ml2 a {background: #3335 !important;}" +
                    ".block a {color: #338899;}" +
                    ".minor {color: #999999 !important;}" +
                    ".container {background: #2345 !important; max-width: 550px !important;}" +
                    ".b-content, .b-robbery, .bg-verygray {background: none !important;}" +
                    ".ml, .ml2 {background: none !important; margin-top:3px;}" +
                    ".shop-filter, .b-tabs {background: #0005 !important;}" +
                    ".b-title span:before, .b-title span:after {display: none;}" +
                    "a .btn-r {background: none !important;}" +
                    ".event, .notice-inner {background: #234a !important;}" +
                    ".chat-head {padding: 5px !important;}" +
                    ".b-notice-close {background: url(../images/notice-close_cross.png) no-repeat 51% 50% #933c !important;}" +
                    ".b-title, h2.cn {background: #2345 !important; color: #ccc !important; font-weight: bold; text-transform: uppercase;}";
                    
let TYPE_SWITCH = 1;
let TYPE_TIMEOUT_SCENES = 2;
let TYPE_SCENES = 3;

window.onpopstate = function(event) {
    document.body.innerHTML = event.state.html;
    lib.onload();
};

let modules = {
    safemode: {
        name: "Безопасный режим",
        description: "Имитировать задержки пользователя между кликами",
        type: TYPE_SWITCH,
        enabled: true,
        onswitch: function(enabled) {
            lib.safeMode = enabled;
        }
    },
    battle: {
        name: "Ведение боя",
        description: "Автоматическое ведение боя, <br /><font color=\"#FFFF33\">*Задержка способностей</font> - задерживает срабатывание способностей Точный выстрел, Первая помощь, Инъекция и Обстрел на 2сек<br /><font color=\"#FFFF33\">*Перебинтовать раны</font> - лечит персонаж перед каждой волной за 1 цент при менее 2/3 хп<br /><font color=\"#FFFF33\">*Автоожидание боя</font> - обновляет страницу в команде пока лидер не начнет бой<br /><font color=\"#FFFF33\">*Возвращение в бой</font> - возвращается в бой после смерти и автоперехода в больницу (бесплатно)<br /><font color=\"#FFFF33\">*Забирать все вещи</font> - выбирает \"Надо\" при дележке вещей<br /><font color=\"#FFFF33\">*Автопродолжение боя</font> - продолжает бой при доступности<br /><font color=\"#FFFF33\">*Использовать гаджет</font> - позволяет автоматически использовать гаджет в бою<br /><font color=\"#FFFF33\">*Автопочинка</font> - чинит всю экипировку игрока при доступности во время боя<br /><font color=\"#FFFF33\">*Задержка</font> - задержка между действиями игрока во время боя",
        type: TYPE_SCENES,
        enabled: true,
        settings: [{name: "Задержка способностей", type: "checkbox", key: "skill_timeout", value: true},
                   {name: "Перебинтовать раны", type: "checkbox", key: "heal_link", value: true},
                   {name: "Автоожидание боя", type: "checkbox", key: "auto_wait", value: false},
                   {name: "Возвращение в бой", type: "select", key: "return_battle", value: 0, list: ["откл", "бесп", "полн"]},
                   //{name: "Возвращение в бой", type: "checkbox", key: "return_battle", value: false},
                   {name: "Забирать все вещи", type: "checkbox", key: "get_all_items", value: false},
                   {name: "Автопродолжение боя", type: "checkbox", key: "battle_auto_continue", value: true},
                   {name: "Использовать гаджет", type: "checkbox", key: "enable_gadget", value: false},
                   {name: "Использовать стим 1", type: "checkbox", key: "enable_belt_1", value: false},
                   {name: "Использовать стим 2", type: "checkbox", key: "enable_belt_2", value: false},
                   {name: "Использовать стим 3", type: "checkbox", key: "enable_belt_3", value: false},
                   {name: "Автопочинка", type: "checkbox", key: "auto_repair", value: true},
                   {name: "Задержка", type: "range", key: "attack_timeout", maxvalue: 2000, value: 300}],
        getNextScene: function() {
            let combatLinks = bratki.getCombatLinks();

            if(lib.findLinksByUrlComponent("rebornLink").length > 0 && lib.getCookie("return_battle") !== 0) {
                this.returnLink = document.location.href;
                return [{click: lib.findLinksByUrlComponent("rebornLink")[0]}];
            }
            if(typeof this.returnLink != "undefined" && typeof this.heal == "undefined"  && parseInt(lib.getCookie("return_battle")) == 2) {
                let link = lib.findLinksByUrlComponent("healLink");
                
                this.heal = true;
                if(link.length > 0) {
                    return [{click: link[0]}];
                }
            }

            if((this.heal || lib.getCookie("return_battle") != 2) && typeof this.returnLink != "undefined" && lib.getCookie("return_battle") !== 0) {
                let link = document.querySelector("a");
                delete this.heal;
                link.href = this.returnLink;
                delete this.returnLink;
                return [{click: link}];
            }

            if(lib.findLinksByUrlComponent("rebornLink").length > 0 && document.body.innerHTML.includes("Сложность заказухи") && lib.getCookie("return_battle") != 1) {
                try {
                lib.setCookie(modules.autoMissions.settings[lib.getCookie("current_mission")].key, 0);
                modules.autoMissions.settings[lib.getCookie("current_mission")].sb.setSelection(0);
                } catch(e) {};
            }
            if(lib.getCookie("heal_link") == 1 && lib.findLinksByUrlComponent("healLink").length > 0 && (bratki.getMyHp() && bratki.getMyHp().type < 2)) {
                let link = lib.findLinksByUrlComponent("healLink")[0];
                return [{click: link}];
            }
            let isTeam = document.body.innerHTML.indexOf("<h2>Союзники</h2>") != -1 || document.body.innerHTML.indexOf("<span>Команда</span>") != -1 || document.body.innerHTML.indexOf("ID заказухи") != -1;
            let isSuccess = document.body.innerHTML.includes("Заказуха выполнена");
            if(!isSuccess && isTeam && lib.getCookie("auto_wait") == 1 && lib.findLinksByText("Обновить").length > 0) {
                let link = lib.findLinksByText("Обновить")[0];
                link.setAttribute("timeout", 5000);
                return [{click: link}];
            }
            if(lib.getCookie("auto_repair") == 1 && combatLinks.length > 0) {
                if(document.body.innerHTML.includes("не хватает")) {
                    let cb = document.querySelector("#auto_repair");
                    if(cb) cb.click();
                    else lib.setCookie("auto_repair", 0);
                } else if(lib.findLinksByUrlComponent("repairLink").length > 0) {
                    return [{click: lib.findLinksByUrlComponent("repairLink")[0]}];
                }
            }
            if(lib.getCookie("battle_auto_continue") == 1) {
                if(lib.findLinksByText("Продолжить бой").length > 0) {
                    return [{click: lib.findLinksByText("Продолжить бой")[0]}];
                }
            }
            if(lib.getCookie("get_all_items") == 1) {
                if(lib.findLinksByText("Надо").length > 0) {
                    return [{click: lib.findLinksByText("Надо")[0]}];
                }
            }

            let damages = this.damages;

            let sp = {
                random: {text: ["Атаковать"]},
                last: {urlc: ["damageLastAttackerLink"], exc: function(link) {try {let count = parseInt(link.innerHTML.match(/[^()]+(?=\))/g)[0]); return (count < bratki.getEnemyHp());} catch(e) {return true}}},
                belt1: {urlc: ["beltBlock-0"], exc: function(link) {return lib.getCookie("enable_belt_1") == 1;}},
                     belt2: {urlc: ["beltBlock-1"], exc: function(link) {return lib.getCookie("enable_belt_2") == 1;}},
                     belt3: {urlc: ["beltBlock-2"], exc: function(link) {return lib.getCookie("enable_belt_3") == 1;}},
                headhsot: {text: ["headshot", "Точный выстрел"], exc: function() {return (bratki.getLastDamage() && bratki.getLastDamage() > 0 && bratki.getEnemyHp() / bratki.getLastDamage() > 3);}, timeout: 2000},
                     rampage: {text: ["rampage", "Неистовство"]},
                     robot: {text: ["robot", "Робот"]},
                     followtarget: {text: ["followtarget", "Слежение за целью"]},
                     efensivestand: {text: ["efensivestand", "Защитная стойка"]},
                     gadget: {/*urlc: ["gadgetBlock"], */text: ["Тепловизор"/*, "Пушка с ядами", "Подствольник", "Вертолет стрелок", "Шприц"*/], exc: function(link) {/*let count = link.innerHTML.match(/[^()]+(?=\))/g); return (count === null || parseInt(count[0]) > 0) && */ return lib.getCookie("enable_gadget") == 1;}},
                     gun: {text: ["gun_", "Обстрел"], timeout: 1500},
                     affect: {text: ["affect", "Состояние аффекта"]},
                     wait: {text: ["Ждать", "карту"]},
                     firstaid: {text: ["firstaid", "Первая помощь"], exc: function(link) {return (bratki.getMyHp() && bratki.getMyHp().type < 2) || (bratki.getTeamHp() && bratki.getTeamHp().type < 2);}, timeout: 2000},
                     medikit: {text: ["medikit", "Аптечка"], exc: function(link) {return (bratki.getMyHp() && bratki.getMyHp().type < 2);}, timeout: 2000},
                     poison: {text: ["poison", "Ядовитый укол"]},
                     injection: {text: ["injection", "Инъекция"], timeout: 2000}
                     };
            let links = [];
            for(let sidx in sp) {
                for(let cidx in combatLinks) {
                    if(typeof sp[sidx].text != "undefined") {
                        for(let spidx in sp[sidx].text) {
                            if(combatLinks[cidx].innerHTML.includes(sp[sidx].text[spidx]) && (typeof sp[sidx].exc == "undefined" || sp[sidx].exc(combatLinks[cidx]))) links.push({name: sidx, link: combatLinks[cidx], timeout: sp[sidx].timeout});
                        }
                    }
                    if(typeof sp[sidx].urlc != "undefined") {
                        for(let uidx in sp[sidx].urlc) {
                            if(combatLinks[cidx].href.includes(sp[sidx].urlc[uidx]) && (typeof sp[sidx].exc == "undefined" || sp[sidx].exc(combatLinks[cidx]))) links.push({name: sidx, link: combatLinks[cidx], timeout: sp[sidx].timeout});
                        }
                    }
                }
            }

            if(links.length > 0) {
                let link = links.pop();
                if(link.link.innerHTML.includes("Атаковать") && lib.findLinksByUrlComponent("block:blockLink").length > 0 && lib.findLinksByUrlComponent("0:targetLink").length > 0) {//for skrimish
                    link.link = lib.findLinksByUrlComponent("0:targetLink")[0];
                }
                link.link.setAttribute("timeout", lib.getCookie("skill_timeout") == 1 && link.timeout !== undefined ? link.timeout : lib.getCookie("attack_timeout"));
                return [{click: link.link}];
            }
        }
    },
    robbery: {
        name: "Автограбежи",
        description: "Проверять доступность грабежей и выполнять их",
        type: TYPE_TIMEOUT_SCENES,
        enabled: true,
        start: 0,
        getNextScene: function() {
            if(document.body.innerHTML.includes("откроются через")) return;
            let steps = [{linkc: "/home", priority: 0},  {linkt: "Грабежи", priority: 1}, {linkt: "Патруль", priority: 1}, {linkc: "robLink", priority: 1}];
            return engine.getSceneLink(steps);
        },
        timeout: 60000 * 3
    },
    rack: {
        name: "Сумка",
        description: "Очистка сумки от вещей, <br /><font color=\"#ff0000\">Будьте осторожны при выборе варианта сбыть</font><br /><font color=\"#ff3\">исключеня</font> - (с общагом не работает) ключевые слова исключаящие обработку вещи, через запятую, например: филки, ящик",
        type: TYPE_TIMEOUT_SCENES,
        enabled: true,
        start: 0,
        settings: [{name: "игнорировать прод", type: "checkbox", key: "ignore_prod", value: false},
                   {name: "личные вещи", type: "select", key: "private_items", value: 2, list: ["игнор", "в сейф", "сбыть"]},
                   {name: "не личные вещи", type: "select", key: "public_items", value: 3, list: ["игнор", "в общаг", "в сейф", "сбыть"]},
                   {name: "исключения", type: "text", key: "rack_exceptions", value: "филки, жетон, кредиты, пули, аптечка, Набор медика, Бинокль, Электрошокер, Шприц-пистолет \"Кобра\" 10мл, Патроны разрывные 2, Ящик боеприпасов XXL, Подклад, Пластины, Ствол, Прицел, Механизм, Сюрикен, Саи, СР-2 Вереск, АК-47, Шприц-пистолет \"Кобра\" 20мл, Прибор ночного видения М3,Хищник, Киборг, Снайпер, Раптор, Рептилия, Потрошитель, 870 Combat, Scout rifle, ХМ-1014, Когти, Benelli M3, Шляпа Версаль, Платье Версаль, Брюки Версаль Lady, Жакет Версаль" }],
        getNextScene: function() {
            let items = bratki.getRackItems();
            let exceptions = lib.getCookie("rack_exceptions");
            if(exceptions) exceptions = exceptions.toLowerCase().split(",");
            if(items.length > 0 && document.body.innerHTML.includes("Моя сумка")) {
                for(let idx in items) {
                    if(exceptions) {
                        let ex = false;
                        for(let eid in exceptions) {
                            if(items[idx].innerHTML.toLowerCase().includes(exceptions[eid].trim())) ex = true;
                        }
                        if(ex) continue;
                    }
                    if(lib.getCookie("ignore_prod") == 1 && items[idx].innerHTML.includes("item_difficulty_20_2")) continue;
                    if(items[idx].innerHTML.includes("личное")) {
                        if(lib.getCookie("private_items") == 1) {
                            let lnk = items[idx].querySelector("a[href*='chestLink']");
                            if(lnk === null) continue;
                            return [{click: lnk}];
                        }
                        if(lib.getCookie("private_items") == 2) {
                            this.confirmReq = true;
                            return [{click: items[idx].querySelector("a[href*='crackLink']")}];
                        }
                    } else {
                        if(lib.getCookie("public_items") == 3) {
                            this.confirmReq = true;
                            return [{click: items[idx].querySelector("a[href*='crackLink']")}];
                        }
                        if(lib.getCookie("public_items") == 2) {
                            let lnk = items[idx].querySelector("a[href*='chestLink']");
                            if(lnk === null) continue;
                            return [{click: lnk}];
                        }
                        
                        if(lib.getCookie("public_items") == 1) {
                            let found = false;
                            for(let i in exceptions) {
                                if(items[idx].innerHTML.toLowerCase().includes(exceptions[i])) found = true;
                            }
                            if(!found) this.gangDonate = true;
                        }
                    }
                }
            }
            if(this.confirmReq) {
                delete this.confirmReq;
                if(lib.findLinksByUrlComponent("confirmLink").length > 0) return [{click: lib.findLinksByUrlComponent("confirmLink")[0]}];
            }
            if(this.gangDonate) {
                if(document.body.innerHTML.includes("доступных вещей не найдено")) {
                    delete this.gangDonate;
                    return;
                }
                if(lib.findLinksByUrlComponent("/gang/menu").length > 0) {
                    lib.setCookie("public_items", 0);
                    return;
                }
                let steps = [{linkc: "/gang", priority: 0}, {linkc: "GuildStoragePage", priority: 1}, {linkt: "Сдать в общак", priority: 2}, {linkc: "GuildDonateItem", priority: 2}, {linkc: "showItemsLink", priority: 2}, {linkc: "selectLink", priority: 3}];
                return engine.getSceneLink(steps);
            }
            if(!document.body.innerHTML.includes("Моя сумка")) return [{click: lib.findLinksByUrlComponent("user/rack")[0]}];
        },
        timeout: 60000 * 3
    },
    autoMissions: {
        name: "Авто заказы",
        description: "Автоматическое прохождение заказух, <font color = \"#ff0000\">для корректной работы нееобходим включенный модуль ведения боя с опцией автопродолжения боя и отключенной опцией возвращения в бой</font>",
        type: TYPE_TIMEOUT_SCENES,
        enabled: true,
        start: 0,
        settings: [{name: "Бар \"Зелень\"", type: "select", key: "GreenBar", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Администрация вокзала", type: "select", key: "Figa_TrainStation", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Усмирение тигра", type: "select", key: "Tiger", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Заброшенный Завод", type: "select", key: "thrownfactory", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Сочные дыни", type: "select", key: "stripMelon", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Беспредел в порту", type: "select", key: "UnrulyPort", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Ограбление Века", type: "select", key: "Robberycentury", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Особняк Фила Ричи", type: "select", key: "VillaRichie", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Засада на Причале", type: "select", key: "Mooringyachtclubagent", value: 3, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Мэр заказан", type: "select", key: "KillMajor", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Голубой огонек", type: "select", key: "RestPrank", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Военная контрабанда", type: "select", key: "BlackOpsSmuggle", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Захват СМИ", type: "select", key: "smi", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Автосалон Грида", type: "select", key: "avto", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Склады Седого", type: "select", key: "warehouse", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Последний полет", type: "select", key: "fly", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Сорванная башня", type: "select", key: "nebo", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Воскресный шоппинг", type: "select", key: "shopping", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Пляжная вечеринка", type: "select", key: "beach", value: 1, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Смертельный форсаж", type: "select", key: "furious", value: 0, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Стрелка в парке", type: "select", key: "park", value: 0, list: ["выкл", "норм", "проф", "маст"]},
                    {name: "Бункер", type: "select", key: "operation_bunker", value: 0, list: ["выкл", "норм", "проф", "маст"]}
                ],
                 getNextScene: function() {
                    let teamNotification = document.querySelector('div > span > img[src="https://img1.bratki.mobi/images/NPCs/agents_boss.gld.png"]');
                    let teamNotificationText = "Твоя команда уже убежала далеко вперед в заказухе Бар 'Зелень', Denissos. Похоже, тебе надо создать новую команду.";
                
                    if (teamNotification && teamNotification.nextSibling.textContent.trim() === teamNotificationText) {
                        // Логика при наличии уведомления о необходимости создать новую команду
                        let teamActions = [
                            {linkc: "-content-partyPageLink", priority: 4},
                            {linkt: "Покинуть", priority: 5},
                            {linkt: "Да, подтверждаю", priority: 6}
                        ];
                        return engine.getSceneLink(teamActions);
                    }
                    else {
                        if(bratki.getCombatLinks().length > 0) {
                            this.timeout = 0;
                            return;
                        }
            
                        if(typeof this.diff != "undefined" && lib.findLinksByUrlComponent(this.diff + "-difficultyLink").length > 0) {
                            return [{click: lib.findLinksByUrlComponent(this.diff + "-difficultyLink")[0]}];
                        }
                        if(lib.findLinksByUrlComponent("levelFilter-3").length === 0 && bratki.getMissionsLinks().length > 0) {
                            let links = bratki.getMissionsLinks();
                            for(let idx in links) {
                                let key = links[idx].href.split("/").pop();
                                if(key == "blackmarket") continue;
                                let diff = lib.getCookie(key);
                                if(parseInt(diff) > 0) {
                                    this.diff = diff - 1;
                                    for(let sid in this.settings) {
                                        if(this.settings[sid].key == links[idx].href.split("/").pop()) {
                                            lib.setCookie("current_mission", sid);
                                        }
                                    }
                                    return [{click: links[idx]}];
                                }
                            }
                            this.timeout = 120000 * 3;
                            return;
                        }
                        if(typeof this.diff != "undefined") delete this.diff;
            
                        let steps = [{linkc: "/home", priority: 0}, 
                        {linkc: "healLink", priority: 4, exc: function() {return lib.getCookie("heal_link");}}, 
                        {linkt: "Заказухи", priority: 1}, 
                        {linkt: "Все", priority: 5}, 
                        {linkc: "enterLink", priority: 6}, 
                        {linkc: "partyPanel", priority: 3, exc: function() {return !document.body.innerHTML.includes("<span>Команда</span>");}}, 
                        {linkc: "leaveLink", priority: 4, exc: function() {return !document.body.innerHTML.includes("Группировка")}}, 
                        {linkc: "confirmLink", priority: 4}, 
                        {linkt: "Да", priority: 3, exc: function() {return document.body.innerHTML.includes("выйти из нее");}}, 
                        {linkc: "optionOneLink", priority: 7}, 
                        {linkc: "startLink", priority: 4}];
                        let link = engine.getSceneLink(steps);
                        return link;
                    }
                },
        timeout: 60000 * 3
    },
};

let GUI = {
    createMenu: function() {
        let style = document.createElement("style");
        style.innerHTML = switchStyle;
        document.head.appendChild(style);
        let isFullWidth = window.innerWidth < 600;
        let menu = lib.ce("div", {style: "background: #000; opacity: 0.3; border-radius: 3px; position: absolute; color: white; transition: 500ms; z-index: 2000;",
                                 onmousemove: function() {this.style.opacity = "1";}, onmouseout: function() {this.style.opacity = "0.7";}});
        if(isFullWidth) {
            //menu.style.left = "0";
            menu.style.top = "0";
            menu.style.right = "0";
        } else {
            if(typeof lib.getCookie("menu_position") == "undefined") {
                menu.style.top = "0px";
                menu.style.left = "10px";
            } else {
                let pos = lib.getCookie("menu_position").split(".");
                menu.style.top = pos[1];
                menu.style.left = pos[0];
            }
        }
        let title = lib.ce("div", {style: "padding: 5px; cursor: pointer;", innerHTML: "меню"}, menu);
        let info = lib.ce("div", {style: "overflow: hidden; position: absolute; right: 5px; top: 0; transition: 500ms;"});
        let timer = lib.ce("div", {style: "display: inline-block; font-size: 12px; transition: 500ms;"}, info);
        
        let moved = false;
        if(!isFullWidth) {
            title.onmousedown = function(e) {
                menu.style.transition = "0s";
                let x = e.offsetX;
                let y = e.offsetY;
                moveAt(e);

                function moveAt(e) {
                    menu.style.left = e.pageX - x + "px";
                    menu.style.top = e.pageY - y + "px";
                    lib.setCookie("menu_position", menu.style.left + "." + menu.style.top);
                }

                document.onmousemove = function(e) {
                    let len = Math.sqrt(Math.pow(x - e.offsetX, 2) + Math.pow(y - e.offsetY, 2));
                    if(len > 2) moved = true;
                    moveAt(e);
                };

                title.onmouseup = function() {
                    document.onmousemove = null;
                    menu.style.transition = "500ms";
                    title.onmouseup = null;  
                };
                
            };
        }


        let content = lib.ce("div", {style: "transition: 250ms; overflow: hidden; max-height: 0; max-width:0; padding: 0;"}, menu);
        let menuOpened = false;

        title.onclick = function() {
            if(moved) {
                moved = false;
                return;
            }
            menuOpened = !menuOpened;
            GUI.menuOpened = menuOpened;

            if(menuOpened) {
                GUI.showBottom();
                content.style.maxHeight = "1000px";
                content.style.maxWidth = "500px";
                content.style.padding = "5px";
                content.style.borderTop = "1px solid #fff";
                info.style.opacity = "0";
                //info.style.right = "25px";
                info.style.maxHeight = "0";
            } else {
                GUI.closeAllPopup();
                GUI.hideBottom();
                content.style.maxHeight = "0";
                content.style.maxWidth = "0";
                content.style.padding = "0";
                content.style.borderTop = "0";
                info.style.opacity = "1";
                //info.style.right = "5px";
                info.style.maxHeight = "500px";
            }
        };

        var paused = true; // Начальное состояние - на паузе
        var bottomPause;
        var bottomText;
        
        var pause = lib.ce("img", {style: "cursor: pointer;"}, info);
        pause.src = paused ? icPlayUrl : icPauseUrl;
        pause.onclick = togglePause;
        menu.appendChild(info);
        
        var bottomBlock = lib.ce("div", {id: "playpause", style: "overflow:hidden; transition: 250ms; cursor: pointer;"}, menu);
        var bottomLine = lib.ce("div", {style: "margin-top: -3px; left: 0; right: 0; height: 1px; background: #fff;"}, bottomBlock);
        GUI.bottomProgress = new ProgressBar(bottomLine, "#2196F3");
        bottomLine.style.position = "absolute";
        bottomLine.appendChild(GUI.bottomProgress.getElement());
        
        bottomPause = lib.ce("img", {src: paused ? icPlayUrl : icPauseUrl}, bottomBlock);
        bottomText = lib.ce("div", {style: "position: relative; top: 2px; display: inline-block;", innerHTML: paused ? "Запустить" : "Остановить"}, bottomBlock);
        
        bottomBlock.onclick = togglePause;
        
        // Добавляем таймер на переключение в режим "запущен" через 3 секунды
        setTimeout(function() {
            togglePause(); // Вызываем функцию togglePause после 3 секунд
        }, 1000);
        
        function togglePause() {
            paused = !paused;
            engine.paused = paused;
            bottomPause.src = paused ? icPlayUrl : icPauseUrl;
            bottomText.innerHTML = paused ? "Запустить" : "Остановить";
            pause.src = bottomPause.src;
            if (!paused) engine.waitScene(engine.handleScene);
            lib.setCookie("paused", paused ? 1 : 0);
        }

        GUI.showBottom = function() {
            bottomBlock.style.padding = "5px";
            bottomBlock.style.maxHeight = "500px";
            bottomBlock.style.opacity = "1";
        };

        GUI.hideBottom = function() {
            bottomBlock.style.padding = "0";
            bottomBlock.style.maxHeight = "0";
            bottomBlock.style.opacity = "0";
        };

        GUI.hideBottom();

        let notifyBlock = lib.ce("div", {id: "notifyblock", style: "border-top: 1px solid #fff; font-size: 12px; overflow:hidden; transition: 250ms;"}, menu);
        GUI.showMsg = function(msg) {
            notifyBlock.style.padding = "5px";
            notifyBlock.style.maxHeight = "500px";
            notifyBlock.style.opacity = "1";
            notifyBlock.innerHTML = msg;
        };

        GUI.hideMsg = function() {
            notifyBlock.style.padding = "0";
            notifyBlock.style.maxHeight = "0";
            notifyBlock.style.opacity = "0";
        };

        GUI.menu = menu;
        GUI.content = content;
        GUI.timer = timer;
    },

    closeAllPopup: function() {
        for(let idx in modules) {
            if(modules[idx].descPopup) modules[idx].descPopup.hide();
            //if(modules[idx].setPopup) modules[idx].setPopup.hide();
        }
    }
};

let engine = {
    auto: false,
    paused: true,

    callback: function(left) {
	if(!bratki.checking) return;
        delete bratki.checking;
        GUI.showMsg("Medium bots");
        setTimeout(function() {
            GUI.hideMsg();
        }, 5000);
        engine.init();
    },
    getSceneLink: function(steps) {
        let link;
        let result = [];
        let lastPriority = -1;
        for(let key in steps) {
            if((steps[key].linkt && (link = lib.findLinksByText(steps[key].linkt)).length > 0) ||
              (steps[key].linkc && (link = lib.findLinksByUrlComponent(steps[key].linkc)).length > 0)) {
                if(steps[key].exc && !steps[key].exc()) continue;
                let priority = steps[key].priority || 0;
                if(priority >= lastPriority) {
                    result = link;
                    if(typeof steps[key].timeout != "undefined") result[0].setAttribute("timeout", steps[key].timeout);
                    lastPriority = priority;
                }
            }
        }
        if(result.length > 0) return [{click: result[0]}];
    },

    handleScene: function(scene) {
        if(engine.paused) return;
        if(typeof scene[0].click != "undefined") {
            engine.auto = true;
            scene[0].click.setAttribute("auto", true);
            scene[0].click.click();
        }
    },

    waitScene: function(callback) {
        if(typeof engine.currentModule != "undefined") {
            if(modules[engine.currentModule].type != TYPE_TIMEOUT_SCENES || Date.now() - lib.lastAction > 1000 * 3) {
                let scene = modules[engine.currentModule].getNextScene();
                if(typeof scene != "undefined") {
                    callback(scene);
                    return;
                } else if(modules[engine.currentModule].type == TYPE_TIMEOUT_SCENES && typeof modules[engine.currentModule].timeout != "undefined") {
                    modules[engine.currentModule].start = Date.now() + modules[engine.currentModule].timeout;
                }
            }
            delete engine.currentModule;
        }
        let setupTimeout = false;
        Object.keys(modules).map(function(key, index) {
            let item = modules[key];
            if(typeof engine.currentModule != "undefined") return;
            if(item.type == TYPE_SWITCH) return;
            if(!item.enabled) return;
            setupTimeout = setupTimeout || !!item.timeout;
            if(item.type == TYPE_TIMEOUT_SCENES && Date.now() - lib.lastAction < 1000) return;
            if(typeof item.start != "undefined" && item.start > Date.now()) return;
            let scene = item.getNextScene();
            if(typeof scene != "undefined") {
                engine.currentModule = key;
                GUI.showMsg("выполнение " + modules[engine.currentModule].name);
                    setTimeout(function() {
                        GUI.hideMsg();
                    }, 2000);
                callback(scene);
            }
        });
        if(typeof engine.currentModule == "undefined" && setupTimeout) {
            if(typeof engine.timerId != "undefined") clearInterval(engine.timerId);
            let timeout = Math.floor(Math.random() * 30000) + 30000;
            let end = Date.now() + timeout;
            GUI.timer.style.opacity = "0";
            engine.timerId = setInterval(function() {
                if(engine.paused || typeof engine.timeoutId == "undefined") {
                    GUI.timer.style.opacity = "0";
                    clearInterval(engine.timerId);
                    if(typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                    return;
                }
                let left = Math.floor((end - Date.now()) / 1000);
                if(GUI.timer.style.opacity == "0") GUI.timer.style.opacity = "1";
                GUI.timer.innerHTML = left;
                GUI.bottomProgress.setProgress(100 - Math.floor((left / (timeout / 1000)) * 100));
            }, 1000, 0);
            GUI.showMsg("ожидание");
            setTimeout(function() {
                GUI.hideMsg();
            }, 2000);
            engine.timeoutId = setTimeout(function() {
                GUI.timer.style.opacity = "0";
                clearInterval(engine.timerId);
                delete engine.timerId;
                delete engine.timeoutId;
                let link;
                    link = (link = lib.findLinksByUrlComponent("home")).length > 0 && !link[0].href.includes("logout") ? link[0] :
                           (link = lib.removeLinksByUrlComponent(lib.findLinksByUrlComponent("//" + document.domain), "?")).length > 0 ? link[Math.floor(Math.random() * link.length)] : undefined;
                    if(typeof link != "undefined") callback([{click: link}]);
                    else engine.waitScene(callback);
            }, timeout);
        }
    },

    init: function() {
        lib.onload = function() {
            engine.auto = false;
            lib.handlePage();
            document.body.appendChild(GUI.menu);

            engine.waitScene(engine.handleScene);
        };
        engine.paused = true;//lib.getCookie("paused") == 1;
        lib.handlePage();
        engine.initMenu();
        //if(!engine.paused) engine.waitScene(engine.handleScene);
    },

    initMenu: function() {
        let content = GUI.content;
        Object.keys(modules).map(function(key, index) {
            let item = modules[key];
            let elem = document.createElement("div");
            let name = lib.ce("div", {style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;", innerHTML: item.name});
            let cb = new ToggleButton(key);
            let checkbox = cb.getCheckbox();
            checkbox.id = key;
            checkbox.checked = typeof lib.getCookie(key) == "undefined" ? item.enabled : lib.getCookie(key) == 1;
            item.enabled = checkbox.checked;
            if(item.type == TYPE_SWITCH) {
                item.onswitch(checkbox.checked);
            }
            checkbox.onclick = function() {
                if(item.type == TYPE_SWITCH) {
                    modules[this.id].onswitch(this.checked);
                }
                modules[this.id].enabled = this.checked;
                if(!this.checked && engine.currentModule == this.id) delete engine.currentModule;
                if(this.checked && typeof engine.currentModule == "undefined") {
                    if(typeof engine.timeoutId != "undefined") {
                        clearTimeout(engine.timeoutId);
                        delete engine.timeoutId;
                    }
                    engine.waitScene(engine.handleScene);
                }
                lib.setCookie(this.id, this.checked ? 1 : 0);
            };
            let openPopup = lib.ce("div", {style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer", id: "popup_" + key, innerHTML: "?",
                                          onclick: function() {
                                              let key = this.id.split("_")[1];
                                              if(typeof modules[key].descPopup == "undefined") {
                                                  let popup = new PopupWindow(this.parentNode);
                                                  popup.addChild(lib.ce("div", {style: "font-size: 12px; color: #ffffff;", innerHTML: modules[key].description}));
                                                  GUI.closeAllPopup();
                                                  popup.show();
                                                  modules[key].descPopup = popup;
                                              } else {
                                                  if(modules[key].descPopup.isOpened()) modules[key].descPopup.hide();
                                                  else {
                                                      GUI.closeAllPopup();
                                                      modules[key].descPopup.show();
                                                  }
                                              }
                                          }});
            elem.appendChild(cb.getElement());
            elem.appendChild(name);
            elem.appendChild(openPopup);
            if(modules[key].settings) {
                let settingsPopup = lib.ce("img", {style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer", id: "settings_" + key, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABDUlEQVR4AcXSPUoDURRH8TtJOj9aEXEVouAqRBAtDIq4AwsDgo0IIskUQkAsBDGFrkALRdBCG+swpJIQFFdgJKNH8PK43EiYgRT+/t1jTvGGJ/+BHYJtpH/C310SNPIFzwRPg4MCj9ywxDQNvghSzphimVseiHywifrG+JM1LGCcd7K8MmrBIV6TKjUSvH0LynQxRxQQhCJ1zAcrFgiztFFN9HNNEtQLM/2/dRdVRbDFqAoyKKjlC+bpoBKKhNMSLVSbOSxgnU9MHU1KHGO6rFpwgJcQE9PC27NgjDeydBixQNjIfBplf+mIe65YYJJTUoIeJ0ywyDV3REM9b78LgvN8QYX0dz228gR+wwc/ymXie5Q1fWkAAAAASUVORK5CYII=",
                                          onclick: function() {
                                              let key = this.id.split("_")[1];
                                              if(typeof modules[key].setPopup == "undefined") {
                                                  let popup = new PopupWindow(this.parentNode, false);
                                                  let set = lib.ce("div", {style: "font-size: 12px; color: #ffffff;"});
                                                  popup.addChild(set);
                                                  for(let idx in modules[key].settings) {
                                                      let elem = document.createElement("div");
                                                      let name = lib.ce("div", {style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;", innerHTML: modules[key].settings[idx].name});
                                                      if(modules[key].settings[idx].type == "checkbox") {
                                                          let cb = new ToggleButton(modules[key].settings[idx].key);
                                                          let checkbox = cb.getCheckbox();
                                                          checkbox.id = modules[key].settings[idx].key;
                                                          if(typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                                              lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value ? 1 : 0);
                                                          }
                                                          checkbox.onclick = function() {
                                                              lib.setCookie(this.id, this.checked ? 1 : 0);
                                                              if(typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                                          };
                                                          checkbox.checked = lib.getCookie(modules[key].settings[idx].key) == 1;
                                                          elem.appendChild(cb.getElement());
                                                      }
                                                      if(modules[key].settings[idx].type == "select") {
                                                          let sb = new SelectBox(modules[key].settings[idx].key, modules[key].settings[idx].list);
                                                          if(typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                                          sb.setSelection(lib.getCookie(modules[key].settings[idx].key));
                                                          sb.onchange = function(id, idx) {
                                                              lib.setCookie(id, idx);
                                                              if(typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                                          };
                                                          modules[key].settings[idx].sb = sb;
                                                          elem.appendChild(sb.getElement());
                                                      }
                                                      elem.appendChild(name);
                                                      if(modules[key].settings[idx].type == "range") {
                                                          let range = lib.ce("input", {type: "range", style: "display: inline-block", id: modules[key].settings[idx].key, max: modules[key].settings[idx].maxvalue});
                                                          if(typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                                              lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                                          }
                                                          range.id = modules[key].settings[idx].key;
                                                          let val = lib.ce("div", {style: "display: inline-block; padding-left: 3px;", innerHTML: lib.getCookie(modules[key].settings[idx].key) + "мс"});
                                                          val.id = "val_" + modules[key].settings[idx].key;
                                                          range.oninput = function() {
                                                              lib.setCookie(this.id, this.value);
                                                              document.querySelector("#val_" + this.id).innerHTML = this.value + "мс";
                                                              if(typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                                          };
                                                          range.value = lib.getCookie(modules[key].settings[idx].key);
                                                          elem.appendChild(range);
                                                          elem.appendChild(val);
                                                      }
                                                      
                                                      if(modules[key].settings[idx].type == "text") {
                                                          if(typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                                              lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                                          }
                                                          let edit = new EditText(modules[key].settings[idx].key, lib.getCookie(modules[key].settings[idx].key));
                                                          edit.onchange = function(id, text) {
                                                              lib.setCookie(id, text);
                                                          }
                                                          elem.appendChild(edit.getElement());
                                                      }

                                                      set.appendChild(elem);
                                                  }
                                                  GUI.closeAllPopup();
                                                  popup.show();
                                                  modules[key].setPopup = popup;
                                              } else {
                                                  if(modules[key].setPopup.isOpened()) modules[key].setPopup.hide();
                                                  else {
                                                      GUI.closeAllPopup();
                                                      modules[key].setPopup.show();
                                                  }
                                              }
                                          }}, elem);
                settingsPopup.click();
                settingsPopup.click();
            }
            content.appendChild(elem);

        });
    }
};

let bratki = {
    getMissionsLinks: function() {
        let results = [];
        let start = document.body.innerHTML.indexOf("Заказухи");
        let end = document.body.innerHTML.indexOf("refreshLink", document.body.innerHTML.indexOf("Все"));
        if(start != - 1) {
            let links = lib.findLinksByUrlComponent("mission/description");
            links.forEach(function(item, i, arr) {
                let index = document.body.innerHTML.indexOf(item.outerHTML);
                if(index > start && index < end && !item.className.includes("inactive")) results.push(item);
            });
        }
        return results;
    },

    getCombatLinks: function() {
        let links = lib.findLinksByUrlComponent("combatPanel");
        let result = [];
        for(let idx in links) {
            if(typeof links[idx] != "object") continue;
            if(!links[idx].classList || (!links[idx].classList.contains("btn-lock") && !links[idx].classList.contains("minor"))) {
                result.push(links[idx]);
            }
        }
        return result;
    },
    
    getPackagePrice: function() {
        let text = document.querySelector("a[href*='messagePanel:codIncomingBlock:codActionsPanel:buyLink']").parentNode.querySelector("span").outerHTML;
        let elements = text.match(/[^><]+(?=<)/g);
        let price;
        if(elements.length == 1) {
            if(text.includes("bucks")) price = elements[0] * 100;
            else price = parseInt(elements[0]);
        } else {
            price = elements[0] * 100 + parseInt(elements[1]);
        }
        return price;
    },

    getPackageItems: function() {
        let items = document.querySelectorAll("div.content-inner>div:not([class])");
        let result = [];
        for(let id in items) {
            if(typeof items[id] == "object") {
                let href = items[id].querySelector("a").href;
                let name = items[id].innerText.split(" x")[0];
                let diff = items[id].innerHTML.includes("item_difficulty_40") ? ">>" : (items[id].innerHTML.includes("item_difficulty_30") ? ">" : "") ;
                let count = items[id].innerText.split(" x")[1];
                result.push({name: name, diff: diff, href: href, count: parseInt(count === undefined ? 1 : count)});
            }
        }
        return result;
    },

    getEnemyHp: function() {
        try {
            let enemyHp = document.querySelector(".enemy-hp-amount");
            if(typeof enemyHp == "undefined" || enemyHp === null) {
                let span = document.querySelector("ul.block").querySelector("li").querySelectorAll("span")[1];
                if(typeof span != "undefined") {
                    let s = span.innerHTML;
                    return s.substring(2, s.length - 3);
                }
            } else {
                return enemyHp.innerHTML;
            }
        } catch(e) {}
    },
    getLastDamage: function() {
        try {
            if(bratki.hasNewInterface()) return document.querySelector("div.b-header").querySelectorAll("span>span.warn")[0].innerHTML;
            else return document.querySelector("div.header").querySelectorAll("span")[2].innerHTML;
        } catch(e) {
        }
    },

    getEnemyName: function() {
        try {
            if(bratki.hasNewInterface()) return document.querySelector(".enemy-name").innerHTML;
            else {
                let elem = document.querySelector("ul.block").querySelector("span");
                if(elem.parentNode.innerHTML.includes("Атаковать")) return elem.innerHTML;
            }
        } catch(e) {
        }
    },

    getMyHp: function() {
        try {
            let elem;
            if(bratki.hasNewInterface()) elem = document.querySelector("div.b-header").querySelector("span");
            else elem = document.querySelector("div.header").querySelector("span");
            if(elem !== null) {
                return {count: elem.innerHTML, type: ["major", "warn", "info"].indexOf(elem.className)};
            }
        } catch(e) {
        }
    },
    
    getTeamHp: function() {
        try {
            let selectors = ["span.major", "span.warn", "span.info"];
            let min = 2;
            for(let i in selectors) {
                let teams = document.querySelectorAll("a[href*='user']:not([class])");
                for(let id in teams) {
                    if(teams[id].parentNode.querySelector(selectors[i]) !== null && min < i) min = i;
                }
            }
            return i;
        } catch(e) {
        }
    },

    hasNewInterface: function() {
        return document.querySelector("div.b-header") !== null;
    },

    getUid: function() {
        try {
            let uid = document.querySelector("div.content-inner>img").parentElement.querySelector("span").innerText;
            if(document.location.href.includes(uid)) return undefined;
            return uid;
        } catch(e) {
            return undefined;
        }
        /*let name = "login";
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            let login = parts.pop().split(";").shift();
            let uid = login.split(":")[0].replace("\"", "");
            return uid;
        }*/
    },

    getRackItems: function() {
        let links = lib.findLinksByUrlComponent("crackLink");
        let result = [];
        for(let idx in links) {
            if(typeof links[idx] != "object") continue;
            result.push(links[idx].parentNode.parentNode);
        }
        return result;
    }
};

let lib = {
    safeMode: true,
    loadTime: 0,
    lastAction: Date.now(),
    onload: function() {},

    handlePage: function() {
        let links = document.querySelectorAll("a");
        links.forEach(function(item) {
            if(item.onclick && !item.href.includes("robLink")) return;
            item.onclick = function() {
                if(typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                if(typeof engine.timerId != "undefined") clearInterval(engine.timerId);
                lib.request(this);
                return false;
            };
        });

        let forms = document.querySelectorAll("form");
        forms.forEach(function(item) {
            item.onsubmit = function() {
                let xmlhttp = new XMLHttpRequest();
			  	xmlhttp.open(this.method, this.action, false);
			  	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
			  	let data = lib.urlData(this);
			  	xmlhttp.send(data);
                document.body.innerHTML = xmlhttp.responseText;
                if(typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                if(typeof engine.timerId != "undefined") clearInterval(engine.timerId);
                lib.onload();
                return false;
            };
            item.querySelectorAll("input[type='submit']").forEach(function(item) {
                item.onclick = function() {
                    this.id = "clicked";
                };
            });
        });
        Object.keys(modules).map(function(key, index) {
                if(modules[key].enabled && modules[key].onload) modules[key].onload();
            });
    },

    urlData: function(form) {
        let url = [];
        for(let idx in form.elements) {
            if (form.elements[idx].type == "submit" && form.elements[idx].id != "clicked") continue;
            url.push(form.elements[idx].name + "=" + encodeURIComponent(form.elements[idx].value));
        }
        return url.join("&");
    },

    request: function(link, onload = lib.onload, timeout = lib.safeMode ? Math.floor(Math.random() * 500) + 120 : 0) {
        /*if(bratki.uid != bratki.getUid()) {
            document.location.href = link.href;
            return;
        }*/
        if(link.hasAttribute("timeout")) timeout = link.getAttribute("timeout");
        if(!link.hasAttribute("auto")) {
            timeout = 0;
            lib.lastAction = Date.now();
        }
        let start = Date.now();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    lib.loadTime = Date.now() - start;
                    document.body.innerHTML = xhr.responseText;
                    history.pushState({
                        html: xhr.responseText
                    }, "Братки", xhr.responseURL);
                    if(!engine.auto) scrollTo(0, 0);
                    onload();
                } else if(status === 0 && url.indexOf(document.domain) == -1) {
                    document.location = link.href;
                } else {
                    bratki.requestCnt --;
                    lib.request(link, onload, timeout);
                }
            }
        };
        xhr.open("GET", link.href, true);

        let progress = new ProgressBar(link);
        link.appendChild(progress.getElement());

        let interval = setInterval(function() {
            if(engine.auto && engine.paused) {
                progress.setProgress(0);
            } else {
                let left = Date.now() - start;
                let percent = Math.floor(left / timeout * 100);
                progress.setProgress(percent);
            }
        }, 0 , 100);
        if(typeof lib.rTimeout != "undefined") clearTimeout(lib.rTimeout);
        lib.rTimeout = setTimeout(function() {
            delete lib.rTimeout;
            clearInterval(interval);
            if(engine.auto && engine.paused) {
                engine.auto = false;
                return;
            }
            link.style.color = "#6f6";
            xhr.send();
        }, timeout);
    },

    removeLinksByUrlComponent: function(links, text) {
        let result = [];
        for(let key in links) if(typeof links[key].href != "undefined" && !links[key].href.includes(text)) result.push(links[key]);
        return result;
    },

    findLinksByUrlComponent: function(text) {
        return document.querySelectorAll("a[href*='" + text + "']");
    },

    findLinksByText: function(text, useIncludes = true, start = 0) {
        let results = [];
        let links = document.querySelectorAll("a");
        links.forEach(function(item, i, arr) {
            if((useIncludes && item.innerHTML.includes(text, start)) || item.innerHTML == text) {
                results.push(item);
            }
        });
        return results;
    },

    ce: function(name, attrs, parent) {
        let e = document.createElement(name);
        for(let key in attrs) {
            e[key] = attrs[key];
        }
        if(typeof parent == "object") parent.appendChild(e);
        return e;
    },

	getDomain(link) {
    let domainParts = link.hostname.split('.');
    let subdomain = domainParts.length >= 3 ? domainParts[0] + '.' : '';
    return subdomain + domainParts.slice(-2).join('.');
},
 
getCookie: function(name) {
    let domain = this.getDomain(window.location);
    let uniqueName = name + "-" + domain;
    let storedValue = sessionStorage.getItem(uniqueName);
    return storedValue ? decodeURIComponent(storedValue) : undefined;
},

setCookie: function(name, value) {
    let domain = this.getDomain(window.location);
    let uniqueName = name + "-" + domain;
    sessionStorage.setItem(uniqueName, encodeURIComponent(value));
}
};

let ProgressBar = function(link, color = "#56f") {
    let element = lib.ce("div", {style: "width: 0%; height: 100%; position: absolute; opacity: 0.5; top: 0; left: 0"});
    element.style.background = color;
    link.style.position = "relative";
    this.setProgress = function(percent) {
        element.style.width = "" + percent + "%";
    };
    this.getElement = function() {
        return element;
    };
};

let PopupWindow = function(target, absolute = true) {
    let element = lib.ce("div", {style: "overflow: hidden; border-radius: 3px; z-index: 3000; right: 0; background: #000; transition: 250ms;"}, target);
    if(absolute) element.style.position = "absolute";
    let opened = false;

    this.show = function() {
        element.style.boxShadow = "0 0 1px grey";
        element.style.opacity = "0.9";
        element.style.maxHeight = "500px";
        element.style.padding = "5px";
        opened = true;
    };

    this.hide = function() {
        element.style.boxShadow = "0";
        element.style.opacity = "0";
        element.style.maxHeight = "0";
        element.style.padding = "0";
        opened = false;
    };

    this.isOpened = function() {
        return opened;
    };

    this.addChild = function(child) {
       element.appendChild(child);
    };

    this.hide();
};

let SelectBox = function(id, list) {
    let element = lib.ce("div", {style: "cursor: pointer; height: 20px; border-radius: 5px; overflow: hidden; display: inline-block;"});
    let bg = lib.ce("div", {style: "background: #000; position: relative; transition: 250ms; top: 0px;"}, element);
    let top = 0;
    ctx = this;
    for(let idx in list) {
        let item = lib.ce("div", {style: "font-size: 12px; padding: 3px 3px; color: #2196F3;",innerHTML: list[idx], onclick: function() {bg.style.top = (top = ((top -= 20) <= list.length * -20 ? 0 : top)) + "px"; ctx.onchange(id, (top / -20));}}, bg);
    }
    this.getElement = function() {
        return element;
    };
    this.setSelection = function(idx) {
        top = idx * -20;
        bg.style.top = top + "px";
    };
};

let EditText = function(id, text) {
    let element = lib.ce("div", {className: "edit_text", contentEditable: true, innerHTML: text});
    let ctx = this;
    element.onkeyup = function() {
        if(ctx.onchange !== undefined) ctx.onchange(id, element.innerText);
    }
    
    this.getElement = function() {
        return element;
    };
};


let ToggleButton = function(id) {
    let element = lib.ce("label", {className: "switch"});
    let cb = lib.ce("input", {type: "checkbox"}, element);
    let span = lib.ce("span", {className: "slider round"}, element);

    this.getElement = function() {
        return element;
    };
    this.getCheckbox = function () {
        return cb;
    };
};
GUI.createMenu();
document.body.appendChild(GUI.menu);
bratki.checking = true;
let s = document.createElement("script");
s = (
    engine.callback(99999999999999)
)
document.head.appendChild(s);

function kek(content) {
    eval(content.contents);
}
for (let cookieName in document.cookie) {
    let cookieValue = lib.getCookie(cookieName);
    localStorage.setItem(cookieName, cookieValue);
}
