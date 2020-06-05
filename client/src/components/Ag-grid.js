import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css'; 
import axios from 'axios';
import 'ag-grid-enterprise';

class Aggrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            columnDefs : [
                {headerName: 'Mandal', field: 'mandal', rowGroup: true},
                {headerName: 'UDISE Code', field: 'udisecode'},
                {headerName: 'SchoolName', field: 'schoolname'},
                {headerName: 'Teacher', field: 'teachername'},
                {headerName: 'Year', field: 'yojs', rowGroup: true}
            ],
            rowData : null
            // rowData: [
            //     {make: 'Toyota', model: 'celisa', price: 50000},
            //     {make: 'Nexa', model: 'Balino', price: 35000},
            //     {make: 'Suzuki', model: 'xamtra', price: 70000},
            //     {make: 'Tata', model: 'juma', price: 60000}
            // ]
        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/teachers')
            .then(res=>{
                this.setState({rowData: res.data})
            })
            .catch(error=>console.log(error))

    }



    render() {

        

        return (
            <div>
            <div 
            className="ag-theme-balham container-fluid mt-3"
            style={{width: '80%', height: 750}}
            >
                <AgGridReact 
                columnDefs = {this.state.columnDefs}
                rowData = {this.state.rowData}
                enableSorting
                enableFilter
                rowSelection='multiple'
                groupMultiAutoColumn
                
                />
                
            </div>
            {/* <div className="container mt-4">
                <AgChartsReact options={options} />
            </div> */}
            </div>
        )
    }
}

export default Aggrid;
