import React from 'react'
import {  useNavigate } from 'react-router-dom';
const PostDetail = () => {
    const navigate = useNavigate();
    return (

        <div className="mt-5 ">
            <div className="topnav d-flex ">
                <button className="btn btn-outline" onClick={() => {
                    navigate('/user');
                }}><i class="bi bi-arrow-left"></i> Geri Qayit</button>


            </div>
            <h2 className="text-center m-3">Name Surname</h2>
            <div className="post">
                <h5 className="text-center m-3">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis tristique, semper dui malesuada, consectetur ligula. Quisque felis turpis, molestie sed faucibus porttitor, vehicula a sem. Aliquam erat volutpat. Aliquam vitae risus finibus, iaculis lorem quis, pretium ante. Donec feugiat, orci non porta scelerisque, metus felis scelerisque enim, in sollicitudin diam purus id leo. Pellentesque congue, justo at dictum gravida, lacus libero porta mi, eget ultricies ligula mi in nunc. Nam odio lacus, malesuada non luctus eu, pretium vel nunc.

                    In imperdiet, lorem et hendrerit ullamcorper, risus urna scelerisque felis, vel pharetra est lacus quis lectus. Proin a nisl id justo laoreet maximus. Etiam ac posuere nisi. Curabitur sed turpis turpis. Aliquam imperdiet justo eget purus luctus, ac porta sem sollicitudin. Aliquam luctus dignissim ex non semper. Ut elementum sodales ipsum, volutpat tempor ante semper ut. Sed congue ipsum sed erat porttitor hendrerit. Aliquam eleifend nec lacus ut tempus. Nullam ullamcorper quis odio a rutrum.

                    Nunc accumsan mi ac eros finibus sodales. In eu ante at elit porta lacinia. Mauris accumsan feugiat augue ullamcorper elementum. Sed luctus ex a risus condimentum eleifend. Sed tellus massa, efficitur at dapibus ac, luctus quis odio. Nam et urna at nunc hendrerit consectetur. Fusce ac dapibus massa, et porta nibh. Aliquam congue augue quis enim sollicitudin condimentum. Sed lobortis sapien dui. Aenean sodales pretium cursus. Maecenas ante metus, congue pharetra nulla a, lobortis luctus enim. Curabitur molestie mi sem, nec tristique elit congue in. Nullam sed velit consequat, posuere ipsum finibus, ultricies velit.

                    Suspendisse ultricies velit at tincidunt mattis. Donec tristique nunc quam, eu faucibus odio vestibulum sed. Ut at metus tempor, euismod tellus at, venenatis ipsum. Pellentesque imperdiet sapien nec lorem sagittis congue. Ut aliquet iaculis lacus, vel pellentesque massa euismod a. Sed quis justo ut massa tempor tristique sit amet sed urna. Vestibulum tristique efficitur consequat. Morbi sed felis et est lacinia vulputate. Curabitur posuere feugiat neque non fermentum. Sed eget aliquam leo. Etiam sed eros odio.
                </p>
            </div>
            <div className="topnav d-flex ">
                <button className="btn btn-outline">
                    Show comments </button>
                <button className="btn btn-outline"
                 type="button"
                 data-bs-toggle="modal"
                 data-bs-target="#addcoment"
                 data-bs-whatever="@fat">
                    Add comments </button>
            </div>
            <div className="comments">
                <div className="comments_item">
                    <div className="d-flex justify-content-between">
                        <p>Name Add</p>
                        <a>Email</a>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis tristique, semper dui malesuada, consectetur ligula. Quisque felis turpis,
                    </p>
                </div>
            </div>

            <div class="modal fade" id="addcoment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Comment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Email:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
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

export default PostDetail
