import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactAdmin() {

    //DIALOGUE BOX
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (contact) => {
        setOpen(true);
        setSelectedCategory(contact);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getContactData();
    }, [])
    const [getContact, setGetContact] = useState([]);
    const getContactData = () => {
        axios.get('/contact')
            .then((response) => {
                setGetContact(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Brand data in Brand.js:', error);
            });
    }

    //DELETE CONTACT DATA
    const handleDelete = (deleteId) => {
        axios.delete(`/contact/${deleteId}`)
            .then(() => {
                getContactData();
                setOpen(false);
            })
            .catch((error) => {
                console.log(error + "in delete");
            });
    };
    return (
        <>
            <div className='cate-main'>
                <div className='cate-head-main'>
                    <h1 className='text-white'>CUSTOMER CONTACT</h1>
                </div>
            </div>

            <table className="table brand-table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" width="16.6%">Id</th>
                        <th width="16.6%">Name</th>
                        <th width="16.6%">Password</th>
                        <th width="16.6%">Email</th>
                        <th width="16.6%">Subject</th>
                        <th width="16.6%">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getContact.map((contact) => {
                            return (
                                <tr key={contact.id} className='brand-row'>
                                    <th>
                                        <div className='d-flex'>
                                            {contact.id}
                                            <div className='ms-3'>
                                                <Button className='delete-brand-btn' onClick={() => handleClickOpen(contact)}>Delete</Button>
                                                <Dialog open={open}
                                                    onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                                                    <DialogTitle id="alert-dialog-title">
                                                        {"Do You Want To Delete this data?"}
                                                    </DialogTitle>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>Cancel</Button>
                                                        <Button onClick={() => { handleDelete(selectedCategory.id) }} autoFocus>Delete</Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </th>
                                    <td>{contact.name}</td>
                                    <td>{contact.password}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.message}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
