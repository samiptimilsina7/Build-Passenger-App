
// let lapcount=document.getElementById('count-el')
// function increment(){
//     console.log("The button was clicked")
//     lapcount=lapcount+1
//     console.log(lapcount)
// }

// increment()

let count=0
// let oldValue=0
// let olderValue=0


// camelcase
function increment(){
    count+=1
    console.log(count)
    document.getElementById('count-el').innerHTML=count
}

// function save(){
//     console.log(count)
//     document.getElementById('previous-entry').innerHTML="Previous entries: "+count+" - "+oldValue+" - "+olderValue
//     // document.getElementById('previous-entry1').innerHTML=count
//     // document.getElementById('previous-entry2').innerHTML=oldValue
//     // document.getElementById('previous-entry3').innerHTML=olderValue
//     olderValue=oldValue
//     oldValue=count
//     count=0
//     document.getElementById('count-el').innerHTML=count
// }

function save(){
    countStr=count+" - "
    console.log(countStr)
    document.getElementById('save-el').textContent+=countStr
    count=0
    document.getElementById('count-el').textContent=count
}

var myPoints=0
function add3points(){
    myPoints+=3
    console.log(myPoints)
}
function minuspoint(){
    myPoints-=1
    console.log(myPoints)
}
add3points();
add3points();
minuspoint();
add3points();
minuspoint();
add3points();
console.log(myPoints)

