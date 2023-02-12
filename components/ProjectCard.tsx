import Project from "@/types/Project";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import parentStyles from "../app/page.module.css";

type ProjectCardProps = {
	project: Project;
	dark: boolean;
};

export default function ProjectCard({
	project,
	dark,
}: ProjectCardProps): JSX.Element {
	return (
		<>
			<div
				className={
					(dark
						? styles.projectcard_dark
						: styles.projectcard_light) +
					" mt-[5vh] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] p-4 text-left rounded-xl"
				}
			>
				<Image
					src={project.image}
					alt="project-image"
					width="150"
					height="150"
				/>
				<div
					className={
						(dark
							? parentStyles.div_dark
							: parentStyles.div_light) + " "
					}
				>
					<h2
						className={
							(dark
								? parentStyles.h2_dark
								: parentStyles.h2_light) +
							" font-bold py-4 text-xl"
						}
					>
						{project.title}
					</h2>
					<div className="flex flex-row gap-4">
						{project.tech.map((tech, index) => {
							return (
								<div key={index}>
									<p
										className={
											(dark
												? styles.tech_dark
												: styles.tech_light) +
											" h-fit w-fit p-2 rounded-xl"
										}
									>
										{tech}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
