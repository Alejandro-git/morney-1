let id: number = parseInt(window.localStorage.getItem('_idMax')|| '0') || 0;

function createId(){
    id++
    window.localStorage.setItem('_idMax', id.toString())
    // 储存ID到localStorage
    return id
}

export default createId