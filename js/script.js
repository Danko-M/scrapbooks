/* 
Author: Danko Milutinovic
Desctiption: Script for Scrapbooks.io web application interface
Contact:  
				http://danko-m.github.io/ ,
				dankomilutinovic@gmail.com, 
				https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778         
*/

$(function() {
  // Scatter plot
  $('#highcharts01').highcharts({
    xAxis: {
      categories: ['#bluesky', '#trash', '#friendly', '#awesome', '#crowded', '#food', '#greatnight'],
      lineWidth: 0,
      tickLength: 0,
      labels: {
        enabled: false
      },
      title: {
        text: '#taipei',
        style: {
          fontWeight: 700,
          color: "#e78129",
          fontSize: "20px"
        }
      }
    },
    legend: {
      enabled: false
    },

    title: {
      text: null
    },
    subtitle: {
      text: null
    },

    yAxis: {
      labels: {
        enabled: false
      },
      gridLineWidth: null,
      align: 'top',
      title: {
        text: '#nightmarket',
        style: {
          fontWeight: 700,
          color: "#e78129",
          fontSize: "20px"
        }
      },
      font: 'bold 25px "Trebuchet MS", Verdana, sans-serif'
    },

    plotOptions: {
      series: {
        lineWidth: 0,
        name: 'Scatter plot'
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg'
      }
    },

    chart: {
      type: 'scatter',
      events: {
        load: function() {
          // show tooltip on 4th point
          var p = this.series[0].points[3];
          this.tooltip.refresh(p);
        }
      }
    },

    series: [{
      data: [20, 80, 25, 90, 50, 85, 35],
      color: '#E78129',

      marker: {
        radius: 10,
        states: {
          hover: {
            radius: 15
          }
        }
      }
    }]
  });


  // tags generator
  $('#tokenfield').tokenfield({
    tokens: ["#nightmarket"]
  });

  $('#tokenfield-02').tokenfield({
    tokens: ["#taipei"]
  });

  $(window).load(function() {
    $('#tokenfield, #tokenfield-02').each(function() {
      $(this).data('bs.tokenfield').update();
    });
  });


  // vector map
  var mapData = [{
    "hc-key": "tw-pt",
    "value": 0
  }, {
    "hc-key": "tw-tn",
    "value": 1
  }, {
    "hc-key": "tw-il",
    "value": 2
  }, {
    "hc-key": "tw-ch",
    "value": 3
  }, {
    "hc-key": "tw-tt",
    "value": 4
  }, {
    "hc-key": "tw-ph",
    "value": 5
  }, {
    "hc-key": "tw-km",
    "value": 6
  }, {
    "hc-key": "tw-lk",
    "value": 7
  }, {
    "hc-key": "tw-tw",
    "value": 8
  }, {
    "hc-key": "tw-cs",
    "value": 9
  }, {
    "hc-key": "tw-th",
    "value": 10
  }, {
    "hc-key": "tw-yl",
    "value": 11
  }, {
    "hc-key": "tw-kh",
    "value": 12
  }, {
    "hc-key": "tw-tp",
    "value": 13
  }, {
    "hc-key": "tw-hs",
    "value": 14
  }, {
    "hc-key": "tw-hh",
    "value": 15
  }, {
    "hc-key": "tw-cl",
    "value": 16
  }, {
    "hc-key": "tw-ml",
    "value": 17
  }, {
    "hc-key": "tw-ty",
    "value": 18
  }, {
    "hc-key": "tw-cg",
    "value": 19
  }, {
    "hc-key": "tw-hl",
    "value": 20
  }, {
    "hc-key": "tw-nt",
    "value": 21
  }];

  // Initiate the chart
  $('#vector-map').highcharts('Map', {

    title: {
      text: null
    },


    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    colorAxis: {
      enabled: false,
      min: 0,
      maxColor: '#e78129'
    },

    series: [{
      "showInLegend": false,
      data: mapData,
      mapData: Highcharts.maps['countries/tw/tw-all'],
      joinBy: 'hc-key',
      name: 'Random data',
      states: {
        hover: {
          color: '#e78129'
        }
      }
    }]
  });
  // spline chart 01
  $('#spline-chart01').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Facebook',
      color: '#E78129',
      data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });

  /* spline chart 02 */
  $('#spline-chart02').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Foursquare',
      color: '#E78129',
      data: [0.2, 0.8, 6.0, 5.0, 1, 1.3, 1.5, 2.9, 10.0, 9.0, 6.0, 7.5, 7.0, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 3.0, 4.0, 7.0, 3.0, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 5.0, 7.0, 6.5, 6.0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 9, 6, 4, 7, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });

  /* spline chart 03 */
  $('#spline-chart03').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Google Places',
      color: '#E78129',
      data: [4.2, 0.2, 0.8, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 6.0, 5.0, 1, 1.3, 1.5, 2.9, 10.0, 9.0, 6.0, 7.5, 7.0, 4.5, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 3.0, 4.0, 7.0, 3.0, 0, 0, 0.2, 0, 5.0, 7.0, 6.5, 6.0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 9, 6, 4, 7, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
  /* spline chart 04 */
  $('#spline-chart04').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Instagram',
      color: '#E78129',
      data: [4.2, 0.2, 0.8, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 6.0, 5.0, 1, 1.3, 1.5, 2.9, 10.0, 9.0, 6.0, 7.5, 7.0, 4.5, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 3.0, 4.0, 7.0, 3.0, 0, 0, 0.2, 0, 5.0, 7.0, 6.5, 6.0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 9, 6, 4, 7, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });

  // spline chart 05
  $('#spline-chart05').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Twitter',
      color: '#E78129',
      data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });

  /* spline chart 06 */
  $('#spline-chart06').highcharts({
    legend: {
      enabled: false
    },
    chart: {
      type: 'spline'
    },
    title: {
      text: null
    },

    xAxis: {
      lineWidth: 0,
      tickLength: 0,
      type: 'datetime',
      labels: {
        enabled: false
      },
      title: null
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null

    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
      }
    },
    series: [{
      name: 'Provider #6',
      color: '#E78129',
      data: [0.2, 0.8, 6.0, 5.0, 1, 1.3, 1.5, 2.9, 10.0, 9.0, 6.0, 7.5, 7.0, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
      name: 'Vik',
      color: '#e2e2e2',
      data: [0, 0, 3.0, 4.0, 7.0, 3.0, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 5.0, 7.0, 6.5, 6.0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 9, 6, 4, 7, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });



  /* donut chart 01 */

  Highcharts.setOptions({
    colors: ['#dddddd', '#09b8cb', '#fa4e1c', '#fe9f05', '#b1b1b1']
  });

  // Create the chart for completion
  var chart_completion = new Highcharts.Chart({
    chart: {
      renderTo: 'donut-chart01',
      type: 'pie',
      margin: [0, 0, 0, 0],
      height: 200,
      width: 200

    },
    plotOptions: {
      pie: {
        size: '100%',
        dataLabels: {
          enabled: false
        }
      }
    },
    title: {
      text: 'Average city',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '14px'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Amount',
      data: [
        ['Facebook', 20],
        ['Twitter', 15],
        ['Instagram', 25],
        ['Pinterest', 2],
        ['Youtube', 35]
      ],
      innerSize: '85%',
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
  });







  /* donut chart 02 */

  // Create the chart for completion
  var chart_completion = new Highcharts.Chart({
    chart: {
      renderTo: 'donut-chart02',
      type: 'pie',
      margin: [0, 0, 0, 0],
      height: 200,
      width: 200

    },
    plotOptions: {
      pie: {
        // slicedOffset: 20,
        size: '100%',
        dataLabels: {
          enabled: false
        },
        center: ["50%", "50%"]
      }
    },
    title: {
      text: 'Special city',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '14px'
      }

    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Amount',
      data: [
        ['First part', 40],
        ['Second part', 60]
      ],
      innerSize: '85%',
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }]
  });

  
});
