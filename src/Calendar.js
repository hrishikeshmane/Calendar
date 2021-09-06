import React from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month, Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './data.json';
import * as appointmentData from './appointments.json';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RequestApproval from './RequestApproval';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        width: 900,
        padding: theme.spacing(2, 4, 3),
    },
}));

function Calendar() {
    let data = extend([], dataSource.zooEventsData, null, true);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <div className="screen">
            <div className="header">
                <h3>Calendar</h3>
                <button onClick={handleOpen}>Request Approval</button>
                <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <RequestApproval appts={appointmentData.appointments}/>
                        </div>
                    </Fade>
                </Modal>
                <span className="bubble">
                    {appointmentData.appointments.length}
                </span>
            </div>

            <ScheduleComponent
                currentView="Week"
                height='92vh'
                selectedDate={new Date(2021, 8, 5)}
                eventSettings={{ dataSource: data }}
                
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar
