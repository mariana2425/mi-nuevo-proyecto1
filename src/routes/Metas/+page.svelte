<script lang="ts">
    import { onMount } from 'svelte';
  
    type Activity = {
      points: number;
      description: string;
      completed: boolean;
    };
  
    let activities: Activity[] = [
      { points: 10, description: 'Reciclar papel', completed: false },
      { points: 15, description: 'Reciclar plástico', completed: false },
      { points: 20, description: 'Reciclar vidrio', completed: false },
      { points: 25, description: 'Compostar residuos', completed: false }
    ];
  
    let totalPoints = 0;
    let streak = 0;
    let lastReset: string | null = null;
    let showMessage = false;
  
    onMount(() => {
      totalPoints = parseInt(localStorage.getItem('totalPoints') || '0');
      streak = parseInt(localStorage.getItem('streak') || '0');
      lastReset = localStorage.getItem('lastReset');
      checkStreak();
  
      // Check for day change every minute
      const interval = setInterval(() => {
        const today = new Date().toDateString();
        if (lastReset !== today) {
          resetActivities();
        }
      }, 60000);
  
      return () => clearInterval(interval);
    });
  
    function checkStreak() {
      const today = new Date().toDateString();
      if (lastReset !== today) {
        streak = 0;
        totalPoints = 0;
        localStorage.setItem('streak', streak.toString());
        localStorage.setItem('totalPoints', totalPoints.toString());
        resetActivities();
      }
    }
  
    function resetActivities() {
      activities = activities.map(activity => ({ ...activity, completed: false }));
      showMessage = false;
    }
  
    function handleSubmit() {
      const completedActivities = activities.filter(a => a.completed);
      const pointsToday = completedActivities.reduce((sum, activity) => sum + activity.points, 0);
  
      if (pointsToday > 0) {
        streak++;
        totalPoints += pointsToday;
        
        localStorage.setItem('streak', streak.toString());
        localStorage.setItem('totalPoints', totalPoints.toString());
        
        lastReset = new Date().toDateString();
        localStorage.setItem('lastReset', lastReset);
        
        showMessage = true;
      }
    }
  </script>
  
  <div class="container">
    <h1>Actividades de Reciclaje</h1>
    <div class="points">Puntos: <span>{totalPoints}</span></div>
    
    {#if !showMessage}
      <ul class="activities-list">
        {#each activities as activity}
          <li>
            <label>
              <input
                type="checkbox"
                bind:checked={activity.completed}
              >
              {activity.description} ({activity.points} puntos)
            </label>
          </li>
        {/each}
      </ul>
      <button on:click={handleSubmit}>Enviar</button>
    {:else}
      <div class="message">
        Has completado tus tareas de hoy, espera a las de mañana.
      </div>
    {/if}
  </div>
  
  <div class="container-streak">
    <h1>Tu Racha Actual</h1>
    <div class="streak">{streak} días</div>
    <div class="fire">
      <img src="/fuego.png" alt="Fuego">
    </div>
  </div>
  
  <style>
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .container-streak {
      max-width: 300px;
      margin: 2rem auto;
      text-align: center;
    }
  
    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  
    .points {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      text-align: right;
    }
  
    .activities-list {
      list-style: none;
      padding: 0;
    }
  
    .activities-list li {
      margin: 1rem 0;
      padding: 0.5rem;
      border-radius: 4px;
      background-color: #f5f5f5;
    }
  
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
  
    button {
      display: block;
      width: 100%;
      padding: 0.8rem;
      margin-top: 1.5rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
  
    button:hover {
      background-color: #45a049;
    }
  
    .message {
      text-align: center;
      padding: 1rem;
      background-color: #e8f5e9;
      border-radius: 4px;
      color: #2e7d32;
    }
  
    .streak {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
    }
  
    .fire img {
      width: 50px;
      height: auto;
    }
  </style>