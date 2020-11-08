package webapp.db;

import webapp.BeansCollection.PointBean;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class EJB_Connector {

    @PersistenceContext(unitName = "com.tuneit.namePU")
    private EntityManager entityManager;

    public boolean addEntity(double x, double y, double r, boolean hit){
        PointEntity pointEntity = new PointEntity();
        pointEntity.setX(x);
        pointEntity.setY(y);
        pointEntity.setR(r);
        pointEntity.setHit(hit);
        entityManager.persist(pointEntity);
        return true;
    }

    public List<PointBean> updateList(){
        return entityManager.createQuery("select entity from PointEntity entity").getResultList();
    }

    public boolean cleanTable(){
        if(entityManager.createQuery("DELETE FROM PointEntity entity").executeUpdate() > 0) return true;
        else return false;
    }




}
