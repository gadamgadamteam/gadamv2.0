import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { TagInput } from 'reactjs-tag-input'
import { TextField, Slider, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab'
import Kakaomap from '../component/map/Kakaomap'

// add province and gender
class Createcrew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [], value: new Date(), onChange: new Date(), ex: [],
      province: ["서울", "경기", "인천", "대전", "부산", "대구", "광주", "전주", "울산", "나주"]
    }
    this.onTagsChanged = this.onTagsChanged.bind(this);
    // const [value, onChange] = useState([new Date(), new Date()]);
  }

  getexList = async () => {
    const {
      data: { exercise }
    } = await axios.get("http://127.0.0.1:8000/exercise/")
    this.setState({ ex: exercise })
    // axios.get("http://127.0.0.1:8000/exercise/")
  }

  onTagsChanged(tags) {
    this.setState({ tags })
    console.log(tags)
  }

  componentDidMount() {
    // 데이터 로딩
    this.getexList()
  }

  render() {
    const { tags, value, onChange, ex, province } = this.state
    const classes = this.props;
    // const classes = useStyles();

    return (
      <div style={{ width: "70%", margin: "auto" }}>
        <Form style={{display:"grid"}}>
          <form className={classes.container} noValidate>
            <TextField
              required
              id="outlined-required"
              label="크루 이름"
              placeholder="크루 이름을 입력해주세요"
              variant="outlined"
            />
            <input type="file" name="FileName" multiple />
            <Autocomplete
              id="combo-box-demo"
              options={ex}
              getOptionLabel={(option) => option.type}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="운동 종목" variant="outlined" />}
            />
            <Input type="select" name="select" id="exampleSelect">
              <option>여성</option>
              <option>남성</option>
              <option>혼성</option>
            </Input>
            <Input type="select" name="select" id="exampleSelect">
              {province.map((data, i) => <option id={i}>{data}</option>)}
            </Input>
            <TextField
              required
              id="outlined-required"
              label="장소"
              placeholder="장소를 입력해주세요"
              variant="outlined"
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
            />
          </form>
          <TextField
            id="outlined-number"
            label="참여 인원"
            type="number"
            defaultValue="5"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="크루 상세 정보"
            multiline
            rows={6}
            placeholder="크루 상세 설명을 적어주세요"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="크루장 소개"
            multiline
            rows={6}
            placeholder="크루 상세 설명을 적어주세요"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="준비물"
            placeholder="준비물을 입력해주세요"
            variant="outlined"
          />
          <Slider
            defaultValue={20}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={60}
          />
          <TextField
            required
            id="outlined-required"
            label="해쉬태그"
            placeholder="해쉬태그 입력해주세요"
            variant="outlined"
          />
          <Button>생성하기</Button>
        </Form>
      </div>
    )
  }
}

export default Createcrew