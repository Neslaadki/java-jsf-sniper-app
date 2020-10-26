package webapp;

import javax.faces.bean.ManagedBean;
import javax.inject.Named;


@ManagedBean(name = "resultBean")
public class ResultManagedBean {

    private double x = 23;
    private double y;
    private double z;
    private boolean hit;

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

    public double getZ() {
        return z;
    }

    public void setZ(double z) {
        this.z = z;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }
}
