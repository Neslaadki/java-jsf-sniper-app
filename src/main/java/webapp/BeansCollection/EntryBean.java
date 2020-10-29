package webapp.BeansCollection;

import webapp.RequestBean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@SessionScoped
@ManagedBean(name = "entryBean")
public class EntryBean {
    private final List<RequestBean> dataList = new ArrayList<>();

    @Inject
    public RequestBean bean;

    public void addToResultList(RequestBean bean){
        this.dataList.add(dataList.size(), bean);
    }

    public RequestBean selectFromResultBean(){
        return dataList.get(0);
    }

    public List<RequestBean> getDataList() {
        return dataList;
    }
}
