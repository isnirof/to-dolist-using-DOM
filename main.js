var add = document.getElementById("btnAdd")
add.addEventListener("click", onClickBtnAdd)
var number = 1

function onClickBtnAdd() {
    var input = document.getElementById("form-input").value
    var tbody = document.getElementById("to-do")
    var tr = document.createElement("tr")

    var tdNo = document.createElement("td")
    var tdToDo = document.createElement("td")
    var tdOnProgress = document.createElement("td")
    var tdDone = document.createElement("td")
    var tdStatus = document.createElement("td")

    var btnToDo = document.createElement("button")
    var btnOnProgress = document.createElement("button")
    var btnDone = document.createElement("button")

    btnToDo.setAttribute("class", "btn btn-primary")
    btnOnProgress.setAttribute("class", "btn btn-warning")
    btnDone.setAttribute("class", "btn btn-success")

    btnOnProgress.addEventListener("click", getBtnOnProgress)

    function getBtnOnProgress() {
        tdOnProgress.innerText=input
        tdToDo.innerText=''
        tdDone.innerText=''
    }

    btnToDo.addEventListener("click", getBtnToDo) 

    function getBtnToDo() {
        tdOnProgress.innerText=''
        tdToDo.innerText=input
        tdDone.innerText=''
    }

    btnDone.addEventListener("click", getBtnDone)

    function getBtnDone() {
        tdOnProgress.innerText=''
        tdToDo.innerText=''
        tdDone.innerText=input
    }

    btnToDo.innerText = "To-Do"
    btnOnProgress.innerText = "On-Progress"
    btnDone.innerText = "Done"

    tdNo.innerText = number++
    tdToDo.innerText = input

    tbody.append(tr)
    tr.appendChild(tdNo)
    tr.appendChild(tdToDo)
    tr.appendChild(tdOnProgress)
    tr.appendChild(tdDone)
    tr.appendChild(tdStatus)
    tdStatus.appendChild(btnToDo)
    tdStatus.appendChild(btnOnProgress)
    tdStatus.appendChild(btnDone)
    // console.log(table)
}

