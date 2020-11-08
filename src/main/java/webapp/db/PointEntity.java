package webapp.db;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PointEntity {

    @Id
    private String id;
    private double x;
    private double y;
    private double r;
    private boolean hit;

    public PointEntity(){
        setId();
    }


    public void setId() {
        this.id = ((Integer)IdGenerator.generate()).toString();
    }

    public String getId() {
        return id;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }
}
