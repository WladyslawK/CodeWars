Array.prototype.sameStructureAs = function (other) {

if(other.length !== this.length) return false
for(let i = 0; i < this.length; i++){

    if(typeof this[i] === 'object'){

        if(this[i].length !== other[i].length) return false

        let check = this[i].sameStructureAs(other[i])
        if(!check) return false
    }else if(typeof this[i] !== 'object' && typeof other[i] === 'object') return false
}
return true
   
};
console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ))