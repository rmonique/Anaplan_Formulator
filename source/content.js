//document.getElementsByClassName('formulaEditorText').addEventListener("click", chnageName);


//function chnageName() {
var  formula = document.getElementsByClassName('formulaEditorText');
if ( formula.length > 0) {
    var formulaToEdit =  formula[0].value;
    var newFormula = formulaToEdit.replace(/IF/g, ' \n IF \n ').replace(/THEN/g, ' \n THEN \n ').replace(/ELSE/g, ' \n ELSE \n ');
    document.getElementsByClassName('formulaEditorText')[0].value = newFormula;
    }
//}