const titleInputel = document.querySelector('#posttitle');
const bodyInputEl = document.querySelector('#posttext');
const submitInputEl = document.querySelector('#submit');

const addNewPost = async (event) => {
    event.preventDefault();
    if (titleInputel.value && bodyInputEl.value) {
        const res = await fetch("/api/posts", { method: "POST", body: JSON.stringify({ title: titleInputel.value, body: bodyInputEl.value }), headers: { 'Content-Type': 'application/json' } })
        console.log(res);
        location.replace('/dashboard');
    }

}
submitInputEl.addEventListener("click", addNewPost);