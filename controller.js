
const input = $('#input')
// get post from user and add to the Module 
const postIt = function () {
    tweeter.addPost(input.val())
    input.val('')

    render()
}

$('#postsContainer').on('click', ".commentIt", function () {
    const postID = $(this).closest(".post").data('id')
    const text = $(this).closest('.post').find('.inputComment').val()
    tweeter.addComment(text, postID)
    render()
})

$('#postsContainer').on('click', ".delete-comment", function () {
    const postID = $(this).closest(".post").data('id')
    const commentID = $(this).closest(".comment").data('id')
    tweeter.removeComment(postID, commentID)
    render()
})

$('#postsContainer').on('click', ".deletePost", function () {
    const postID = $(this).closest(".post").data('id')
    tweeter.removePost(postID)
    render()
})