package webapp;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;


@ManagedBean(name = "requestBean")
@SessionScoped
public class RequestBean implements Serializable {

    private double x;
    private double y;
    private double r;
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

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isHit() {
        return x > 10 && y > 10 && r > 10;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

}