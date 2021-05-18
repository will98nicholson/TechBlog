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

// method: "POST", body: JSON.stringify({ post_id: location.pathname().split('/post/')[1], body: commentInputEl.value