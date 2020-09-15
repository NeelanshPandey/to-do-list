// To Add Tasks
document.getElementById("addTask").addEventListener("click", addTaskFunction);
// To Delete task from LS
function reply_click(ck) {
    localStorage.removeItem(ck);
    if (localStorage.length == 1) {
        localStorage.clear();
        window.location.reload(false);
    }
}
// when reloded shows current scenario
document.addEventListener("DOMContentLoaded", load);
// clean up
document.getElementById("cache").addEventListener("click", cleanup);
function cleanup(){
    localStorage.clear();
    window.location.reload(false);
}

function load(){
    if (localStorage.length==1){
        localStorage.clear();
        window.location.reload(false);
    }
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i)==='v')
            continue;
        let x = localStorage.getItem(localStorage.key(i));

        let addText = document.createElement("div");
        addText.classList.add("alert", "alert-info", "alert-dismissible", "fade", "show");
        addText.innerHTML = `
    ${x}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" id=${localStorage.key(i)} onClick="reply_click(this.id)">
                <span aria-hidden="true">&times;</span>
            </button>
    `;
        document.getElementById('con').appendChild(addText);
    }
}


function addTaskFunction() {
    let x = document.getElementById("myText").value;
    if(x==''){
        window.alert('No Task added');
        return;
    }
    //window.alert('No Task added');
    else{
    document.getElementById("myText").value='';

    let addText = document.createElement("div");
    addText.classList.add("alert" ,"alert-info" ,"alert-dismissible" ,"fade" ,"show");
        if (localStorage.getItem('v')===null){
            localStorage.setItem('v','0');
        }
    let c = parseInt(localStorage.getItem('v') , 10);
    if(c>Math.pow(10,15)*9){
        window.alert('PLEASE CLEAN UP CACHE');
        return;
    }
    addText.innerHTML=`
    ${x}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="${c}" onClick="reply_click(this.id)">
                <span aria-hidden="true">&times;</span>
            </button>
    `;
    c+=1;
    document.getElementById('con').appendChild(addText);
    let add_name=c.toString()-1;
    localStorage.setItem(add_name,x);
    localStorage.setItem('v', c.toString());
    }
}
