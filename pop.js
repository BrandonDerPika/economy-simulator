class Pop{

constructor(id,area){

this.id=id
this.area=area

this.state="unemployed"
this.jobSlot=null

this.skills=this.randomSkills()

this.createLog()

area.addPop(this)

this.log("Spawned.")

this.cycle()

}

randomSkills(){

return{

farming:Math.floor(Math.random()*4),
mining:Math.floor(Math.random()*4),
strength:Math.floor(Math.random()*4)

}

}

createLog(){

this.logElement=document.createElement("div")
this.logElement.className="pop-log"

this.logElement.innerHTML=`<b>Pop ${this.id}</b><br>`

}

log(msg){

let line=document.createElement("div")
line.innerText=msg
this.logElement.appendChild(line)
while(this.logElement.children.length > 3){
this.logElement.removeChild(this.logElement.children[1])
}

this.logElement.scrollTop = this.logElement.scrollHeight



}

async cycle(){

while(true){

switch(this.state){

case "unemployed":

await this.wait(2000)
this.searchJobs()
break

case "working":

await this.wait(3000)
this.levelSkill()
this.state="reevaluation"
break

case "reevaluation":

this.evaluateLeave()
break

}

}

}

searchJobs(){

let open=this.area.openJobs()

if(open.length===0){

this.log("No jobs available.")
return

}

let best=null
let bestScore=-1

for(let job of open){

let score=this.skills[job.requiredSkill]

if(score>bestScore){

bestScore=score
best=job

}

}

if(best){

best.worker=this
this.jobSlot=best

this.state="working"

this.log(`Took job ${best.name}`)

this.area.updateUI()

}

}

levelSkill(){

if(!this.jobSlot) return

let skill = this.jobSlot.requiredSkill

let current = this.skills[skill]

let chance = 0.25 / (1 + current * 0.4)

if(Math.random() < chance){

this.skills[skill]++

this.log(`${skill} skill increased to ${this.skills[skill]}`)

}

}

evaluateLeave(){

let openJobs=this.area.openJobs().length

let leaveChance=0.1

if(openJobs===0){

leaveChance=0.02

this.log("Few opportunities. Staying likely.")

}

if(Math.random()<leaveChance){

this.log(`Left job ${this.jobSlot.name}`)

this.jobSlot.worker=null
this.jobSlot=null
this.state="unemployed"

this.area.updateUI()

}else{

this.state="working"

}

}

wait(ms){

return new Promise(r=>setTimeout(r,ms))

}

}
