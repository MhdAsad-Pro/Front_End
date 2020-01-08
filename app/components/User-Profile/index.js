import React from 'react';
import './Profile.css'
import { Form, Button } from 'react-bootstrap'

export default function UserProfile() {

    return (
        <div className="MainDiv">

            <div className='row'>
                <div className='col-md-12'>
                    <h1>User Profile</h1>
                    <div className="Card.Subtitle">Employee name:Designation</div>
                    <div className="card">
                        <div className="card-header">
                            <h4 >Edit Profile</h4>
                            <p>Complete your profile</p>
                        </div>
                        <div className="card-body">
                            <div>


                                <form >
                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="text" name="name" class="formStyle" placeholder="First Name*" required />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" name="email" class="formStyle" placeholder="Last Name" required />
                                        </div>
                                        <br />
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="integer" name="CNIC" class="formStyle" placeholder="CNIC*" required />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" name="email" class="formStyle" placeholder="Gender" required />
                                        </div>
                                        <br />
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="email" name="name" class="formStyle" placeholder="Email* " required />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" name="email" class="formStyle" placeholder="Contact no" required />
                                        </div>
                                        <br />
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="text" name="name" class="formStyle" placeholder="Department" required />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" name="email" class="formStyle" placeholder="Team" required />
                                        </div>
                                    </Form.Row>
                                    <Form.Row>

                                        <div class="col-12">
                                            <input type="text" name="name" class="formStyle" placeholder="Address" required />
                                        </div>
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="text" name="name" class="formStyle" placeholder="Current Password*" required />
                                        </div>
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="text" name="name" class="formStyle" placeholder="New password*" required />
                                        </div>
                                    </Form.Row>

                                    <Form.Row>
                                        <div class="col-6">
                                            <input type="text" name="name" class="formStyle" placeholder="Rewrite new password*" required />
                                        </div>
                                    </Form.Row>

                                </form>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="wrapper">
                                Upload Picture
        </div>
                            <div class="file">
                                <div class="col-md-2 col-form-label">

                                    <input type="file" class="text-center center-block file-upload" />

                                </div>

                            </div>
                        </div>
                        <br />
                        <div class="button">
                            <div class="col-md-12">
                                <Button variant="primary" >
                                    Update Profile
    </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}