/* Get the Index corresponding to the post clicked */
function getPostIndex(id) {
    var i;

    for (i=0;i<5;i++) {
        if (posts[i].id == id)
            return i;
    }
    return i;
}
/* Dump the details of the clicked post */
function postDump() {
    var id = localStorage.getItem("postid");
    var index = getPostIndex(id);

    if (index > 4)
        return;

    console.log(posts[index].author);
    document.getElementById("ftitle").value = posts[index].title;
    document.getElementById("fauthor").value = posts[index].author;
    document.getElementById("fcontent").value = posts[index].content;
    console.log(id);
}
function toggleEditable(edit) {
    var value;
    var template;
    var index;
    var id = localStorage.getItem("postid");

    if (edit == 1) {
        /* Enable Edit Option */
        document.getElementById("ftitle").style.pointerEvents = "all";
        document.getElementById("fcontent").style.pointerEvents = "all";
        value = document.getElementById("fauthor").value;
        /* Change from 'Edit' to 'Save' */
        template = "<input type='text' class = 'post-form post-form-author' id= 'fauthor' name='author'>";
        template += "<span id = 'save-id' class='btn-edit-save' aria-hidden='true' title='Save' onclick=toggleEditable(0)>Save  <i class='fa fa-floppy-o' aria-hidden='true'></i></span>";
        document.getElementById("save-id").innerHTML = template;
        document.getElementById("fauthor").value = value;
    } else {
        /* Disable Edit Option */
        document.getElementById("ftitle").style.pointerEvents = "none";
        document.getElementById("fcontent").style.pointerEvents = "none";
        value = document.getElementById("fauthor").value;
        /* Change from 'Edit' to 'Save' */
        template = "<input type='text' class = 'post-form post-form-author' id= 'fauthor' name='author'>";
        template += "<span id = 'save-id' class='btn-edit-save' aria-hidden='true' title='Edit' onclick=toggleEditable(1)>Edit  <i class='fa fa-pencil-square-o' aria-hidden='true'></i></span>";
        document.getElementById("save-id").innerHTML = template;
        document.getElementById("fauthor").value = value;
        index = getPostIndex(id);
        
        if (index > 4)
        return;

        /* Save the updated data back to posts */
        posts[index].title = document.getElementById("ftitle").value;
        posts[index].content = document.getElementById("fcontent").value;
    }

}