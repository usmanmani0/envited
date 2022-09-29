import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import DateTimePicker from "react-datetime-picker";

const CreateEvent = () => {
  const [validated, setValidated] = useState(false);
  const [valueStart, onChangeStart] = useState(new Date());
  const [valueEnd, onChangeEnd] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);

  const [informationEvent, setInformationEvent] = useState({
    eventName: "",
    hostName: "",
    startDateTime: valueStart ? valueStart : "",
    endDateTiem: valueEnd ? valueEnd : "",
    location: "",
    imageUser: selectedImage ? selectedImage : "",
  });

  const handleEventName = (e) => {
    setInformationEvent({ ...informationEvent, eventName: e.target.value });
  };
  const handleHostName = (e) => {
    setInformationEvent({ ...informationEvent, hostName: e.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    // setInformationEvent({ ...informationEvent });
  };

  console.log("valuesEvent", informationEvent);
  return (
    <>
      <div className="create_event_main_container">
        <div className="create_event_main_erapper">
          <div className="create_event_title_wrapper">
            <h1 className="create_event_title_text">
              Create <span className="create_event_snapchat_text">Event </span>
              Form
            </h1>
          </div>
          <div className="create_event_paragraph_wrapper">
            <p className="create_event_paragraph_text">
              Kindly fill the form to create an event
            </p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Event name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Event name"
                  defaultValue="Mark"
                  onChange={(e) => handleEventName(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Host name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Host name"
                  defaultValue="Otto"
                  onChange={(e) => handleHostName(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Location"
                  defaultValue="sydney"
                  onChange={(e) =>
                    setInformationEvent({
                      ...informationEvent,
                      location: e.target.value,
                    })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Start Date/Time</Form.Label>
                <DateTimePicker onChange={onChangeStart} value={valueStart} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>End Date/Time</Form.Label>
                <DateTimePicker onChange={onChangeEnd} value={valueEnd} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <input
              className="file_upload_wrapper"
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <Button
              type="submit"
              className="create_event_submit_button_wrapper"
            >
              <Link
                className="create_event_submit_button_wrapper_text_link"
                to="/event"
              >
                Submit form
              </Link>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
