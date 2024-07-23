import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./mainContent.css";
const MainContent = () => {
  const myProjects = [
    {
      projectSection: "react",
      projectTitle: "react project",
      category: "frameWorksJS",
      imgPath: "/img/react.jpg",
    },
    {
      projectSection: "Css",
      projectTitle: "CSS project",
      category: "css",
      imgPath: "/img/css.jpg",
    },
    {
      projectSection: "vue",
      projectTitle: "Vue js project",
      category: "frameWorksJS",
      imgPath: "/img/vue.jpg",
    },
    {
      projectSection: "angular",
      projectTitle: "Angular project",
      category: "frameWorksJS",
      imgPath: "./img/ang.jpg",
    },
    {
      projectSection: "JAVA SCRIPT ",
      projectTitle: "Game by JAVA SCRIPT",
      category: "game",
      imgPath: "./img/game.jpg",
    },
  ];

  const [Active, setactive] = useState("All");

  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setactive("All");
            const NewArray = myProjects.filter((item) => {
              return item;
            });

            setArr(NewArray);
          }}
          className={Active === "All" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setactive("games");

            const NewArray = myProjects.filter((item) => {
              return item.category === "game";
            });

            setArr(NewArray);
          }}
          className={Active === "games" ? "active" : null}
        >
          Games
        </button>




        <button
          onClick={() => {
            setactive("e-Commerce");

            const NewArray = myProjects.filter((item) => {
              return item.category === "css";
            });

            setArr(NewArray);
          }}
          className={Active === "e-Commerce" ? "active" : null}
        >
          E-Commerce
        </button>

        <button
          onClick={() => {
            setactive("frameWorksJS");

            const NewArray = myProjects.filter((item) => {
              return item.category === "frameWorksJS";
            });

            setArr(NewArray);
          }}
          className={Active === "frameWorksJS" ? "active" : null}
        >
          Frame Work
        </button>

      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.7)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring" }}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt="" />

                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.category}</p>

                  <div className="flex icons">
                    <div className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a href="#">
                      more <span className="icon-arrow-circle-up"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default MainContent;
