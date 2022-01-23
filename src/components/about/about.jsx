import styled from "styled-components";

const About = () => {
    return (
        <Section id="About">
            <div className="container">
                <h1>Abbout us goes here</h1>

            </div>
        </Section>
    );
};


const Section = styled.section`
    .container{
        max-width: 1240px;
margin: 0 auto;
padding: 64px;
    }
`

export default About;
