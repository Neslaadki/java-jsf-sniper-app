package webapp.db;

import webapp.BeansCollection.PointBean;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
import java.util.List;

import static webapp.db.IdGenerator.getIdSet;
import static webapp.db.IdGenerator.setIdSet;

@Stateless
public class EJB_Connector {

    @PersistenceContext(unitName = "com.tuneit.namePU")
    private EntityManager entityManager;

    public boolean addEntity(double x, double y, double r, boolean hit){
        PointEntity pointEntity = new PointEntity();
        pointEntity.setId();
        //while (!entityManager.createQuery("select entity from PointEntity entity where id =" + pointEntity.getId()).getResultList().isEmpty()) pointEntity.setId();
        pointEntity.setX(x);
        pointEntity.setY(y);
        pointEntity.setR(r);
        pointEntity.setHit(hit);
        pointEntity.setDateCreation(new Date());
        entityManager.persist(pointEntity);
        return true;
    }

    public  List<PointBean>  updateList(){
        List<PointEntity> pointBeansId = entityManager.createQuery("select entity from PointEntity entity").getResultList();
        for (PointEntity points: pointBeansId) {
            getIdSet().add(Integer.valueOf(points.getId()));
        }
        return entityManager.createQuery("select entity from PointEntity entity").getResultList();
    }


    public boolean cleanTable(){
        return entityManager.createQuery("DELETE FROM PointEntity entity").executeUpdate() > 0;
    }
}
