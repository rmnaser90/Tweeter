
const input = $('#input')

// get post from user and add to the Module 
const postIt = function () {
    tweeter.addPost(input.val())
    input.val('')
    // console.log(tweeter.getPosts());
    render()
    }
    
    

    $('#postsContainer').on('click',".commentIt",function () {
        let postID = $(this).closest(".post").data('id')
        let text = $(this).closest('.post').find('.inputComment').val()
        $(this).closest('.post').find('.inputComment').val('')
        tweeter.addComment(text,postID)
         console.log(postID);
        console.log(tweeter.getPosts());
        render()
    })
    

    $('#postsContainer').on('click',".delete-comment",function () {
        let postID = $(this).closest(".post").data('id')
        let commentID = $(this).closest(".comment").data('id')
        tweeter.removeComment(postID,commentID)
     
        render()
    })

    $('#postsContainer').on('click',".deletePost",function () {
        let postID = $(this).closest(".post").data('id')
        
        tweeter.removePost(postID)
     
        render()
    })

