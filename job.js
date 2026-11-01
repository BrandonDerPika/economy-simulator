class JobSlot{

constructor(name,skill){

this.name=name
this.requiredSkill=skill
this.worker=null

}

isOpen(){
return this.worker===null
}

}
