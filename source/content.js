// content.js
var formula = document.getElementsByClassName('formulaEditorText');
console.log("Old UX");
console.log(formula.length);
if (formula.length > 0) {
    var formulaToEdit = formula[0].value;
    var newFormula = formulaToEdit.replace(/IF /g, 'IF \n\n').replace(/ THEN /g, '\n\nTHEN \n\n').replace(/ ELSE /g, '\n\nELSE \n\n')
    document.getElementsByClassName('formulaEditorText')[0].value = newFormula;
} else {
    var formula = document.getElementsByClassName('formula-editor__text-area');
    console.log("New UX");
	console.log(formula.length);
	if (formula.length > 0) {
        var formulaToEdit = formula[0].value;
        var newFormula = formulaToEdit.replace(/IF /g, 'IF \n\n').replace(/ THEN /g, '\n\nTHEN \n\n').replace(/ ELSE /g, '\n\nELSE \n\n')
        document.getElementsByClassName('formula-editor__text-area')[0].value = newFormula;
    }
}
