import { createContext }  from "react";

export interface Post {
    postTitle: string;
    postDescription: string;
    postCategory: string,
    postLink?: string;
}

interface PostListContextType {
    postList: Post[]
    setPostList: (postList: Post[]) => void;
}

const PostListContext = createContext<PostListContextType>({
    postList: [],
    setPostList: () => {}
})

export default PostListContext;
