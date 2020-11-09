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
    let commentIdCounter = 0;
    for (const post of posts) {
        commentIdCounter += post.comments.length
    }

    const getPosts = function () {
        return posts
    }
    const addPost = function (text) {
        postIdCounter++
        const newPost = { text, id: 'p' + postIdCounter, comments: [] }
        posts.push(newPost)
    }
    const removePost = function (id) {
        for (const i in posts) {
            if (posts[i].id == id) {
                posts.splice(i, 1)
            }
        }
    }

    const addComment = function (text, postId) {
        commentIdCounter++
        newComment = { id: 'c' + commentIdCounter, text }
        for (const i in posts) {
            if (posts[i].id == postId) {
                posts[i].comments.push(newComment)

            }
        }
    }

    const removeComment = function (postId, commentId) {
        for (const i in posts) {
            if (posts[i].id == postId) {
                for (const j in posts[i].comments) {
                    if (posts[i].comments[j].id == commentId) {
                        posts[i].comments.splice(j, 1)

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

const tweeter = Tweeter()
