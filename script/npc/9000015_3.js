var status = 0;
var itemList =
        Array(
                Array(3010044, 700, 1, 1), //??ɡ????
                Array(3010036, 800, 1, 1), //??ǧ
                Array(3010049, 800, 1, 1), //ѧ????
                Array(3010110, 800, 1, 1), //??
                Array(3010131, 800, 1, 1), //??è
                Array(1022129, 800, 1, 1), //?۾?
                Array(3012001, 800, 1, 1), //???? 
                Array(3012002, 800, 1, 1), //ԡͰ
                Array(3012003, 800, 1, 1), //????
                Array(3010013, 800, 1, 1), //??????
                Array(3010018, 800, 1, 1), //Ҭ????
                Array(3010021, 800, 1, 1), //ůů??
                Array(3010024, 800, 1, 1), //??????
                Array(3010025, 800, 1, 1), //5??????Ҷ????
                Array(3010026, 800, 1, 1), //???鸽??
                Array(3010034, 800, 1, 1), //???ں?
                Array(3010035, 800, 1, 1), //??????
                Array(3010043, 800, 1, 1), //ħŮɨ??
                Array(3010051, 800, 1, 1), //ɳĮ????1
                Array(3010052, 800, 1, 1), //ɳĮ????2
                Array(3010054, 800, 1, 1), //???ല
                Array(3010057, 800, 1, 1), //Ѫɫõ??
                Array(3010058, 800, 1, 1), //????ĩ??
                Array(3010063, 800, 1, 1), //????????
                Array(3010068, 800, 1, 1), //¶ˮ????
                Array(3010069, 800, 1, 1), //???Ʒ?
                Array(3010071, 800, 1, 1), //????????
                Array(3010075, 800, 1, 1), //???ֿ?
                Array(3010075, 800, 1, 1), //????è
                Array(3010079, 800, 1, 1), //??è
                Array(3010085, 800, 1, 1), //??????????
                Array(3010096, 800, 1, 1), //??????ʯ
                Array(3010099, 800, 1, 1), //??????????
                Array(3010109, 800, 1, 1), //ů¯????
                Array(3010110, 800, 1, 1), //????
                Array(3010129, 800, 1, 1), //????????
                Array(3010139, 800, 1, 1), //˽?ܿռ?
                Array(3010140, 800, 1, 1), //???տ???
                Array(3010147, 800, 1, 1), //????????
                Array(3010149, 800, 1, 1), //????
                Array(3010151, 800, 1, 1), //???˵?
                Array(3010151, 800, 1, 1), //?????ŷ?
                Array(3010169, 800, 1, 1), //??????
                Array(3010172, 800, 1, 1), //?ǿ?????
                Array(3010175, 800, 1, 1), //??????????
                Array(3010193, 800, 1, 1), //????ƿ
                Array(3010195, 800, 1, 1), //?޼?֮??
                Array(3010195, 800, 1, 1), //????ԡ??
                Array(3010289, 800, 1, 1), //?????̶?ͨ??
                Array(3010293, 800, 1, 1), //????????
                Array(3010403, 800, 1, 1), //???ֻ?
                Array(3010410, 800, 1, 1), //????
                Array(3010411, 800, 1, 1), //˫??
                Array(3010412, 800, 1, 1), //˫??
                Array(3010428, 800, 1, 1), //ˮ??
                Array(3010437, 800, 1, 1), //ħ????
                Array(3010438, 800, 1, 1), //????
                Array(3010453, 800, 1, 1), //????
                Array(3010454, 800, 1, 1), //?????ƶ?
                Array(3010462, 800, 1, 1), //????̨
                Array(3010494, 800, 1, 1), //TV????
                Array(3010505, 800, 1, 1), //??????
                Array(3010515, 800, 1, 1), //??ʯ????
                Array(3010609, 800, 1, 1), //??????????
                Array(3010622, 800, 1, 1), //????
                Array(3010632, 800, 1, 1), //ӡ?ڰ?
                Array(3010633, 800, 1, 1), //ӡ?ڰ?
                Array(3010659, 800, 1, 1), //??ʿ
                Array(3010716, 800, 1, 1), //????Ģ??
                Array(3010729, 800, 1, 1), //?¶?????
                Array(3010730, 800, 1, 1), //С?????ϳ???
                Array(3010733, 800, 1, 1), //????????
                Array(3010738, 800, 1, 1), //??????????
                Array(3010739, 800, 1, 1), //ѩ???㲨
                Array(3010753, 800, 1, 1), //õ??????
                Array(3010767, 800, 1, 1), //ѩ??????
                Array(3010760, 800, 1, 1), //?Ŵ?ԡ??
                Array(3010876, 800, 1, 1), //????
                Array(3010879, 800, 1, 1), //????
                Array(3010937, 800, 1, 1), //????
                Array(3010938, 800, 1, 1), //????
                Array(3010939, 800, 1, 1), //????
                Array(3010946, 800, 1, 1), //ɭ?ֻ???
                Array(3012007, 800, 1, 1), //ʯʨ
                Array(3012008, 800, 1, 1), //????????
                Array(3012011, 800, 1, 1), //????
                Array(3012022, 800, 1, 1), //??˾
                Array(3015053, 800, 1, 1), //??????
                Array(3015120, 800, 1, 1), //??ͷ??ս
                Array(3015264, 800, 1, 1), //??ζ????
                Array(3015158, 800, 1, 1), //ӡ?ڰ?
                Array(3010291, 800, 1, 1), //????
                Array(3010428, 800, 1, 1), //ˮ??
                Array(3010492, 800, 1, 1), //????
                Array(3010435, 800, 1, 1), //ǧ??????
                Array(3010494, 800, 1, 1), //TV
                Array(3010511, 800, 1, 1), //??԰
                Array(3010512, 800, 1, 1), //????
                Array(3010589, 800, 1, 1), //????
                Array(3010600, 800, 1, 1), //????
                Array(3010601, 800, 1, 1), //????
                Array(3010620, 800, 1, 1), //й??
                Array(3010664, 800, 1, 1), //????
                Array(3010678, 800, 1, 1), //???Ӷ?
                Array(3010680, 800, 1, 1), //????
                Array(3010739, 800, 1, 1), //?㲨
                Array(3010744, 800, 1, 1), //??ľ
                Array(3010795, 800, 1, 1), //??Ϣ
                Array(3010806, 800, 1, 1), //?ŷ?
                Array(3010894, 800, 1, 1), //????
                Array(3012030, 800, 1, 1), //????
                Array(3015100, 800, 1, 1), //????
                Array(3015183, 800, 1, 1), //????
                Array(3015312, 800, 1, 1), //????
                Array(3012011, 800, 1, 1) //????
                );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("??ô???Ѽ????????????Ұɣ?");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000313, 30)) {
            cm.sendYesNo("#v4000313#???????Ѿ??Ѽ???????.??ô????Ϊ????ȡ#r[????????].");
        } else {
            cm.sendOk("?㱳??????30??#b#t4000313##k???");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 800);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "????Ѱ???????齱", notice);
            if (item != -1) {
                cm.gainItem(4000313, -30);
                cm.sendOk("???????? #b#t" + item + "##k " + quantity + "????");
            } else {
                cm.sendOk("??ȷʵ??30??#b#t4170005##k?????????ǣ?????ȷ???ڱ?????װ???????ģ????????????Ƿ???һ?????ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("???????????????ʲô??û???õ?????????Ϊ???????͸???5??#v4001322#??Ϊ????.");
            cm.gainItem(4000313, -30);
            cm.gainItem(41001322, 5);
            cm.safeDispose();
        }
    }
}