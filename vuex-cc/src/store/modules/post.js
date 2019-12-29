export default{
    actions: {
        async fetchPosts(ctx, limit = 3){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)

            const posts = await res.json()
            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, value){
            state.posts = value
        },
        createPost(state, post){
            state.posts.push(post)
        }
    },
    state: {
        posts: []
    },
    getters:{
        allposts(state){
            return state.posts;
        },
        postsCount(state){
            return state.posts.length
        },
        validPosts(state){
            return state.posts.filter( p => {
                return p.title && p.body
            })
        }
    },
}