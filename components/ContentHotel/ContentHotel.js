import React from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";


function ContentPaquete() {
	return (


		<div className={styles.contentcontainer}>
		
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Hotel</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Aereo</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Espectaculos</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Mas</h2>
					</div>
				</div>
			</div>
		
			<div>
				<div>
					<div className='grid'>
						<a className='card'>
							<h3>Hotel Example</h3>
							<p>Address: Av Libertador 9090</p>
							<p>Estrellas: 4</p>
							<p>Disponible: si</p>
							<img src="image1.jpg" widht="300px" height="300px">
							</img>

								

						</a>
						

					</div>
					<div className='grid'>
						<a className='card'>
							<h3>Hotel Example</h3>
							<p>Address: Av Libertador 9090</p>
							<p>Estrellas: 4</p>
							<p>Disponible: si</p>
							<img src="image1.jpg" widht="300px" height="300px">
							</img>


						</a>


					</div>
				</div>
				<style jsx>
					{`
        .grid {
          display: flex;
          align-items: left;
          justify-content: left;
          flex-wrap: nowrap;
          width: 500px;
			heigth: 500 px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

		.card img{
		widht="300px";
		height="300px";
		}
      `}
				</style>
			</div>
		
		</div>
	);
}

export default ContentPaquete;





