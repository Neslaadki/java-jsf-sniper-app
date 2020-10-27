package webapp;

import javax.faces.bean.SessionScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.util.Stack;

@SessionScoped
@Named
public class TestBean {


    private Stack<RequestBean> stack = new Stack<>();

    @Inject
    public RequestBean bean;

    public void addToResultList(RequestBean bean){
        stack.push(bean);
    }

    public RequestBean selectFromResultBean(){
        return stack.pop();
    }

    public Stack<RequestBean> getStack() {
        return stack;
    }


}
