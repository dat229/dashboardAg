import { Component,OnInit,ViewChild } from '@angular/core';
import statusCard from '../../../assets/JsonData/status-card-data.json';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

const TopCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      "username": "john doe",
      "order": "490",
      "price": "$15,870",
    },
    {
      "username": "frank nva",
      "order": "250",
      "price": "$12,251",
    },
    {
      "username": "anthony baker",
      "order": "120",
      "price": "$10,840",
    },
    {
      "username": "frank iva",
      "order": "110",
      "price": "$9,251",
    },
    {
      "username": "anthony baker",
      "order": "80",
      "price": "$8,840",
    },
  ]
}

const LatestOrders = {
  head: [
      "order id",
      "user",
      "total price",
      "date",
      "status"
  ],
  body: [
      {
          id: "#OD1711",
          user: "john doe",
          date: "17 Jun 2021",
          price: "$900",
          status: "shipping"
      },
      {
          id: "#OD1712",
          user: "frank nva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "pending"
      },
      {
          id: "#OD1712",
          user: "frank iva",
          date: "1 Jun 2021",
          price: "$400",
          status: "paid"
      },
      {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
      }
  ]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public statusCard : any = null;
  public topCustomers : any = null;
  public latestOrders : any = null;
  public orderStatus : any = null;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {

  }

  ngOnInit(): void {

    this.statusCard = statusCard;

    this.chartOptions = {
      series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
      }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51]
      }],
      chart: {
        type: "line",
        height: "200",
        background: 'transparent',
      },
      options: {
        color: ['#6ab04c', '#2980b9'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
        sparkline: {
          enabled: true
        }
      }
    };

    this.topCustomers = TopCustomers;

    this.latestOrders = LatestOrders;

    this.orderStatus = {
      "shipping": "primary",
      "pending": "warning",
      "paid": "success",
      "refund": "danger"
    }
  }

}
