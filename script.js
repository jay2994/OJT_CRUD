<script>

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('users/');



function save_user(){ 

var user_name = document.getElementById('user_name').value;
var uid = firebase.database().ref().child('users').push().key; 

var data = {
    user_id: uid,
    user_name: user_name
}
    var updates = {};
    updates ['/users/' + uid] = data;
    firebase.database().ref().update(updates);

    alert('The user is created  successfully!');
    reload_page();
}


function update_user(){
    
    var user_name = document.getElementById('user_name').value;
    var user_id = document.getElementById('user_id').value;
    

    //alert(user_id);

    var data = {
        user_id: user_id,
        user_name: user_name
    }
    var updates = {};
    updates ['/users/' + uid] = data;
    firebase.database().ref().update(updates);

    alert('The user is updated  successfully!');
    reload_page();
}
function delete_user(){
    var user_id = document.getElementById('user_id').value;
    firebase.database().ref().child('/users/' + user_id).remove();

    alert('The user is deleted successfully!' + user_id);

    reload_page();
}
function reload_page(){
    window.loaction.reload();

}
</script>