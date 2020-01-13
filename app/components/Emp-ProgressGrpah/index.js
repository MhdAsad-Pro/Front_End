var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('../../assests/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import './graph.css';
class Graph extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: 'Employee Progress Graph',
      },
      axisX: {
        valueFormatString: 'MMM',
      },
      axisY: {
        title: 'KPIs',
        prefix: '',
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: '',
          xValueFormatString: '',
          type: 'spline',
          dataPoints: [
            { x: new Date(2017, 0), y: 1 },
            { x: new Date(2017, 1), y: 2 },
            { x: new Date(2017, 2), y: 2 },
            { x: new Date(2017, 3), y: 3 },
            { x: new Date(2017, 4), y: 5 },
            { x: new Date(2017, 5), y: 4 },
            { x: new Date(2017, 6), y: 2 },
            { x: new Date(2017, 7), y: 1 },
            { x: new Date(2017, 8), y: 2 },
            { x: new Date(2017, 9), y: 3 },
            { x: new Date(2017, 10), y: 5 },
            { x: new Date(2017, 11), y: 4 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Graph;
