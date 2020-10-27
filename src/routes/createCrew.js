import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { TagInput } from 'reactjs-tag-input'
import { TextField, Slider, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab'
import Kakaomap from '../component/map/Kakaomap'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  forceRefresh: true
});
const location = history.location;
history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
})

// add province and gender
class Createcrew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [], value: new Date(), onChange: new Date(), ex: [],
      province: ["서울", "경기", "인천", "대전", "부산", "대구", "광주", "전주", "울산", "나주"],
      crewname: '',
      location: '',
      starttime: '',
      endtime: '',
      description: '',
      guestnum: 0,
      provinceid: '',
      exercises_idexercise: '',
      gender: '',
      age: '',
      materials: '',
      introduce: '',
      hashtag: '',
      uploadedImages: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getexList = async () => {
    const {
      data: { exercise }
    } = await axios.get("http://127.0.0.1:8000/exercise/")
    this.setState({ ex: exercise })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { crewname, location, starttime, endtime, description, guestnum, 
      provinceid, exercises_idexercise, gender, age, materials, introduce, hashtag, uploadedImages} = this.state
      const data = new FormData() 
      data.append('uploadedImages', uploadedImages)
      console.log(data)
      const crewinfo = {
      crewname, location, starttime, endtime, description, guestnum, province: provinceid,
      exercises_idexercise, gender, age, materials, introduce, hashtag, uploadedImages:data}
    // axios 
    axios.post('http://localhost:8000/crew/', crewinfo)
      .then(resp => {
        console.log(resp)
        // if (resp.data === 'success') {
        //   history.push("/");
        //   return resp.data;
        // } else {
        //   alert(resp.data);
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    // 데이터 로딩
    this.getexList()
  }

  render() {
    const { tags, value, onChange, ex, province } = this.state
    const classes = this.props;

    return (
      <div style={{ width: "70%", margin: "auto" }}>
        <Form style={{ display: "grid" }} onSubmit={this.handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="크루 이름"
              placeholder="크루 이름을 입력해주세요"
              variant="outlined"
              onChange={event => {
                const { value } = event.target;
                this.setState({ crewname: value });
              }}
            />
            <input type="file" name="FileName"
              onChange={(event) => {
                const { files } = event.target;
                console.log(event.target.value)
                console.log(files)
                this.setState({ uploadedImages: files });
              }} multiple/>
            <Autocomplete
              id="combo-box-demo"
              options={ex}
              getOptionLabel={(option) => option.type}
              renderInput={(params) => <TextField {...params} label="운동 종목" variant="outlined" />}
              onChange={(event, value) => {
                console.log(value.idexercise)
                this.setState({ exercises_idexercise: value.idexercise });
              }}
            />
            <Input type="select" name="select" id="exampleSelect"
              onChange={event => {
                const { selectedIndex } = event.target.options
                this.setState({ gender: selectedIndex });
                console.log(this.state.gender)
              }}>
              <option id="1">여성</option>
              <option id="2">남성</option>
              <option id="3">혼성</option>
            </Input>
            <Input type="select" name="select" id="exampleSelect"
              onChange={event => {
                const { selectedIndex } = event.target.options
                this.setState({ provinceid: selectedIndex });
                console.log(this.state.provinceid)
              }}>
              {province.map((data, i) => <option id={i}>{data}</option>)}
            </Input>
            <TextField
              required
              id="outlined-required"
              label="장소"
              placeholder="장소를 입력해주세요"
              variant="outlined"
              onChange={event => {
                const { value } = event.target
                this.setState({ location: value });
              }}
            />
            <TextField
              id="datetime-local"
              label="시작 시간"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => {
                const { value } = event.target
                this.setState({ starttime: value });
              }}
            />
            <TextField
              id="datetime-local"
              label="종료 시간"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => {
                const { value } = event.target
                this.setState({ endtime: value });
              }}
            />
          <TextField
            id="outlined-number"
            label="참여 인원"
            type="number"
            defaultValue="5"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={event => {
              const { value } = event.target
              this.setState({ guestnum: value });
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="크루 상세 정보"
            multiline
            rows={6}
            placeholder="크루 상세 설명을 적어주세요"
            variant="outlined"
            onChange={event => {
              const { value } = event.target
              this.setState({ description: value });
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="크루장 소개"
            multiline
            rows={6}
            placeholder="크루 상세 설명을 적어주세요"
            variant="outlined"
            onChange={event => {
              const { value } = event.target
              this.setState({ introduce: value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="준비물"
            placeholder="준비물을 입력해주세요"
            variant="outlined"
            onChange={event => {
              const { value } = event.target
              this.setState({ materials: value });
            }}
          />
          <Slider
            defaultValue={20}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={60}
            onChange={(event, val) => {
              // 여기 값 제대로 안뜸
              console.log(val)
              this.setState({ age: val }); // 나누기 10  - 1 ?
              console.log(this.state.age)
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="해쉬태그"
            placeholder="해쉬태그 입력해주세요"
            variant="outlined"
            onChange={event => {
              const { value } = event.target
              this.setState({ hashtag: value });
            }}
          />
          <input type="submit" value="Submit" />
        </Form>
      </div>
    )
  }
}

export default Createcrew