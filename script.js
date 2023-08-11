const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

let comments = [];

commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name.trim() !== '' && comment.trim() !== '') {
        const newComment = { name, comment };
        comments.push(newComment);

        updateCommentsList();
        commentForm.reset();
    }
});

function updateCommentsList() {
    commentsList.innerHTML = '';

    comments.forEach(commentObj => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${commentObj.name}</strong>: ${commentObj.comment}`;
        commentsList.appendChild(li);
    });
}
