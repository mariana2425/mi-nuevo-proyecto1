<script>
	import Menu from '$lib/components/Menu.svelte';
	import inicio from '$lib/images/ambiente.png';
	import { sineIn } from "svelte/easing";

    let btn_sing_up
    let signIn = false
</script>


<div class="mybody" >
	<div class="container" class:toggle={signIn}>
		<div class="container-form">
			<form class="sign-in" action="/inicio">
				<h2>Iniciar Sesión</h2>
				<div class="social-networks">
					<ion-icon name="logo-twitter"></ion-icon>
					<ion-icon name="logo-instagram"></ion-icon>
					<ion-icon name="logo-facebook"></ion-icon>
				</div>
				<span>Por favor utilice su correo y contraseña</span>
				<div class="container-input">
					<ion-icon name="mail-outline"></ion-icon>
					<input type="text" placeholder="Correo" />
				</div>
				<div class="container-input">
					<ion-icon name="lock-closed-outline"></ion-icon>
					<input type="password" placeholder="Contraseña" />
				</div>
				<a href="/">¿Olvidaste tu contraseña?</a>
				<button class="button">INICIAR SESION</button>
			</form>
		</div>

		<div class="container-form" class:toggle={signIn}>
			<form class="sign-up" action="/inicio">
				<h2>Registrarse</h2>
				<div class="social-networks">
					<ion-icon name="logo-twitter"></ion-icon>
					<ion-icon name="logo-instagram"></ion-icon>
					<ion-icon name="logo-facebook"></ion-icon>
				</div>
				<span> Por favor utilice su correo electrónico para registrarse</span>
				<div class="container-input">
					<ion-icon name="person-outline"></ion-icon>
					<input type="text" placeholder="Nombre" />
				</div>
				<div class="container-input">
					<ion-icon name="mail-outline"></ion-icon>
					<input type="text" placeholder="Correo" />
				</div>
				<div class="container-input">
					<ion-icon name="lock-closed-outline"></ion-icon>
					<input type="password" placeholder="Contraseña" />
				</div>
				<button class="button">REGISTRARSE</button>
			</form>
		</div>

		<div class="container-welcome">
			<div class="welcome-sign-up welcome">
				<h3>¡Bienvenido!</h3>
				<p>Ingrese sus datos personales para poder ingresar al maravilloso mundo del reciclaje</p>
				<button onclick={()=> signIn = !signIn} class="button" id="btn-sign-up">REGISTRARSE</button>
			</div>
			<div class="welcome-sign-in welcome">
				<h3>¡Hola!</h3>
				<p>
					Regístrese con sus datos personales para poder ingresar al maravilloso mundo del reciclaje
				</p>
				<button onclick={()=> signIn = !signIn} class="button" id="btn-sign-in">INICIAR SESION</button>
			</div>
		</div>
	</div>
</div>

<style>


	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	.mybody {
        
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: 800px;
		height: 500px;
		display: flex;
		position: relative;
		background-color: white;
		border-radius: 15px;
		overflow: hidden;
		box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
	}
	.container-form {
		width: 100%;
		overflow: hidden;
	}
	.container-form form {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: transform 0.5s ease-in;
	}
	.container-form h2 {
		font-size: 30px;
		margin-bottom: 20px;
	}
	.social-networks {
		display: flex;
		gap: 12px;
		margin-bottom: 25px;
	}
	.social-networks ion-icon {
		border: 1px solid #c9cccb;
		border-radius: 6px;
		padding: 8px;
		cursor: pointer;
	}
	.container-form span {
		font-size: 12px;
		margin-bottom: 15px;
	}
	.container-input {
		width: 300px;
		height: 40px;
		margin-bottom: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		padding: 0 15px;
		background-color: #eeeeee;
	}
	.container-input input {
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		background-color: inherit;
	}
	.container-form a {
		color: black;
		font-size: 14px;
		margin-bottom: 20px;
		margin-top: 5px;
	}
	.button {
		width: 170px;
		height: 45px;
		font-size: 15px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 10px;
		background-color: #258d19;
		align-items: center;
		color:white;
	}

	.sign-up {
		transform: translateX(-100%);
	}
	.container.toggle .sign-in {
		transform: translateX(100%);
	}
	.container.toggle .sign-up {
		transform: translateX(0);
	}

	.container-welcome {
		position: absolute;
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		transform: translateX(100%);
		background-color: #258d19;
		transition:
			transform 0.5s ease-in-out,
			border-radius 0.5s ease-in-out;
		overflow: hidden;
		border-radius: 50% 0 0 50%;
	}
	.container.toggle .container-welcome {
		transform: translateX(0);
		border-radius: 0 50% 50% 0;
		background-color: #258d19;
	}
	.container-welcome .welcome {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 0 50px;
		color: white;
		transition: transform 0.5s ease-in-out;
	}
	.welcome-sign-in {
		transform: translateX(100%);
	}
	.container-welcome h3 {
		font-size: 40px;
	}
	.container-welcome p {
		font-size: 14px;
		text-align: center;
	}
	.container-welcome .button {
		border: 2px solid white;
		background-color: transparent;
	}

	.container.toggle .welcome-sign-in {
		transform: translateX(0);
	}

	.container.toggle .welcome-sign-up {
		transform: translateX(-100%);
	}
</style>
