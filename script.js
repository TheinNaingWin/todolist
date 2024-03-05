document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').
    value.length==0){
        alert("Enter fucking tasks")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `

        <div class="t1">
        <span id="taskname">
        $(
            document.querySelector('#newtask input').value
        )
        </span>
        </div>
        `;
    }
}