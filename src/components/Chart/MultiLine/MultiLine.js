import React from 'react'
import { Line } from 'react-chartjs-2'
import classes from './MultiLine.module.css'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Current Month',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
        },
        {
            label: 'Perviews Month',
            data: [1, 2, 1, 1, 2, 2],
            fill: true,
            backgroundColor: 'rgb(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnArea: false,
                },
            },
        ],
        maintainAspectRatio: true,
        responsive: true,
    },
}

const MultiLine = () => (
    <div className={classes.MultiLine}>
        <Line data={data} options={options} />
    </div>
)

export default MultiLine
