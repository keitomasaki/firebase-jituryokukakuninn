import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSelector } from "../reducks/user/selector";
import { eventDelete, eventChange } from "../reducks/user/operation";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import moment from "moment";

const ModalBody = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(stateSelector);
  const [data, setData] = useState({ title: "", start: 0, end: 0, id: 0 });
  const [startTime, setStartTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [classTime, setClassTime] = useState(40);
  const [endTime, setEndTime] = useState(0);
  const [title, setTitle] = useState("");

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
    console.log(title, endTime, startTime);
    dispatch(eventChange(title, endTime, startTime, props.id));
  };

  useEffect(() => {
    const test = state.classData.filter((item) => item.id === props.id);
    setData({
      title: test[0].title,
      start: test[0].start,
      end: test[0].end,
      id: test[0].id,
    });
  }, []);

  const classTimeValue = [40, 60, 80, 100, 120, 140];
  return (
    <div className="modalbody">
      <div className="info-box">
        <h3>
          title:<span className="font-color">{data.title}</span>
        </h3>
        <h3>
          start:<span className="font-color">{data.start}</span>
        </h3>
        <h3>
          end:<span className="font-color">{data.end}</span>
        </h3>
        <h3>
          id:<span className="font-color">{data.id}</span>
        </h3>
        <button onClick={() => dispatch(eventDelete(data.id))}>delete</button>
      </div>
      <div className="change-box">
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
          変更
        </Button>
      </div>
    </div>
  );
};

export default ModalBody;
