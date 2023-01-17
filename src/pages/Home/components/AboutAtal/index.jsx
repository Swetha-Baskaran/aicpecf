import "./style.css";
import img from "../../../../assets/images/about-us.jpg"

const AboutAtal = () => {
	return (
		<div>
			<div className='containerBox'>
				<div className='about'>
					<div className='left'>
						<h1>About us</h1>
						<p>
							​Atal Incubation Centre - Pondicherry Engineering College
							Foundation (AIC-PECF) is fully supported and funded by Atal
							Innovation Mission (AIM), Niti Aayog, Government of India.
							AIC-PECF was initiated to provide a platform to assist and
							enable young entrepreneurs to initiate startups for the
							commercial exploitation of technologies developed by them.
							AIC-PECF also enables the budding entrepreneurs to showcase
							and test their abilities to run a start up business in the
							areas of Electronics design and Manufacturing (EDM),
							Internet of Things(IoT) and Unmanned Aerial Vehicle (UAV).
							The incubation centre provides a wide range of resources
							that enables it to: Empower innovators to pursue their
							entrepreneurial golas that improve people’s lives, generate
							employment and drive the economy - Connect start-ups with
							mentor community for guidance and support - Provide
							technology support and fab lab facilities for innovators to
							pursue their own ideas and converting it into a successful
							venture - Support, simplify and clarify intellectual
							property transfer processes for innovators and the broader
							community -Develop and maintain a standard pre-incubation
							process so that start-ups can leverage upon the
							entrepreneurial process.
						</p>
					</div>
					<div className='right'>
						<img
							alt='temp'
							src={img}
						/>
					</div>
					<div className='clear'></div>
				</div>
			</div>
		</div>
	);
};

export default AboutAtal;
