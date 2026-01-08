import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';

import { Post } from '../Context/PostListContext';
import PostCard from '../Post/PostCard';
import PostListContext from '../Context/PostListContext';
import AddUpdate from '../Post/AddPost';
import UpdatePostDetail from '../Post/UpdatePostDetail';

function PostGridView() {
    const { postList } = useContext(PostListContext);
    const GRID_SIZE = 3;

    const updateGrid = [];
    for (let i = 0; i < postList.length; i+= GRID_SIZE) {
        updateGrid.push(postList.slice(i, i + GRID_SIZE))
    }

    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow() {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <>
            <Container style={{textAlign: "center",}}>
                <h2 style={{margin: "30px 0px 10px 0px", textTransform: "uppercase", textAlign: "center", color: "#35D7F6", fontWeight: "800"}}>PROJECT UPDATE LIST</h2>
                <Button variant="primary" id="addItem" size="lg" onClick={handleShow} style={{margin: "5px 0px"}}>
                    Add New Project Update
                </Button>              
                {updateGrid.map((rowItems: Post[], rowIndex: number) => (
                    <Row key={rowIndex} style={{margin: "20px 0px"}}>
                        {rowItems.map((post: Post, itemIndex: number) => (
                            <Col md={4}>
                                <PostCard 
                                    key={itemIndex}
                                    postTitle={post.postTitle}
                                    postDescription={post.postDescription}
                                    postCategory={post.postCategory}
                                    postLink={post.postLink}
                                />
                            </Col>

                        ))}
                    </Row>
                ))}  
            </Container>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body>
                    <AddUpdate />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PostGridView;
