import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Slider, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function valuetext(value) {
    return `${value}°C`;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h4>크루 구성원 성별</h4>
            <Button variant="outlined" color="primary">남성</Button>
            <Button variant="outlined" color="primary">여성</Button>
            <Button variant="outlined" color="primary">혼성</Button>
            <h4>연령대</h4>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={60}
            />
            <Button onClick={handleClose} variant="outlined" color="secondary">
                취소
            </Button>
            <Button onClick={handleClose} variant="outlined">
                선택완료    
            </Button>
        </div>
    );

    return (
        <div style={{float:"right"}}>
            <FilterListIcon fontSize="large" onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
