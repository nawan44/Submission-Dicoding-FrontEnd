import React from 'react'
import CovidService from './service'

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            dataCovid: []

        }
    }

    loadData = async () => {
        const dataAPI = await CovidService.summary();

        this.setState({
            dataCovid: dataAPI.Countries
        });

        console.log(this.state.dataCovid)


    }

    componentDidMount() {
        this.loadData();
    }


    render() {
        return (
            <div>
                <h3>Data Covid19</h3>

                <table className="table table-bordered table-hover table-striped dataTable">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>CountryCode</th>
                            <th>Date</th>
                            <th>NewConfirmed</th>
                            <th>NewDeaths</th>
                            <th>NewRecovered</th>
                            <th>Slug</th>
                            <th>TotalConfirmed</th>
                            <th>TotalDeaths</th>
                            <th>TotalRecovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataCovid.map(data => {
                                return (
                                    <tr>
                                        <td>{data.Country}</td>
                                        <td>{data.CountryCode}</td>
                                        <td>{data.Date}</td>
                                        <td>{data.NewConfirmed}</td>
                                        <td>{data.NewDeaths}</td>
                                        <td>{data.NewRecovered}</td>
                                        <td>{data.Slug}</td>
                                        <td>{data.TotalConfirmed}</td>
                                        <td>{data.TotalDeaths}</td>
                                        <td>{data.TotalRecovered}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Index