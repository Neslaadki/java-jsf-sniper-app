//package webapp.beansCollection;
//
//import javax.faces.application.FacesMessage;
//import javax.faces.component.UIComponent;
//import javax.faces.context.FacesContext;
//import javax.faces.validator.FacesValidator;
//import javax.faces.validator.Validator;
//import javax.faces.validator.ValidatorException;
//
//@FacesValidator("checkBoxValidator")
//public class CheckBoxValidator implements Validator {
//    @Override
//    public void validate(FacesContext facesContext, UIComponent uiComponent, Object o) throws ValidatorException {
//        if(o.toString().equals("998.0")) {
//            facesContext.addMessage("_form:r_value",new FacesMessage("Выберите радиус R"));
//        }
//        if(o.toString().equals("999.0")) {
//            facesContext.addMessage("_form:x_value",new FacesMessage("Выберите координату X"));
//        }
//    }
//}
