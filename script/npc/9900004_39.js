/* global cm */

//var ���� = "#fEffect/CharacterEff/1022223/4/0#";

var ���� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "#e#b�����׹������ӳ�30%��������Ч�������ر�Ŷ��\r\n\r\n";
                text += "" +  "#L1##r#v1122017##z1122017#\tʱ�䣺3Сʱ\t���300��\r\n\r\n"//3
                text += "" +  "#L2##r#v1122017##z1122017#\tʱ�䣺10Сʱ\t���600��\r\n\r\n"//3
                text += "" +  "#L3##r#v1122017##z1122017#\tʱ�䣺 1��\t���1200��\r\n\r\n"//3
                text += "" +  "#L4##r#v1122017##z1122017#\tʱ�䣺 7��\t���6000��\r\n\r\n"//3
                cm.sendSimple(text);
            }
        } else if (selection == 1) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 300) {
                cm.gainNX(-300);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��3Сʱʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("������޷�������");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 600) {
                cm.gainNX(-600);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��10Сʱʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("���߲����޷�������");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 1200) {
                cm.gainNX(-1200);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��1��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("���߲����޷�������");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 6000) {
                cm.gainNX(-6000);
                cm.gainItem(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 168);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��7��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("������޷�������");
                cm.dispose();
            }
        }
    }
}


