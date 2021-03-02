import React from 'react'

const MainTable = () => {
    return (
        <div className="container">
            <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total Value</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Current Value</th>
                        <th scope="col">Benefit/Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>ETH</td>
                        <td>11 Jun 2010</td>
                        <td>2</td>
                        <td>10</td>
                        <td>200</td>
                        <td>3</td>
                        <td>300</td>
                        <td>300</td>
                        <td>300</td>
                        </tr>
                    </tbody>
                </table>         
        </div>
    )
}

export default MainTable
