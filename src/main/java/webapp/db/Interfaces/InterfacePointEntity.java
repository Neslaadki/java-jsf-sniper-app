package webapp.db.Interfaces;

import java.util.Date;

public interface InterfacePointEntity {
    void setId();
    String getId();
    double getX();
    double getY();
    double getR();
    void setX(double x);
    void setY(double y);
    void setR(double r);
    void setDateCreation(Date dateCreation);
    Date getDateCreation();
    boolean isHit();
    void setHit(boolean hit);
}
