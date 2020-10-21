import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { TagInput } from 'reactjs-tag-input'
import { TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab'
import Kakaomap from '../component/map/Kakaomap'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
//   icon: {
//     verticalAlign: 'bottom',
//     height: 20,
//     width: 20,
//   },
//   details: {
//     alignItems: 'center',
//   },
//   column: {
//     flexBasis: '33.33%',
//   },
//   helper: {
//     borderLeft: `2px solid ${theme.palette.divider}`,
//     padding: theme.spacing(1, 2),
//   },
//   link: {
//     color: theme.palette.primary.main,
//     textDecoration: 'none',
//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },
// }))

class Createcrew extends Component {

  constructor(props) {
    super(props);
    this.state = { tags: [], value: new Date(), onChange: new Date(), ex: [] }
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
    const { tags, value, onChange, ex } = this.state
    const classes = this.props;
    // const classes = useStyles();

    return (
      <div>
        <Form>
          <form className={classes.container} noValidate>  
            <TextField
              required
              id="outlined-required"
              label="크루 이름"
              placeholder="크루 이름을 입력해주세요"
              variant="outlined"
            />
            {/* <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>위치 선택하기</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Kakaomap />
                </div>
              </AccordionDetails>
            </Accordion> */}
            {/* 태그형식으로 autocomplete, add tag */}
            <Autocomplete
              id="combo-box-demo"
              options={ex}
              getOptionLabel={(option) => option.type}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="운동 종목" variant="outlined" />}
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
          <TagInput tags={tags} onTagsChanged={this.onTagsChanged} />
        </Form>
      </div>
    )
  }
}

export default Createcrew