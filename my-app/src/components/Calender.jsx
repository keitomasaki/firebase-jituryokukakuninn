import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSelector } from "../reducks/user/selector";
import { eventListFirbseSubmit } from "../reducks/user/operation";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { db } from "../firebase/index";
import { eventListMountedAction } from "../reducks/user/action";
import moment from "moment";
import "./style.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import ModalBody from "./ModalBody";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const state = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [startTime, setStartTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [classTime, setClassTime] = useState(40);
  const [endTime, setEndTime] = useState(0);
  const [title, setTitle] = useState("");
  const [data1, setData1] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // let state = {
  //   events: [
  //     {
  //       start: moment().toDate(),
  //       end: moment().add(1, "days").toDate(),
  //       title: "Some title",
  //     },
  //   ],
  // };

  const eventlist = state.classData.map((event) => ({
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
    id: event.id,
  }));

  const datapickerHandleChange = (e) => {
    const time = e.target.value;
    setStartTime(e.target.value);
    setStartTime((value) => {
      console.log(value);
      return value;
    });
    setEndTime(moment(time).add(classTime, "m").format("YYYY-MM-DDTHH:mm"));
    console.log(endTime);
  };

  const classTimeHandleChange = (e) => {
    setClassTime(e.target.value);
    setClassTime((value) => {
      console.log(value);
      return value;
    });
    setEndTime(
      moment(startTime).add(classTime, "m").format("YYYY-MM-DDTHH:mm")
    );
    console.log(classTime);
  };

  const titleHandleChange = (e) => {
    setTitle(e.target.value);
    setEndTime(
      moment(startTime).add(classTime, "m").format("YYYY-MM-DDTHH:mm")
    );
  };

  const clickAction = () => {
    console.log(endTime);
    dispatch(eventListFirbseSubmit(title, startTime, endTime));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  let testtitle = "";

  const testFunc = (event) => {
    setData1((kk) => event.id);
    console.log(event.id);
    setIsOpen(true);
  };

  useEffect(() => {
    db.collection("eventList")
      .get()
      .then((snapshot) => {
        const list = [];
        snapshot.forEach((snapshot) => {
          list.push(snapshot.data());
        });
        console.log(list);
        dispatch(eventListMountedAction(list));
      });
  }, []);

  // const day = moment().format("YYYY-MM-DDTHH:mm");
  const classTimeValue = [40, 60, 80, 100, 120, 140];
  return (
    <div className="App">
      <h3 className="font-color">calender</h3>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue={startTime}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={datapickerHandleChange}
      />
      <FormControl style={{ width: "100px" }}>
        <InputLabel>授業時間</InputLabel>
        <Select value={classTime} onChange={classTimeHandleChange}>
          {classTimeValue.map((classTimeValue) => (
            <MenuItem value={classTimeValue} key={classTimeValue}>
              {classTimeValue}分
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="名前"
        style={{ marginLeft: "10px" }}
        onChange={titleHandleChange}
      />
      <Button
        variant="outlined"
        style={{ marginLeft: "10px" }}
        onClick={clickAction}
      >
        決定
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <div>
          <ModalBody id={data1} />
        </div>
      </Modal>
      <Calendar
        className="calender-box"
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventlist}
        // onSelectEvent={() => setIsOpen(true)}
        onSelectEvent={testFunc}
        // style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Calender;
