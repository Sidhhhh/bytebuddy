import { useState } from 'react';
import '../css/Styles.css'; // Make sure to create or adapt your CSS file
import { Loader } from 'lucide-react';

const ComputerScienceCourses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <div className="computer-science-courses-1">
      {/* MAIN Heading of Page */}
      
     </div>                   
      <div className="title-1">
        <span>Computer Science Courses<br />on ByteBuddy</span>
        <div className="shortdesc-1">
          <p>Learn programming languages and concepts to prepare for a career in<br />hardware or software development</p>
        </div>    
         
      </div>
      {/* Some KeyWords related to Topic */}
      <div className="course-1">
        
        <div className="cbox-1">
          <div className="det-1"><a href="#java">Java</a></div>
          <div className="det-1"><a href="https://developer.android.com/">Android Development</a></div>
          <div className="det-1"><a href="https://docs.oracle.com/javafx/2/get_started/fxml_tutorial.htm">FXML</a></div>
          <div className="det-1"><a href="#c++">C++</a></div>
          <div className="det-1"><a href="https://www.geeksforgeeks.org/introduction-of-compiler-design/">Compiler Designing</a></div>
          <div className="det-1"><a href="https://www.coursera.org/specializations/game-design-and-development">Game Development</a></div>
          <div className="det-1"><a href="#algo">Algorithm</a></div>
        </div>
        <div className="cbox-1">
          <div className="det-1"><a href="#python">Python</a></div>
          <div className="det-1"><a href="https://www.coursera.org/learn/machine-learning">Machine Learning</a></div>
          <div className="det-1"><a href="https://en.wikipedia.org/wiki/Artificial_intelligence">Artificial Intelligence</a></div>
          <div className="det-1"><a href="https://en.wikipedia.org/wiki/Network">Networking</a></div>
          <div className="det-1"><a href="https://www.kaspersky.co.in/resource-center/definitions/what-is-cyber-security">Cyber Security</a></div>
          <div className="det-1"><a href="https://www.eccouncil.org/ethical-hacking/">Ethical Hacking</a></div>
          <div className="det-1"><a href="#data">Data Structures</a></div>
        </div>
        <div className="cbox-1">
          <div className="det-1"><a href="#html_css">HTML and CSS</a></div>
          <div className="det-1"><a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044">Full Stack Web Development</a></div>
          <div className="det-1"><a href="https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de?gi=6d9d13f4cc95">UI Designing</a></div>
          <div className="det-1"><a href="https://www.adobe.com/in/products/xd.html">Adobe XD</a></div>
          <div className="det-1"><a href="https://www.sciencedirect.com/topics/computer-science/hardware-design">Hardware Designing</a></div>
          <div className="det-1"><a href="#javascript">JavaScript</a></div>
          <div className="det-1"><a href="#html_css">Bootstrap</a></div>
        </div>
      </div>

      {/* Courses Available */}
      <div className="inbt-1">
        Accelerate your career with Computer Science programs
      </div>

      <div className="ccard-1">
        <center>
          <div className="ccardbox-1">
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/java-course.jpg" alt="Java Course" /></div>
              <a href="#java"><div className="spart-1">2 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/python-course.png" alt="Python Course" /></div>
              <a href="#python"><div className="spart-1">5 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/c-course.jpg" alt="C++ Course" /></div>
              <a href="#c++"><div className="spart-1">3 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
          </div>
          <div className="ccardbox-1">
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/web-course.jpg" alt="Web Course" /></div>
              <a href="#html_css"><div className="spart-1">6 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/data-course.jpg" alt="Data Course" /></div>
              <a href="#data"><div className="spart-1">2 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
            <div className="dcard-1">
              <div className="fpart-1"><img src="/courses/algo-course.jpg" alt="Algorithm Course" /></div>
              <a href="#algo"><div className="spart-1">1 Courses <img src="/icon/dropdown.png" alt="dropdown" /></div></a>
            </div>
          </div>
        </center>
      </div>

      {/* Videos on JAVA Lectures */}
      <div className="title2-1" id="java">
        <span>Start Programming with Java</span>
        <div className="shortdesc2-1">
          <p>Practice and Practice to become a good Java programmer</p>
        </div>
      </div>
      
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`java-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/java-course.jpg" alt="Java Course" />
                <iframe 
                  src={`https://www.youtube.com/embed/${item === 1 ? 'IsLyduxZ9sc' : 
                    item === 2 ? 'U_vuESBFEpE' : 
                    item === 3 ? '7i8vbPA37y0' : 
                    item === 4 ? 'FB47F-QIk3k' : 
                    item === 5 ? '8qyVcHJ1Et4' : 
                    item === 6 ? 'N53Vf8HGd-0' : 
                    item === 7 ? 'slz2Vc904Qg' : 'Q0NVRQP1Z5g'}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`Java Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=IsLyduxZ9sc&list=PLX9Zi6XTqOKQ7TdRz0QynGIKuMV9Q2H8E" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on C++ Lectures */}
      <div className="title2-1" id="c++">
        <span>Start Programming with C++</span>
        <div className="shortdesc2-1">
          <p>Practice and Practice to become a good C++ programmer</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`cpp-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/c-course.jpg" alt="C++ Course" />
                <iframe 
                  src={`https://www.youtube.com/embed/${item === 2 ? '52dHKRD7cdg' : 'Iuo9PpGE04Y'}`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`C++ Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=Iuo9PpGE04Y&feature=youtu.be" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on PYTHON Lectures */}
      <div className="title2-1" id="python">
        <span>Start Programming with Python</span>
        <div className="shortdesc2-1">
          <p>Practice and Practice to become a good Python programmer</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`python-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/python-course.png" alt="Python Course" />
                <iframe 
                  src="https://www.youtube.com/embed/QXeEoD0pB3E"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`Python Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://youtu.be/QXeEoD0pB3E" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on DATA STRUCTURES Lectures */}
      <div className="title2-1" id="data">
        <span>Data Structures</span>
        <div className="shortdesc2-1">
          <p>Make your data structures concepts strong...</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`data-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/data-course.jpg" alt="Data Structures Course" />
                <iframe 
                  src="https://www.youtube.com/embed/Db9ZYbJONHc"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`Data Structures Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=Db9ZYbJONHc" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on ALGORITHM Lectures */}
      <div className="title2-1" id="algo">
        <span>Algorithm</span>
        <div className="shortdesc2-1">
          <p>Make your algorithm concepts clear...</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`algo-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/algo-course.jpg" alt="Algorithm Course" />
                <iframe 
                  src="https://www.youtube.com/embed/0IAPZzGSbME"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`Algorithm Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=0IAPZzGSbME" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on HTML and CSS Lectures */}
      <div className="title2-1" id="html_css">
        <span>Start Programming with HTML and CSS</span>
        <div className="shortdesc2-1">
          <p>Show your creativity and uniqueness</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`html-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/web-course.jpg" alt="Web Course" />
                <iframe 
                  src="https://www.youtube.com/embed/TKYsuU86-DQ"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`HTML/CSS Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=TKYsuU86-DQ" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* Videos on JAVASCRIPT Lectures */}
      <div className="title2-1" id="javascript">
        <span>Start Programming with JavaScript</span>
        <div className="shortdesc2-1">
          <p>Use this to build great projects</p>
        </div>
      </div>
      <center>
        <div className="ccardbox2-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="dcard2-1" key={`js-${item}`}>
              <span className="tag-1">{item}/8</span>
              <div className="fpart2-1">
                <img src="/courses/javascript-course.jpg" alt="JavaScript Course" />
                <iframe 
                  src="https://www.youtube.com/embed/uDwSnnhl1Ng"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`JavaScript Lecture ${item}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </center>
      <br /><br />
      <div className="click-me-1">
        <a href="https://www.youtube.com/watch?v=uDwSnnhl1Ng" target="_blank" rel="noopener noreferrer">Click Here to Watch full playlist</a>
      </div>

      {/* PROJECTS */}
      <div className="title2-1" id="projects">
        <span>Browse Projects</span>
        <div className="shortdesc2-1">
          <p>Here you can find various Projects related to Web Deveopment, AI, Java Projects, etc</p>
        </div>
      </div>
      <div className="project-panel-1">
        {[
          {
            img: "./projects/p1.jpg",
            title: "Digi Library",
            desc: "Interactive Library Management Software made using JAVA & MySQL",
            link: "https://github.com/roshan9419"
          },
          {
            img: "./projects/p2.jpg",
            title: "LearnEd",
            desc: "It is an Educational Website made using HTML, CSS & JavaScript",
            link: "https://github.com/roshan9419"
          },
          {
            img: "./projects/p3.jpg",
            title: "Photo Gallery",
            desc: "This Website helps you to manage your Personal Photos developed using HTML, CSS & JavaScript",
            link: "https://github.com/roshan9419"
          },
          {
            img: "./projects/p4.jpg",
            title: "Sports Fitness",
            desc: "This Website helps you in your favorite Sports made using HTML, CSS & JavaScript",
            link: "https://github.com/roshan9419"
          },
          {
            img: "./projects/p5.jpg",
            title: "Smart TMS",
            desc: "This Software helps you to managen the records of Challans used in Traffic Management System made using C++",
            link: "https://github.com/roshan9419/smart_traffic"
          }
        ].map((project, index) => (
          <div className="project-card-1" key={`project-${index}`}>
            <img src={project.img} alt={project.title} />
            <div className="info-1">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="download-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default ComputerScienceCourses;