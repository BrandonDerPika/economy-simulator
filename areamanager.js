const AreaManager={

areas:{},

get(name){

if(!this.areas[name]){

this.areas[name]=new Area(name)

}

return this.areas[name]

}

}
