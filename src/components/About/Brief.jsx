import { Highlight, P } from "../../styles/GlobalStyles";
import { Link } from "./About.style";

const Brief = () => {
  const myAge = new Date().getFullYear() - 1995;

  return (
    <>
      <P>
        Hi, my name is <Highlight>Ragab Magdy</Highlight> I&apos;m {myAge} years
        old. I got a bachelor degree from Faculty of Languages and Translation,
        Al-Azhar university( 2019 ). I&apos;m really passionate about
        <Highlight>Javascript</Highlight> and{" "}
        <Highlight>Web Development</Highlight>.
      </P>

      <P>
        My experience as a tech support in an international company helped me
        collaborate with customers from all over the world.
      </P>
      <P>
        Additionally, working with different customers isn&apos;t an easy task,
        however, it has helped me become efficient, productive, and fast even in
        a very stressful environment, which is an important skill in the tech
        industry.
      </P>
      <P>
        I started learning web development back in 2020. I&apos;ve spent the
        last several months working with HTML, CSS, JavaScript, React.js
        building everything from landing pages to APIs.
      </P>
      <P>
        I searched many different sources to learn about{" "}
        <Highlight>interactive</Highlight> web pages for example:{" "}
        <Link
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer mozilla
        </Link>{" "}
        , I also took some online courses like{" "}
        <Link
          href="https://www.udemy.com/course/the-ultimate-react-course"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Ultimate React Course 2023: React, Redux & More
        </Link>{" "}
        ...
      </P>
    </>
  );
};
export default Brief;
