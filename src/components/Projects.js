import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-My.png";
import projImg2 from "../assets/img/project-Hung.png";
import projImg3 from "../assets/img/project-Tien.png";
import projImg4 from "../assets/img/project-Son.png";
import projImg5 from "../assets/img/project-Van.png";
import projImg6 from "../assets/img/project-Bach.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Vào chỉ để hỏi",
      description: "Code tặng anh",
      imgUrl: projImg1,
    },
    {
      title: "Tấn Hưng",
      description: "Code tặng anh",
      imgUrl: projImg2,
    },
    {
      title: "Từ Từ Tiên",
      description: "Code tặng anh",
      imgUrl: projImg3,
    },
    {
      title: "Ngọc Sơn",
      description: "Code tặng anh",
      imgUrl: projImg4,
    },
    {
      title: "Linh Vân",
      description: "Code tặng anh",
      imgUrl: projImg5,
    },
    {
      title: "Huy Bách",
      description: "Code tặng anh",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects cá nhân</h2>
                  <p>
                    Dưới đây là những lời chúc của những bạn tham gia sự kiện
                    20/11 cùng Sơn. Có thể không xinh lung linh nhưng chắc chắn
                    tình cảm. Các bạn tự code còn Sơn thì đi mượn source của
                    người ta nhưng Sơn hứa với anh sẽ hiểu cái source này.
                    <br /> Tò mò rồi chứ gì --- GÉT GÔ{" "}
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Teacher'day Team</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Xem Loi Chuc</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div class="text-center">
                          <a href="https://ashleynguyen07.github.io/happy-teacher-s-day/?fbclid=IwAR383_iAqsfG4FShPQfatN6pKMVbtoNcRGChOFFQerZ7zmghq8-vuC23Uuk" class="stretched-link ">
                          <button type="button" class="btn btn-warning">TRA MY</button>
                          </a>

                          <a href="./loichuc/hung.html ">
                          <button type="button" class="btn btn-warning">TAN HUNG</button>
                          </a>

                          <a href=" ">
                          <button type="button" class="btn btn-warning">TU TIEN</button>
                          </a>
                          <a href=" ">
                          <button type="button" class="btn btn-warning">DUY SON</button>
                          </a>
                          <a href="h ">
                          <button type="button" class="btn btn-warning">LINH VAN</button>
                          </a>
                          <a href="h ">
                          <button type="button" class="btn btn-warning">HUY BACH</button>
                          </a>
                          
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h2>Hết rồi anh à :3</h2>
                        <h2>hehe</h2>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
