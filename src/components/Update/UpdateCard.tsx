import { useContext, useState } from 'react';
import { Card, Form, Modal } from "react-bootstrap";

import { Update } from '../Context/UpdateContext';
import UpdateDetail from './UpdateDetail';
import UpdateListContext from '../Context/UpdateContext';

function UpdateCard(props: any) {
    const { updateList, setUpdateList } = useContext(UpdateListContext);

    const { id, updateTitle, updateDueDate, updateDescription, isUpdateCompleted } = props;
    const [ isChecked, setIsChecked ] = useState(isUpdateCompleted);
    const [ show, setShow ] = useState(false);

    function handleShow() {
        setShow(true);
    }

    function handleDelete() {
        setUpdateList(updateList.filter((update) => update.updateTitle != updateTitle));
    }

    function handleClose() {
        setShow(false);
    }

    const handleCheck = () => {
        // console.log("checkbox clicked!");
        const updatedUpdateList: Update[] = updateList;
        // console.log("initial list: ", updatedUpdateList);
        const selectedUpdate: Update = updateList.filter((update: Update) => update.updateTitle === updateTitle)[0];
        const selectedUpdateIndex: number = updateList.findIndex((update: Update) => update.updateTitle === updateTitle);
        // console.log("selectedTask info:  ", selectedUpdate, selectedUpdateIndex);
        selectedUpdate.isUpdateCompleted = !isChecked;
        updatedUpdateList[selectedUpdateIndex] = selectedUpdate;
        // console.log("updated list: ", updatedUpdateList);
        setUpdateList([...updatedUpdateList]);
    }

    return (
        <div>
            <Card style={{width: "90%", margin: "5px", padding: "5px", border: "2px solid black",}}>
                <Card.Body>
                    <p><em>{updateDueDate}</em></p>
                    <h3>{updateTitle}</h3>
                    <p>{updateDescription}</p>
                    <p><a onClick={handleShow}>Click Here to View/Edit Update</a></p>
                    <p><a onClick={handleDelete}>Click Here to Delete Update</a></p>
                    <div>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                id={`default-checkbox-${id}`}
                                checked={isUpdateCompleted}
                                onChange={handleCheck}
                                style={{display: "flex", justifyContent: "center"}}
                                label="Update Completed?"
                            />
                        </Form>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Body style={{marginTop: "90px",}}>
                    <UpdateDetail
                        // updateList={updateList}
                        // setUpdateList={setUpdateList}
                        handleClose={handleClose}
                        updateTitle={updateTitle} 
                        updateDueDate={updateDueDate}  
                        updateDescription={updateDescription} 
                        isUpdateCompleted={isUpdateCompleted}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UpdateCard;
