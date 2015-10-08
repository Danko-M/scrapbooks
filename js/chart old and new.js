// chart old and new

// scatter chart
	$('#highcharts01').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: null
        },
   
        xAxis: {
            title: {
                enabled: true,
                text: '#taipei',
                style: {
                    fontWeight: 700,
                    color: "#e78129",
                    fontSize: "20px"
           		}
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: '#nightmarket',
                style: {
                    fontWeight: 700,
                     color: '#e78129',
                    fontSize: "20px"
           		}
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 10,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#e78129'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Female',
            color: '#e78129',
            data: [[174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3]]            
        }]
    });
/*
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
        lineWidth: 0
      }
    },

    chart: {
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