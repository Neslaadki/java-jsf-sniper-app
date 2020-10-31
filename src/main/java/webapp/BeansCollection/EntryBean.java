package webapp.BeansCollection;



import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;


@SessionScoped
@ManagedBean(name = "entryBean")
public class EntryBean {
    private final List<EntityBean> dataList = new ArrayList<>();

    @Inject
    public EntityBean bean;

    public void addToResultList(EntityBean bean){
        this.dataList.add(dataList.size(), bean);
    }

    public EntityBean selectFromResultBean(){
        return dataList.get(0);
    }

    public List<EntityBean> getDataList() {
        return dataList;
    }

    public int getListSize(){
        return dataList.size();
    }

}
