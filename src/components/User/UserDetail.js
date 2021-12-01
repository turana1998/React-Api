import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';
const UserDetail = () => {
    const navigate = useNavigate();
    return (

        <div className="mt-5 ">
            <div className="topnav d-flex ">
                <button className="btn btn-outline" onClick={() => {
                    navigate('/');
                }}><i class="bi bi-arrow-left"></i> Geri Qayit</button>
                <h2>Name Surname</h2>
                <button
                    className="btn btn-outline rounded-circle"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addpost"
                    data-bs-whatever="@fat"
                ><i class="bi bi-plus-circle-dotted"></i></button>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button><i class="bi bi-trash-fill"></i></button>
                        <h5>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h5>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum doler</p>
                            <Link to="/postdetail"><button 
                            class="btn btn-outline-dark"
                            >Detail</button></Link>
                        </div>
                    </div>
                </div>
               

            </div>
            <div class="modal fade" id="addpost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Title:</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Body:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary m-2">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
