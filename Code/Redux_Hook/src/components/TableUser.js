import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = (props) => {
    
    // const [listUsers, setListUsers] = useState([]);

    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     // console.log(">>> check response axios, ", res);
    //     // console.log("\t>>> check data axios, ", res.data);

    //     setListUsers((res && res.data) ? res.data : []);
    // }

    // useEffect(() => {
    //     fetchAllUser();
    // }, []);

    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.user.listUsers);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    const handleDeleteUser = (user) => {
        console.log(user);
    }

    return  (
        <Container>
            <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        listUsers.map((user, index) => (
                            <tr key={`users-${index}`}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteUser(user)}    
                                    >Delete</button>
                                    {/* <button className="btn btn-danger">Delete</button> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}


export default TableUser;