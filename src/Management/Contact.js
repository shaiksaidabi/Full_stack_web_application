import React from 'react'
import contactBanner from "./assets/contact.jpg"
function Contact() {
    return (
        <section>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                        <img src={contactBanner} className='image' />
                    </div>
                    <div className='col-md-4'>
                    </div>

                </div>

            </div>
            <div className="container p-5  ">

                <form className='contact-form' >
                    <h3 >Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6 p-1">
                            <div className="form-group p-1">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group p-1">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                            </div>
                            <div className="form-group p-1">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
                            </div>
                            <div className="form-group p-1 text-center">
                                <button type="submit" name="btnSubmit" className="btn btn-primary" p-1 >Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="text" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact