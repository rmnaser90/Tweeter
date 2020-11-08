const postsContainer= $('#postsContainer')

const render = function () {
    postsContainer.empty()
let updatedPosts= tweeter.getPosts()

for (const post of updatedPosts) {

 let newComments=``
    for (const comment of post.comments) {
        

newComments=` 

<div class="comment" data-id='${comment.id}'>
                        <div class="delete-comment">X</div>
                        <p class="comment-text">${comment.text}</p>

                    </div>

`+newComments
    }
    console.log(newComments);

    let newPost=$(`
    
    <div class="post"  data-id="${post.id}">
    <div class="deletePost">X</div>
                <p class="post-text">${post.text}</p>

                <div class="commentsContainer">
                    ${newComments}
                    <input type="text" placeholder="Leave a comment" class="inputComment">
                    <button class="commentIt" >Comment</button>


                </div>

            </div>

    
    
    
    
    `)
    postsContainer.prepend(newPost)
   









}

}


render()





















