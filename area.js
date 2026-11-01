class Area{

constructor(name){

this.name=name
this.jobs=[]
this.pops=[]

this.createUI()

}

createUI(){

this.element=document.createElement("div")
this.element.className="area"

this.summary=document.createElement("div")
this.summary.className="summary"

this.jobPanel=document.createElement("div")
this.jobPanel.className="jobs"

this.popContainer=document.createElement("div")

this.element.appendChild(document.createElement("h2")).innerText=this.name
this.element.appendChild(this.summary)
this.element.appendChild(this.jobPanel)
this.element.appendChild(this.popContainer)

document.getElementById("areas").appendChild(this.element)

this.updateUI()

}

updateUI(){

let employed=this.pops.filter(p=>p.jobSlot).length
let unemployed=this.pops.length-employed

this.summary.innerText=
`Population: ${this.pops.length} | Employed: ${employed} | Unemployed: ${unemployed}`

let jobCounts={}

this.jobs.forEach(j=>{

if(!jobCounts[j.name]){
jobCounts[j.name]={total:0,filled:0}
}

jobCounts[j.name].total++

if(j.worker) jobCounts[j.name].filled++

})

this.jobPanel.innerHTML="<b>Jobs</b><br>"

for(let j in jobCounts){

let data=jobCounts[j]

this.jobPanel.innerHTML+=
`${j}: ${data.filled}/${data.total}<br>`

}

}

addPop(pop){

this.pops.push(pop)
this.popContainer.appendChild(pop.logElement)

this.updateUI()

}

addJob(name,skill,slots){

for(let i=0;i<slots;i++){

this.jobs.push(new JobSlot(name,skill))

}

this.updateUI()

}

removeJob(name,slots){

let removed=0

for(let i=this.jobs.length-1;i>=0;i--){

let j=this.jobs[i]

if(j.name===name){

if(j.worker){

j.worker.jobSlot=null
j.worker.state="unemployed"
j.worker.log("Lost job due to job removal.")

}

this.jobs.splice(i,1)

removed++

if(removed>=slots) break

}

}

this.updateUI()

}

openJobs(){

return this.jobs.filter(j=>j.isOpen())

}

}
