let popId=1

function spawnPopUI(){

let name=document.getElementById("spawnArea").value

if(!name) return

let area=AreaManager.get(name)

new Pop(popId++,area)

}

function createJobUI(){

let areaName=document.getElementById("jobArea").value
let jobName=document.getElementById("jobName").value
let skill=document.getElementById("jobSkill").value
let slots=parseInt(document.getElementById("jobSlots").value)

if(!areaName||!jobName) return

let area=AreaManager.get(areaName)

area.addJob(jobName,skill,slots)

}

function removeJobUI(){

let areaName=document.getElementById("removeArea").value
let jobName=document.getElementById("removeJob").value
let slots=parseInt(document.getElementById("removeSlots").value)

let area=AreaManager.get(areaName)

area.removeJob(jobName,slots)

}
