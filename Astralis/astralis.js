// Shared gold
const sharedGold = document.getElementById("sharedGold").getContext("2d");

let myChart = new Chart(sharedGold, {
  type: "doughnut",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        label: "Shared gold in %",
        data: ["22.20", "18.90", "22.70", "22.70", "13.50"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
});

// global winrate

const globalWin = document.getElementById("globalWin").getContext("2d");

let myChartWinRate = new Chart(globalWin, {
  type: "doughnut",
  data: {
    labels: ["Win", "Lose"],
    datasets: [
      {
        label: "Shared gold in %",
        data: ["38.90", "61.10"],
        backgroundColor: ["green", "red"],
        hoverBorderWidth: 2,
      },
    ],
  },
});

// kills

const kills = document.getElementById("kills").getContext("2d");

let myChartkills = new Chart(kills, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["60", "40", "65", "36", "13"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// death

const death = document.getElementById("death").getContext("2d");

let myChartDeath = new Chart(death, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["42", "63", "49", "47", "72"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// assist

const assist = document.getElementById("assist").getContext("2d");

let myChartAssist = new Chart(assist, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["90", "127", "81", "98", "132"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// kda

const kda = document.getElementById("kda").getContext("2d");

let myChartkda = new Chart(kda, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["3.57", "2.65", "2.98", "2.85", "2.01"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// csmin
const csmin = document.getElementById("csmin").getContext("2d");

let myChartcsmin = new Chart(csmin, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["7.56", "5.34", "8.09", "8.16", "1.65"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// goldmin
const goldmin = document.getElementById("goldmin").getContext("2d");

let myChartgoldmin = new Chart(goldmin, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["377", "321", "385", "385", "229"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Kill participation
const kp = document.getElementById("kp").getContext("2d");

let myChartkp = new Chart(kp, {
  type: "bar",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        data: ["70.10", "78", "68.20", "62.60", "67.80"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// Kill share
const killShare = document.getElementById("killShare").getContext("2d");

let myChartkillShare = new Chart(killShare, {
  type: "doughnut",
  data: {
    labels: ["WhiteKnight", "Zanzarah", "MagiFelix", "Jeskla", "promisq"],
    datasets: [
      {
        label: "Kill share",
        data: ["28", "18.7", "30.4", "16.8", "6.1"],
        backgroundColor: [
          "#C0392B",
          "#76448A",
          "#2874A6",
          "#239B56",
          "#F1C40F",
        ],
        hoverBorderWidth: 2,
      },
    ],
  },
});
