import React from "react";
import { MDBDataTable } from "mdbreact";

class DatatablePage extends React.Component {
    state = {
        columns: [
            {
                field: 'device_id',
                label: 'ID'
            },
            {
                field: 'device_status"',
                label: 'Status'
            },
            {
                field: 'device_floor',
                label: 'Floor'
            },
            {
                field: 'device_room',
                label: 'Room'
            },
            {
                field: 'device_smoke',
                label: 'Smoke Level'
            },
            {
                field: 'device_co2',
                label: 'Co2 Level'
            },
        ],
        rows: []
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        fetch("https://www.firealermmonitoring.baishost.com/status.php", {
            method: "GET",
        })
            .then(res => res.json())
            .then(json => {
                let rows = [];
                json.forEach(item => rows.push({

                    device_id: item.device_id,
                    device_status: item.device_status,
                    device_floor: item.device_floor,
                    device_room: item.device_room,
                    device_smoke: item.device_smoke,
                    device_co2: item.device_co2,

                }));

                console.log(rows);

                this.setState({ rows });
            })
            .catch(err => console.error(err));
    };

    render() {
        return (
            <>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={{ columns: this.state.columns, rows: this.state.rows }}
                />
            </>
        );
    }
}

export default DatatablePage;