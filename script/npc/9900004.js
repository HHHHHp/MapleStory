/* global cm */
//var ���� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

var ���� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
    text += "#L36##fUI/GuildMark.img/Mark/Etc/00009001/14#��ݴ���#l#L27##fUI/GuildMark.img/Mark/Etc/00009001/14#��������#l#L29##fUI/GuildMark.img/Mark/Etc/00009001/14#BOSS�ط�#l\r\n\r\n"
	text += "#L1005##fUI/GuildMark.img/Mark/Etc/00009001/14#��Ʒװ��#l#L32##fUI/GuildMark.img/Mark/Etc/00009001/14#���߻���#l#L30##fUI/GuildMark.img/Mark/Etc/00009001/14#��ѯ����#l\r\n\r\n"
    text += "#L51##fUI/GuildMark.img/Mark/Etc/00009001/14#ÿ������#l#L52##fUI/GuildMark.img/Mark/Etc/00009001/14#ÿ�ո���#l#L53##fUI/GuildMark.img/Mark/Etc/00009001/14#ÿ��BOSS#l\r\n\r\n"
	text += "#L28##fUI/GuildMark.img/Mark/Etc/00009001/14#��������#l#L7##fUI/GuildMark.img/Mark/Etc/00009001/14#�鿴����#l#L2##fUI/GuildMark.img/Mark/Etc/00009001/14#���߽���#l\r\n\r\n"
	text += "#L39##fUI/GuildMark.img/Mark/Etc/00009001/14#�����׹#l#L40##fUI/GuildMark.img/Mark/Etc/00009001/14#��Ҷ�һ�#l#L41##fUI/GuildMark.img/Mark/Etc/00009001/14#�н�һ�#l\r\n\r\n"
	text += "#L13##fUI/GuildMark.img/Mark/Etc/00009001/14#��������#l#L22##fUI/GuildMark.img/Mark/Etc/00009001/14#����̵�#l#L12##fUI/GuildMark.img/Mark/Etc/00009001/14#�ʼҴ�ȫ#l\r\n\r\n"
	  
            if (cm.getPlayer().isGM()) {
            //   text += " \r\n\\r\n\r\n\t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
            //   text += "#L36#��ݴ���#l\t#L37#����תְ#l\r\n"
            //   text += "#L1002#ˢ�µ�ǰ��ͼ#l#L1003#ˢ�¸���״̬#l\r\n"
            //   text += "#L1005#���ظ���#l#L1006#���ر���#l#L1007#���ط�Ӧ��#l#L1008#���ش��͵�#l\r\n"
            //   text += "#L1009#��������#l#L1010#�����̵�#l#L1011#���ط��ͷ#l#L1004#�鿴����Աָ��#l\r\n"
            }
            cm.sendSimple(text);
			
        } else if (selection == 1) {//���������г�
	    cm.warp(910000000);
            cm.dispose();
           
        } else if (selection == 2) {//����ʱ�佱��
            cm.openNpc(9900004,2);

        } else if (selection == 3) { //�ȼ���ȡ����
            cm.openNpc(9900004,3);

        } else if (selection == 4) {//��ֵ�����ȡ
            cm.openNpc(9900004,4);

        } else if (selection == 5) {//ÿ��ǩ��
            cm.openNpc(9900004,5);

        } else if (selection == 6) {//ÿ������һϵ�С�
            cm.openNpc(9900004,6);

        } else if (selection == 7) {//�ۺ�����
            cm.openNpc(9900004,7);

        } else if (selection == 8) {//��ʱ����
            cm.openNpc(9900004,8);

        } else if (selection == 9) {//װ������
            cm.openNpc(9000018,0);

        } else if (selection == 10) {//�����һ�
            cm.openNpc(9310084,0);
        } else if (selection == 11) {//�ƽ���齱
            cm.openNpc(9900004,11);

        } else if (selection == 12) {//�ʼ��ۺ�
            cm.openNpc(9900004,12);

        } else if (selection == 13) {
            cm.warp(809030000);//������

        } else if (selection == 11111) {//
            cm.openShop(84);//NPCID�ǣ�2040051
            cm.dispose();

        } else if (selection == 12111) {//
            cm.openShop(30);//NPCID:1200002
            cm.dispose();

        } else if (selection == 13111) {//
            cm.openShop(39);//NPCID:2070002ī��
            cm.dispose();

        } else if (selection == 14) {//�����˽���
            cm.sendOk("�ݲ�����");
		cm.dispose();
        //    cm.openNpc(9900004,14);

        } else if (selection == 15) {//����һ�
            cm.openNpc(9900004,15);

        } else if (selection == 16) {//ɱ�ֶһ�
	    cm.openNpc(9900004,16);

        } else if (selection == 17) {//���Ƕһ�
            cm.sendOk("�ݲ�����");
		cm.dispose();
		//cm.openNpc(9900004,17);

        } else if (selection == 18) {//���ĵ���
            cm.openNpc(9330045,0);

        } else if (selection == 19) {//��𽹬���
	    cm.warp(700000000);
            cm.dispose();

        } else if (selection == 20) {//
            cm.openNpc(9900004,20);

        } else if (selection == 21) {//
            cm.openShop(81);//NPCID�ǣ�2040051
            cm.dispose();

        } else if (selection == 22) {//
            cm.openShop(39);//NPCID:2070002ī��
            cm.dispose();
        } else if (selection == 23) {//����ע��
            cm.openNpc(9900004,23);
        } else if (selection == 24) {//�ϻ���
            cm.openNpc(9900004,24);
        } else if (selection == 25) {//Ѫ��
		cm.sendOk("�ݲ�����");
            //cm.openNpc(9900004,25);
		cm.dispose();
        } else if (selection == 26) {//��¥
            cm.openNpc(9900004,26);
        } else if (selection == 27) {//��������
            cm.openNpc(9900004,27);
        } else if (selection == 28) {//��������
            cm.openNpc(9900004,28);

        } else if (selection == 29) {//�ط�BOSS
            cm.openNpc(9900004,29);

        } else if (selection == 30) {//��ѯ����
            cm.openNpc(9900004,30);

        } else if (selection == 31) {//������
            cm.openNpc(9900004,31);

        } else if (selection == 32) {//����
            cm.openNpc(9900004,32);

        } else if (selection == 33) {//������һ�
            cm.openNpc(9900004,33);

        } else if (selection == 34) {//�Ĳ�
            cm.openNpc(9900004,34);

        } else if (selection == 35) {//�Ĳ�
            cm.openNpc(9900004,35);

        } else if (selection == 34) {//�Ĳ�
            cm.openNpc(9900004,34);

        } else if (selection == 34) {//�Ĳ�
            cm.openNpc(9900004,34);
		} else if (selection == 39) {//�����׹
            cm.openNpc(9900004,39);
		} else if (selection == 40) {//��Ҷ�һ�
            cm.openNpc(9000041,0);
		} else if (selection == 41) {//�н�һ�
            cm.openNpc(9000040,0);
		} else if (selection == 51) {//ÿ�ո���
            cm.openNpc(9900004,101);
		} else if (selection == 52) {//ÿ�ո���
            cm.openNpc(9900004,100);
		} else if (selection == 53) {//ÿ�ո���
            cm.openNpc(9900004,103);
        } else if (selection == 36) {//
            cm.openNpc(9900004, 36);
        } else if (selection == 37) {//
            cm.openNpc(9900004, 37);
        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1005) {//
            cm.openNpc(9900004, 1005);
        } else if (selection == 1006) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1007) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1008) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1009) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1010) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1011) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 38) {//
            cm.openNpc(9900004, 38);
        } else if (selection == 1013) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1014) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1015) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        }
    }
}


