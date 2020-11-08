package webapp.db;


import webapp.db.Interfaces.InterfacePointEntity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class PointEntity implements InterfacePointEntity {

    @Id
    private String id;
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private Date dateCreation;

    public PointEntity(){
        setId();
    }

    @Override
    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    @Override
    public void setId() {
        this.id = ((Integer)IdGenerator.generate()).toString();
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public double getX() {
        return x;
    }

    @Override
    public void setX(double x) {
        this.x = x;
    }

    @Override
    public double getY() {
        return y;
    }

    @Override
    public void setY(double y) {
        this.y = y;
    }

    @Override
    public double getR() {
        return r;
    }

    @Override
    public void setR(double r) {
        this.r = r;
    }

    @Override
    public boolean isHit() {
        return hit;
    }

    @Override
    public void setHit(boolean hit) {
        this.hit = hit;
    }

    @Override
    public Date getDateCreation() {
        return dateCreation;
    }
}
