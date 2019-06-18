var newFormula = "";
var splitFormula = "";
var formulaToEdit = "";
var formula = "";
var currentTab = 0;
var i = 0;
var j = 0;
var lineLength = 0;
var longestLength = 0;
var boxSize = 0;
var finalFormula = "";

var formula = document.getElementsByClassName('formulaEditorText');

if ( formula.length > 0) {
    var formulaToEdit =  formula[0].value;
    var newFormula = formulaToEdit.replace(/IF /g, 'IF \n').replace(/ THEN /g, '\nTHEN \n').replace(/ ELSE /g, '\nELSE \n').replace(/ AND /g, '\nAND \n').replace(/ OR /g, '\nOR \n').replace(/ \+ /g, '\n+ \n').replace(/ \-/g, '\n- \n').replace(/ \* /g, '\n* \n').replace(/ \/ /g, '\n/ \n').replace(/ > /g, '\n> \n').replace(/ >= /g, '\n>= \n').replace(/ < /g, '\n< \n').replace(/ <= /g, '\n<= \n');
    var splitFormula = newFormula.split('\n');

    for (i=0; i < splitFormula.length; i++) {

    	var ifpatt = /IF /i;
    	var thenpatt = /THEN /i;
    	var elsepatt = /ELSE /i;

    	 if (splitFormula[i].match(ifpatt) && currentTab != 0) {
    		var currentTab = currentTab - 1;
    	}

    	if (splitFormula[i].match(thenpatt) && currentTab != 0) {
    		var currentTab = currentTab - 1;
    	}
    	
    	if (splitFormula[i].match(elsepatt) && currentTab != 0) {
    		if (splitFormula[i-2].match(elsepatt)) {
    			var currentTab = currentTab - 2;
    		}else {
    			var currentTab = currentTab - 1;
    		}
    	}

    	for (j=0; j < currentTab; j++){
    		splitFormula[i] = "    " + splitFormula[i];
    	}

    	if (splitFormula[i].match(ifpatt)) {
    		var currentTab = currentTab + 1;
    	}

    	if (splitFormula[i].match(thenpatt)) {
    		if (splitFormula[i+1].match(ifpatt)) {
    			var currentTab = currentTab + 2;
    		}else {
    			var currentTab = currentTab + 1;
    		}
    	}
    	
    	if (splitFormula[i].match(elsepatt)) {
    		if (splitFormula[i+1].match(ifpatt)) {
    			var currentTab = currentTab + 2;
    		}else {
    			var currentTab = currentTab + 1;
    		}
    	}

    	var lineLength = splitFormula[i].length;
    	if (lineLength > longestLength) {
    		var longestLength = lineLength;
    	}

    	var finalFormula = finalFormula + '\n' + splitFormula[i];
    }
    var boxSize = longestLength * 7 + "px";
    var boxOffset = (longestLength * 7) + 9 + "px";

    document.getElementsByClassName('formulaEditor dijitBorderContainerNoGutter-child dijitBorderContainerNoGutter-formulaEditor dijitBorderContainerNoGutterPane dijitAlignLeft')[0].style.width = boxSize;    
    document.getElementsByClassName('dijitBorderContainerNoGutter dijitContainer dijitBorderContainerNoGutter-child dijitBorderContainerNoGutter-dijitBorderContainerNoGutter dijitBorderContainerNoGutterPane dijitAlignCenter dijitLayoutContainer')[1].style.left = boxOffset;    
    document.getElementsByClassName('dijitSplitter dijitSplitterV dijitAlignLeft')[2].style.left = boxSize;
    document.getElementById('dijit__Container_0_splitter').click();
   // eventFire(document.getElementsByClassName('dijitSplitter dijitSplitterV dijitAlignLeft')[2], 'click');
    document.getElementsByClassName('formulaEditorText')[0].value = finalFormula;
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}