const titleInputel = document.querySelector('#posttitle');
const bodyInputEl = document.querySelector('#posttext');
const submitInputEl = document.querySelector('#submit');
const commentInputEl = document.querySelector('#comment');

async function addNewPost() {
    if (titleInputel.value && bodyInputEl.value) {
        const res = await fetch("/api/posts", { method: "POST", body: JSON.stringify({ title: titleInputel.value, body: bodyInputEl.value }), headers: { 'Content-Type': 'application/json' } })
        console.log(res);
        location.replace('/dashboard');
    }

}
async function addNewComment() {
    // if (commentInputEl.value) {
    const res = await fetch("/api/comments", { method: "POST", body: JSON.stringify({ post_id: location.pathname().split('/post/')[1], body: bodyInputEl.value }), headers: { 'Content-Type': 'application/json' } })
    console.log(res);
    location.reload();
    // }

}
addNewComment();

submitInputEl.addEventListener("click", addNewPost);