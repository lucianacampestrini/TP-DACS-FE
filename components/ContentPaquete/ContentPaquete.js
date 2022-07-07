import React from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Link from 'next/link';


function ContentPaquete() {
	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<Link href="../hotel">
							<h2><a>Hotel</a></h2>
						</Link>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<Link href="../aereo">
							<h2><a>Aereo</a></h2>
						</Link>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<Link href="../tickets">
							<h2><a>Tickets</a></h2>
						</Link>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Mas</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContentPaquete;