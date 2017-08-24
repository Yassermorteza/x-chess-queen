(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){module.exports=function createMatrix(rowsCount,columnsCount){var matrix=[];for(var i=0;i<rowsCount;i++){matrix[i]=[];for(var x=0;x<columnsCount;x++){matrix[i].push(0)}}return matrix}},{}],2:[function(require,module,exports){module.exports={createMatrix:require("./create-matrix"),matrixFillColNum:require("./matrix-fill-col-num"),matrixFillRowNum:require("./matrix-fill-row-num"),matrixFillSequence:require("./matrix-fill-sequence"),matrixFillText:require("./matrix-fill-text"),matrixIncrement:require("./matrix-increment"),renderHtmlTable:require("./render-html-table"),renderPlainText:require("./render-plain-text"),renderTableDom:require("./render-table-dom")}},{"./create-matrix":1,"./matrix-fill-col-num":3,"./matrix-fill-row-num":4,"./matrix-fill-sequence":5,"./matrix-fill-text":6,"./matrix-increment":7,"./render-html-table":8,"./render-plain-text":9,"./render-table-dom":10}],3:[function(require,module,exports){module.exports=function matrixFillColNum(data){var matrixx=[];var counter=0;data.forEach(function(col,index){matrixx[index]=[];for(var i=0;i<data[index].length;i++){matrixx[index].push(counter+i)}});return matrixx}},{}],4:[function(require,module,exports){module.exports=function matrixFillRowNum(data){var matrixx=[];data.forEach(function(rows,index){matrixx[index]=[];for(var i=0;i<data[index].length;i++){matrixx[index].push(index)}});return matrixx}},{}],5:[function(require,module,exports){module.exports=function matrixFillsequence(data){var newmatrixx=[];var counter=0;for(var rownum=0;rownum<data.length;rownum++){newmatrixx[rownum]=[];var columnscount=data[rownum].length;for(var i=0;i<columnscount;i++){newmatrixx[rownum].push(counter);counter++}}return newmatrixx}},{}],6:[function(require,module,exports){module.exports=function matrixFillText(data){var text="abcdefghijklmnopqrstuvwxyz";var strToArr=text.split("");var newmatrixx=[];counter=0;data.forEach(function(txt,index){newmatrixx[index]=[];for(var i=0;i<data[index].length;i++){newmatrixx[index].push(strToArr[counter]);counter++}});return newmatrixx}},{}],7:[function(require,module,exports){module.exports=function matrixIncrement(data){var newmatrixx=[];var counter=0;data.forEach(function(increment,index){newmatrixx[index]=[];for(var i=0;i<data[index].length;i++){counter++;newmatrixx[index].push(counter)}});return newmatrixx}},{}],8:[function(require,module,exports){module.exports=function renderHTMLTable(matrix){var text="";matrix.forEach(function(el){text+="<tr>";for(var i=0;i<el.length;i++){text+="<td>"+el[i]+"</td>"}text+="</tr>"});return text}},{}],9:[function(require,module,exports){module.exports=function renderPlainText(data){var rows=[];data.forEach(function(columns){var row="";row=columns.join("")+"<br>";rows.push(row)});var result=rows.join("\n");return result}},{}],10:[function(require,module,exports){module.exports=function renderTabelDom(element,data){data.forEach(function(columns,index){var row=document.createElement("tr");for(var i=0;i<data[index].length;i++){var col=document.createElement("td");col.appendChild(document.createTextNode(data[index][i]));row.appendChild(col)}element.appendChild(row)})}},{}],11:[function(require,module,exports){var arrayMatrixLibrary=require("array-matrix");var createMatrix=arrayMatrixLibrary.createMatrix;var matrix=createMatrix(8,8);var table=document.querySelector("table");var bolean=true;matrix.forEach(function(row,index1){var tr=document.createElement("tr");row.forEach(function(col,index2){var td=document.createElement("td");function event(x,y){td.addEventListener("click",function(){cellClicked(x,y)})}event(index1,index2);if(bolean){td.classList.add("black");console.log(bolean)}else{td.classList.add("white")}bolean=!bolean;tr.appendChild(td)});bolean=!bolean;table.appendChild(tr)});function cellClicked(rowNum,columnNum){removeHighlightAndSymbol();highlightRow(rowNum);hightlightColumnAddSymbol(rowNum,columnNum);highlightDiagonals(rowNum,columnNum)}var tr=document.getElementsByTagName("tr");function highlightRow(rowNum){tdNode=tr[rowNum].childNodes;for(var i=0;i<8;i++){tdNode[i].classList.add("highlight")}}function hightlightColumnAddSymbol(rowNum,columnNum){tdNode=tr[rowNum].childNodes;for(var i=0;i<8;i++){tdNode=tr[i].childNodes;for(var j=0;j<8;j++){tdNode[columnNum].classList.add("highlight")}}var addSymbol=tr[rowNum].getElementsByTagName("td");var tdBlack=addSymbol[columnNum].classList.contains("black");addSymbol[columnNum].innerHTML="<p>&#9813;</p>";if(tdBlack){addSymbol[columnNum].innerHTML='<p class="white">&#9813;</p>'}}function removeHighlightAndSymbol(){var highlightClass=document.querySelectorAll("td");highlightClass.forEach(function(el,index){var highlight=highlightClass[index].getAttribute("class");if(highlight){highlightClass[index].classList.remove("highlight");highlightClass[index].textContent=""}})}function highlightDiagonals(rowNum,columnNum){for(var i=0;i<8;i++){var rowLimit=rowNum+i;if(rowLimit<=7){var tdNodeDown=tr[rowNum+i].childNodes;if(tdNodeDown[columnNum+i]){tdNodeDown[columnNum+i].classList.add("highlight")}if(tdNodeDown[columnNum-i]){tdNodeDown[columnNum-i].classList.add("highlight")}}else{for(i=0;i<8;i++){rowLimit=rowNum-i;if(rowLimit>=0){var tdNodeUp=tr[rowNum-i].childNodes;if(tdNodeUp[columnNum-i]){tdNodeUp[columnNum-i].classList.add("highlight")}if(tdNodeUp[columnNum+i]){tdNodeUp[columnNum+i].classList.add("highlight")}}}}}}},{"array-matrix":2}]},{},[11]);