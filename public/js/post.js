const commentInputEl = document.querySelector('#postcomment');
const commentSubmitEl = document.querySelector('#submitcomment')


const addNewComment = async (event) => {
    event.preventDefault();
    const body = commentInputEl.value
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    if (commentInputEl.value) {
        const res = await fetch("/api/comments", {
            method: "POST", body: JSON.stringify({
                post_id, body
            }), headers: { 'Content-Type': 'application/json' }
        })
        console.log(res);
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
}



commentSubmitEl.addEventListener("click", addNewComment);

const deletePost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }



    document
        .querySelector('.post-form')
        .addEventListener('click', deletePost);

    // document
    //     .querySelector('#editpost')
    //     .addEventListener('click', editFunction);