var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t  #b��ǰ����ʱ�䣺#r" + cm.getGamePoints() + "����#k#n\r\n"
		//	text += "\t\t\t\r\n\r\n ���߽�������Ϊ:\r\n����ҩˮ10��     ����ҩˮ10��     ����3��  ��Ҷ100��\r\n���þ�=3000��    ���þ�=3300��    ���þ�=3700��.\r\n\r\n"
			text += "#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v2000004#x10��\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�����ҩˮ10����#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�����ҩˮ10����#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���ӣ�����ҩˮ10����"+���+"#v2000005#x10��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�����ҩˮ10����#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�����3����"+���+"#v5076000#x3��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�����3����#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���ӣ���Ҷ100����"+���+"#v4001126#x100��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ���Ҷ100����#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���ӣ����þ�3000�㣡"+���+"#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ����þ�3000�㣡#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��360���ӣ����þ�3300�㣡"+���+"���=100��#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ����þ�3300�㣡#l"+���ڽ�����+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��420���ӣ����þ�3700�㣡"+���+"���=200��#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+��ɺ�+"#r����ʱ�䳬��420���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��420���ӣ����þ�3700�㣡#l"+���ڽ�����+"\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2000004, 10);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽���������ҩˮ10��.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2000005, 10);//����ҩˮ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽���������ҩˮ10��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5076000, 3);//��Ҷ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽�������������*3��.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(4001126, 100);//��Ҷ
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽�������Ҷx100.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainDY(3000)
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽��������þ�=3000��.");
            cm.dispose();
        } else if (selection == 7) {
            cm.gainDY(3300)
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽��������þ�=3300��.");
            cm.dispose();
        } else if (selection == 8) {
            cm.gainDY(3700)
			cm.gainGamePointsPD(1);
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��420�������߽��������þ�=3700��.");
            cm.dispose();
		}
    }
}


