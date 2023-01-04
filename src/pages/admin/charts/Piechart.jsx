import React from 'react'
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';


const Piechart = () => {
    const state = {
          
        series: [44, 55, 13],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['In progress', 'Completed', 'Yet to begin'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
  return (
    <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
  </div>
  )
}

export default Piechart