import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/home.css"

function Homepage() {
  return (
    <>
      <section className="header mb-4">
        <div className="container">
          <div className='header-logo'>
            <img src='images/logo.png' className='img-fluid'></img>
            <p className='header-text text-white'>Presents</p>

          </div>

        </div>
      </section>
      <section className='cetification text-white text-light mb-4'>
        <div className="container">
          <h1 className='text-start'>Professional Onlinen Makeup Course</h1>
          <div className='d-flex'>
            <div className='box-1 d-flex align-items-center'>
              <img src='icons/certification.svg' className='img-fluid'></img>
              <p className='m-0'>Certification Programme</p>
            </div>
            <div className='box-2 d-flex align-items-center'>
              <img src='icons/star.svg' className='img-fluid'></img>
              <p className='m-0'>Rated 4.85/5</p>
            </div>
          </div>

          <div className='list'>
            <ul className=' list-unstyled d-flex flex-column gap-3'>
              <li>
                <div className='d-flex align-items-center gap-3'>
                  <img src='icons/listmarker.svg'></img>
                  <p className='m-0'>India’s No.1 Online Makeup Course</p>
                </div>

              </li>
              <li>
                <div className='d-flex align-items-center gap-3'>
                  <img src='icons/listmarker.svg'></img>
                  <p className='m-0'>Learn by LIVE Do-it-Together Classes</p>
                </div>

              </li>
              <li>
                <div className='d-flex align-items-center gap-3'>
                  <img src='icons/listmarker.svg'></img>
                  <p className='m-0'>Unlimited Practise Session to master skills</p>
                </div>

              </li>
            </ul>
          </div>
          <div className="form  bg-white ">
            <div className='form-heading'>
              <h4 className='m-0'>Fill the form below to enquire</h4>
            </div>
            <div className="row py-2 mx-1 rounded justify-content-center align-items-center">
              <div className="col-12">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>*Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Eg. Aneesha Mehra" />

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>*Enter your WhatsApp Number</Form.Label>
                    <div className='row'>
                      <div className="col-4">
                        <Form.Select aria-label="Default select example">
                          <option>+91</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>

                      </div>
                      <div className="col-8 ps-0">
                        <Form.Control type="password" placeholder="Password" />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>*Select your profession</Form.Label>
                    <Form.Select >
                      <option>Choose the most relevant option</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>*Select your goal</Form.Label>
                    <Form.Select >
                      <option>Choose the most relevant option</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>*Select your city</Form.Label>
                    <Form.Select >
                      <option>Choose the most relevant option</option>
                    </Form.Select>
                  </Form.Group>


                  <Button variant="primary" type="submit" className='w-100'>
                    Submit
                  </Button>
                </Form>



              </div>
            </div>
          </div>

        </div>


      </section>
      <section className="why-join-us position-relative">
        <div className="contaier">
        <div className='text-box position-relative text-white text-center'>
          <h2>Why Should You <br />
            Join Airblack?</h2>
            <img src="images/lefttoright.png" className='img-fluid leftimg'></img>
            <img src="images/righttoleft.png" className='img-fluid rightimg'></img>

        </div>

        </div>
      </section>


    </>
  )
}

export default Homepage