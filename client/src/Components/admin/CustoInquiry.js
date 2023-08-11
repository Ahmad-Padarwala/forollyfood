import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustoInquiry() {
    useEffect(() => {
        fetchInquiryData();
    }, [])
    const [getInquiry, setGetInquiry] = useState([]);
    const fetchInquiryData = () => {
        axios.get('/inquiry')
            .then((response) => {
                setGetInquiry(response.data);
            })
            .catch((error) => {
                console.log('Error fetching Brand data in Brand.js:', error);
            });
    }

    //DIALOGUE BOX
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (inquiry) => {
        setOpen(true);
        setSelectedCategory(inquiry);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //DELETE INQUIRY DATA
    const handleDelete = (deleteId) => {
        axios.delete(`/inquiry/${deleteId}`)
            .then(() => {
                fetchInquiryData();
                setOpen(false);
            })
            .catch((error) => {
                console.log(error + "in delete");
            });
    };

    // VIEW INQUIRY DATA
    const [viewInquiry, setViewInquiry] = useState([]);
    const viewInquiryData = (viewId) => {
        axios.get(`/inquiry/${viewId}`)
            .then((response) => {
                setViewInquiry(response.data[0]);
            })
            .catch((error) => {
                console.log('Error fetching Brand data in Brand.js:', error);
            });
    }
    console.log(viewInquiry)
    return (
        <>

            {/* VIEW DATA MODEL */}
            <div className="modal ade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form method="post">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">VIEW INQUIRY</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Name:</label>
                                    <p className='vew-data'>{viewInquiry.name}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Role:</label>
                                    <p className='vew-data'>{viewInquiry.role}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Company:</label>
                                    <p className='vew-data'>{viewInquiry.company}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Email:</label>
                                    <p className='vew-data'>{viewInquiry.email}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Number:</label>
                                    <p className='vew-data'>{viewInquiry.number}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Address:</label>
                                    <p className='vew-data'>{viewInquiry.address}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Country:</label>
                                    <p className='vew-data'>{viewInquiry.country}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer State:</label>
                                    <p className='vew-data'>{viewInquiry.state}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer City:</label>
                                    <p className='vew-data'>{viewInquiry.city}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Inquiry Type:</label>
                                    <p className='vew-data'>{viewInquiry.inquiryType}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Customer Message:</label>
                                    <p className='vew-data'>{viewInquiry.message}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
            <div className='cate-main'>
                <div className='cate-head-main'>
                    <h1 className='text-white'>CUSTOMER INQUIRY</h1>
                </div>
            </div>

            <table className="table brand-table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" width="25%">Id</th>
                        <th width="25%">Name</th>
                        <th width="25%">Email</th>
                        <th width="25%">Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getInquiry.map((inquiry) => {
                            return (
                                <tr key={inquiry.id} className='brand-row'>
                                    <th>
                                        <div className='d-flex'>
                                            {inquiry.id}
                                            <div className='ms-3'>
                                                <Button className='delete-brand-btn' onClick={() => handleClickOpen(inquiry)}>Delete</Button>
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
                                    <td data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { viewInquiryData(inquiry.id) }}>{inquiry.name}</td>
                                    <td>{inquiry.email}</td>
                                    <td>{inquiry.number}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
