package KinMS.db;

import client.MapleCharacter;
import database.DatabaseConnection;
import handling.channel.ChannelServer;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import server.maps.MapleMap;
import server.maps.MapleMapFactory;
import tools.MaplePacketCreator;

public class CherryMSLotteryImpl
        implements CherryMSLottery {

    private static CherryMSLotteryImpl instance = null;
    private ChannelServer cserv;
    private MapleMapFactory mapFactory;
    public boolean jjc;
    private int zjNum;
    Collection<MapleCharacter> characters = new ArrayList();
    private long alltouzhu;
    private long allpeichu;

    private CherryMSLotteryImpl() {
    }

    public static CherryMSLotteryImpl getInstance() {
        if (instance == null) {
            instance = new CherryMSLotteryImpl();
        }
        return instance;
    }

    private CherryMSLotteryImpl(ChannelServer cserv, MapleMapFactory mapFactory) {
        this.cserv = cserv;
        this.mapFactory = mapFactory;
    }

    public static CherryMSLotteryImpl getInstance(ChannelServer cserv, MapleMapFactory mapFactory) {
        if (instance == null) {
            instance = new CherryMSLotteryImpl(cserv, mapFactory);
        }
        return instance;
    }

    public ChannelServer getChannelServer() {
        return this.cserv;
    }

    public MapleMapFactory getMapleMapFactory() {
        return this.mapFactory;
    }

    public static int getDatetimemm() {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("mm");
        String datetime = sdf.format(date);
        return Integer.parseInt(datetime);
    }

    public void warp(int map, MapleCharacter c) {
        MapleMap target = getWarpMap(map, c);
        c.changeMap(target, target.getPortal(0));
    }

    private MapleMap getWarpMap(int map, MapleCharacter c) {
        MapleMap target;
        if (c.getEventInstance() == null) {
            target = ChannelServer.getInstance(c.getClient().getChannel()).getMapFactory().getMap(map);
        } else {
            target = c.getEventInstance().getMapInstance(map);
        }
        return target;
    }

    public long getAllpeichu() {
        return this.allpeichu;
    }

    public void setAllpeichu(long allpeichu) {
        this.allpeichu = allpeichu;
    }

    public long getAlltouzhu() {
        return this.alltouzhu;
    }

    public void setAlltouzhu(long alltouzhu) {
        this.alltouzhu = alltouzhu;
    }

    /**
     *
     * @return
     */
    public Collection<MapleCharacter> getCharacters() {
        return this.characters;
    }

    public void setCharacters(Collection<MapleCharacter> characters) {
        this.characters = characters;
    }

    public void addChar(MapleCharacter chr) {
        this.characters.add(chr);
    }

    public int getZjNum() {
        return this.zjNum;
    }

    public void setZjNum(int zjNum) {
        this.zjNum = zjNum;
    }

    public void doLottery() {
        drawalottery();
    }

    public int getTouNumbyType(int type) {
        int count = 0;
        for (MapleCharacter chr : this.characters) {
            if (chr.getTouzhuType() == type) {
                count++;
            }
        }
        return count;
    }

    /*  public int getbuff() throws SQLException {
        PreparedStatement ps = null;
        int a = -1;

        Connection con = DatabaseConnection.getConnection();
        ps = con.prepareStatement("SELECT count(*) from questmonster WHERE zt = 0");

        a = ps.executeUpdate();


        System.out.println(ps.executeUpdate());
        ps.close();

        return a;
    }*/
    public int test3() throws SQLException {
        Connection con = DatabaseConnection.getConnection();
        String sql = "SELECT count(*) from questmonster WHERE zt = 0";
        PreparedStatement ps = con.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        int count = -1;
        if (rs.next()) {
            count = rs.getInt(1);
        }
        rs.close();
        ps.close();
        return count;
    }

    public void deletebuff() {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE questmonster SET name = 0,charid = 0,zt = 0 WHERE zt <> 0");
            ps.close();
            ps.executeUpdate();
        } catch (SQLException ex) {
            ex.getStackTrace();
        }
    }

    public void deletequest() {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE questnpc SET name = 0,zt = 0");
            ps.close();
            ps.executeUpdate();
        } catch (SQLException ex) {
            ex.getStackTrace();
        }
    }

    public void drawalottery() {
        this.zjNum = (int) (Math.random() * 6.0D + 1D);

        String zjNames2 = " ";
        String zjNames3 = " ";
        String zjNames6 = " ";

        int toucount2 = 0;
        int toucount3 = 0;
        int toucount6 = 0;

        int zhongcount2 = 0;
        int zhongcount3 = 0;
        int zhongcount6 = 0;

        long sumNX = 0;

        long peiNX = 0;

        int zjpeople = 0;

        Collection drawchars = this.characters;

        if (drawchars != null) {
            for (Iterator i$ = drawchars.iterator(); i$.hasNext();) {
                MapleCharacter chr = (MapleCharacter) i$.next();
                int charType = chr.getTouzhuType();
                int charNum = chr.getTouzhuNum();
                int charZhuNX = chr.getTouzhuNX();

                chr.setTouzhuType(0);
                chr.setTouzhuNum(0);
                chr.setTouzhuNX(0);

                sumNX += charZhuNX;
                if (charType == 2) {
                    ++toucount2;
                    if (((this.zjNum > 3) && (charNum > 3)) || ((this.zjNum < 4) && (charNum < 4))) {
                        charZhuNX *= 2;
                        charZhuNX -= charZhuNX * 5 / 100;
                        chr.modifyCSPoints(1, charZhuNX);
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "??? \r\n????????????????????????????????????5%??????????????????:" + charZhuNX);
                        peiNX += charZhuNX;
                        zjNames6 = zjNames6 + chr.getName() + ":??????" + peiNX + "?????? ";
                        ++zhongcount2;
                        ++zjpeople;
                    } else {
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "???\r\n??????????????????????????????????????????");
                    }
                }
                if (charType == 3) {
                    ++toucount3;
                    if (((this.zjNum > 4) && (charNum > 4)) || ((this.zjNum > 2) && (this.zjNum < 5) && (charNum > 2) && (charNum < 5)) || ((this.zjNum < 3) && (charNum < 3))) {
                        charZhuNX *= 3;
                        charZhuNX -= charZhuNX * 5 / 100;
                        chr.modifyCSPoints(1, charZhuNX);
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "??? \r\n????????????????????????????????????5%??????????????????:" + charZhuNX);
                        peiNX += charZhuNX;
                        zjNames6 = zjNames6 + chr.getName() + ":??????" + peiNX + "?????? ";
                        ++zhongcount3;
                        ++zjpeople;
                    } else {
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "???\r\n??????????????????????????????????????????");
                    }
                }
                if (charType == 6) {
                    ++toucount6;
                    if (this.zjNum == charNum) {
                        charZhuNX *= 6;
                        charZhuNX -= charZhuNX * 5 / 100;
                        chr.modifyCSPoints(1, charZhuNX);
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "??? \r\n????????????????????????????????????5%??????????????????:" + charZhuNX);
                        peiNX += charZhuNX;
                        zjNames6 = zjNames6 + chr.getName() + ":??????" + peiNX + "?????? ";
                        ++zhongcount6;
                        ++zjpeople;
                    } else {
                        chr.dropMessage(1, "??????????????????" + this.zjNum + "???\r\n??????????????????????????????????????????");
                    }
                }
            }
            this.alltouzhu += sumNX;
            this.allpeichu += peiNX;
            this.characters.removeAll(drawchars);
        }
        int peoplecount = 0;
        if (drawchars != null) {
            peoplecount = drawchars.size();
        }

        getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(6, "????????????????????????????????????????????????????????????????????????????????????1???????????????"));
        getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(6, "[????????????]????????????:" + zjNames6 + zjNames3 + zjNames2 + " "));
    }

}
