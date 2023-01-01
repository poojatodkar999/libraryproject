import React from 'react'
import ReactApexChart from 'react-apexcharts';


const Columnchart = () => {
    const state = {
          
        series: [{
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
          color:"#20B9C4",
          
       
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
           
          },
          plotOptions: {
            bar: {
             
                   
            //   borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
              
            },

          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '11px',
              colors: ["#000"]
            }
          },
          
            column: {
                fill:{
                colors: ['#F44336', '#E91E63', '#9C27B0'],}
              }
          ,
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'bottom',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
       
      
      
      };
  return (
    <div id="chart">
  <ReactApexChart options={state.options} series={state.series} type="bar" height={240} />
</div>
  )
}

export default Columnchart