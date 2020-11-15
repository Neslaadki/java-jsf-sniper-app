//package webapp.beansCollection;
//
//import javax.faces.application.FacesMessage;
//import javax.faces.component.UIComponent;
//import javax.faces.context.FacesContext;
//import javax.faces.validator.FacesValidator;
//import javax.faces.validator.Validator;
//import javax.faces.validator.ValidatorException;
//
//@FacesValidator("inputValidator")
//public class InputValidator implements Validator {
//    @Override
//    public void validate(FacesContext facesContext, UIComponent uiComponent, Object o) throws ValidatorException {
//        try{
//            String value = o.toString();
//            System.out.println(value);
////            value = value.replace(',','.');
//            new Double(value);
//            if (Double.parseDouble(value) < -3 || Double.parseDouble(value) > 5) {
//                System.out.println("s");
//                facesContext.addMessage("_form:y_value", new FacesMessage("Значение координаты Y должно принадлежать диапазону [-3;5]!"));
//            }
//        }catch (NumberFormatException e){
//            System.out.println("a");
//            facesContext.addMessage("_form:y_value", new FacesMessage("Введено некорректное значение Y"));
//        }
//    }
//}
