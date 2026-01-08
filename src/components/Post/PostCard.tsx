import { useContext, useState } from 'react';
import { Card, Modal, Badge } from "react-bootstrap";

import UpdateDetail from './UpdatePostDetail';
import PostListContext from '../Context/PostListContext';
import UpdatePostDetail from './UpdatePostDetail';

function PostCard(props: any) {
    const { postList, setPostList } = useContext(PostListContext);

    const { postTitle, postDescription, postCategory, postLink } = props;
    const [ show, setShow ] = useState(false);

    function handleShow() {
        setShow(true);
    }

    function handleDelete() {
        setPostList(postList.filter((post) => post.postTitle != postTitle));
    }

    function handleClose() {
        setShow(false);
    }

    return (
        <div>
            <Card style={{width: "90%", margin: "5px", padding: "5px", border: "2px solid black",}}>
                <Card.Body>
                    <h6>
                        <Badge pill bg="info">{postCategory}</Badge>
                    </h6>
                    <h3>{postTitle}</h3>
                    <p>{postDescription}</p>
                    <p><a href={postLink ? postLink : "/#"} target="_blank">Click Here to View Link</a></p>
                    <p><a onClick={handleShow}>Click Here to View/Edit Post</a></p>
                    <p><a onClick={handleDelete}>Click Here to Delete Post</a></p>
                </Card.Body>
            </Card>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body style={{marginTop: "90px",}}>
                    <UpdatePostDetail
                        handleClose={handleClose}
                        postTitle={postTitle} 
                        postDescription={postDescription}
                        postCategory={postCategory}
                        postLink={postLink}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PostCard;
