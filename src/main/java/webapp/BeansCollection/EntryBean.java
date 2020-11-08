package webapp.BeansCollection;



import webapp.db.EJB_Connector;
import webapp.db.IdGenerator;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;


@SessionScoped
@ManagedBean(name = "entryBean")
public class EntryBean {
    private List<PointBean> dataList = new ArrayList<>();

    @Inject
    public PointBean bean;

    @EJB
    EJB_Connector connector;

    public void addToResultList(PointBean bean){
        this.dataList.add(dataList.size(), bean);
    }

    public PointBean selectFromResultBean(){
        return dataList.get(0);
    }

    public List<PointBean> getDataList() {
        setDataList(connector.updateList());
        return dataList;
    }

    public int getListSize(){
        return dataList.size();
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
