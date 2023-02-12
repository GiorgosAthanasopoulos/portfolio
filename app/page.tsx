"use client";

import { useForm, ValidationError } from "@formspree/react";
import Projects from "@/data/Projects";
import { useState } from "react";
import styles from "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import ProjectCard from "@/components/ProjectCard";
config.autoAddCss = false;

export default function Home(): JSX.Element {
	const [dark, setDark] = useState(true);
	const [state, handleSubmit] = useForm("mzbqejvr");

	return (
		<main>
			<div
				className={
					(dark ? styles.div_dark : styles.div_light) +
					" h-[100%] w-[100%] pb-[2vh] pt-[12vh] text-center"
				}
			>
				<button
					onClick={() => {
						setDark(!dark);
					}}
					className={
						(dark ? styles.button_dark : styles.button_light) +
						" w-[33px] h-[33px] fixed float-right top-[3vh] right-[11vw]"
					}
				>
					<FontAwesomeIcon
						icon={dark ? faSun : faMoon}
					></FontAwesomeIcon>
				</button>
				<h1
					className={
						(dark ? styles.h1_dark : styles.h1_light) +
						" text-5xl font-bold"
					}
				>
					Giorgos Athanasopoulos
				</h1>
				<h2
					className={
						(dark ? styles.h2_dark : styles.h2_light) +
						" mt-[3vh] text-3xl"
					}
				>
					Fullstack Developer
				</h2>
				<p
					className={
						(dark ? styles.p_dark : styles.p_light) +
						" px-[20vw] mt-[3vh] text-lg"
					}
				>
					I am an undergraduate of computer science at the University
					of Economics and Business in Athens, Greece. Passionate
					hobbyist programmer for 6 years, focusing on frontend and
					fullstack development.
				</p>
				<div className="flex justify-center text-center align-center items-center gap-10 lg:gap-12 md:gap-24">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-[15vw] lg:mx-[5vw] md:mx-[10vw] gap-10 lg:gap-12 md:gap-24">
						{Projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									project={project}
									dark={dark}
								/>
							);
						})}
					</div>
				</div>
				{/* TODO: KNOWLEDGE, SKILLS, EXPERIENCE */}
				<div></div>
				{state.succeeded ? (
					<p className="text-white my-12">
						Thank you for your submission!
					</p>
				) : (
					<div className="text-left mt-[10vh] mx-[10%] flex flex-column justify-center align-center items-center">
						<form className="my-[10vh]" onSubmit={handleSubmit}>
							<h1
								className={
									(dark ? styles.h1_dark : styles.h1_light) +
									" underline font-bold text-3xl text-left mt-4 underline-offset-8"
								}
							>
								Contact
							</h1>
							<br />
							<input
								required
								type="text"
								placeholder="Name"
								id="name"
								name="name"
								className={
									styles.input +
									" " +
									(dark
										? styles.input_dark
										: styles.input_light) +
									" w-[95%] rounded-xl mt-4 h-[40px] p-4"
								}
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
							<br />
							<input
								required
								pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
								type="text"
								placeholder="Email"
								id="email"
								name="email"
								className={
									styles.input +
									"  " +
									(dark
										? styles.input_dark
										: styles.input_light) +
									" w-[95%] rounded-xl my-4 h-[40px] p-4"
								}
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<br />
							<textarea
								required
								name="Message"
								id="message"
								cols={60}
								rows={10}
								className={
									styles.input +
									" " +
									(dark
										? styles.textarea_dark
										: styles.textarea_light) +
									" w-[95%] rounded-xl p-4"
								}
								placeholder="Message"
							></textarea>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
							<br />
							<button
								type="submit"
								disabled={state.submitting}
								className={
									styles.button_gradient +
									" p-4 w-[40%] mt-4 text-white"
								}
							>
								Work with me
							</button>
						</form>
					</div>
				)}
				<div>
					<p
						className={
							styles.copyright +
							" " +
							(dark
								? styles.copyright_dark
								: styles.copyright_light) +
							" text-sm"
						}
					>
						&copy; 2023 Giorgos Athanasopoulos. All rights reserved.
					</p>
				</div>
			</div>
		</main>
	);
}
