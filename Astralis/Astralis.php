<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Astralis LEC Summer 2021</title>
</head>

<body>
  <?php include("../page/nav_menu/menu.php"); ?>
  <main>
    <section class="infoTeam">
      <div class="logo">
        <img src="..\logo\lec\astralis.png" alt="logo_astralis" />
        <h3>Astralis</h3>
      </div>
      <table class="table table-bordered table-hover table-condensed teamMembers">
        <thead>
          <tr>
            <th title="Field #1">nickname</th>
            <th title="Field #2">firstname</th>
            <th title="Field #3">lastname</th>
            <th title="Field #4">country</th>
            <th title="Field #5">age</th>
            <th title="Field #6">role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WhiteKnight</td>
            <td>Matti</td>
            <td>Sormunen</td>
            <td>Finland</td>
            <td>02/16/1996</td>
            <td>Top Laner</td>
          </tr>
          <tr>
            <td>Zanzarah</td>
            <td>Nikolay</td>
            <td>Akatov</td>
            <td>Russia</td>
            <td>08/27/1996</td>
            <td>Jungler</td>
          </tr>
          <tr>
            <td>MagiFelix</td>
            <td>Carl Felix</td>
            <td>Boström</td>
            <td>Sweden</td>
            <td>02/27/2000</td>
            <td>Mid Laner</td>
          </tr>
          <tr>
            <td>Jeskla</td>
            <td>Jesper</td>
            <td>Klarin Strömberg</td>
            <td>Sweden</td>
            <td>07/08/2000</td>
            <td>Bot Laner</td>
          </tr>
          <tr>
            <td>promisq</td>
            <td>Hampus Mikael</td>
            <td>Abrahamsson</td>
            <td>Sweden</td>
            <td>03/04/1994</td>
            <td>Support</td>
          </tr>
          <tr>
            <td>AoD</td>
            <td>Baltat</td>
            <td>Alin-Ciprian</td>
            <td>Romania</td>
            <td>01/26/0000</td>
            <td>Coach</td>
          </tr>
          <tr>
            <td>Hansen</td>
            <td>Bjørn-Vegar</td>
            <td>Hansen</td>
            <td>Norway</td>
            <td>12/29/1995</td>
            <td>Coach</td>
          </tr>
        </tbody>
      </table>
      <div class="boite">
        <h2>LEC summer 2021 winrate</h2>
        <canvas id="globalWin" width="200px"></canvas>
      </div>
    </section>

    <section class="stats">
      <!-- kills -->
      <div class="boite">
        <h2>Kills</h2>
        <canvas id="kills" width="300px" height="400px"></canvas>
      </div>
      <!-- death -->
      <div class="boite">
        <h2>Death</h2>
        <canvas id="death" width="300px" height="400px"></canvas>
      </div>
      <!-- Assist -->
      <div class="boite">
        <h2>Assist</h2>
        <canvas id="assist" width="300px" height="400px"></canvas>
      </div>
      <!-- kda -->
      <div class="boite">
        <h2>KDA</h2>
        <canvas id="kda" width="300px" height="400px"></canvas>
      </div>
      <!-- cs/min -->
      <div class="boite">
        <h2>cs / min</h2>
        <canvas id="csmin" width="300px" height="400px"></canvas>
      </div>
      <!-- shared gold -->
      <div class="boite">
        <h2>Shared gold in %</h2>
        <canvas id="sharedGold" width="300px" height="400px"></canvas>
      </div>
      <!-- shared gold -->
      <div class="boite">
        <h2>gold / min</h2>
        <canvas id="goldmin" width="300px" height="400px"></canvas>
      </div>
      <!-- shared gold -->
      <div class="boite">
        <h2>Kill participation</h2>
        <canvas id="kp" width="300px" height="400px"></canvas>
      </div>
      <!-- shared gold -->
      <div class="boite">
        <h2>KillShare</h2>
        <canvas id="killShare" width="300px" height="400px"></canvas>
      </div>
    </section>
  </main>
  <footer>
    <p><a href="https://github.com/Youcefv2">My github profile</a></p>
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>
  <script src="astralis.js"></script>
</body>

</html>