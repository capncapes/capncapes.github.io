---
layout: default
title: Human freedom
permalink: /data/human-freedom/
---

Curious where countries stand on freedom? The Cato Institute's [Human Freedom Index (HFI)](https://www.cato.org/search/category/human-freedom-index?query=human+freedom+index) is your annual snapshot, ranking 160+ nations across personal, civil, and economic liberties. Think deeper than just rankings: HFI digs into dozens of indicators, from rule of law to trade, revealing the intricate fabric of freedom worldwide.

The Human Freedom Index generally measures official freedom markers like legislation, but other indicators are included in the data, such as violence, which can have a noticeable impact on actual freedom. Though dozens of indicators are present in the annual reports published by Cato, this website focuses on the broad strokes of personal freedom, economic freedom, and overall human freedom, as well as each country's freedom rank among the world's nations.

<hr style="margin: 3rem 0;">

<script>
window.onload = function () {
	var usaFreedomRank = new CanvasJS.Chart("usaFreedomRankContainer", {
		colorSet:  "caples",
		backgroundColor: "#F8F9FA",
		title:{
			text: "Freedom in the United States",
			fontFamily: "Bodoni",
			fontSize: 25,
			fontWeight: 900,
			fontColor: "#121212"
		},
		axisX:{
			titleFontFamily: "Open Sans",
			titleLabelFamily: "Open Sans",
			minimum: new Date(2007, 0),
			maximum: new Date(2024, 0),
			interval: 1,
			intervalType: "year"
		},
		axisY: {
			title: "World rank",
			titleFontFamily: "Open Sans",
			titleLabelFamily: "Open Sans",
			minimum: 7,
			maximum: 24,
			lineColor: "#121212",
			tickColor: "#121212",
			labelFontColor: "#121212",
			titleFontColor: "#121212",
			margin: 20,
			reversed: true
		},
		axisY2: {
			title: "Score",
			titleFontFamily: "Open Sans",
			titleLabelFamily: "Open Sans",
			minimum: 7.5,
			maximum: 9.5,
			lineColor: "#121212",
			tickColor: "#121212",
			labelFontColor: "#121212",
			titleFontColor: "#121212",
			includeZero: true,
			margin: 20
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [{
			type: "column",
			name: "Freedom rank",
			color: "#DEDECA",
			showInLegend: true,
			xValueFormatString: "YYYY",
			axisYType: "primary",
			dataPoints: [
				{ x: new Date(2008, 0), y: 10 },
				{ x: new Date(2009, 0), y: 17 },
				{ x: new Date(2010, 0), y: 16 },
				{ x: new Date(2011, 0), y: 17 },
				{ x: new Date(2012, 0), y: 13 },
				{ x: new Date(2013, 0), y: 17 },
				{ x: new Date(2014, 0), y: 15 },
				{ x: new Date(2015, 0), y: 13 },
				{ x: new Date(2016, 0), y: 14 },
				{ x: new Date(2017, 0), y: 8 },
				{ x: new Date(2018, 0), y: 17 },
				{ x: new Date(2019, 0), y: 15 },
				{ x: new Date(2020, 0), y: 17 },
				{ x: new Date(2021, 0), y: 15 },
				{ x: new Date(2022, 0), y: 23 },
				{ x: new Date(2023, 0), y: 17 }
			]
		},
		{
			type: "spline",
			name: "Personal freedom",
			xValueFormatString: "YYYY",
			axisYIndex: 0,
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2008, 0), y: 8.7 },
				{ x: new Date(2009, 0), y: 8.71 },
				{ x: new Date(2010, 0), y: 8.69 },
				{ x: new Date(2011, 0), y: 8.7 },
				{ x: new Date(2012, 0), y: 8.78 },
				{ x: new Date(2013, 0), y: 8.8 },
				{ x: new Date(2014, 0), y: 8.85 },
				{ x: new Date(2015, 0), y: 8.81 },
				{ x: new Date(2016, 0), y: 8.71 },
				{ x: new Date(2017, 0), y: 8.75 },
				{ x: new Date(2018, 0), y: 8.66 },
				{ x: new Date(2019, 0), y: 8.72 },
				{ x: new Date(2020, 0), y: 8.66 },
				{ x: new Date(2021, 0), y: 9.09 },
				{ x: new Date(2022, 0), y: 8.42 },
				{ x: new Date(2023, 0), y: 8.57 }
			]
		},
		{
			type: "spline",
			name: "Economic freedom",
			xValueFormatString: "YYYY",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2008, 0), y: 8.34 },
				{ x: new Date(2009, 0), y: 8.03 },
				{ x: new Date(2010, 0), y: 8.12 },
				{ x: new Date(2011, 0), y: 8.07 },
				{ x: new Date(2012, 0), y: 8.15 },
				{ x: new Date(2013, 0), y: 8.07 },
				{ x: new Date(2014, 0), y: 8.16 },
				{ x: new Date(2015, 0), y: 8.27 },
				{ x: new Date(2016, 0), y: 8.32 },
				{ x: new Date(2017, 0), y: 8.34 },
				{ x: new Date(2018, 0), y: 8.22 },
				{ x: new Date(2019, 0), y: 8.19 },
				{ x: new Date(2020, 0), y: 8.22 },
				{ x: new Date(2021, 0), y: 8.24 },
				{ x: new Date(2022, 0), y: 7.97 },
				{ x: new Date(2023, 0), y: 8.14 }
			]
		},
		{
			type: "spline",
			name: "Human freedom",
			xValueFormatString: "YYYY",
			axisYType: "secondary",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2008, 0), y: 8.52 },
				{ x: new Date(2009, 0), y: 8.37 },
				{ x: new Date(2010, 0), y: 8.41 },
				{ x: new Date(2011, 0), y: 8.39 },
				{ x: new Date(2012, 0), y: 8.47 },
				{ x: new Date(2013, 0), y: 8.44 },
				{ x: new Date(2014, 0), y: 8.51 },
				{ x: new Date(2015, 0), y: 8.54 },
				{ x: new Date(2016, 0), y: 8.52 },
				{ x: new Date(2017, 0), y: 8.55 },
				{ x: new Date(2018, 0), y: 8.44 },
				{ x: new Date(2019, 0), y: 8.46 },
				{ x: new Date(2020, 0), y: 8.44 },
				{ x: new Date(2021, 0), y: 8.73 },
				{ x: new Date(2022, 0), y: 8.23 },
				{ x: new Date(2023, 0), y: 8.39 }
			]
		}],
		exportEnabled: true,
		exportFileName: "human_freedom_rank_usa"
	});
	var quartile1FreedomScore2023 = new CanvasJS.Chart("worldQuartile1FreedomScore2023Container", {
		colorSet:  "caples",
		backgroundColor: "#F8F9FA",
		height: 800,
		title:{
			text: "2023 Global Human Freedom Score, First Quintile",
			fontFamily: "Bodoni",
			fontSize: 25,
			fontWeight: 900,
			fontColor: "#121212"
		},
		axisX: {
			titleFontFamily: "Open Sans",
			titleFontSize: 15,
			labelFontFamily: "Open Sans",
			labelFontSize: 10,
			interval: 1
		},
		axisY: {
			title: "Human freedom score",
			titleFontFamily: "Open Sans",
			titleFontSize: 15,
			labelFontFamily: "Open Sans",
			labelFontSize: 10,
			lineColor: "#121212",
			tickColor: "#121212",
			labelFontColor: "#121212",
			titleFontColor: "#121212",
			margin: 20
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [{
			type: "bar",
			name: "Human freedom score",
			color: "#30475E",
			showInLegend: false,
			dataPoints: [
				{ y: 7.99, label: "Armenia" },
				{ y: 8, label: "Cabo Verde" },
				{ y: 8.03, label: "Spain" },
				{ y: 8.04, label: "Slovak Republic" },
				{ y: 8.04, label: "Costa Rica" },
				{ y: 8.12, label: "Republic of Korea" },
				{ y: 8.15, label: "Cyprus" },
				{ y: 8.16, label: "Chile" },
				{ y: 8.2, label: "Malta" },
				{ y: 8.24, label: "Austria" },
				{ y: 8.27, label: "Portugal" },
				{ y: 8.33, label: "Belgium" },
				{ y: 8.37, label: "Germany" },
				{ y: 8.38, label: "Czechia" },
				{ y: 8.39, label: "Lithuania" },
				{ y: 8.39, label: "United States" },
				{ y: 8.39, label: "United Kingdom" },
				{ y: 8.4, label: "Japan" },
				{ y: 8.45, label: "Latvia" },
				{ y: 8.52, label: "Australia" },
				{ y: 8.55, label: "Canada" },
				{ y: 8.56, label: "Taiwan" },
				{ y: 8.57, label: "Netherlands" },
				{ y: 8.58, label: "Norway" },
				{ y: 8.7, label: "Finland" },
				{ y: 8.71, label: "Luxembourg" },
				{ y: 8.73, label: "Iceland" },
				{ y: 8.75, label: "Estonia" },
				{ y: 8.75, label: "Sweden" },
				{ y: 8.79, label: "Ireland" },
				{ y: 8.83, label: "Denmark" },
				{ y: 8.88, label: "New Zealand" },
				{ y: 9.01, label: "Switzerland" }
			]
		}],
		exportEnabled: true,
		exportFileName: "human_freedom_2023_quentile_1"
	});
	var quintile1FreedomScoreRange = new CanvasJS.Chart("quintile1FreedomScoreRangeContainer", {
		animationEnabled: true,
		height: 500,
		title:{
			text: "Global Human Freedom Score Range, First Quintile",
			fontFamily: "Bodoni",
			fontSize: 25,
			fontWeight: 900,
			fontColor: "#121212"
		},
		axisX: {
			titleFontFamily: "Open Sans",
			titleFontSize: 15,
			labelFontFamily: "Open Sans",
			labelFontSize: 10,
			interval: 1,
			intervalType: "number"
		},
		axisY: {
			title: "Annual freedom score",
			titleFontFamily: "Open Sans",
			titleFontSize: 20,
			labelFontFamily: "Open Sans",
			labelFontSize: 10,
			lineColor: "#121212",
			tickColor: "#121212",
			labelFontColor: "#121212",
			titleFontColor: "#121212",
			margin: 20
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [{
			type: "boxAndWhisker",
			whiskerColor: "#121212",
			stemColor: "#121212",
			upperBoxColor: "#2CA096",
			lowerBoxColor: "#F77825",
			color: "black",
			stemThickness: 1,
			dataPoints: [
				{ "label": "Armenia", "y": [7.42, 7.49, 7.69, 8.2, 7.57] },
				{ "label": "Australia", "y": [8.51, 8.62, 8.68, 8.84, 8.67] },
				{ "label": "Austria", "y": [8.24, 8.44, 8.51, 8.67, 8.46] },
				{ "label": "Belgium", "y": [8.22, 8.28, 8.33, 8.61, 8.29] },
				{ "label": "Cabo Verde", "y": [7.45, 7.57, 7.86, 8.26, 7.74] },
				{ "label": "Canada", "y": [8.47, 8.63, 8.67, 8.85, 8.65] },
				{ "label": "Chile", "y": [8.03, 8.08, 8.19, 8.44, 8.17] },
				{ "label": "Costa Rica", "y": [7.7, 7.86, 8.07, 8.25, 7.95] },
				{ "label": "Cyprus", "y": [7.84, 8.06, 8.33, 8.42, 8.14] },
				{ "label": "Czechia", "y": [8.29, 8.34, 8.42, 8.61, 8.38] },
				{ "label": "Denmark", "y": [8.56, 8.68, 8.73, 8.98, 8.72] },
				{ "label": "Estonia", "y": [8.44, 8.46, 8.54, 8.91, 8.52] },
				{ "label": "Finland", "y": [8.46, 8.51, 8.67, 8.85, 8.62] },
				{ "label": "Germany", "y": [8.33, 8.41, 8.54, 8.73, 8.51] },
				{ "label": "Iceland", "y": [7.87, 8.12, 8.4, 8.77, 8.29] },
				{ "label": "Ireland", "y": [8.43, 8.55, 8.68, 8.9, 8.62] },
				{ "label": "Japan", "y": [8.28, 8.44, 8.48, 8.73, 8.45] },
				{ "label": "Republic of Korea", "y": [8.09, 8.15, 8.25, 8.39, 8.18] },
				{ "label": "Latvia", "y": [8.15, 8.29, 8.42, 8.67, 8.35] },
				{ "label": "Lithuania", "y": [8.01, 8.17, 8.39, 8.68, 8.35] },
				{ "label": "Luxembourg", "y": [8.35, 8.41, 8.54, 8.8, 8.48] },
				{ "label": "Malta", "y": [8.2, 8.30, 8.37, 8.45, 8.34] },
				{ "label": "Netherlands", "y": [8.41, 8.45, 8.55, 8.78, 8.49] },
				{ "label": "New Zealand", "y": [8.79, 8.85, 8.88, 9.01, 8.87] },
				{ "label": "Norway", "y": [8.37, 8.50, 8.60, 8.76, 8.55] },
				{ "label": "Portugal", "y": [8.07, 8.23, 8.30, 8.69, 8.27] },
				{ "label": "Slovak Republic", "y": [7.94, 8.02, 8.21, 8.29, 8.10] },
				{ "label": "Spain", "y": [8.03, 8.19, 8.29, 8.56, 8.23] },
				{ "label": "Sweden", "y": [8.48, 8.52, 8.58, 8.83, 8.55] },
				{ "label": "Switzerland", "y": [8.71, 8.77, 8.82, 9.11, 8.81] },
				{ "label": "Taiwan", "y": [7.83, 8.13, 8.42, 8.68, 8.36] },
				{ "label": "United Kingdom", "y": [8.3, 8.46, 8.57, 8.75, 8.55] },
				{ "label": "United States", "y": [8.23, 8.41, 8.52, 8.73, 8.45] }
			]
		}],
		exportEnabled: true,
		exportFileName: "human_freedom_range_quintile_1"
	});
	quartile1FreedomScore2023.render();
	usaFreedomRank.render();
	quintile1FreedomScoreRange.render();

	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}
}
</script>
<div id="usaFreedomRankContainer" class="w-full" style="height:300px;"></div>
<div id="worldQuartile1FreedomScore2023Container" class="w-full mt-12" style="height:800px;"></div>
<div id="quintile1FreedomScoreRangeContainer" class="w-full my-12" style="height:500px;"></div>
<script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>