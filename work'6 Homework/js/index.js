let users =  ['burger', 'chips', 'salate',  'potato'];
function user(){
    let Food = users.filter  (use => use !== 'burger' && use !== 'chips');
    let map = users.map(users =>{
        return `${users} burger is bad food`;
    });
    document.getElementById('result').innerHTML = Food;
    document.getElementById('result').innerHTML = map;
}
