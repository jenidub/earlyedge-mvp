import { useEffect, useState, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import PageLayout from '../PageViews/PageLayout';
import PostOverview from './PostOverview';
import PostGridView from '../PageViews/PostGridView';
import PostListContext from '../Context/PostListContext';

function PostDashboard() {
    const { user } = useAuth0();
    const { postList, setPostList } = useContext(PostListContext);
    const [ totalPosts, setTotalPosts ] = useState(0);

    useEffect(() => {
        setTotalPosts(postList.length);
    }, [postList]);

    const statsList = [
        {id: 0, statName: "Total Updates Posted [Count]", statValue: totalPosts},
    ];

    return (
        <>
            <PageLayout>
                <PostOverview username={user?.name} statsList={statsList} />
                <PostGridView />
            </PageLayout>
        </>
    )
}

export default PostDashboard;
