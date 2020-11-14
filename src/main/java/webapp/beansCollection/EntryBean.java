package webapp.beansCollection;



import webapp.db.EJB_Connector;
import webapp.db.IdGenerator;

import javax.ejb.EJB;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;




@ManagedBean(name = "entryBean")
@ApplicationScoped
public class EntryBean {
    private List<PointBean> dataList = new ArrayList<>();

    @Inject
    public PointBean bean;

    @EJB
    EJB_Connector connector;

    public List<PointBean> getDataList() {
        setDataList(connector.updateList());
        return dataList;
    }



    private void setDataList(List<PointBean> list){
        dataList = list;
    }

    public void cleanList(){
        if (!dataList.isEmpty()){
            if(connector.cleanTable()){
                IdGenerator.clear();
                dataList.clear();
            }
        }
    }
}
