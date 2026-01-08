import { useEffect, useState, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import PageLayout from '../PageViews/PageLayout';
import PostOverview from './PostOverview';
import UpdateGridView from '../PageViews/UpdateGridView';
import UpdateListContext from '../Context/UpdateContext';

function PostDashboard() {
    const { user } = useAuth0();
    const { updateList, setUpdateList } = useContext(UpdateListContext);

    const [totalPosts, setTotalPosts] = useState(0);
    // const [tasksCompleted, setTasksCompleted] = useState(0);
    // const [tasksRemaining, setTasksRemaining] = useState(0);

    useEffect(() => {
        console.log("updated task list:  ", updateList);
        setTotalPosts(updateList.length);
        // setTasksCompleted(updateList.filter(update => update.isUpdateCompleted).length);
        // setTasksRemaining(updateList.filter(update => !update.isUpdateCompleted).length);
    }, [updateList]);

    const statsList = [
        {id: 0, statName: "Total Updates Posted [Count]", statValue: totalPosts},
        // {id: 1, statName: "Tasks Completed [Count]", statValue: tasksCompleted},
        // {id: 2, statName: "Tasks Remaining [Count]", statValue: tasksRemaining}
    ];

    return (
        <>
            <PageLayout>
                <PostOverview username={user?.name} statsList={statsList} />
                <UpdateGridView />
            </PageLayout>
        </>
    )
}

export default PostDashboard;
