import React from 'react';
import { useQuery } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import salersService from '../services/salers.service';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

function Home(props) {

    const [currentSalerId, setCurrentSalerId] = useState(0);
    const [currentSaler , setCurrentSaler] = useState({});
    const [Salers, setSalers] = useState([]);
    const [Events, setEvents] = useState([]);

    const { isLoading, error, data } = useQuery('fetchSalers', salersService.getSalers().then(
        response => {
            setSalers(response.data);
        }
    ))

    const queryClient = useQueryClient();
    const { mutate, isLoadingFormutate } = useMutation(salersService.createMeeting, {
        onSuccess: data => {
          console.log(data);
          const message = "success"
          alert(message)
        },
        onError: () => {
          alert("there was an error")
        },
        onSettled: () => {
            console.log(data);
          queryClient.invalidateQueries('create');
        }
      });

    function SelectSaler(e, id) {
        document.querySelectorAll(".list-group-item").forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.toggle("active");

        setCurrentSalerId(id);
        // fetch Select Saler
        salersService.getSaler(id).then(
            response => {
                let meetings = response.data.meetings;
                let contact = response.data.nom;
                let meetingsShow = []
                meetings.forEach(meet => {
                    let newmeet = {};
                    newmeet.title = 'Rdv : ' + contact;
                    newmeet.start = meet.DateStart;
                    newmeet.end = meet.DateEnd;
                    meetingsShow = [...meetingsShow, newmeet];
                })
                setEvents(meetingsShow);
                setCurrentSaler(response.data);
            })


    }

    function handleSubmit(e){
        
        let data = {};
        let Fdata = new FormData(document.querySelector('#rdv'));
        data.Saler = "/api/salers/" + currentSalerId;
        
        let d1 = new Date(Fdata.get('DateStart'));
        let d2 = new Date(Fdata.get('DateEnd'));

        data.DateStart = Fdata.get('DateStart');
        data.DateEnd = Fdata.get('DateEnd');

        let testDate = false;
        currentSaler.meetings.forEach(meet => {
            let meetd1 = new Date(meet.DateStart);
            let meetd2 = new Date(meet.DateEnd);
            let test1 = (meetd1.getTime() <= d1.getTime()) && (d1.getTime() <= meetd2.getTime());
            let test2 = (meetd1.getTime() <= d2.getTime()) && (d2.getTime() <= meetd2.getTime());
            if (test1 || test2)
             testDate = true;
        })
        if(testDate)
        {
            alert("On ne peut pas prendre de RDV");
        }else{
            mutate(data);
        }
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col col-lg-2">
                    <div className="row">
                        <ul className="list-group">
                            {
                                Salers.map(element => {
                                    return (
                                        <li id={element.id} class="list-group-item" onClick={(e) => { SelectSaler(e, element.id) }}>{element.nom}{element.prenom}</li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="row">
                        <form  id= "rdv" onSubmit = {(e) => {handleSubmit(e)}}>
                            <div class="form-group">
                                <label for="DateStart">Date Début</label>
                                <input type="datetime-local" class="form-control" id="DateStart" name="DateStart" placeholder="Date debut" />
                            </div>
                            <div class="form-group">
                                <label for="DateEnd">Date fin</label>
                                <input type="datetime-local" class="form-control" id="DateEnd" name="DateEnd" placeholder="Date fin" />
                            </div>
                            <button type="submit" class="btn btn-primary">Ajouter un RDV</button>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        }}
                        events={Events}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;