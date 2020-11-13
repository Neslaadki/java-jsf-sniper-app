package webapp.BeansCollection;

import webapp.db.EJB_Connector;

import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.*;


@ManagedBean(name = "pointBean")
@SessionScoped
public class PointBean implements Serializable {

    private double x;
    private double y;
    private double r;
    private boolean hit = false;
    private Date dateCreation;



    // поле времени выполнения
    private boolean add_isSuccess;

    @EJB
    private EJB_Connector connector;

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


    public boolean getHit() {
        if ((x >= 0) && (y <= 0)) this.hit = y / 2 - x >= -r / 2;
        else if ((x >= 0) && (y >= 0)) this.hit = false;
        else if ((x <= 0) && (y >= 0)) this.hit = x * x + y * y <= r * r;
        else if ((x <= 0) && (y <= 0)) this.hit = (x >= -r) && (y >= -r);
        else this.hit=false;
        return hit;
    }

    public void isHit(boolean hit) {
        this.hit = hit;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void addToDB() {
        add_isSuccess = connector.addEntity(x, y, r, getHit());
    }






}
