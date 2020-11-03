const Tweeter = function () {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


    let postIdCounter = posts.length
    let commentIdCounter=0;
    for (const post of posts) {
        commentIdCounter += post.comments.length
    }
    console.log(postIdCounter);
    console.log(commentIdCounter);

    const getPosts = function () {
        return posts
    }
    const addPost = function (text) {
        postIdCounter++
        let newPost = {text, id: 'p'+ postIdCounter,comments:[] }
        posts.push(newPost)
        
    }
    const removePost = function (id) {

        for (const i in posts) {
            if (posts[i].id==id) {
                posts.splice(i,1)
                
            }
        }
        
    }

    const addComment = function (text,postId) {
        commentIdCounter++
        newComment={id: 'c'+commentIdCounter, text}
        for (const i in posts) {
            if (posts[i].id==postId) {
                posts[i].comments.push(newComment)
                
            }
        }

        
    }

    const removeComment= function(postId,commentId){
for (const i in posts) {
    if (posts[i].id==postId) {
        for (const j in posts[i].comments) {
            if (posts[i].comments[j].id==commentId) {
                posts[i].comments.splice(j,1)
                
            }
        }
        
    }
}


    }

return {
addPost,
getPosts,
removePost,
addComment,
removeComment

}
}

// const tweeter = Tweeter()
// tweeter.addPost("hello")
// console.log(tweeter.getPosts());

// tweeter.removePost('p1')
// tweeter.addPost("hi")
// tweeter.addComment('p4','good to see you')
// tweeter.removeComment('p2','c6')
// console.log(tweeter.getPosts());

const tweeter = Tweeter()
// console.log(tweeter.getPosts())

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
// This should be added to the posts array:
// {text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}