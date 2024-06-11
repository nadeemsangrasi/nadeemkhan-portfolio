import React from "react";

const ProjectsPage = ({ params }: { params: { id: string } }) => {
  const { id }: { id: string } = params;
  switch (id) {
    case "html-css-js-projects":
      return (
        <div>
          <h1 className="text-primary-white">welcome to {id}</h1>
        </div>
      );
    case "nextjs-projects":
      return (
        <div>
          <h1 className="text-primary-white">welcome to {id}</h1>
        </div>
      );
    default:
      return (
        <div>
          <h1 className="text-primary-white">page not found 404</h1>
        </div>
      );
  }
};

export default ProjectsPage;
